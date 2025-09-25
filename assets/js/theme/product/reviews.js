import nod from '../common/nod';
import { CollapsibleEvents } from '../common/collapsible';
import forms from '../common/models/forms';
import { safeString } from '../common/utils/safe-string';
import { announceInputErrorMessage } from '../common/utils/form-utils';

export default class {
    constructor($reviewForm) {
        this.validator = nod({
            submit: $reviewForm.find('input[type="submit"]'),
            tap: announceInputErrorMessage,
        });

        this.$reviewsContent = $('#product-reviews');
        this.$collapsible = $('[data-collapsible]', this.$reviewsContent);

        this.initLinkBind();
        this.injectPaginationLink();
        this.collapseReviews();
        this.setupReviewHighlights();
    }

    /**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */
    initLinkBind() {
        const $content = $('#productReviews-content', this.$reviewsContent);

        $('#productReview_link').on('click', () => {
            $('.productView-reviewTabLink').trigger('click');
            if (!$content.hasClass('is-open')) {
                this.$collapsible.trigger(CollapsibleEvents.click);
            }
        });
    }

    collapseReviews() {
        // We're in paginating state, do not collapse
        if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
            return;
        }

        // force collapse on page load
        this.$collapsible.trigger(CollapsibleEvents.click);
    }

    setupReviewHighlights() {
        this.$reviewHighlightsBar = $('[data-review-highlights]', this.$reviewsContent);
        this.$reviewHighlightsList = $('[data-review-highlights-list]', this.$reviewsContent);
        this.$reviewHighlightsStatus = $('[data-review-highlights-live]', this.$reviewsContent);
        this.$reviewList = $('#productReviews-list', this.$reviewsContent);

        if (!this.$reviewHighlightsBar.length || !this.$reviewHighlightsList.length || !this.$reviewList.length) {
            return;
        }

        this.reviewKeywords = [
            { key: 'comfort', label: 'Comfort' },
            { key: 'clarity', label: 'Clarity' },
            { key: 'moisture', label: 'Moisture' },
            { key: 'irritation', label: 'Irritation' },
            { key: 'value', label: 'Value' },
        ];

        this.reviewKeywordLabels = this.reviewKeywords.reduce((accumulator, keyword) => {
            accumulator[keyword.key] = keyword.label;
            return accumulator;
        }, {});

        const $reviewItems = this.$reviewList.find('.productReview');

        if (!$reviewItems.length) {
            this.$reviewHighlightsBar.attr('hidden', true);
            return;
        }

        this.activeReviewKeyword = null;
        this.keywordCounts = this.getReviewKeywordCounts($reviewItems);
        this.$reviewHighlightsBar.removeAttr('hidden');
        this.renderReviewHighlights();
        this.bindReviewHighlightEvents();
    }

    getReviewKeywordCounts($reviewItems) {
        const counts = this.reviewKeywords.reduce((accumulator, keyword) => {
            accumulator[keyword.key] = 0;
            return accumulator;
        }, {});

        $reviewItems.slice(0, 50).each((_, review) => {
            const $review = $(review);
            const text = `${$review.find('.productReview-title').text()} ${$review.find('.productReview-body').text()}`.toLowerCase();

            this.reviewKeywords.forEach((keyword) => {
                const matches = text.match(new RegExp(`\\b${keyword.key}\\b`, 'gi'));

                if (matches) {
                    counts[keyword.key] += matches.length;
                }
            });
        });

        return counts;
    }

    renderReviewHighlights() {
        if (!this.$reviewHighlightsList.length) {
            return;
        }

        const chips = this.reviewKeywords.map((keyword) => {
            const count = this.keywordCounts[keyword.key] || 0;
            const isActive = this.activeReviewKeyword === keyword.key;

            return `
                <button type="button" class="reviewHighlights-chip${isActive ? ' is-active' : ''}" data-review-keyword="${keyword.key}" data-review-label="${keyword.label}" aria-pressed="${isActive}">
                    <span class="reviewHighlights-label">${keyword.label}</span>
                    <span class="reviewHighlights-count">(${count})</span>
                </button>
            `;
        });

        if (this.activeReviewKeyword) {
            chips.push('
                <button type="button" class="reviewHighlights-chip reviewHighlights-chip--clear" data-review-clear aria-pressed="false">
                    Clear filters
                </button>
            ');
        }

        this.$reviewHighlightsList.html(chips.join(''));
    }

    bindReviewHighlightEvents() {
        this.$reviewHighlightsBar.on('click', '[data-review-keyword]', (event) => {
            const $target = $(event.currentTarget);
            const keyword = $target.data('reviewKeyword');

            if (!keyword) {
                return;
            }

            if (this.activeReviewKeyword === keyword) {
                this.clearReviewFilters();
            } else {
                this.applyReviewFilter(keyword);
            }
        });

        this.$reviewHighlightsBar.on('click', '[data-review-clear]', () => {
            this.clearReviewFilters();
        });
    }

    applyReviewFilter(keyword) {
        this.activeReviewKeyword = keyword;
        this.updateReviewVisibility(keyword);
        this.renderReviewHighlights();
        this.announceReviewFilter(keyword);

        const $activeChip = this.$reviewHighlightsBar.find(`[data-review-keyword="${keyword}"]`);

        if ($activeChip.length) {
            $activeChip.focus();
        }
    }

    clearReviewFilters() {
        if (!this.activeReviewKeyword) {
            return;
        }

        this.activeReviewKeyword = null;
        this.updateReviewVisibility();
        this.renderReviewHighlights();
        this.announceReviewFilter();

        const $firstChip = this.$reviewHighlightsBar.find('[data-review-keyword]').first();

        if ($firstChip.length) {
            $firstChip.focus();
        }
    }

    updateReviewVisibility(keyword) {
        if (!this.$reviewList || !this.$reviewList.length) {
            return;
        }

        const $reviewItems = this.$reviewList.find('.productReview');

        if (!keyword) {
            $reviewItems.removeClass('reviewHighlights-hidden');
            return;
        }

        const filterRegex = new RegExp(`\\b${keyword}\\b`, 'i');

        $reviewItems.each((_, review) => {
            const $review = $(review);
            const text = `${$review.find('.productReview-title').text()} ${$review.find('.productReview-body').text()}`;

            if (filterRegex.test(text.toLowerCase())) {
                $review.removeClass('reviewHighlights-hidden');
            } else {
                $review.addClass('reviewHighlights-hidden');
            }
        });
    }

    announceReviewFilter(keyword) {
        if (!this.$reviewHighlightsStatus.length) {
            return;
        }

        if (!keyword) {
            this.$reviewHighlightsStatus.text('Cleared review filters');
            return;
        }

        const label = this.reviewKeywordLabels[keyword] || keyword;
        this.$reviewHighlightsStatus.text(`Filtered reviews by ${label}`);
    }

    /**
     * Inject ID into the pagination link
     */
    injectPaginationLink() {
        const $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
        const $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

        if ($nextLink.length) {
            $nextLink.attr('href', `${$nextLink.attr('href')} #product-reviews`);
        }

        if ($prevLink.length) {
            $prevLink.attr('href', `${$prevLink.attr('href')} #product-reviews`);
        }
    }

    registerValidation(context) {
        this.context = context;
        this.validator.add([{
            selector: '[name="revrating"]',
            validate: 'presence',
            errorMessage: safeString(this.context.reviewRating),
        }, {
            selector: '[name="revtitle"]',
            validate: 'presence',
            errorMessage: safeString(this.context.reviewSubject),
        }, {
            selector: '[name="revtext"]',
            validate: 'presence',
            errorMessage: safeString(this.context.reviewComment),
        }, {
            selector: '.writeReview-form [name="email"]',
            validate: (cb, val) => {
                const result = forms.email(val);
                cb(result);
            },
            errorMessage: this.context.reviewEmail,
        }]);

        return this.validator;
    }

    validate() {
        return this.validator.performCheck();
    }
}
