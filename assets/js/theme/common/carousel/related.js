import 'slick-carousel';

const SECTION_SELECTOR = '[data-related-products]';
const CAROUSEL_SELECTOR = '[data-related-products-carousel]';
const PREV_SELECTOR = '[data-related-prev]';
const NEXT_SELECTOR = '[data-related-next]';
const DOTS_SELECTOR = '[data-related-dots]';

const observerSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window;

const updateNavState = ($section, slick) => {
    const $prev = $section.find(PREV_SELECTOR);
    const $next = $section.find(NEXT_SELECTOR);

    if (!$prev.length || !$next.length) return;

    const slidesToShow = slick.slickGetOption ? slick.slickGetOption('slidesToShow') : slick.options.slidesToShow;
    const slideCount = slick.slideCount || 0;
    const disableAll = slideCount <= slidesToShow;

    const atStart = slick.currentSlide === 0;
    const lastIndex = Math.max(slideCount - slidesToShow, 0);
    const atEnd = slick.currentSlide >= lastIndex;

    const setButtonState = ($button, disabled) => {
        $button.prop('disabled', disabled);
        $button.attr('aria-disabled', disabled);
    };

    setButtonState($prev, disableAll || atStart);
    setButtonState($next, disableAll || atEnd);
};

const initCarousel = ($section) => {
    const $carousel = $section.find(CAROUSEL_SELECTOR);

    if (!$carousel.length || $carousel.hasClass('slick-initialized')) {
        return;
    }

    const $prev = $section.find(PREV_SELECTOR);
    const $next = $section.find(NEXT_SELECTOR);
    const $dots = $section.find(DOTS_SELECTOR);

    $carousel.on('init reInit afterChange breakpoint', (event, slick) => {
        updateNavState($section, slick);
    });

    $carousel.slick({
        mobileFirst: true,
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $prev,
        nextArrow: $next,
        appendDots: $dots,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    });

    $carousel.on('keydown', (event) => {
        const { key } = event;
        if (key === 'ArrowRight') {
            event.preventDefault();
            $carousel.slick('slickNext');
        }

        if (key === 'ArrowLeft') {
            event.preventDefault();
            $carousel.slick('slickPrev');
        }
    });
};

const observeSection = ($section) => {
    if (!$section.length) return;

    if (!observerSupported) {
        initCarousel($section);
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                initCarousel($section);
                obs.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '200px 0px',
        threshold: 0.1,
    });

    observer.observe($section.get(0));
};

export default function initRelatedProductsCarousel() {
    const $sections = $(SECTION_SELECTOR);

    if (!$sections.length) return;

    $sections.each((_, section) => {
        observeSection($(section));
    });
}
