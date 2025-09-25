(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
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
    Object(_halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/halothemes/haloAZBrands.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAZBrands.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
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
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9BWkJyYW5kcy5qcyJdLCJuYW1lcyI6WyJCcmFuZHMiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJjYWxsIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImhhbG9BWkJyYW5kcyIsIlBhZ2VNYW5hZ2VyIiwiYXpXcmFwcGVyIiwiJCIsImF6TmF2aWdhdGlvbiIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYnJhbmRzIiwibGltaXQiLCJ0aGVtZVNldHRpbmdzIiwiYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSIsInRlbXBsYXRlIiwiaGFsb19icmFuZEFabGF5b3V0IiwiZ2V0QWxsQnJhbmQiLCJicmFuZE5hdmlnYXRpb25FdmVudCIsImFjdGl2ZUJyYW5kIiwiYWRkQ2xhc3MiLCJ1cmwiLCJ1cmxzIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsImxpc3QiLCJwYXJzZUxpc3RCcmFuZCIsIm5leHRVcmwiLCJkYXRhIiwibG9hZE1vcmVCcmFuZHMiLCJyZW1vdmVDbGFzcyIsImlzTGV0dGVyIiwic3RyIiwibGVuZ3RoIiwibWF0Y2giLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImNoaWxkcmVuIiwicGFyZW50IiwibGV0dGVyIiwidW5kZWZpbmVkIiwiZmluZCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJpIiwiYXBwZW5kIiwibGlua0JyYW5kIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiYnJhbmRMZXR0ZXIiLCJzcGxpdCIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWTtBQUFBLElBRWhDQSxNQUFNLDBCQUFB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QU0sR0FBQyxHQUFHLENBQUMsQ0FBQ1osV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDYixRQUFRLENBQUMsWUFBWSxDQUFDO01BQy9GO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTWSxjQUFjQSxDQUFDWCxHQUFHLEVBQUU7SUFDekJFLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDSixHQUFHLEVBQUVaLGNBQWMsRUFBRSxVQUFDaUIsS0FBSyxFQUFFQyxRQUFRLEVBQUs7TUFDeEQsSUFBSUQsS0FBSyxFQUFFO1FBQ1AsT0FBTyxFQUFFO01BQ2I7TUFFQSxJQUFJRSxJQUFJLEdBQUdyQixDQUFDLENBQUNvQixRQUFRLENBQUM7TUFFdEJFLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDO01BRXBCLElBQU1FLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7TUFFN0MsSUFBSUQsT0FBTyxFQUFFO1FBQ1RFLGNBQWMsQ0FBQ0YsT0FBTyxDQUFDO01BQzNCLENBQUMsTUFBSztRQUNGeEIsU0FBUyxDQUFDMkIsV0FBVyxDQUFDLFlBQVksQ0FBQztNQUN2QztJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU2QsV0FBV0EsQ0FBQSxFQUFHO0lBQ25CLElBQU1rQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO0lBQ3RDLElBQU1DLFdBQVcsR0FBR0osU0FBUyxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNDbEQsWUFBWSxDQUFDdUMsSUFBSSxDQUFDLGdCQUFnQixHQUFDVSxXQUFXLEdBQUMsTUFBTSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUM7RUFDM0U7QUFDSixDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IGhhbG9BWkJyYW5kcyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FaQnJhbmRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHRvblJlYWR5KCkge1xyXG5cdFx0aGFsb0FaQnJhbmRzKHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICBjb25zdCBheldyYXBwZXIgPSAkKCcjaGFsb0FaQnJhbmRzV3JhcHBlcicpLFxyXG4gICAgICAgIGF6TmF2aWdhdGlvbiA9ICQoJyNoYWxvQVpCcmFuZHNUYWJsZScpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBicmFuZHM6IHtcclxuICAgICAgICAgICAgICAgIGxpbWl0OiBjb250ZXh0LnRoZW1lU2V0dGluZ3MuYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvYnJhbmQvaGFsby1hbGwtYnJhbmRzJyxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX2JyYW5kQVpsYXlvdXQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGdldEFsbEJyYW5kKCk7XHJcbiAgICAgICAgYnJhbmROYXZpZ2F0aW9uRXZlbnQoKTtcclxuICAgICAgICBhY3RpdmVCcmFuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFsbEJyYW5kKCl7XHJcbiAgICAgICAgYXpXcmFwcGVyLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGNvbnRleHQudXJscy5icmFuZHM7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBwYXJzZUxpc3RCcmFuZChsaXN0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBsaXN0LmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJyYW5kcyhuZXh0VXJsKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0xldHRlcihzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1thLXpdL2kpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJyYW5kTmF2aWdhdGlvbkV2ZW50KCl7XHJcbiAgICAgICAgYXpOYXZpZ2F0aW9uLm9uKCdjbGljaycsICdhJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGF6TmF2aWdhdGlvbi5jaGlsZHJlbignbGknKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9ICR0YXJnZXQuZGF0YSgnaHJlZicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldHRlciAhPT0gdW5kZWZpbmVkIHx8IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuZmluZCgnLmF6QnJhbmRzLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5hZGRDbGFzcygnYWN0aXZlLWFsbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VMaXN0QnJhbmQobGlzdCl7XHJcbiAgICAgICAgYXpXcmFwcGVyLmZpbmQoJy5hekJyYW5kcy1ncm91cCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAkKGVsZW1lbnQpLmRhdGEoJ2xldHRlcicpO1xyXG5cclxuICAgICAgICAgICAgaWYoIWlzTGV0dGVyKGxldHRlcikpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5hcHBlbmQobGlzdC5maW5kKCdbZGF0YS1icmFuZC1sZXR0ZXI9JytpKyddJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5hcHBlbmQobGlzdC5maW5kKCdbZGF0YS1icmFuZC1sZXR0ZXI9JytsZXR0ZXIrJ10nKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuY2hpbGRyZW4oKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGF6TmF2aWdhdGlvbi5maW5kKCdbZGF0YS1sZXR0ZXI9JytsZXR0ZXIrJ10nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpLmFkZENsYXNzKCdoYXMtbGV0dGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkTW9yZUJyYW5kcyh1cmwpIHtcclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgcGFyc2VMaXN0QnJhbmQobGlzdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gbGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFVybCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZE1vcmVCcmFuZHMobmV4dFVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZlQnJhbmQoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua0JyYW5kID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgY29uc3QgYnJhbmRMZXR0ZXIgPSBsaW5rQnJhbmQuc3BsaXQoJyMnKVsxXTtcclxuICAgICAgICBcclxuICAgICAgICBhek5hdmlnYXRpb24uZmluZCgnW2RhdGEtbGV0dGVyPVwiJyticmFuZExldHRlcisnXCJdIGEnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=