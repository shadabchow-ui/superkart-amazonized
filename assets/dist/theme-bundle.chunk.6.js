(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Auth = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Auth, _PageManager);
  function Auth(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__["createTranslationDictionary"])(context);
    _this.formCreateSelector = 'form[data-create-account-form]';
    _this.recaptcha = $('.g-recaptcha iframe[src]');
    return _this;
  }
  var _proto = Auth.prototype;
  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;
    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();
      if (_this2.loginValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;
    this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();
      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var _this$validationDicti = this.validationDictionary,
      enterPassword = _this$validationDicti.password,
      matchPassword = _this$validationDicti.password_match,
      invalidPassword = _this$validationDicti.invalid_password;
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]"),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    var errorTextMessages = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword);
    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements, errorTextMessages);
  };
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm, this.context);
    var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }
        if ($last) {
          createAccountValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setStateCountryValidation(createAccountValidator, field, _this4.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setEmailValidation(createAccountValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti2 = this.validationDictionary,
        enterPassword = _this$validationDicti2.password,
        matchPassword = _this$validationDicti2.password_match,
        invalidPassword = _this$validationDicti2.invalid_password;
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword));
    }
    $createAccountForm.on('submit', function (event) {
      createAccountValidator.performCheck();
      if (createAccountValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  }

  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */;
  _proto.onReady = function onReady() {
    if (!this.recaptcha.attr('title')) {
      this.recaptcha.attr('title', this.context.recaptchaTitle);
    }
    var $createAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])(this.formCreateSelector);
    var $loginForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.login-form');
    var $forgotPasswordForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.forgot-password-form');
    var $newPasswordForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.new-password-form'); // reset password

    // Injected via auth.html
    this.passwordRequirements = this.context.passwordRequirements;
    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }
    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }
    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }
    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };
  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJmb3JtQ3JlYXRlU2VsZWN0b3IiLCJyZWNhcHRjaGEiLCIkIiwiX3Byb3RvIiwicHJvdG90eXBlIiwicmVnaXN0ZXJMb2dpblZhbGlkYXRpb24iLCIkbG9naW5Gb3JtIiwiX3RoaXMyIiwibG9naW5Nb2RlbCIsImZvcm1zIiwibG9naW5WYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJ0YXAiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJ1c2VWYWxpZEVtYWlsIiwicGFzc3dvcmQiLCJlbnRlclBhc3MiLCJvbiIsImV2ZW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbiIsIiRmb3Jnb3RQYXNzd29yZEZvcm0iLCJfdGhpczMiLCJmb3Jnb3RQYXNzd29yZFZhbGlkYXRvciIsInJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwiZW50ZXJQYXNzd29yZCIsIm1hdGNoUGFzc3dvcmQiLCJwYXNzd29yZF9tYXRjaCIsImludmFsaWRQYXNzd29yZCIsImludmFsaWRfcGFzc3dvcmQiLCJuZXdQYXNzd29yZEZvcm0iLCJuZXdQYXNzd29yZFZhbGlkYXRvciIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsImVycm9yVGV4dE1lc3NhZ2VzIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiVmFsaWRhdG9ycyIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwicmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiJGNyZWF0ZUFjY291bnRGb3JtIiwiX3RoaXM0IiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsImNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkc3RhdGVFbGVtZW50IiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCIkcGFzc3dvcmRFbGVtZW50IiwiJHBhc3N3b3JkMkVsZW1lbnQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJyZW1vdmUiLCJpcyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkyIiwib25SZWFkeSIsImF0dHIiLCJyZWNhcHRjaGFUaXRsZSIsImNsYXNzaWZ5Rm9ybSIsIiRuZXdQYXNzd29yZEZvcm0iLCJsZW5ndGgiLCJQYWdlTWFuYWdlciIsImJ1aWxkRGF0ZVZhbGlkYXRpb24iLCIkZm9ybUZpZWxkIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsIm1pblNwbGl0Iiwic3BsaXQiLCJtYXhTcGxpdCIsIm1pbkRhdGUiLCJEYXRlIiwibWF4RGF0ZSIsInRyaWdnZXJlZEJ5IiwiZGF5IiwiTnVtYmVyIiwiZmluZCIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZXJyb3JUZXh0IiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsImVhY2giLCJpbmRleCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsImxhYmVsIiwibWluIiwibWF4IiwibmFtZSIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZGF0YSIsImZpZWxkVmFsaWRhdGlvbnMiLCJ0eXBlIiwiZGF0ZVZhbGlkYXRpb24iLCJwdXNoIiwicmVxdWlyZWQiLCJlbGVtZW50IiwiJGlucHV0RWxlbWVudCIsInRhZ05hbWUiLCJnZXQiLCJpbnB1dE5hbWUiLCJlbGVtZW50U2VsZWN0b3IiLCIkZm9ybSIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiX2NyZWF0ZVRyYW5zbGF0aW9uRGljIiwicmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IiwiaW5wdXQiLCJnZXRMYWJlbCIsIiRlbCIsImZpcnN0IiwicmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSIsImNvbmNhdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFu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cEQsSUFBUWdLLHdCQUF3QixHQUF3RWhLLE9BQU8sQ0FBdkdnSyx3QkFBd0I7SUFBRUMsZ0NBQWdDLEdBQXNDakssT0FBTyxDQUE3RWlLLGdDQUFnQztJQUFFQywrQkFBK0IsR0FBS2xLLE9BQU8sQ0FBM0NrSywrQkFBK0I7RUFDbkcsSUFBTUMsZ0JBQWdCLEdBQUdULHNCQUFzQixDQUFDTSx3QkFBd0IsRUFBRUMsZ0NBQWdDLEVBQUVDLCtCQUErQixDQUFDO0VBQzVJLElBQU1FLGFBQWEsR0FBR1osTUFBTSxDQUFDYSxNQUFNLENBQUNGLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNaUIsZUFBZSxHQUFHZCxNQUFNLENBQUNDLElBQUksQ0FBQ1UsZ0JBQWdCLENBQUNkLFlBQVksQ0FBQyxDQUFDLENBQUNrQixHQUFHLENBQUMsVUFBQUMsR0FBRztJQUFBLE9BQUlBLEdBQUcsQ0FBQ3hFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPSCxlQUFlLENBQUNJLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVILEdBQUcsRUFBRWIsQ0FBQyxFQUFLO0lBQzNDZ0IsR0FBRyxDQUFDSCxHQUFHLENBQUMsR0FBR0osYUFBYSxDQUFDVCxDQUFDLENBQUM7SUFDM0IsT0FBT2dCLEdBQUc7RUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDLEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7XG4gICAgY2xhc3NpZnlGb3JtLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0LFxuICAgIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG59IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLmZvcm1DcmVhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtY3JlYXRlLWFjY291bnQtZm9ybV0nO1xuICAgICAgICB0aGlzLnJlY2FwdGNoYSA9ICQoJy5nLXJlY2FwdGNoYSBpZnJhbWVbc3JjXScpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pIHtcbiAgICAgICAgY29uc3QgbG9naW5Nb2RlbCA9IGZvcm1zO1xuXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9lbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fcGFzc1wiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwucGFzc3dvcmQodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJQYXNzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGxvZ2luRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubG9naW5WYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKSB7XG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuZm9yZ290LXBhc3N3b3JkLWZvcm0gaW5wdXRbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRmb3Jnb3RQYXNzd29yZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkX3Bhc3N3b3JkOiBpbnZhbGlkUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0IG5ld1Bhc3N3b3JkRm9ybSA9ICcubmV3LXBhc3N3b3JkLWZvcm0nO1xuICAgICAgICBjb25zdCBuZXdQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZFwiXWApO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFtuYW1lPVwicGFzc3dvcmRfY29uZmlybVwiXWApO1xuICAgICAgICBjb25zdCBlcnJvclRleHRNZXNzYWdlcyA9IGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkUGFzc3dvcmQpO1xuICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkVmFsaWRhdG9yLFxuICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2VzLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkY3JlYXRlQWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUFjY291bnRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gaW5wdXRbdHlwZT0nc3VibWl0J11gLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J0VtYWlsQWRkcmVzcyddYDtcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nUGFzc3dvcmQnXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdDb25maXJtUGFzc3dvcmQnXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XG5cbiAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlQWNjb3VudFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkLCBpbnZhbGlkX3Bhc3N3b3JkOiBpbnZhbGlkUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG5cbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIGludmFsaWRQYXNzd29yZCksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgaXMgbWFkZSBpbiB0aGlzIGZ1bmN0aW9uIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQgYW5kIHB1bGxzIGJhY2sgdGhlIHN0YXRlcyBmb3IgY291bnRyeS5cbiAgICAgKi9cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJywgdGhpcy5jb250ZXh0LnJlY2FwdGNoYVRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRjcmVhdGVBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSh0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0ICRsb2dpbkZvcm0gPSBjbGFzc2lmeUZvcm0oJy5sb2dpbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRmb3Jnb3RQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybScpO1xuICAgICAgICBjb25zdCAkbmV3UGFzc3dvcmRGb3JtID0gY2xhc3NpZnlGb3JtKCcubmV3LXBhc3N3b3JkLWZvcm0nKTsgLy8gcmVzZXQgcGFzc3dvcmRcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgYXV0aC5odG1sXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgaWYgKCRsb2dpbkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRuZXdQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGZvcmdvdFBhc3N3b3JkRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGNyZWF0ZUFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICogQHBhcmFtIGVycm9yVGV4dCBwcm92aWRlcyBlcnJvciB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbih2YWxpZGF0aW9uLCAkZm9ybUZpZWxkLCBlcnJvclRleHQpIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIHNlbGVjdG9yLCBlcnJvclRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3Rvcikge1xuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFRoZSB2YWx1ZSBmb3IgJHt2YWxpZGF0aW9uLmxhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbn0gYW5kICR7dmFsaWRhdGlvbi5tYXh9LmA7XG4gICAgY29uc3QgbWluID0gTnVtYmVyKHZhbGlkYXRpb24ubWluKTtcbiAgICBjb25zdCBtYXggPSBOdW1iZXIodmFsaWRhdGlvbi5tYXgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiJHt2YWxpZGF0aW9uLm5hbWV9XCJdYCxcbiAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcblxuICAgICAgICAgICAgY2IobnVtYmVyVmFsID49IG1pbiAmJiBudW1iZXJWYWwgPD0gbWF4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIGJ1aWxkVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24odmFsaWRhdGlvbiwgJHZhbGlkYXRlYWJsZUVsZW1lbnQsIGVycm9yTWVzc2FnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICR2YWxpZGF0ZWFibGVFbGVtZW50LmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dEVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dEVsZW1lbnQuZ2V0KDApLnRhZ05hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSAkaW5wdXRFbGVtZW50LmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSAke3RhZ05hbWV9W25hbWU9XCIke2lucHV0TmFtZX1cIl1gO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnbnVtYmVyb25seScpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGVsZW1lbnRTZWxlY3RvciwgZXJyb3JNZXNzYWdlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZFZhbGlkYXRpb25zO1xufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgdmFsaWRhdGlvbiBtb2RlbCBmb3IgZHluYW1pYyBmb3Jtc1xuICogQHBhcmFtICRmb3JtXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgZm9yIGVycm9yIG1lc3NhZ2VzIG9uIHJlcXVpcmVkIGZpZWxkcyB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZm9ybSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IFtdO1xuICAgIGNvbnN0IHsgZmllbGRfbm90X2JsYW5rOiByZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQgfSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcblxuICAgICRmb3JtLmZpbmQoJ1tkYXRhLXZhbGlkYXRpb25dJykuZWFjaCgoaW5kZXgsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdldExhYmVsID0gJGVsID0+ICRlbC5maXJzdCgpLmRhdGEoJ3ZhbGlkYXRpb24nKS5sYWJlbDtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSA9IGdldExhYmVsKCQoaW5wdXQpKSArIHJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dDtcblxuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCksIHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=