"use strict";
(self["webpackChunkbigcommerce_superkart"] = self["webpackChunkbigcommerce_superkart"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






//import haloColorVariants from './halothemes/haloAddOptionForProduct';

var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();

    /* Halothemes */
    this.category_sidebar();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context);
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
    this.showProductsPerPage();
    if (this.context.themeSettings.halo_show_more == true) {
      this.showmore_product();
    }
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      /* Halothemes */
      _this4.category_sidebar();
      _this4.showProductsPerPage();
      (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
      (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4.context);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  }

  /* Halothemes Functions */;
  _proto.category_sidebar = function category_sidebar() {
    if ($('.all-categories-list').length > 0) {
      $('ul.all-categories-list li').each(function () {
        var breadLink = $('.page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');
        if ($(this).children('a').attr('href') == window.location || $(this).children('a').attr('href') == window.location.pathname) {
          $(this).addClass('current-cat');
          $(this).children('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
        if ($(this).children('a').attr('href') == breadLink) {
          $(this).addClass('current-cat');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
      });
      $('.all-categories-list .icon-dropdown').on('click', function () {
        $(this).parent().siblings().removeClass('is-clicked');
        $(this).parent().siblings().find("> .dropdown-category-list").slideUp("slow");
        $(this).parent().siblings().find("> .icon-dropdown").removeClass('is-clicked');
        $(this).parent().find("> .dropdown-category-list").slideToggle("slow");
        $(this).parent().siblings().removeClass('open');
        if ($(this).hasClass('is-clicked')) {
          $(this).removeClass('is-clicked');
          $(this).parent().removeClass('open');
        } else {
          $(this).addClass('is-clicked');
          $(this).parent().addClass('open');
        }
      });
    }
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showmore_product = function showmore_product() {
    var _this5 = this;
    var context = this.context;
    $('#button-showmore-category').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-wrapper .pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      if (link == undefined) {
        if (!$('#button-showmore-category').hasClass('disable')) {
          $('#button-showmore-category').addClass('disable');
        }
      } else {
        $('#button-showmore-category').addClass('loading');
        $.ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          context: _this5.content,
          success: function success(data) {
            if ($(data).find('#product-listing-container .productListing').length > 0) {
              $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
              $('.pagination-list').html($(data).find(".pagination-list").html());
              $('#button-showmore-category').removeClass('loading');
              nextPage = $(".pagination-wrapper .pagination-item--current").next();
              if (Number($(data).find('.pagination-info .end').text()) < Number($(data).find('.pagination-info .total').text())) {
                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .end').text());
              } else {
                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .total').text());
              }
              if (nextPage.length === 0) {
                $('#button-showmore-category').addClass('disable');
                $('#button-showmore-category > span').text('No more product');
              }
              var $prodWrapId = $('#product-listing-container .card-variant').attr('id');
              //haloColorVariants(context, $prodWrapId);
            }
          }
        });
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7QUFDbUM7QUFDbEI7QUFDckU7QUFDK0Q7QUFBQSxJQUUxQ08sUUFBUSwwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFFBQUEsRUFBQUMsWUFBQTtFQUN6QixTQUFBRCxTQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR1QsbUdBQTJCLENBQUNNLE9BQU8sQ0FBQztJQUFDLE9BQUFDLEtBQUE7RUFDckU7RUFBQyxJQUFBRyxNQUFBLEdBQUFQLFFBQUEsQ0FBQVEsU0FBQTtFQUFBRCxNQUFBLENBRURFLHVCQUF1QixHQUF2QixTQUFBQSx3QkFBd0JDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDeERGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDO01BQ1ZDLElBQUksRUFBRUgsUUFBUTtNQUNkLFdBQVcsRUFBRUM7SUFDakIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBTCxNQUFBLENBRURRLCtCQUErQixHQUEvQixTQUFBQSxnQ0FBQSxFQUFrQztJQUFBLElBQUFDLE1BQUE7SUFDOUIsSUFBSSxDQUFDQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsTUFBTSxFQUFFO0lBRXZDLElBQUlELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7TUFDNUNGLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUMzQztJQUVBSCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRTtNQUFBLE9BQU1MLE1BQUks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QUEzQzhILCtCQUErQjtFQUNuRyxJQUFNQyxnQkFBZ0IsR0FBR1Isc0JBQXNCLENBQUNLLHdCQUF3QixFQUFFQyxnQ0FBZ0MsRUFBRUMsK0JBQStCLENBQUM7RUFDNUksSUFBTUUsYUFBYSxHQUFHWCxNQUFNLENBQUNZLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUNiLFlBQVksQ0FBQyxDQUFDO0VBQ25FLElBQU1nQixlQUFlLEdBQUdiLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUyxnQkFBZ0IsQ0FBQ2IsWUFBWSxDQUFDLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFBQyxHQUFHO0lBQUEsT0FBSUEsR0FBRyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVKLEdBQUcsRUFBRVosQ0FBQyxFQUFLO0lBQzNDZ0IsR0FBRyxDQUFDSixHQUFHLENBQUMsR0FBR0osYUFBYSxDQUFDUixDQUFDLENBQUM7SUFDM0IsT0FBT2dCLEdBQUc7RUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VwZXJrYXJ0Ly4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cGVya2FydC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgcHJvZHVjdERpc3BsYXlNb2RlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdERpc3BsYXlNb2RlJztcbi8vaW1wb3J0IGhhbG9Db2xvclZhcmlhbnRzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG5cbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcblxuICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlfc2lkZWJhcigpO1xuICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIoKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3Nob3dfbW9yZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dtb3JlX3Byb2R1Y3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIoKTtcbiAgICAgICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKiBIYWxvdGhlbWVzIEZ1bmN0aW9ucyAqL1xuXG4gICAgY2F0ZWdvcnlfc2lkZWJhcigpIHtcbiAgICAgICAgaWYgKCQoJy5hbGwtY2F0ZWdvcmllcy1saXN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgndWwuYWxsLWNhdGVnb3JpZXMtbGlzdCBsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJyZWFkTGluayA9ICQoJy5wYWdlLXR5cGUtcHJvZHVjdCAjYnJlYWRjcnVtYnMtd3JhcHBlciB1bCBsaS5icmVhZGNydW1iLmlzLWFjdGl2ZScpLnByZXYoJy5icmVhZGNydW1iJykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgIGlmICgoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24pIHx8ICgkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpID09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1jYXQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpID09IGJyZWFkTGluaykge1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWNhdCcpO1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5hbGwtY2F0ZWdvcmllcy1saXN0IC5pY29uLWRyb3Bkb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVXAoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoXCI+IC5pY29uLWRyb3Bkb3duXCIpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZSggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtY2xpY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB2YXIgYyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIik7XG4gICAgICAgICAgICBpZihjICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCNsaW1pdCBvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbWl0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmFsdWUgPT0gYyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgfVxuXG4gICAgc2hvd21vcmVfcHJvZHVjdCgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5Jykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICBpZiAobGluayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmFwcGVuZCgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKCQoZGF0YSkuZmluZChcIi5wYWdpbmF0aW9uLWxpc3RcIikuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi13cmFwcGVyIC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpIDwgTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnkgPiBzcGFuJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLmNhcmQtdmFyaWFudCcpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oYWxvQ29sb3JWYXJpYW50cyhjb250ZXh0LCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiaG9va3MiLCJDYXRhbG9nUGFnZSIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJwcm9kdWN0RGlzcGxheU1vZGUiLCJoYWxvU3RpY2t5VG9vbGJhciIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIl90aGlzMiIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiX3RoaXMzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJ1cmxzIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsImNhdGVnb3J5X3NpZGViYXIiLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwidGhlbWVTZXR0aW5ncyIsImhhbG9fc2hvd19tb3JlIiwic2hvd21vcmVfcHJvZHVjdCIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZWFjaCIsImJyZWFkTGluayIsInByZXYiLCJjaGlsZHJlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsInJlbW92ZUNsYXNzIiwiZmluZCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsInVybCIsIlVSTCIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJfdGhpczUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJsaW5rIiwidW5kZWZpbmVkIiwiYWpheCIsInR5cGUiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJOdW1iZXIiLCJ0ZXh0IiwiJHByb2RXcmFwSWQiLCJkZWZhdWx0IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==