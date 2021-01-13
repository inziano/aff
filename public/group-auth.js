(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      disabled: true,
      confirmPassword: null,
      registerForm: {
        email: '',
        password: null,
        username: ''
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['current_user'])),
  methods: {
    // validate password match
    validatePasswordMatch: function validatePasswordMatch(event) {
      // Check if passwords match
      this.registerForm.password === event ? this.disabled = false : this.disabled = true;
    },
    onSubmit: function onSubmit() {
      var _this = this;

      this.$store.dispatch('AuthModule/register', this.registerForm).then(function () {
        _this.$Notice.success({
          title: 'Succesfully registered and Logged in'
        });

        var id = _this.current_user.id; // handle redirect

        setTimeout(function () {
          return _this.$router.push({
            name: 'profile',
            params: {
              id: id
            }
          });
        }, 300);
      })["catch"](function () {
        _this.$Notice.error({
          title: 'Failed to register user.'
        }); // Incase user was logged in before


        _this.$store.dispatch('logout');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ResetPasswordComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ResetPasswordComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      resetForm: {
        email: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.loading = true; // Dispatch 

      this.$store.dispatch('AuthModule/resetPassword', this.resetForm).then(function () {
        // response object
        _this.$Notice.info({
          title: 'Email Sent'
        }); // redirect to dashboard


        setTimeout(function () {
          return _this.$router.push({
            name: 'verify'
          });
        }, 1000);
      })["catch"](function () {
        // error object
        _this.$Notice.error({
          title: 'Could not send email'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePasswordComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdatePasswordComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      disabled: true,
      loading: false,
      confirmPassword: null,
      updateForm: {
        password: ''
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['reset_user'])),
  methods: {
    // validate password match
    validatePasswordMatch: function validatePasswordMatch(event) {
      // Check if passwords match
      this.updateForm.password === event ? this.disabled = false : this.disabled = true;
    },
    onSubmit: function onSubmit() {
      var _this = this;

      this.loading = true; // 

      var vals = {
        id: this.reset_user.id,
        data: this.updateForm
      }; // Dispatch 

      this.$store.dispatch('UserModule/update', vals).then(function () {
        // response object
        _this.$Notice.info({
          title: 'Password Updated'
        }); // redirect to dashboard


        setTimeout(function () {
          return _this.$router.push({
            name: 'login'
          });
        }, 1000);
      })["catch"](function () {
        // error object
        _this.$Notice.error({
          title: 'Password not updated'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VerifyEmailComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VerifyEmailComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      confirmForm: {
        token: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.loading = true; // Dispatch 

      this.$store.dispatch('AuthModule/verifyAccount', this.confirmForm).then(function () {
        // response object
        _this.$Notice.info({
          title: 'Confirmation code valid'
        }); // redirect to dashboard


        setTimeout(function () {
          return _this.$router.push({
            name: 'updatepassword'
          });
        }, 1000);
      })["catch"](function () {
        // error object
        _this.$Notice.error({
          title: 'Invalid code'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex w-full h-screen pt-20 bg-gray-100" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "w-1/3 mr-auto p-10 bg-white",
        staticStyle: { height: "80%" }
      },
      [
        _c(
          "Form",
          {
            attrs: { model: _vm.registerForm, "label-position": "top" },
            on: { submit: _vm.onSubmit }
          },
          [
            _c("h5", { staticClass: "text-base font-normal leading-loose" }, [
              _vm._v(
                "\n                Register to be an AFF member\n            "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Username" } },
                      [
                        _c("Input", {
                          attrs: { size: "large", placeholder: "Username" },
                          model: {
                            value: _vm.registerForm.username,
                            callback: function($$v) {
                              _vm.$set(_vm.registerForm, "username", $$v)
                            },
                            expression: "registerForm.username"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Email" } },
                      [
                        _c("Input", {
                          attrs: {
                            size: "large",
                            placeholder: "email@address.org"
                          },
                          model: {
                            value: _vm.registerForm.email,
                            callback: function($$v) {
                              _vm.$set(_vm.registerForm, "email", $$v)
                            },
                            expression: "registerForm.email"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Password" } },
                      [
                        _c("Input", {
                          attrs: {
                            size: "large",
                            placeholder: "password",
                            type: "password"
                          },
                          model: {
                            value: _vm.registerForm.password,
                            callback: function($$v) {
                              _vm.$set(_vm.registerForm, "password", $$v)
                            },
                            expression: "registerForm.password"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.registerForm.password
              ? _c(
                  "Row",
                  { attrs: { gutter: 16 } },
                  [
                    _c(
                      "Col",
                      { attrs: { span: "24" } },
                      [
                        _c(
                          "FormItem",
                          { attrs: { label: "Confirm Password" } },
                          [
                            _c("Input", {
                              attrs: {
                                size: "large",
                                placeholder: "confirm password",
                                type: "password"
                              },
                              on: { input: _vm.validatePasswordMatch },
                              model: {
                                value: _vm.confirmPassword,
                                callback: function($$v) {
                                  _vm.confirmPassword = $$v
                                },
                                expression: "confirmPassword"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "ButtonGroup",
                      [
                        _c(
                          "Button",
                          { attrs: { size: "large" } },
                          [
                            _c("Icon", { attrs: { type: "ios-cancel" } }),
                            _vm._v(
                              "\n                            Cancel\n                        "
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Button",
                          {
                            attrs: {
                              size: "large",
                              type: "primary",
                              disabled: _vm.disabled
                            },
                            on: { click: _vm.onSubmit }
                          },
                          [
                            _c("Icon", { attrs: { type: "ios-checkmark" } }),
                            _vm._v(
                              "\n                            Login\n                        "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 ml-auto" }, [
      _c("div", {
        staticClass: "bg-green-300 w-full bg-cover",
        staticStyle: {
          height: "80%",
          "background-image": "url('/images/landing.jpg')"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ResetPasswordComponent.vue?vue&type=template&id=277b31be&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ResetPasswordComponent.vue?vue&type=template&id=277b31be& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex w-full h-full pt-20 bg-gray-100" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "w-1/3 mr-auto p-10 bg-white",
        staticStyle: { height: "80%" }
      },
      [
        _c(
          "Form",
          {
            attrs: { model: _vm.resetForm, "label-position": "top" },
            on: { submit: _vm.onSubmit }
          },
          [
            _c("h5", { staticClass: "text-base font-normal leading-loose" }, [
              _vm._v("\n                  Reset your password\n              ")
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "pt-2 text-xs tracking-wide" },
              [
                _vm._v(" Dont have an account "),
                _c(
                  "router-link",
                  {
                    staticClass: "text-xs font-semibold text-gray-600",
                    attrs: { to: "/register" }
                  },
                  [_vm._v("Register")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Email" } },
                      [
                        _c("Input", {
                          attrs: {
                            size: "large",
                            placeholder: "email@address.org"
                          },
                          model: {
                            value: _vm.resetForm.email,
                            callback: function($$v) {
                              _vm.$set(_vm.resetForm, "email", $$v)
                            },
                            expression: "resetForm.email"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "ButtonGroup",
                      [
                        _c(
                          "Button",
                          { attrs: { size: "large" } },
                          [
                            _c("Icon", { attrs: { type: "ios-cancel" } }),
                            _vm._v(
                              "\n                              Cancel\n                          "
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Button",
                          {
                            attrs: { size: "large", type: "primary" },
                            on: { click: _vm.onSubmit }
                          },
                          [
                            _c("Icon", { attrs: { type: "ios-checkmark" } }),
                            _vm._v(
                              "\n                              Send Reset Email\n                          "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 ml-auto" }, [
      _c("div", {
        staticClass: "bg-green-300 w-full bg-cover",
        staticStyle: {
          height: "80%",
          "background-image": "url('/images/landing.jpg')"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePasswordComponent.vue?vue&type=template&id=37beadbe&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdatePasswordComponent.vue?vue&type=template&id=37beadbe& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex w-full h-full pt-20 bg-gray-100" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "w-1/3 mr-auto p-10 bg-white",
        staticStyle: { height: "80%" }
      },
      [
        _c(
          "Form",
          {
            attrs: { model: _vm.updateForm, "label-position": "top" },
            on: { submit: _vm.onSubmit }
          },
          [
            _c("h5", { staticClass: "text-base font-normal leading-loose" }, [
              _vm._v("\n                  Reset Password\n              ")
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "pt-2 text-xs tracking-wide" },
              [
                _vm._v(" Dont have an account "),
                _c(
                  "router-link",
                  {
                    staticClass: "text-xs font-semibold text-gray-600",
                    attrs: { to: "/register" }
                  },
                  [_vm._v("Register")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Password" } },
                      [
                        _c("Input", {
                          attrs: {
                            size: "large",
                            placeholder: "password",
                            type: "password"
                          },
                          model: {
                            value: _vm.updateForm.password,
                            callback: function($$v) {
                              _vm.$set(_vm.updateForm, "password", $$v)
                            },
                            expression: "updateForm.password"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.updateForm.password
              ? _c(
                  "Row",
                  { attrs: { gutter: 16 } },
                  [
                    _c(
                      "Col",
                      { attrs: { span: "24" } },
                      [
                        _c(
                          "FormItem",
                          { attrs: { label: "Confirm Password" } },
                          [
                            _c("Input", {
                              attrs: {
                                size: "large",
                                placeholder: "confirm password",
                                type: "password"
                              },
                              on: { input: _vm.validatePasswordMatch },
                              model: {
                                value: _vm.confirmPassword,
                                callback: function($$v) {
                                  _vm.confirmPassword = $$v
                                },
                                expression: "confirmPassword"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "ButtonGroup",
                      [
                        _c(
                          "Button",
                          { attrs: { size: "large" } },
                          [
                            _c("Icon", { attrs: { type: "ios-cancel" } }),
                            _vm._v(
                              "\n                              Cancel\n                          "
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Button",
                          {
                            attrs: {
                              size: "large",
                              type: "primary",
                              disabled: _vm.disabled
                            },
                            on: { click: _vm.onSubmit }
                          },
                          [
                            _c("Icon", { attrs: { type: "ios-checkmark" } }),
                            _vm._v(
                              "\n                              Update Password\n                          "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 ml-auto" }, [
      _c("div", {
        staticClass: "bg-green-300 w-full bg-cover",
        staticStyle: {
          height: "80%",
          "background-image": "url('/images/landing.jpg')"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VerifyEmailComponent.vue?vue&type=template&id=01de3cf6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VerifyEmailComponent.vue?vue&type=template&id=01de3cf6& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex w-full h-full pt-20 bg-gray-100" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "w-1/3 mr-auto p-10 bg-white",
        staticStyle: { height: "80%" }
      },
      [
        _c(
          "Form",
          {
            attrs: { model: _vm.confirmForm, "label-position": "top" },
            on: { submit: _vm.onSubmit }
          },
          [
            _c("h5", { staticClass: "text-base font-normal leading-loose" }, [
              _vm._v("\n                  Verify Account\n              ")
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "pt-2 text-xs tracking-wide" },
              [
                _vm._v(" Dont have an account "),
                _c(
                  "router-link",
                  {
                    staticClass: "text-xs font-semibold text-gray-600",
                    attrs: { to: "/register" }
                  },
                  [_vm._v("Register")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Verification Code" } },
                      [
                        _c("Input", {
                          attrs: {
                            size: "large",
                            placeholder: "Enter code here"
                          },
                          model: {
                            value: _vm.confirmForm.token,
                            callback: function($$v) {
                              _vm.$set(_vm.confirmForm, "token", $$v)
                            },
                            expression: "confirmForm.token"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "Row",
              { attrs: { gutter: 16 } },
              [
                _c(
                  "Col",
                  { attrs: { span: "24" } },
                  [
                    _c(
                      "ButtonGroup",
                      [
                        _c(
                          "Button",
                          { attrs: { size: "large" } },
                          [
                            _c("Icon", { attrs: { type: "ios-cancel" } }),
                            _vm._v(
                              "\n                              Cancel\n                          "
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Button",
                          {
                            attrs: { size: "large", type: "primary" },
                            on: { click: _vm.onSubmit }
                          },
                          [
                            _c("Icon", { attrs: { type: "ios-checkmark" } }),
                            _vm._v(
                              "\n                              Verify Email\n                          "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 ml-auto" }, [
      _c("div", {
        staticClass: "bg-green-300 w-full bg-cover",
        staticStyle: {
          height: "80%",
          "background-image": "url('/images/landing.jpg')"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/RegisterComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/RegisterComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=template&id=51f045bf& */ "./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&");
/* harmony import */ var _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegisterComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=template&id=51f045bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterComponent.vue?vue&type=template&id=51f045bf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_51f045bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ResetPasswordComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/ResetPasswordComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPasswordComponent_vue_vue_type_template_id_277b31be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordComponent.vue?vue&type=template&id=277b31be& */ "./resources/js/components/ResetPasswordComponent.vue?vue&type=template&id=277b31be&");
/* harmony import */ var _ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ResetPasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPasswordComponent_vue_vue_type_template_id_277b31be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPasswordComponent_vue_vue_type_template_id_277b31be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ResetPasswordComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ResetPasswordComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ResetPasswordComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ResetPasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ResetPasswordComponent.vue?vue&type=template&id=277b31be&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ResetPasswordComponent.vue?vue&type=template&id=277b31be& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_template_id_277b31be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordComponent.vue?vue&type=template&id=277b31be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ResetPasswordComponent.vue?vue&type=template&id=277b31be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_template_id_277b31be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_template_id_277b31be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UpdatePasswordComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/UpdatePasswordComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdatePasswordComponent_vue_vue_type_template_id_37beadbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatePasswordComponent.vue?vue&type=template&id=37beadbe& */ "./resources/js/components/UpdatePasswordComponent.vue?vue&type=template&id=37beadbe&");
/* harmony import */ var _UpdatePasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatePasswordComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/UpdatePasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdatePasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdatePasswordComponent_vue_vue_type_template_id_37beadbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdatePasswordComponent_vue_vue_type_template_id_37beadbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpdatePasswordComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpdatePasswordComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/UpdatePasswordComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdatePasswordComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpdatePasswordComponent.vue?vue&type=template&id=37beadbe&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/UpdatePasswordComponent.vue?vue&type=template&id=37beadbe& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordComponent_vue_vue_type_template_id_37beadbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdatePasswordComponent.vue?vue&type=template&id=37beadbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdatePasswordComponent.vue?vue&type=template&id=37beadbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordComponent_vue_vue_type_template_id_37beadbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordComponent_vue_vue_type_template_id_37beadbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VerifyEmailComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/VerifyEmailComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerifyEmailComponent_vue_vue_type_template_id_01de3cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmailComponent.vue?vue&type=template&id=01de3cf6& */ "./resources/js/components/VerifyEmailComponent.vue?vue&type=template&id=01de3cf6&");
/* harmony import */ var _VerifyEmailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmailComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/VerifyEmailComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerifyEmailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerifyEmailComponent_vue_vue_type_template_id_01de3cf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerifyEmailComponent_vue_vue_type_template_id_01de3cf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VerifyEmailComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VerifyEmailComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/VerifyEmailComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VerifyEmailComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VerifyEmailComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VerifyEmailComponent.vue?vue&type=template&id=01de3cf6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/VerifyEmailComponent.vue?vue&type=template&id=01de3cf6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailComponent_vue_vue_type_template_id_01de3cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VerifyEmailComponent.vue?vue&type=template&id=01de3cf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VerifyEmailComponent.vue?vue&type=template&id=01de3cf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailComponent_vue_vue_type_template_id_01de3cf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailComponent_vue_vue_type_template_id_01de3cf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);