"use strict";
(self["webpackChunkbigcommerce_superkart"] = self["webpackChunkbigcommerce_superkart"] || []).push([["assets_js_theme_page_js"],{

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
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
}

/***/ }),

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Page = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Page, _PageManager);
  function Page(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_2__["default"])($('#halo-lookbook-slider'));
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wYWdlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUUvQyw2QkFBZSxvQ0FBU0MsT0FBTyxFQUFFO0VBQzdCLElBQUlDLFFBQVEsR0FBR0QsT0FBTztJQUNsQkUsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztFQUVsRCxJQUFJQyxRQUFRLEdBQUc7SUFDWEMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUVESixRQUFRLENBQUNFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUMxREwsTUFBTSxDQUFDTSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLElBQUlDLE9BQU8sR0FBR0MsQ0FBQyxDQUFDSixLQUFLLENBQUNLLGFBQWEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ25EQyxRQUFRLEdBQUdILENBQUMsQ0FBQ0osS0FBSyxDQUFDSyxhQUFhLENBQUMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDMUNDLFNBQVMsR0FBR2YsUUFBUSxDQUFDYyxNQUFNLENBQUMsQ0FBQztJQUVqQyxJQUFHTCxPQUFPLElBQUlPLFNBQVMsRUFBQztNQUNwQmxCLHNFQUFTLENBQUNvQixPQUFPLENBQUNDLE9BQU8sQ0FBQ1YsT0FBTyxFQUFFTixRQUFRLEVBQUUsVUFBQ2lCLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1FBQzVELElBQUdELEdBQUcsRUFBQztVQUNILE9BQU8sS0FBSztRQUNoQjtRQUVBbkIsTUFBTSxDQUFDcUIsSUFBSSxDQUFDRCxRQUFRLENBQUM7TUFDekIsQ0FBQyxDQUFDO01BRUYsSUFBSVgsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDMUJ2QixNQUFNLENB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QUUsSUFBSTtVQUNWQyxRQUFRLEVBQUUsS0FBSztVQUNmQyxXQUFXLEVBQUUsSUFBSTtVQUNqQkMsWUFBWSxFQUFFLENBQUM7VUFDZkMsY0FBYyxFQUFFLENBQUM7VUFDakJDLFVBQVUsRUFBRSxDQUNaO1lBQ0lDLFVBQVUsRUFBRSxHQUFHO1lBQ2ZDLFFBQVEsRUFBRTtjQUNOVCxJQUFJLEVBQUUsS0FBSztjQUNYQyxNQUFNLEVBQUU7WUFDWjtVQUNKLENBQUM7UUFDTCxDQUFDLENBQUM7TUFDTjtJQUNKO0VBQ0osQ0FBQztFQUFBLE9BQUF0QixJQUFBO0FBQUEsRUF0RTZCRixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cGVya2FydC8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2suanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VwZXJrYXJ0Ly4vYXNzZXRzL2pzL3RoZW1lL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHZhciAkZWxlbWVudCA9IGVsZW1lbnQsXHJcbiAgICAgICAgJHBvcHVwID0gJGVsZW1lbnQuZmluZCgnLmhhbG8tbG9va2Jvb2stcG9wdXAnKTtcclxuICAgICAgICBcclxuICAgIHZhciAkb3B0aW9ucyA9IHtcclxuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvbG9va2Jvb2svaGFsby1sb29rYm9vay10bXAnXHJcbiAgICB9O1xyXG5cclxuICAgICRlbGVtZW50LmZpbmQoJ1tkYXRhLXByb2R1Y3QtbG9va2Jvb2tdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIHZhciAkcHJvZElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0LWlkJyksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5vZmZzZXQoKSxcclxuICAgICAgICAgICAgY29udGFpbmVyID0gJGVsZW1lbnQub2Zmc2V0KCk7XHJcblxyXG4gICAgICAgIGlmKCRwcm9kSWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRwb3B1cC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTUxKSB7XHJcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCAtIDIwMCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyLmxlZnQgKyAzMH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgKyAxNSwgJ2xlZnQnOiAxNX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby1sb29rYm9vay1jbG9zZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xyXG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZigkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIGlmKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWxvb2tib29rXScpLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vaygkKCcjaGFsby1sb29rYm9vay1zbGlkZXInKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmFxc1BhZ2UoKTtcclxuICAgICAgICB0aGlzLmZhcXNUb2dnbGUoKTtcclxuICAgICAgICB0aGlzLmxvb2tib29rU2xpZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFxc1BhZ2UoKXtcclxuICAgICAgICAkKCcuZmFxLWRlc2MnKS5hcHBlbmRUbygnLnBhZ2Utbm9ybWFsIC5wYWdlLWRlc2NyaXB0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFxc1RvZ2dsZSgpe1xyXG4gICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCAudGl0bGUnKS5ub3QodGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZigkKCcudGl0bGUnLCBlbGVtZW50KS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVEb3duKFwic2xvd1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlVXAoXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb29rYm9va1NsaWRlcigpIHtcclxuICAgICAgICBpZigkKCcjaGFsby1sb29rYm9vay1zbGlkZXInKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyICRibG9jayA9ICQoJyNoYWxvLWxvb2tib29rLXNsaWRlcicpLFxyXG4gICAgICAgICAgICAgICAgd3JhcCA9ICRibG9jay5maW5kKCcuaGFsby1sb29rYm9vay1zbGlkZXInKTtcclxuXHJcbiAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICBpZih3cmFwLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1dGlscyIsImVsZW1lbnQiLCIkZWxlbWVudCIsIiRwb3B1cCIsImZpbmQiLCIkb3B0aW9ucyIsInRlbXBsYXRlIiwib24iLCJldmVudCIsInJlbW92ZUNsYXNzIiwiZW1wdHkiLCIkcHJvZElkIiwiJCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwicG9zaXRpb24iLCJvZmZzZXQiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJhcGkiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImVyciIsInJlc3BvbnNlIiwiaHRtbCIsIndpbmRvdyIsIndpZHRoIiwiY3NzIiwidG9wIiwibGVmdCIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsImxlbmd0aCIsIlBhZ2VNYW5hZ2VyIiwiaGFsb1Byb2R1Y3RMb29rYm9vayIsIlBhZ2UiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJjYWxsIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImZhcXNQYWdlIiwiZmFxc1RvZ2dsZSIsImxvb2tib29rU2xpZGVyIiwiYXBwZW5kVG8iLCJub3QiLCJlYWNoIiwiaW5kZXgiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiJGJsb2NrIiwid3JhcCIsInNsaWNrQ2Fyb3VzZWwiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJmYWRlIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9