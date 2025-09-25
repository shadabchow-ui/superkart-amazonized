import _ from 'lodash';
import mediaQueryListFactory from '../common/media-query-list';
import { CartPreviewEvents } from './cart-preview';

const PLUGIN_KEY = {
    CAMEL: 'mobileMenuToggle',
    SNAKE: 'mobile-menu-toggle',
};

function optionsFromData($element) {
    const mobileMenuId = $element.data(PLUGIN_KEY.CAMEL);

    return {
        menuSelector: mobileMenuId && `#${mobileMenuId}`,
    };
}

/*
 * Manage the behaviour of a mobile menu
 * @param {jQuery} $toggle
 * @param {Object} [options]
 * @param {Object} [options.headerSelector]
 * @param {Object} [options.menuSelector]
 * @param {Object} [options.scrollViewSelector]
 */
export class MobileMenuToggle {
    constructor($toggle, {
        headerSelector = '.header',
        menuSelector = '#menu',
        scrollViewSelector = '.navPages',
    } = {}) {
        this.$body = $('body');
        this.$menu = $(menuSelector);
        this.$navList = $('.navPages-list.navPages-list-depth-max');
        this.$header = $(headerSelector);
        this.$scrollView = $(scrollViewSelector, this.$menu);
        this.$subMenus = this.$navList.find('.navPages-action');
        this.$subMenus_click = this.$navList.find('.navPages-action > .navPages-action-moreIcon');
        this.$toggle = $toggle;
        this.mediumMediaQueryList = mediaQueryListFactory('medium');

        // Auto-bind
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onCartPreviewOpen = this.onCartPreviewOpen.bind(this);
        this.onMediumMediaQueryMatch = this.onMediumMediaQueryMatch.bind(this);
        this.onSubMenuClick = this.onSubMenuClick.bind(this);

        // Listen
        this.bindEvents();

        // Assign DOM attributes
        this.$toggle.attr('aria-controls', this.$menu.attr('id'));

        // Hide by default
        this.hide();
    }

    get isOpen() {
        return this.$menu.hasClass('is-open');
    }

    bindEvents() {
        this.$toggle.on('click', this.onToggleClick);
        this.$header.on(CartPreviewEvents.open, this.onCartPreviewOpen);
        this.$subMenus_click.on('click', this.onSubMenuClick);

        if (this.mediumMediaQueryList && this.mediumMediaQueryList.addListener) {
            this.mediumMediaQueryList.addListener(this.onMediumMediaQueryMatch);
        }

        // close menu mobile
        $('#menu-mobile .halo-close-2').on('click', function(){
            $('.mobileMenu-toggle').trigger('click');
            $('body').removeClass('has-activeNavPages');
            $('.mobileMenu-toggle')
                .removeClass('is-open')
                .attr('aria-expanded', false);
        });

        $('.halo-overlay-background').on('click', function() {
            if ($('body').hasClass('has-activeNavPages')) {
                $('.mobileMenu-toggle').trigger('click');
                $('body').removeClass('has-activeNavPages');
                $('.mobileMenu-toggle')
                    .removeClass('is-open')
                    .attr('aria-expanded', false);
            }
        });

        // Click on Currencies
        $('.navPages-list--user .currencies > .navPages-action').on('click', function(ev){
            const $currencies = $(this).parent();

            $(this).toggleClass('is-open');
            $currencies.toggleClass('is-open');
        });

        $('.navPages-list--user .currencies .navPage-subMenu-title .navPage-subMenu-action').on('click', function(ev){
            $('.navPages-list--user .currencies > .navPages-action').toggleClass('is-open');
            $('.navPages-list--user .currencies').toggleClass('is-open');
        });
    }

    unbindEvents() {
        this.$toggle.off('click', this.onToggleClick);
        this.$header.off(CartPreviewEvents.open, this.onCartPreviewOpen);

        if (this.mediumMediaQueryList && this.mediumMediaQueryList.addListener) {
            this.mediumMediaQueryList.removeListener(this.onMediumMediaQueryMatch);
        }
    }

    toggle() {
        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.$body.addClass('has-activeNavPages');

        this.$toggle
            .addClass('is-open')
            //.attr('aria-expanded', true);

        this.$menu
            .addClass('is-open')
            //.attr('aria-hidden', false);

        this.$header.addClass('is-open');
        this.$scrollView.scrollTop(0);

        this.resetSubMenus();
    }

    hide() {
        this.$body.removeClass('has-activeNavPages');

        this.$toggle
            .removeClass('is-open')
            .attr('aria-expanded', false);

        this.$menu.removeClass('is-open');

        this.$header.removeClass('is-open');

        this.resetSubMenus();
    }

    // Private
    onToggleClick(event) {
        event.preventDefault();

        this.toggle();
    }

    onCartPreviewOpen() {
        if (this.isOpen) {
            this.hide();
        }
    }

    onMediumMediaQueryMatch(media) {
        if (!media.matches) {
            return;
        }

        this.hide();
    }

    onSubMenuClick(event) {
        event.preventDefault();

        const $closestAction = $(event.target).closest('.navPages-action');
        const $closestItem = $closestAction.parent();
        const $parentSiblings = $closestItem.siblings();
        const $closestsubMeNuMain = $closestItem.closest('.navPage-subMenu');
        const $closestItemMain = $closestsubMeNuMain.parent();
        
        if ($closestItem.hasClass('navPage-subMenu-title')) {
            $closestItemMain.toggleClass('is-open');
            $closestItemMain.find('> .navPages-action').toggleClass('is-open');
            $closestItemMain.siblings().toggleClass('is-hidden');
            $closestItemMain.closest('.navPage-subMenu').find('.imageArea, .itemArea').show();
        }
        else {
            $parentSiblings.toggleClass('is-hidden');
            $closestsubMeNuMain.find('.imageArea, .itemArea').hide();
            $closestAction.toggleClass('is-open');
            $closestAction.parent().toggleClass('is-open');
        }
    }

    resetSubMenus() {
        this.$navList.find('.is-hidden').removeClass('is-hidden');
        this.$navList.find('.is-open').removeClass('is-open');
        this.$navList.removeClass('subMenu-is-open');
        this.$navList.attr('data-level-list', 1);
        $('.navPages-list--user').attr('data-level-list', 1);
    }
}

/*
 * Create a new MobileMenuToggle instance
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.headerSelector]
 * @param {Object} [options.menuSelector]
 * @param {Object} [options.scrollViewSelector]
 * @return {MobileMenuToggle}
 */
export default function mobileMenuToggleFactory(selector = `[data-${PLUGIN_KEY.SNAKE}]`, overrideOptions = {}) {
    const $toggle = $(selector).eq(0);
    const instanceKey = `${PLUGIN_KEY.CAMEL}Instance`;
    const cachedMobileMenu = $toggle.data(instanceKey);

    if (cachedMobileMenu instanceof MobileMenuToggle) {
        return cachedMobileMenu;
    }

    const options = _.extend(optionsFromData($toggle), overrideOptions);
    const mobileMenu = new MobileMenuToggle($toggle, options);

    $toggle.data(instanceKey, mobileMenu);

    return mobileMenu;
}
