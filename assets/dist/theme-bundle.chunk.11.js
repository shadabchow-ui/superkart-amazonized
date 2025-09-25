(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  var $element = element,
    $popup = $element.find('.halo-lookbook-popup');
  var $options = {
    template: 'halothemes/lookbook/halo-lookbook-tmp'
  };
  $element.find('[data-product-lookbook]').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.currentTarget).data('product-id'),
      position = $(event.currentTarget).offset(),
      container = $element.offset();
    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $popup.html(response);
      });
      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 200,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }
      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.halo-lookbook-close', function (event) {
    event.preventDefault();
    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('[data-product-lookbook]').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Page = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Page, _PageManager);
  function Page(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    Object(_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_2__["default"])($('#halo-lookbook-slider'));
    this.faqsPage();
    this.faqsToggle();
    this.lookbookSlider();
  };
  _proto.faqsPage = function faqsPage() {
    $('.faq-desc').appendTo('.page-normal .page-description');
  };
  _proto.faqsToggle = function faqsToggle() {
    $('.page-normal .card .title').on('click', function (event) {
      event.preventDefault();
      var target = $(event.currentTarget);
      $('.page-normal .card .title').not(target).removeClass('collapsed');
      if (target.hasClass('collapsed')) {
        target.removeClass('collapsed');
      } else {
        target.addClass('collapsed');
      }
      $('.page-normal .card').each(function (index, element) {
        if ($('.title', element).hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };
  _proto.lookbookSlider = function lookbookSlider() {
    if ($('#halo-lookbook-slider').length > 0) {
      var $block = $('#halo-lookbook-slider'),
        wrap = $block.find('.halo-lookbook-slider');
      slickCarousel(wrap);
    }
    function slickCarousel(wrap) {
      if (wrap.length > 0) {
        wrap.slick({
          dots: true,
          arrows: false,
          fade: true,
          infinite: false,
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 768,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  };
  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wYWdlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCIkZWxlbWVudCIsIiRwb3B1cCIsImZpbmQiLCIkb3B0aW9ucyIsInRlbXBsYXRlIiwib24iLCJldmVudCIsInJlbW92ZUNsYXNzIiwiZW1wdHkiLCIkcHJvZElkIiwiJCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwicG9zaXRpb24iLCJvZmZzZXQiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJ1dGlscyIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJodG1sIiwid2luZG93Iiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiYWRkQ2xhc3MiLCJkb2N1bWVudCIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiUGFnZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsImNhbGwiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiaGFsb1Byb2R1Y3RMb29rYm9vayIsImZhcXNQYWdlIiwiZmFxc1RvZ2dsZSIsImxvb2tib29rU2xpZGVyIiwiYXBwZW5kVG8iLCJub3QiLCJlYWNoIiwiaW5kZXgiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiJGJsb2NrIiwid3JhcCIsInNsaWNrQ2Fyb3VzZWwiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJmYWRlIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUErQztB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QkMsVUFBVSxFQUFFLENBQ1o7WUFDSUMsVUFBVSxFQUFFLEdBQUc7WUFDZkMsUUFBUSxFQUFFO2NBQ05ULElBQUksRUFBRSxLQUFLO2NBQ1hDLE1BQU0sRUFBRTtZQUNaO1VBQ0osQ0FBQztRQUNMLENBQUMsQ0FBQztNQUNOO0lBQ0o7RUFDSixDQUFDO0VBQUEsT0FBQXZCLElBQUE7QUFBQSxFQXRFNkJnQyxxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdmFyICRlbGVtZW50ID0gZWxlbWVudCxcclxuICAgICAgICAkcG9wdXAgPSAkZWxlbWVudC5maW5kKCcuaGFsby1sb29rYm9vay1wb3B1cCcpO1xyXG4gICAgICAgIFxyXG4gICAgdmFyICRvcHRpb25zID0ge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9sb29rYm9vay9oYWxvLWxvb2tib29rLXRtcCdcclxuICAgIH07XHJcblxyXG4gICAgJGVsZW1lbnQuZmluZCgnW2RhdGEtcHJvZHVjdC1sb29rYm9va10nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgdmFyICRwcm9kSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLm9mZnNldCgpLFxyXG4gICAgICAgICAgICBjb250YWluZXIgPSAkZWxlbWVudC5vZmZzZXQoKTtcclxuXHJcbiAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHBvcHVwLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA1NTEpIHtcclxuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wIC0gMjAwLCAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgLSBjb250YWluZXIubGVmdCArIDMwfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCArIDE1LCAnbGVmdCc6IDE1fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLWxvb2tib29rLWNsb3NlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICgkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgaWYoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtbG9va2Jvb2tdJykubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBoYWxvUHJvZHVjdExvb2tib29rIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBoYWxvUHJvZHVjdExvb2tib29rKCQoJyNoYWxvLWxvb2tib29rLXNsaWRlcicpKTtcclxuXHJcbiAgICAgICAgdGhpcy5mYXFzUGFnZSgpO1xyXG4gICAgICAgIHRoaXMuZmFxc1RvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMubG9va2Jvb2tTbGlkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmYXFzUGFnZSgpe1xyXG4gICAgICAgICQoJy5mYXEtZGVzYycpLmFwcGVuZFRvKCcucGFnZS1ub3JtYWwgLnBhZ2UtZGVzY3JpcHRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBmYXFzVG9nZ2xlKCl7XHJcbiAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkIC50aXRsZScpLm5vdCh0YXJnZXQpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCQoJy50aXRsZScsIGVsZW1lbnQpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvb2tib29rU2xpZGVyKCkge1xyXG4gICAgICAgIGlmKCQoJyNoYWxvLWxvb2tib29rLXNsaWRlcicpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgJGJsb2NrID0gJCgnI2hhbG8tbG9va2Jvb2stc2xpZGVyJyksXHJcbiAgICAgICAgICAgICAgICB3cmFwID0gJGJsb2NrLmZpbmQoJy5oYWxvLWxvb2tib29rLXNsaWRlcicpO1xyXG5cclxuICAgICAgICAgICAgc2xpY2tDYXJvdXNlbCh3cmFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XHJcbiAgICAgICAgICAgIGlmKHdyYXAubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==