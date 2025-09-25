/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory, { modalTypes } from './global/modal';
import haloBundleProducts from './halothemes/haloBundleProducts';
import haloStickyAddToCart from './halothemes/haloStickyAddToCart';
import haloPrevNextProduct from './halothemes/haloPrevNextProduct';

const { WRITE_REVIEW } = modalTypes;

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();
        this.hlGlobal();
        haloStickyAddToCart();

        if (this.context.themeSettings.halo_bundle_products_enable == true) {
            haloBundleProducts(this.context);   
        }
        haloPrevNextProduct(this.context);

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review($reviewForm);

        $(document).on('opened.fndtn.reveal', '#modal-review-form', () => this.reviewModal.setupFocusableElements(WRITE_REVIEW));

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        this.initializeFrequentlyBoughtTogether();
    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }

    hlGlobal() {
        const wWidth = window.innerWidth;
        const $desTab = $('.productView-description');
        const $infoTab = $('#tab-additional-information');

        if ($desTab.length && wWidth < 1025) {
            $('.tab-content.is-active', $desTab).find('.tabContent').slideDown();
        }

        if ($infoTab.length) {
            if ($infoTab.find('.tabContent').text().trim() == '') {
                $('[href="#tab-additional-information"]').parent().hide();
                $infoTab.hide();
            } 
        }

        //
        // Load Tabs
        // -----------------------------------------------------------------------------
        const $loadTabBtn = $('[data-tab-load]');

        $loadTabBtn.on('click', (e) => {
            e.preventDefault();
            const $target = $(e.currentTarget);

            const check_loadTab = $target.data('tab-check');

            if (check_loadTab) {
                $target.data('tab-check', false);
                const url_loadTab = $target.data('tab-load');
                const thisTab = $target.attr('href');
                const $thisTab = $(thisTab+' .tabContent');

                $.get(url_loadTab, function(data) {
                    $('.icon-loading', $thisTab).remove();
                    $thisTab.append($(data).find('.page-content').html());
                }).fail(function(err) {
                    $('.icon-loading', $thisTab).remove();
                    $thisTab.append("<p>To Be Updated</p>");
                });
            }
        });

        //
        // Tabs Mobile
        // -----------------------------------------------------------------------------
        const $btnTabMobile = $('.tab-titleMobile');

        $btnTabMobile.on('click', (e) => {
            e.preventDefault();
            const $target = $(e.currentTarget);
            const idTab = $target.attr('href');
            const thisTop = $('.productView-description').offset().top - 20;

            if ($target.hasClass('is-active')) {
                $target.removeClass('is-active');
                $(idTab).removeClass('is-active').find('.tabContent').slideUp();
            }
            else {
                const $tabActiveMobile = $('.productView-description .tabs-contents .tab-content.is-active');

                $btnTabMobile.removeClass('is-active');
                $target.addClass('is-active');
                $tabActiveMobile.removeClass('is-active').find('.tabContent').slideUp();
                $(idTab).addClass('is-active').find('.tabContent').slideDown();

                $('body,html').animate({
                    scrollTop: thisTop
                }, 1000);
            }
        });

        //
        // Share Link
        // -----------------------------------------------------------------------------
        const $shareLinkBtn = $('.socialMedia-button');
        const $shareLinkPopup = $('.socialMedia-dropdown');
        const $shareLinkClose = $('.shareLinkSocial__close');
        const $shareLinkCopy = $('#shareLinkSocial__copy');

        $shareLinkBtn.on('click', (e) => {
            e.preventDefault();

            if ($shareLinkPopup.hasClass('is-open')) {
                $shareLinkPopup.slideUp(200);
                $shareLinkPopup.removeClass('is-open');
            }
            else {
                $shareLinkPopup.slideDown(200);
                $shareLinkPopup.addClass('is-open');            
            }
        });

        $shareLinkClose.on('click', (e) => {
            e.preventDefault();

            if ($shareLinkPopup.hasClass('is-open')) {
                $shareLinkPopup.slideUp(200);
                $shareLinkPopup.removeClass('is-open');
            }
        });

        $shareLinkCopy.on('click', (e) => {
            e.preventDefault();
            const $target = $(e.target);

            $target.select();
            document.execCommand("copy");
        });

        //
        // Body Close
        // -----------------------------------------------------------------------------
        $(document).on('click', (e) => {
            const $target = $(e.target);
            const $shareLinkPopup = $('.socialMedia-dropdown');

            if ($target.closest('.social-mediaBlock').length === 0) {
                if ($shareLinkPopup.hasClass('is-open')) {
                    $shareLinkPopup.slideUp(200);
                    $shareLinkPopup.removeClass('is-open');
                }
            }
        });
    }

    initializeFrequentlyBoughtTogether() {
        const container = document.querySelector('[data-fbt-skus]');

        if (!container) {
            return;
        }

        const productView = document.querySelector('.productView');

        const loadFbt = () => {
            if (container.getAttribute('data-fbt-initialized') === 'true') {
                return;
            }

            container.setAttribute('data-fbt-initialized', 'true');
            this.setupFrequentlyBoughtTogether(container);
        };

        if ('IntersectionObserver' in window && productView) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        obs.disconnect();
                        loadFbt();
                    }
                });
            }, { rootMargin: '0px 0px 200px 0px' });

            observer.observe(productView);
        } else {
            loadFbt();
        }
    }

    async setupFrequentlyBoughtTogether(container) {
        const skuList = container.getAttribute('data-fbt-skus');

        if (!skuList) {
            container.remove();
            return;
        }

        const skus = skuList.split(',')
            .map((sku) => sku.trim())
            .filter((sku) => sku)
            .slice(0, 3);

        if (!skus.length) {
            container.remove();
            return;
        }

        const loadingEl = container.querySelector('[data-fbt-loading]');
        const listEl = container.querySelector('[data-fbt-list]');
        const totalEl = container.querySelector('[data-fbt-total]');
        const buttonEl = container.querySelector('[data-fbt-add]');

        if (!listEl || !totalEl || !buttonEl) {
            return;
        }

        if (loadingEl) {
            loadingEl.hidden = false;
        }

        listEl.setAttribute('aria-busy', 'true');

        let products = [];

        try {
            products = await this.fetchFrequentlyBoughtProducts(skus);
        } catch (error) {
            console.error('Failed to load frequently bought products', error);
        }

        if (!products.length) {
            container.remove();
            return;
        }

        const formatCurrency = this.getFbtCurrencyFormatter();
        container.fbtFormatCurrency = formatCurrency;

        listEl.innerHTML = '';

        products.forEach((product, index) => {
            const itemEl = this.buildFbtItem(product, index, formatCurrency, container);

            if (itemEl) {
                listEl.appendChild(itemEl);
            }
        });

        if (loadingEl) {
            loadingEl.remove();
        }

        listEl.setAttribute('aria-busy', 'false');

        this.bindFbtEvents(container);
        this.updateFbtTotal(container);
    }

    buildFbtItem(product, index, formatCurrency, container) {
        if (!product) {
            return null;
        }

        const listItem = document.createElement('li');
        listItem.className = 'productFbt-item';
        listItem.setAttribute('data-fbt-item', 'true');

        if (product.productId) {
            listItem.setAttribute('data-product-id', product.productId);
        }

        if (product.variantId) {
            listItem.setAttribute('data-variant-id', product.variantId);
        }

        const checkboxId = `product-fbt-${index}-${product.sku || product.productId || 'item'}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = checkboxId;
        checkbox.checked = true;
        checkbox.setAttribute('data-fbt-checkbox', 'true');
        checkbox.setAttribute('data-sku', product.sku || '');
        checkbox.setAttribute('data-price', product.price);

        const label = document.createElement('label');
        label.className = 'productFbt-label';
        label.setAttribute('for', checkboxId);

        const thumbWrapper = document.createElement('span');
        thumbWrapper.className = 'productFbt-thumb';

        const placeholder = container.getAttribute('data-fbt-placeholder-image');
        const imageUrl = product.image || placeholder;

        if (imageUrl) {
            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = product.name;
            image.loading = 'lazy';
            thumbWrapper.appendChild(image);
        }

        const infoWrapper = document.createElement('span');
        infoWrapper.className = 'productFbt-info';

        const titleLink = document.createElement('a');
        titleLink.className = 'productFbt-title';
        titleLink.href = product.url;
        titleLink.textContent = product.name;

        const priceEl = document.createElement('span');
        priceEl.className = 'productFbt-price';
        priceEl.textContent = formatCurrency(product.price);

        infoWrapper.appendChild(titleLink);
        infoWrapper.appendChild(priceEl);

        label.appendChild(checkbox);
        label.appendChild(thumbWrapper);
        label.appendChild(infoWrapper);

        listItem.appendChild(label);

        return listItem;
    }

    bindFbtEvents(container) {
        const listEl = container.querySelector('[data-fbt-list]');
        const buttonEl = container.querySelector('[data-fbt-add]');
        const errorEl = container.querySelector('[data-fbt-error]');

        if (listEl) {
            const checkboxes = listEl.querySelectorAll('[data-fbt-checkbox]');

            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener('change', () => {
                    this.updateFbtTotal(container);
                });
            });
        }

        if (buttonEl) {
            buttonEl.dataset.originalText = buttonEl.textContent;

            buttonEl.addEventListener('click', (event) => {
                event.preventDefault();

                if (buttonEl.disabled) {
                    return;
                }

                this.handleFbtAddToCart(container, buttonEl, errorEl);
            });
        }
    }

    updateFbtTotal(container) {
        const formatCurrency = container.fbtFormatCurrency || ((value) => value);
        const totalEl = container.querySelector('[data-fbt-total]');
        const buttonEl = container.querySelector('[data-fbt-add]');
        const checkboxes = container.querySelectorAll('[data-fbt-checkbox]');

        if (!totalEl || !buttonEl || !checkboxes.length) {
            return;
        }

        let total = 0;
        let selectedCount = 0;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedCount += 1;
                total += parseFloat(checkbox.getAttribute('data-price')) || 0;
            }
        });

        totalEl.textContent = formatCurrency(total);
        buttonEl.disabled = selectedCount === 0;
    }

    handleFbtAddToCart(container, buttonEl, errorEl) {
        const checkboxes = container.querySelectorAll('[data-fbt-checkbox]:checked');

        if (!checkboxes.length) {
            return;
        }

        if (errorEl) {
            errorEl.textContent = '';
            errorEl.hidden = true;
        }

        const originalText = buttonEl.dataset.originalText || buttonEl.textContent;
        buttonEl.disabled = true;
        buttonEl.setAttribute('aria-busy', 'true');
        buttonEl.textContent = 'Adding…';

        const lineItems = [];

        checkboxes.forEach((checkbox) => {
            const parent = checkbox.closest('[data-fbt-item]');

            if (!parent) {
                return;
            }

            const productId = parseInt(parent.getAttribute('data-product-id'), 10);
            const variantId = parseInt(parent.getAttribute('data-variant-id'), 10);

            if (!productId) {
                return;
            }

            const lineItem = {
                quantity: 1,
                productId,
            };

            if (!Number.isNaN(variantId) && variantId) {
                lineItem.variantId = variantId;
            }

            lineItems.push(lineItem);
        });

        if (!lineItems.length) {
            buttonEl.disabled = false;
            buttonEl.removeAttribute('aria-busy');
            buttonEl.textContent = originalText;
            return;
        }

        this.addFbtItemsToCart(lineItems)
            .then(() => {
                window.location.href = '/cart.php';
            })
            .catch((error) => {
                console.error('Failed to add FBT items to cart', error);

                if (errorEl) {
                    errorEl.textContent = 'We couldn\'t add these items to your cart. Please try again.';
                    errorEl.hidden = false;
                }

                buttonEl.disabled = false;
                buttonEl.removeAttribute('aria-busy');
                buttonEl.textContent = originalText;
            });
    }

    addFbtItemsToCart(lineItems) {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        if (this.context.token) {
            headers['X-Auth-Token'] = this.context.token;
        }

        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers,
            body: JSON.stringify({ lineItems }),
        };

        const cartId = this.context.cartId;
        const endpoint = cartId ? `/api/storefront/carts/${cartId}/items` : '/api/storefront/carts';

        return fetch(endpoint, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to add items to cart');
                }

                return response.json();
            })
            .then((data) => {
                if (data && data.id) {
                    this.context.cartId = data.id;
                }

                return data;
            });
    }

    async fetchFrequentlyBoughtProducts(skus) {
        const include = encodeURIComponent('images,variants');
        const skuParam = skus.map((sku) => encodeURIComponent(sku)).join(',');
        const url = `/api/storefront/catalog/products?include=${include}&sku=${skuParam}`;

        const headers = {
            Accept: 'application/json',
        };

        if (this.context.token) {
            headers['X-Auth-Token'] = this.context.token;
        }

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers,
        });

        if (!response.ok) {
            throw new Error('Unable to retrieve FBT products');
        }

        const payload = await response.json();
        const products = Array.isArray(payload) ? payload : payload.data || [];
        const normalized = [];

        skus.forEach((sku) => {
            const product = products.find((item) => this.productHasSku(item, sku));

            if (!product) {
                return;
            }

            const normalizedProduct = this.normalizeFbtProduct(product, sku);

            if (normalizedProduct) {
                normalized.push(normalizedProduct);
            }
        });

        return normalized;
    }

    productHasSku(product, sku) {
        if (!product || !sku) {
            return false;
        }

        if (product.sku && product.sku === sku) {
            return true;
        }

        if (Array.isArray(product.variants)) {
            return product.variants.some((variant) => variant && variant.sku === sku);
        }

        return false;
    }

    normalizeFbtProduct(product, sku) {
        if (!product) {
            return null;
        }

        const variants = Array.isArray(product.variants) ? product.variants : [];
        const matchedVariant = variants.find((variant) => variant && variant.sku === sku) || variants[0] || null;

        const productId = product.id || (matchedVariant && matchedVariant.product_id) || null;
        const variantId = matchedVariant && matchedVariant.id ? matchedVariant.id : null;
        const price = this.extractFbtPrice(matchedVariant, product);
        const image = (matchedVariant && (matchedVariant.image_url || (matchedVariant.image && (matchedVariant.image.url_thumbnail || matchedVariant.image.url_standard))))
            || (product.primary_image && (product.primary_image.url_thumbnail || product.primary_image.url_standard))
            || (Array.isArray(product.images) && product.images.length && (product.images[0].url_thumbnail || product.images[0].url_standard))
            || '';

        let url = product.path || (product.custom_url && product.custom_url.url) || product.url || '#';

        if (url && url.charAt(0) !== '/' && !/^https?:/i.test(url) && window.BCData && window.BCData.storefrontUrls && window.BCData.storefrontUrls.root) {
            url = `${window.BCData.storefrontUrls.root}${url}`;
        }

        const name = (matchedVariant && (matchedVariant.product_name || matchedVariant.description)) || product.name || sku;

        return {
            productId,
            variantId,
            price,
            image,
            name,
            url,
            sku,
        };
    }

    extractFbtPrice(variant, product) {
        const getNumericValue = (value) => {
            if (typeof value === 'number' && !Number.isNaN(value)) {
                return value;
            }

            if (value && typeof value.value === 'number') {
                return value.value;
            }

            if (value && typeof value.amount === 'number') {
                return value.amount;
            }

            if (value && typeof value.price === 'number') {
                return value.price;
            }

            return null;
        };

        const sources = [
            variant && variant.calculated_price,
            variant && variant.price && variant.price.with_tax,
            variant && variant.price && variant.price.without_tax,
            variant && variant.price,
            product && product.calculated_price,
            product && product.price && product.price.with_tax,
            product && product.price && product.price.without_tax,
            product && product.price,
        ];

        for (let i = 0; i < sources.length; i += 1) {
            const numericValue = getNumericValue(sources[i]);

            if (numericValue !== null) {
                return numericValue;
            }
        }

        return 0;
    }

    getFbtCurrencyFormatter() {
        const locale = document.documentElement.lang || 'en-US';
        const currencyData = (window.BCData && window.BCData.store && window.BCData.store.currency) || {};
        const currencyCode = currencyData.code || this.context.currencyCode || this.context.storeCurrencyCode || 'USD';

        try {
            const formatter = new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: currencyCode,
            });

            return (value) => formatter.format(value);
        } catch (error) {
            const symbol = currencyData.symbol || currencyData.token || '$';
            const decimals = typeof currencyData.decimalPlaces === 'number'
                ? currencyData.decimalPlaces
                : (typeof currencyData.decimal_places === 'number' ? currencyData.decimal_places : 2);

            return (value) => `${symbol}${Number(value || 0).toFixed(decimals)}`;
        }
    }
}
