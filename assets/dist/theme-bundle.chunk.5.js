(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__["createTranslationDictionary"])(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context.urls);

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
            text: _this4.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match,
        invalidPassword = _this$validationDicti.invalid_password;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */
function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}
function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($form, context) {
  var validationsToPerform = [];
  var _createTranslationDic = Object(_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__["createTranslationDictionary"])(context),
    requiredFieldValidationText = _createTranslationDic.field_not_blank;
  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };
    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCIkc3RhdGUiLCIkIiwiJGJvZHkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsImNvbXBhcmVQcm9kdWN0cyIsInVybHMiLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsIldpc2hsaXN0IiwibG9hZCIsImxlbmd0aCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwib24iLCJsZWZ0Iiwid2luZG93Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInRvcCIsImF2YWlsSGVpZ2h0IiwidXJsIiwiZGF0YSIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJldmVudCIsIm1lc3NhZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiX3RoaXMyIiwiJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyIsInN1Ym1pdEZvcm0iLCJmaW5kIiwicmVtb3ZlIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInN3YWwiLCJmaXJlIiwidGV4dCIsInNlbGVjdEl0ZW0iLCJpY29uIiwiX3RoaXMzIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInRhcCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImZpZWxkX25vdF9ibGFuayIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiX3RoaXM0IiwiYXR0ciIsImZpcnN0TmFtZUxhYmVsIiwibGFzdE5hbWVMYWJlbCIsImNvbXBhbnlMYWJlbCIsInBob25lTGFiZWwiLCJhZGRyZXNzMUxhYmVsIiwiYWRkcmVzczJMYWJlbCIsImNpdHlMYWJlbCIsImNvdW50cnlMYWJlbCIsImNob29zZUNvdW50cnlMYWJlbCIsInN0YXRlTGFiZWwiLCJwb3N0YWxDb2RlTGFiZWwiLCJwYXltZW50TWV0aG9kU2VsZWN0b3IiLCJwYXltZW50TWV0aG9kVmFsaWRhdG9yIiwiY2FyZFR5cGUiLCJfcmVmIiwidGFyZ2V0IiwiY3JlZGl0Q2FyZFR5cGUiLCJzaWJsaW5ncyIsImNzcyIsIkNDVmFsaWRhdG9ycyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJDQ0Zvcm1hdHRlcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsIl9yZWR1Y2UiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiX2ZpbmQiLCJjb3VudHJpZXMiLCJfcmVmMiIsInN0YXRlIiwic3RhdGVzIiwiX3JlZjMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsInN0b3JlSW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBheW1lbnRNZXRob2RzVXJsIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCJwYXNzd29yZFNlbGVjdG9yIiwiJHBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkMlNlbGVjdG9yIiwiJHBhc3N3b3JkMkVsZW1lbnQiLCJjdXJyZW50UGFzc3dvcmRTZWxlY3RvciIsIiRjdXJyZW50UGFzc3dvcmQiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZF9lbWFpbCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsImVudGVyUGFzc3dvcmQiLCJwYXNzd29yZCIsIm1hdGNoUGFzc3dvcmQiLCJwYXNzd29yZF9tYXRjaCIsImludmFsaWRQYXNzd29yZCIsImludmFsaWRfcGFzc3dvcmQiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsIlBhZ2VNYW5hZ2VyIiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwibWluU3BsaXQiLCJzcGxpdCIsIm1heFNwbGl0IiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwidHJpZ2dlcmVkQnkiLCJkYXkiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImVycm9yVGV4dCIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJjaGVja2JveCIsImNoZWNrZWQiLCJidWlsZFJlcXVpcmVkVmFsaWRhdGlvbiIsImJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uIiwiZm9ybUZpZWxkU2VsZWN0b3IiLCJsYWJlbCIsIm1pbiIsIm1heCIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZmllbGRWYWxpZGF0aW9ucyIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsInJlcXVpcmVkIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJ2YWxpZGF0aW9uc1RvUGVyZm9ybSIsIl9jcmVhdGVUcmFuc2xhdGlvbkRpYyIsInJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dCIsImlucHV0IiwiZ2V0TGFiZWwiLCIkZWwiLCJmaXJzdCIsInJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UiLCJjb25jYXQiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsInBhcnNlIiwiZG9uZSIsImZhaWwiLCJwYXltZW50c1VybCIsInNob3BwZXJJZCIsInN0b3JlSGFzaCIsInZhdWx0VG9rZW4iLCJwcm92aWRlcl9pZCIsImN1cnJlbmN5X2NvZGUiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwiZXhwaXJ5X3llYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJGb3JtYXR0ZXJzIiwicmVmVGFyZ2V0IiwiZm9ybWF0IiwiX3JlZjQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwicG9wIiwicmVkdWNlIiwiYWNjIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJwYXJlbnQiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRVY7QUFDRztBQUNnQjtBQUNBO0FBT2Y7QUFDNkM7QUFDa0Q7QUFDMUY7QUFDZ0I7QUFBQSxJQUVuQ0EsT0FBTywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLE9BQUEsRUFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR0Msb0dBQTJCLENBQUNKLE9BQU8sQ0FBQztJQUNoRUMsS0FBQSxDQUFLSSxNQUFNLEdBQUdDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1Q0wsS0FBQSxDQUFLTSxLQUFLLEdBQUdELENBQUMsQ0FBQyxNQUFNLENBQUM7SUFB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b0MsQ0FBQztJQUVqRixJQUFJMFIsb0JBQW9CLENBQUN2VCxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2xDc1QsNkRBQWMsQ0FBQyxrREFBa0QsQ0FBQztNQUNsRSxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDLENBQUM7QUFDTixDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay41LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7XG4gICAgY2xhc3NpZnlGb3JtLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkLFxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW52b2ljZUJ1dHRvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRpbnZvaWNlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IC8gMiAtIDMyMDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkaW52b2ljZUJ1dHRvbi5kYXRhKCdwcmludEludm9pY2UnKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ29yZGVySW52b2ljZScsIGB3aWR0aD05MDAsaGVpZ2h0PTY1MCxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSxzY3JvbGxiYXJzPTFgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRyZXNzRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW5ib3hGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWNjb3VudFJldHVybkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGF5bWVudE1ldGhvZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcmVvcmRlckZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlQWRkcmVzcygpO1xuICAgICAgICB0aGlzLmJpbmREZWxldGVQYXltZW50TWV0aG9kKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYSBzdWJtaXQgaG9vayB0byBlbnN1cmUgdGhlIGN1c3RvbWVyIHJlY2VpdmVzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBiZWZvcmUgZGVsZXRpbmcgYW4gYWRkcmVzc1xuICAgICAqL1xuICAgIGJpbmREZWxldGVBZGRyZXNzKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtYWRkcmVzc10nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlQWRkcmVzcycpO1xuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1wYXltZW50LW1ldGhvZF0nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlUGF5bWVudE1ldGhvZCcpO1xuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSkge1xuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCcuYWNjb3VudC1saXN0SXRlbSAuZm9ybS1jaGVja2JveDpjaGVja2VkJyk7XG4gICAgICAgICAgICBsZXQgc3VibWl0Rm9ybSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkcmVvcmRlckZvcm0uZmluZCgnW25hbWVePVwicmVvcmRlcml0ZW1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcy5lYWNoKChpbmRleCwgcHJvZHVjdENoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChwcm9kdWN0Q2hlY2tib3gpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgcmVvcmRlcml0ZW1bJHtwcm9kdWN0SWR9XWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICRyZW9yZGVyRm9ybS5hcHBlbmQoJGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXN1Ym1pdEZvcm0pIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5zZWxlY3RJdGVtLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRhZGRyZXNzRm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xuXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQoZWxlKS52YWwoKSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgb3V0IG9mIGxvb3AgaWYgd2UgZm91bmQgYXQgbGVhc3Qgb25lIHJldHVyblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIHByZWZpeDogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RTZWxlY3RvciA9ICdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XG5cbiAgICAgICAgbGV0ICRsYXN0O1xuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVc2UgY3JlZGl0IGNhcmQgbnVtYmVyIGlucHV0IGxpc3RlbmVyIHRvIGhpZ2hsaWdodCBjcmVkaXQgY2FyZCB0eXBlXG4gICAgICAgIGxldCBjYXJkVHlwZTtcbiAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgY2FyZFR5cGUgPSBjcmVkaXRDYXJkVHlwZSh0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGNhcmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ1thbHQ9XCIke2NhcmRUeXBlfVwiXWApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gKTtcblxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xuICAgICAgICBjb25zdCBlZGl0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJyR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkVtYWlsQWRkcmVzc1wiXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkN1cnJlbnRQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBUaGlzIG9ubHkgaGFuZGxlcyB0aGUgY3VzdG9tIGZpZWxkcywgc3RhbmRhcmQgZmllbGRzIGFyZSBhZGRlZCBiZWxvd1xuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkX3Bhc3N3b3JkOiBpbnZhbGlkUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkUGFzc3dvcmQpLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbi8qKlxuICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gZGF0ZSBmb3IgdGhlIGRheS9tb250aC95ZWFyIHNlbGVjdCBpbnB1dHMgaXMgd2l0aGluIHBvdGVudGlhbCByYW5nZVxuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7e3NlbGVjdG9yOiBzdHJpbmcsIHRyaWdnZXJlZEJ5OiBzdHJpbmcsIHZhbGlkYXRlOiBGdW5jdGlvbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmd9fVxuICovXG5mdW5jdGlvbiBidWlsZERhdGVWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICAvLyBObyBkYXRlIHJhbmdlIHJlc3RyaWN0aW9uLCBza2lwXG4gICAgaWYgKHZhbGlkYXRpb24ubWluX2RhdGUgJiYgdmFsaWRhdGlvbi5tYXhfZGF0ZSkge1xuICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBZb3VyIGNob3NlbiBkYXRlIG11c3QgZmFsbCBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW5fZGF0ZX0gYW5kICR7dmFsaWRhdGlvbi5tYXhfZGF0ZX0uYDtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgbWluU3BsaXQgPSB2YWxpZGF0aW9uLm1pbl9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1heFNwbGl0ID0gdmFsaWRhdGlvbi5tYXhfZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtaW5EYXRlID0gbmV3IERhdGUobWluU3BsaXRbMF0sIG1pblNwbGl0WzFdIC0gMSwgbWluU3BsaXRbMl0pO1xuICAgICAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUobWF4U3BsaXRbMF0sIG1heFNwbGl0WzFdIC0gMSwgbWF4U3BsaXRbMl0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdFtkYXRhLWxhYmVsPVwieWVhclwiXWAsXG4gICAgICAgICAgICB0cmlnZ2VyZWRCeTogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdDpub3QoW2RhdGEtbGFiZWw9XCJ5ZWFyXCJdKWAsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cImRheVwiXScpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwibW9udGhcIl0nKS52YWwoKSkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9zZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG5cbiAgICAgICAgICAgICAgICBjYihjaG9zZW5EYXRlID49IG1pbkRhdGUgJiYgY2hvc2VuRGF0ZSA8PSBtYXhEYXRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBXZSB2YWxpZGF0ZSBjaGVja2JveGVzIHNlcGFyYXRlbHkgZnJvbSBzaW5nbGUgaW5wdXQgZmllbGRzLCBhcyB0aGV5IG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY2hlY2tlZCBvcHRpb25cbiAqIGZyb20gbWFueSBkaWZmZXJlbnQgaW5wdXRzXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEBwYXJhbSBlcnJvclRleHQgcHJvdmlkZXMgZXJyb3IgdmFsaWRhdGlvbiBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24odmFsaWRhdGlvbiwgJGZvcm1GaWVsZCwgZXJyb3JUZXh0KSB7XG4gICAgY29uc3QgZm9ybUZpZWxkSWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgY29uc3QgcHJpbWFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dDpmaXJzdC1vZi10eXBlYDtcbiAgICBjb25zdCBzZWNvbmRhcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXRgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3I6IHByaW1hcnlTZWxlY3RvcixcbiAgICAgICAgdHJpZ2dlcmVkQnk6IHNlY29uZGFyeVNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoc2Vjb25kYXJ5U2VsZWN0b3IpLmVhY2goKGluZGV4LCBjaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBzZWxlY3RvciwgZXJyb3JUZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcbiAgICAgICAgICAgIGNiKHZhbC5sZW5ndGggPiAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpIHtcbiAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBUaGUgdmFsdWUgZm9yICR7dmFsaWRhdGlvbi5sYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW59IGFuZCAke3ZhbGlkYXRpb24ubWF4fS5gO1xuICAgIGNvbnN0IG1pbiA9IE51bWJlcih2YWxpZGF0aW9uLm1pbik7XG4gICAgY29uc3QgbWF4ID0gTnVtYmVyKHZhbGlkYXRpb24ubWF4KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIiR7dmFsaWRhdGlvbi5uYW1lfVwiXWAsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBidWlsZFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSAkdmFsaWRhdGVhYmxlRWxlbWVudC5kYXRhKCd2YWxpZGF0aW9uJyk7XG4gICAgY29uc3QgZmllbGRWYWxpZGF0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGZvcm1GaWVsZFNlbGVjdG9yID0gYCMkeyR2YWxpZGF0ZWFibGVFbGVtZW50LmF0dHIoJ2lkJyl9YDtcblxuICAgIGlmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdkYXRlY2hvb3NlcicpIHtcbiAgICAgICAgY29uc3QgZGF0ZVZhbGlkYXRpb24gPSBidWlsZERhdGVWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCB2YWxpZGF0aW9uKTtcblxuICAgICAgICBpZiAoZGF0ZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChkYXRlVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQgJiYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2NoZWNrYm94c2VsZWN0JyB8fCB2YWxpZGF0aW9uLnR5cGUgPT09ICdyYWRpb3NlbGVjdCcpKSB7XG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICR2YWxpZGF0ZWFibGVFbGVtZW50LCBlcnJvck1lc3NhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IsIGVycm9yTWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHZhbGlkYXRpb24gbW9kZWwgZm9yIGR5bmFtaWMgZm9ybXNcbiAqIEBwYXJhbSAkZm9ybVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIGZvciBlcnJvciBtZXNzYWdlcyBvbiByZXF1aXJlZCBmaWVsZHMgdmFsaWRhdGlvblxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGZvcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSBbXTtcbiAgICBjb25zdCB7IGZpZWxkX25vdF9ibGFuazogcmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IH0gPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRMYWJlbCA9ICRlbCA9PiAkZWwuZmlyc3QoKS5kYXRhKCd2YWxpZGF0aW9uJykubGFiZWw7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UgPSBnZXRMYWJlbCgkKGlucHV0KSkgKyByZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQ7XG5cbiAgICAgICAgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSB2YWxpZGF0aW9uc1RvUGVyZm9ybS5jb25jYXQoYnVpbGRWYWxpZGF0aW9uKCQoaW5wdXQpLCByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbnNUb1BlcmZvcm07XG59XG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBJbmZvXG4gICAgcHJvdmlkZXJfaWQsXG4gICAgY3VycmVuY3lfY29kZSxcblxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xuICAgIGNyZWRpdF9jYXJkX251bWJlcixcbiAgICBleHBpcmF0aW9uLFxuICAgIG5hbWVfb25fY2FyZCxcbiAgICBjdnYsXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuXG4gICAgLy8gQmlsbGluZyBBZGRyZXNzXG4gICAgYWRkcmVzczEsXG4gICAgYWRkcmVzczIsXG4gICAgY2l0eSxcbiAgICBwb3N0YWxfY29kZSxcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgIGNvdW50cnlfY29kZSxcbiAgICBjb21wYW55LFxuICAgIGZpcnN0X25hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIHBob25lLFxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0sIGRvbmUsIGZhaWwpID0+IHtcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbnN0cnVtZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZShjcmVkaXRfY2FyZF9udW1iZXIpLFxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdmFsdWU6IGN2dixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcbiAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlLFxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkLFxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLnBhcmVudCgpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gJGNoZWNrZWQubWFwKChpbmRleCwgZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSkuZ2V0KCkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==