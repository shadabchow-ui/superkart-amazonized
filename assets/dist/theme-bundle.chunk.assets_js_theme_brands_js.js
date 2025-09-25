"use strict";
(self["webpackChunkbigcommerce_superkart"] = self["webpackChunkbigcommerce_superkart"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./halothemes/haloAZBrands */ "./assets/js/theme/halothemes/haloAZBrands.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);
  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/halothemes/haloAZBrands.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAZBrands.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var azWrapper = $('#haloAZBrandsWrapper'),
    azNavigation = $('#haloAZBrandsTable');
  var requestOptions = {
    config: {
      brands: {
        limit: context.themeSettings.brandpage_brands_per_page
      }
    },
    template: 'halothemes/brand/halo-all-brands'
  };
  if (context.themeSettings.halo_brandAZlayout == true) {
    getAllBrand();
    brandNavigationEvent();
    activeBrand();
  }
  function getAllBrand() {
    azWrapper.addClass('is-loading');
    var url = context.urls.brands;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function brandNavigationEvent() {
    azNavigation.on('click', 'a', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      azNavigation.children('li').removeClass('is-active');
      $target.parent().addClass('is-active');
      var letter = $target.data('href');
      if (letter !== undefined || letter) {
        azWrapper.removeClass('active-all');
        azWrapper.find('.azBrands-group').removeClass('is-active');
        azWrapper.find('[data-letter=' + letter + ']').addClass('is-active');
      } else {
        azWrapper.addClass('active-all');
      }
    });
  }
  function parseListBrand(list) {
    azWrapper.find('.azBrands-group').each(function (index, element) {
      var letter = $(element).data('letter');
      if (!isLetter(letter)) {
        for (var i = 0; i < 10; i++) {
          $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + i + ']'));
        }
      } else {
        $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + letter + ']'));
      }
      if ($('.azBrands-group-list', element).children().length > 0) {
        azNavigation.find('[data-letter=' + letter + ']').removeClass('disable').addClass('has-letter');
      }
    });
  }
  function loadMoreBrands(url) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function activeBrand() {
    var linkBrand = window.location.hash;
    var brandLetter = linkBrand.split('#')[1];
    azNavigation.find('[data-letter="' + brandLetter + '"] a').trigger('click');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWTtBQUFBLElBRWhDRSxNQUFNLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsTUFBQSxFQUFBQyxZQUFBO0VBQzFCLFNBQUFELE9BQVlHLE9BQU8sRUFBRTtJQUFBLE9BQ2RGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRCxPQUFPLENBQUM7RUFDbEI7RUFBQyxJQUFBRSxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBRUpFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDVFIsb0VBQVksQ0FBQyxJQUFJLENBQUNJLE9BQU8sQ0FBQztFQUN4QixDQUFDO0VBQUEsT0FBQUgsTUFBQTtBQUFBLEVBUCtCRixxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUUvQyw2QkFBZSxvQ0FBVUssT0FBTyxFQUFFO0VBQzlCLElBQU1PLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDQyxZQUFZLEdBQUdELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztFQUUxQyxJQUFNRSxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRTtNQUNKQyxNQUFNLEVBQUU7UUFDSkMsS0FBSyxFQUFFYixPQUFPLENBQUNjLGFBQWEsQ0FBQ0M7TUFDakM7SUFDSixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxJQUFJaEIsT0FBTyxDQUFDYyxhQUFhLENBQUNHLGtCQUFrQixJQUFJLElBQUksRUFBRTtJQUNsREMsV0FBVyxDQUFDLENBQUM7SUFDYkMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QkMsV0FBVyxDQUFDLENBQUM7RUFDakI7RUFFQSxTQUFTRixXQUFXQSxDQUFBLEVBQUU7SUFDbEJYLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUVoQyxJQUFNQyxHQUFHLEdBQUd0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L2JpZ2NvbW1lcmNlLXN1cGVya2FydC8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VwZXJrYXJ0Ly4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0FaQnJhbmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBoYWxvQVpCcmFuZHMgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BWkJyYW5kcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdGhhbG9BWkJyYW5kcyh0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgY29uc3QgYXpXcmFwcGVyID0gJCgnI2hhbG9BWkJyYW5kc1dyYXBwZXInKSxcclxuICAgICAgICBhek5hdmlnYXRpb24gPSAkKCcjaGFsb0FaQnJhbmRzVGFibGUnKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgYnJhbmRzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW1pdDogY29udGV4dC50aGVtZVNldHRpbmdzLmJyYW5kcGFnZV9icmFuZHNfcGVyX3BhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL2JyYW5kL2hhbG8tYWxsLWJyYW5kcycsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19icmFuZEFabGF5b3V0ID09IHRydWUpIHtcclxuICAgICAgICBnZXRBbGxCcmFuZCgpO1xyXG4gICAgICAgIGJyYW5kTmF2aWdhdGlvbkV2ZW50KCk7XHJcbiAgICAgICAgYWN0aXZlQnJhbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxCcmFuZCgpe1xyXG4gICAgICAgIGF6V3JhcHBlci5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBjb250ZXh0LnVybHMuYnJhbmRzO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgcGFyc2VMaXN0QnJhbmQobGlzdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gbGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFVybCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZE1vcmVCcmFuZHMobmV4dFVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMZXR0ZXIoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPT09IDEgJiYgc3RyLm1hdGNoKC9bYS16XS9pKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBicmFuZE5hdmlnYXRpb25FdmVudCgpe1xyXG4gICAgICAgIGF6TmF2aWdhdGlvbi5vbignY2xpY2snLCAnYScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBhek5hdmlnYXRpb24uY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgJHRhcmdldC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSAkdGFyZ2V0LmRhdGEoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgIT09IHVuZGVmaW5lZCB8fCBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnYWN0aXZlLWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmZpbmQoJy5hekJyYW5kcy1ncm91cCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5maW5kKCdbZGF0YS1sZXR0ZXI9JytsZXR0ZXIrJ10nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuYWRkQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTGlzdEJyYW5kKGxpc3Qpe1xyXG4gICAgICAgIGF6V3JhcHBlci5maW5kKCcuYXpCcmFuZHMtZ3JvdXAnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJChlbGVtZW50KS5kYXRhKCdsZXR0ZXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFpc0xldHRlcihsZXR0ZXIpKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuYXBwZW5kKGxpc3QuZmluZCgnW2RhdGEtYnJhbmQtbGV0dGVyPScraSsnXScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuYXBwZW5kKGxpc3QuZmluZCgnW2RhdGEtYnJhbmQtbGV0dGVyPScrbGV0dGVyKyddJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmNoaWxkcmVuKCkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBhek5hdmlnYXRpb24uZmluZCgnW2RhdGEtbGV0dGVyPScrbGV0dGVyKyddJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKS5hZGRDbGFzcygnaGFzLWxldHRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZE1vcmVCcmFuZHModXJsKSB7XHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCByZXF1ZXN0T3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIHBhcnNlTGlzdEJyYW5kKGxpc3QpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV4dFVybCA9IGxpc3QuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRNb3JlQnJhbmRzKG5leHRVcmwpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2ZUJyYW5kKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtCcmFuZCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgIGNvbnN0IGJyYW5kTGV0dGVyID0gbGlua0JyYW5kLnNwbGl0KCcjJylbMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXpOYXZpZ2F0aW9uLmZpbmQoJ1tkYXRhLWxldHRlcj1cIicrYnJhbmRMZXR0ZXIrJ1wiXSBhJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJoYWxvQVpCcmFuZHMiLCJCcmFuZHMiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJjYWxsIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImRlZmF1bHQiLCJ1dGlscyIsImF6V3JhcHBlciIsIiQiLCJhek5hdmlnYXRpb24iLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImJyYW5kcyIsImxpbWl0IiwidGhlbWVTZXR0aW5ncyIsImJyYW5kcGFnZV9icmFuZHNfcGVyX3BhZ2UiLCJ0ZW1wbGF0ZSIsImhhbG9fYnJhbmRBWmxheW91dCIsImdldEFsbEJyYW5kIiwiYnJhbmROYXZpZ2F0aW9uRXZlbnQiLCJhY3RpdmVCcmFuZCIsImFkZENsYXNzIiwidXJsIiwidXJscyIsImFwaSIsImdldFBhZ2UiLCJlcnJvciIsInJlc3BvbnNlIiwibGlzdCIsInBhcnNlTGlzdEJyYW5kIiwibmV4dFVybCIsImRhdGEiLCJsb2FkTW9yZUJyYW5kcyIsInJlbW92ZUNsYXNzIiwiaXNMZXR0ZXIiLCJzdHIiLCJsZW5ndGgiLCJtYXRjaCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJsZXR0ZXIiLCJ1bmRlZmluZWQiLCJmaW5kIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImkiLCJhcHBlbmQiLCJsaW5rQnJhbmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJicmFuZExldHRlciIsInNwbGl0IiwidHJpZ2dlciJdLCJzb3VyY2VSb290IjoiIn0=