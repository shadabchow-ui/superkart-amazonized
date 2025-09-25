"use strict";
(self["webpackChunkbigcommerce_superkart"] = self["webpackChunkbigcommerce_superkart"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
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







var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    /* Halothemes */
    this.category_sidebar();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context);
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
    this.showProductsPerPage();
    if (this.context.themeSettings.halo_show_more == true) {
      this.showmore_product();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      /* Halothemes */
      _this2.category_sidebar();
      _this2.showProductsPerPage();
      (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
      (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2.context);
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
    var _this3 = this;
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
          context: _this3.content,
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
  return Brand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7QUFDbUM7QUFDbEI7QUFDTjtBQUFBLElBRTFDTyxLQUFLLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsS0FBQSxFQUFBQyxZQUFBO0VBQ3RCLFNBQUFELE1BQVlHLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUgsWUFBQSxDQUFBSSxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLG9CQUFvQixHQUFHVCxtR0FBMkIsQ0FBQ00sT0FBTyxDQUFDO0lBQUMsT0FBQUMsS0FBQTtFQUNyRTtFQUFDLElBQUFHLE1BQUEsR0FBQVAsS0FBQSxDQUFBUSxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOZCxvRUFBZSxDQUFDLElBQUksQ0FBQ1EsT0FBTyxDQUFDTyxJQUFJLENBQUM7SUFFbEMsSUFBSUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BEdEIsNkRBQUssQ0FBQ3VCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNGLGNBQWMsQ0FBQztJQUNyRDs7SUFFQTtJQUNBLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQztJQUN2Qm5CLDhFQUFrQixDQUFDLElBQUksQ0FBQ0ssT0FBTyxDQUFDO0lBQ2hDSix5RUFBaUIsQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ21CLG1CQUFtQixDQUFDLENBQUM7SUFDMUIsSUFB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QztFQUFBLEVBQUM7RUFFcEcsT0FBT0osZUFBZSxDQUFDSyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFSixHQUFHLEVBQUVaLENBQUMsRUFBSztJQUMzQ2dCLEdBQUcsQ0FBQ0osR0FBRyxDQUFDLEdBQUdKLGFBQWEsQ0FBQ1IsQ0FBQyxDQUFDO0lBQzNCLE9BQU9nQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cGVya2FydC8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1zdXBlcmthcnQvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHByb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFsb3RoZW1lcyAqL1xuICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19zaG93X21vcmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93bW9yZV9wcm9kdWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdicmFuZC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdicmFuZC9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIoKTtcbiAgICAgICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogSGFsb3RoZW1lcyBGdW5jdGlvbnMgKi9cblxuICAgIGNhdGVnb3J5X3NpZGViYXIoKSB7XG4gICAgICAgIGlmICgkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJ3VsLmFsbC1jYXRlZ29yaWVzLWxpc3QgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBjb25zdCBicmVhZExpbmsgPSAkKCcucGFnZS10eXBlLXByb2R1Y3QgI2JyZWFkY3J1bWJzLXdyYXBwZXIgdWwgbGkuYnJlYWRjcnVtYi5pcy1hY3RpdmUnKS5wcmV2KCcuYnJlYWRjcnVtYicpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uKSB8fCAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSBicmVhZExpbmspIHtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1jYXQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCAuaWNvbi1kcm9wZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVVwKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuaWNvbi1kcm9wZG93blwiKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVUb2dnbGUoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWNsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dtb3JlX3Byb2R1Y3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi13cmFwcGVyIC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgaWYgKGxpbmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5ID4gc3BhbicpLnRleHQoJ05vIG1vcmUgcHJvZHVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5jYXJkLXZhcmlhbnQnKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGFsb0NvbG9yVmFyaWFudHMoY29udGV4dCwgJHByb2RXcmFwSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwicHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCJCcmFuZCIsIl9DYXRhbG9nUGFnZSIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsImNhdGVnb3J5X3NpZGViYXIiLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwidGhlbWVTZXR0aW5ncyIsImhhbG9fc2hvd19tb3JlIiwic2hvd21vcmVfcHJvZHVjdCIsIl90aGlzMiIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZWFjaCIsImJyZWFkTGluayIsInByZXYiLCJjaGlsZHJlbiIsImF0dHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJoYXNDbGFzcyIsInVybCIsIlVSTCIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJlIiwiX3RoaXMzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJ1bmRlZmluZWQiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsImFwcGVuZCIsIk51bWJlciIsInRleHQiLCIkcHJvZFdyYXBJZCIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9