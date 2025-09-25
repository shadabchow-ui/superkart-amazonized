(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











var SHOW_MORE_OPTIONS = _global_modal__WEBPACK_IMPORTED_MODULE_7__["modalTypes"].SHOW_MORE_OPTIONS;
var opened = _global_modal__WEBPACK_IMPORTED_MODULE_7__["ModalEvents"].opened;
var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
  modalOpen: false
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];
    if (this.options.modal) {
      this.options.modal.$modal.on(opened, function (event) {
        var $filterItems = $(event.target).find('#facetedSearch-filterItems');
        if ($filterItems.length) {
          _this.options.modal.setupFocusableElements(SHOW_MORE_OPTIONS);
        }
      });
    }

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl);
    // If searchParams does not contain a page value then modify url query string to have page=1
    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.parent().addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.parent().removeClass('show');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductDisplayMode.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductDisplayMode.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var product_class = ".product";

  // Product List
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#list-view').on('click', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('current-view')) {
      // show loading
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#list-view').addClass('current-view');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#grid-view').removeClass('current-view');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container .productListing').removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });

  // Product Grid
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#grid-view').on('click', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('current-view')) {
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#grid-view').addClass('current-view');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#list-view').removeClass('current-view');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container .productListing').removeClass('productList').addClass('productGrid');
      }, 300);
    }
  });
});

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyToolbar.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyToolbar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  function toolbar_sticky() {
    var toolbar_position, toolbar_height;
    toolbar_height = $('.halo-category-toolbar .column-right').height();
    toolbar_position = $('.halo-category-toolbar .column-right').offset().top;
    if ($('.halo-category-toolbar .column-right').length) {
      toolbar_scroll(toolbar_position, toolbar_height);
    }
  }
  function toolbar_scroll(toolbar_position, toolbar_height) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.halo-category-toolbar .column-right').offset().top;
    $(window).on('scroll load', function () {
      var scroll = $(window).scrollTop();
      if (Math.abs(lastScrollTop - scroll) <= delta) {
        return;
      }
      if (scroll > lastScrollTop && scroll > navbarHeight) {
        // Scroll Down
        $('.halo-category-toolbar .column-right').removeClass('sticky-down').addClass('sticky-up');
        if (scroll > toolbar_position) {
          $('body').addClass('has-stickyToolbar');
        } else {
          $('body').removeClass('has-stickyToolbar');
        }
      } else {
        // Scroll Up
        if (scroll + $(window).height() < $(document).height()) {
          $('.halo-category-toolbar .column-right').removeClass('sticky-up').addClass('sticky-down');
          if (scroll > toolbar_position) {
            $('body').addClass('has-stickyToolbar');
          } else {
            $('body').removeClass('has-stickyToolbar');
          }
        }
      }
      lastScrollTop = scroll;
    });
  }
  if ($(window).width() < 1025) {
    toolbar_sticky();
  } else {
    $('body').removeClass('has-stickyToolbar');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJvZHVjdERpc3BsYXlNb2RlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2dQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIl9wcm90byIsInByb3RvdHlwZSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiJCIsImdldEl0ZW0iLCJmb2N1cyIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsIlVybCIsInBhcnNlIiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJ1cmxVdGlscyIsImJ1aWxkUXVlcnlTdHJpbmciLCJQYWdlTWFuYWdlciIsIlNIT1dfTU9SRV9PUFRJT05TIiwibW9kYWxUeXBlcyIsIm9wZW5lZCIsIk1vZGFsRXZlbnRzIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsIiRtb2RhbCIsIm9uIiwiJGZpbHRlckl0ZW1zIiwidGFyZ2V0IiwiZmluZCIsImxlbmd0aCIsInNldHVwRm9jdXNhYmxlRWxlbWVudHMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJfdGhpczIiLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImF0dHIiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl9pbmNsdWRlcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJfdGhpczMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCJfdGhpczQiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsIl90aGlzNSIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvblBvcFN0YXRlIiwiaG9va3MiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImhhcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInRyaWdnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJwYXJlbnQiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIm1hcCIsInZhbHVlIiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsInByb2R1Y3RfY2xhc3MiLCJoYXNDbGFzcyIsInRvb2xiYXJfc3RpY2t5IiwidG9vbGJhcl9wb3NpdGlvbiIsInRvb2xiYXJfaGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0IiwidG9wIiwidG9vbGJhcl9zY3JvbGwiLCJkaWRTY3JvbGwiLCJsYXN0U2Nyb2xsVG9wIiwiZGVsdGEiLCJuYXZiYXJIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJNYXRoIiwiYWJzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQzFCO0FBQUEsSUFFREEsV0FBVywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFdBQUEsRUFBQUMsWUFBQTtFQUM1QixTQUFBRCxZQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFB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O0FBQ0osQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBtb2RhbFR5cGVzLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuY29uc3QgeyBTSE9XX01PUkVfT1BUSU9OUyB9ID0gbW9kYWxUeXBlcztcbmNvbnN0IHsgb3BlbmVkIH0gPSBNb2RhbEV2ZW50cztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxufTtcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLiRtb2RhbC5vbihvcGVuZWQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlsdGVySXRlbXMgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoJGZpbHRlckl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuc2V0dXBGb2N1c2FibGVFbGVtZW50cyhTSE9XX01PUkVfT1BUSU9OUyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGN1cnJlbnRVcmwpO1xuICAgICAgICAvLyBJZiBzZWFyY2hQYXJhbXMgZG9lcyBub3QgY29udGFpbiBhIHBhZ2UgdmFsdWUgdGhlbiBtb2RpZnkgdXJsIHF1ZXJ5IHN0cmluZyB0byBoYXZlIHBhZ2U9MVxuICAgICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgbGlua1VybCA9ICQoJy5wYWdpbmF0aW9uLWxpbmsnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCByZSA9IC9wYWdlPVswLTldKy9pO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpbmtVcmwgPSBsaW5rVXJsLnJlcGxhY2UocmUsICdwYWdlPTEnKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVwZGF0ZWRMaW5rVXJsKTtcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLnBhcmVudCgpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gJGNoZWNrZWQubWFwKChpbmRleCwgZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSkuZ2V0KCkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuLyogZXNsaW50LWRpc2FibGUgc3BhY2UtYmVmb3JlLWZ1bmN0aW9uLXBhcmVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gICBjb25zdCBwcm9kdWN0X2NsYXNzID0gXCIucHJvZHVjdFwiO1xyXG5cclxuICAgLy8gUHJvZHVjdCBMaXN0XHJcbiAgICQoJyNsaXN0LXZpZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcclxuICAgICAgICAgLy8gc2hvdyBsb2FkaW5nXHJcbiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICQoJyNsaXN0LXZpZXcnKS5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XHJcbiAgICAgICAgICAgICQoJyNncmlkLXZpZXcnKS5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XHJcbiAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLnJlbW92ZUNsYXNzKCdwcm9kdWN0R3JpZCcpLmFkZENsYXNzKCdwcm9kdWN0TGlzdCcpO1xyXG4gICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgLy8gUHJvZHVjdCBHcmlkXHJcbiAgICQoJyNncmlkLXZpZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcclxuICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgJCgnI2dyaWQtdmlldycpLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcclxuICAgICAgICAgICAgJCgnI2xpc3QtdmlldycpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcclxuICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RMaXN0JykuYWRkQ2xhc3MoJ3Byb2R1Y3RHcmlkJyk7XHJcbiAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgZnVuY3Rpb24gdG9vbGJhcl9zdGlja3koKSB7XHJcbiAgICAgICAgdmFyIHRvb2xiYXJfcG9zaXRpb24sIHRvb2xiYXJfaGVpZ2h0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB0b29sYmFyX2hlaWdodCA9ICQoJy5oYWxvLWNhdGVnb3J5LXRvb2xiYXIgLmNvbHVtbi1yaWdodCcpLmhlaWdodCgpO1xyXG4gICAgICAgIHRvb2xiYXJfcG9zaXRpb24gPSAkKCcuaGFsby1jYXRlZ29yeS10b29sYmFyIC5jb2x1bW4tcmlnaHQnKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgIGlmICgkKCcuaGFsby1jYXRlZ29yeS10b29sYmFyIC5jb2x1bW4tcmlnaHQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdG9vbGJhcl9zY3JvbGwodG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b29sYmFyX3Njcm9sbCh0b29sYmFyX3Bvc2l0aW9uLCB0b29sYmFyX2hlaWdodCkge1xyXG4gICAgICAgIHZhciBkaWRTY3JvbGw7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIHZhciBkZWx0YSA9IDU7XHJcbiAgICAgICAgdmFyIG5hdmJhckhlaWdodCA9ICQoJy5oYWxvLWNhdGVnb3J5LXRvb2xiYXIgLmNvbHVtbi1yaWdodCcpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzY3JvbGwpIDw9IGRlbHRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNjcm9sbCA+IGxhc3RTY3JvbGxUb3AgJiYgc2Nyb2xsID4gbmF2YmFySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCBEb3duXHJcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1jYXRlZ29yeS10b29sYmFyIC5jb2x1bW4tcmlnaHQnKS5yZW1vdmVDbGFzcygnc3RpY2t5LWRvd24nKS5hZGRDbGFzcygnc3RpY2t5LXVwJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiB0b29sYmFyX3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIFVwXHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGwgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPCAkKGRvY3VtZW50KS5oZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWNhdGVnb3J5LXRvb2xiYXIgLmNvbHVtbi1yaWdodCcpLnJlbW92ZUNsYXNzKCdzdGlja3ktdXAnKS5hZGRDbGFzcygnc3RpY2t5LWRvd24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IHRvb2xiYXJfcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgIHRvb2xiYXJfc3RpY2t5KCk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=