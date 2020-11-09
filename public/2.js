(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MessageComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MessageComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
      list: false,
      messageModal: false,
      messages: [],
      messageData: '',
      messageForm: {
        subject: '',
        body: '',
        recepient: []
      },
      loading: false,
      memberList: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['current_user']), {
    year: function year() {
      var year = new Date().getFullYear();
      return Array.from({
        length: year - 1960
      }, function (value, index) {
        return 1961 + index;
      }).reverse();
    }
  }),
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.all([axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/message'), axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/user')]).then(axios__WEBPACK_IMPORTED_MODULE_0___default.a.spread(function (message, user) {
      var that = _this;
      _this.messages = message.data.data.filter(function (resp) {
        return resp.recepient.includes(that.current_user.id);
      }); // this.messages = message.data.data

      _this.memberList = user.data.data;
      console.log(_this.messages);
    }))["catch"](function (error) {
      console.log(error);

      _this.$Notice.info({
        title: 'Messages',
        desc: 'No messages currently'
      });
    });
  },
  methods: {
    onSearch: function onSearch() {
      var _this2 = this;

      // 
      var term = this.searchTerm; // Search

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'get',
        url: 'api/message?search=' + term
      }).then(function (response) {
        var that = _this2;
        _this2.messages = message.data.data.filter(function (resp) {
          return resp.recepient.includes(that.current_user.id);
        });
      })["catch"](function (error) {
        _this2.$Notice.error({
          title: 'Nothing found'
        });
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      // 
      var data = this.messageForm;
      data['user_id'] = this.current_user.id;
      this.loading = true; // Push message

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'post',
        url: 'api/message',
        data: data
      }).then(function (response) {
        // Notice
        _this3.$Notice.success({
          title: 'Message Sent',
          desc: 'Your message has been delivered'
        });

        _this3.loading = false;
        _this3.messageModal = false;
      })["catch"](function (error) {
        _this3.loading = false;

        _this3.$Notice.error({
          title: 'Message not sent',
          desc: 'Your message could not be delivered'
        });
      });
    },
    // Change view
    changeView: function changeView() {
      if (this.list === true) {
        this.list = false;
      } else {
        this.list = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MessageComponent.vue?vue&type=template&id=3f20c7be&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MessageComponent.vue?vue&type=template&id=3f20c7be& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "w-full h-full" },
    [
      _c(
        "Modal",
        {
          model: {
            value: _vm.messageModal,
            callback: function($$v) {
              _vm.messageModal = $$v
            },
            expression: "messageModal"
          }
        },
        [
          _c(
            "Form",
            {
              staticClass: "w-full",
              attrs: { model: _vm.messageForm, "label-position": "top" }
            },
            [
              _c(
                "h4",
                {
                  staticClass:
                    "text-lg text-semibold subpixel-antialiased tracking-wider"
                },
                [_vm._v("\n                Send Message\n            ")]
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
                        { attrs: { label: "Recipient" } },
                        [
                          _c(
                            "Select",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.messageForm.recepient,
                                callback: function($$v) {
                                  _vm.$set(_vm.messageForm, "recepient", $$v)
                                },
                                expression: "messageForm.recepient"
                              }
                            },
                            _vm._l(_vm.memberList, function(member) {
                              return _c(
                                "Option",
                                { key: member.id, attrs: { value: member.id } },
                                [_vm._v(" " + _vm._s(member.username) + " ")]
                              )
                            }),
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
                        { attrs: { label: "Subject" } },
                        [
                          _c("Input", {
                            attrs: { type: "text", placeholder: "Subject" },
                            model: {
                              value: _vm.messageForm.subject,
                              callback: function($$v) {
                                _vm.$set(_vm.messageForm, "subject", $$v)
                              },
                              expression: "messageForm.subject"
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
                        { attrs: { label: "Message" } },
                        [
                          _c("Input", {
                            attrs: {
                              type: "textarea",
                              placeholder: "Message text"
                            },
                            model: {
                              value: _vm.messageForm.body,
                              callback: function($$v) {
                                _vm.$set(_vm.messageForm, "body", $$v)
                              },
                              expression: "messageForm.body"
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
                            {
                              on: {
                                click: function($event) {
                                  _vm.messageModal = false
                                }
                              }
                            },
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
                              attrs: { type: "primary", loading: _vm.loading },
                              on: { click: _vm.onSubmit }
                            },
                            [
                              !_vm.loading
                                ? _c(
                                    "span",
                                    [
                                      _vm._v(
                                        " \n                                Send Message\n                                "
                                      ),
                                      _c("Icon", {
                                        attrs: { type: "ios-checkmark" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.loading
                                ? _c("span", [
                                    _vm._v(
                                      "\n                                Sending...\n                            "
                                    )
                                  ])
                                : _vm._e()
                            ]
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
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-full h-full p-5" }, [
        _c("div", { staticClass: "w-full flex bg-white" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "w-5/6 flex content-center" }, [
            _c(
              "div",
              { staticClass: "w-10/24 p-2 ml-3" },
              [
                _c("Icon", {
                  attrs: { type: "ios-search-outline", size: "18" }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchTerm,
                      expression: "searchTerm"
                    }
                  ],
                  staticClass:
                    "appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white",
                  attrs: {
                    prefix: "ios-search-outline",
                    placeholder: "Search",
                    type: "text"
                  },
                  domProps: { value: _vm.searchTerm },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.onSearch($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchTerm = $event.target.value
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex-grow content-center h-full p-2" },
              [
                _c(
                  "Dropdown",
                  { staticClass: "ml-4", attrs: { trigger: "click" } },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "font-sans tracking-wider text-gray-900 hover:text-gray-900",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _c("Icon", {
                          attrs: { type: "ios-calendar-outline", size: "20" }
                        }),
                        _vm._v(
                          "\n                            Year\n                        "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "DropdownMenu",
                      {
                        staticStyle: {
                          height: "100px",
                          "overflow-y": "scroll"
                        },
                        attrs: { slot: "list" },
                        slot: "list"
                      },
                      _vm._l(_vm.year, function(yr) {
                        return _c("DropdownItem", { key: yr }, [
                          _vm._v(_vm._s(yr))
                        ])
                      }),
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
              "div",
              { staticClass: "w-2/24 content-center h-full p-2" },
              [
                _c(
                  "Button",
                  {
                    attrs: { icon: "ios-add" },
                    on: {
                      click: function($event) {
                        _vm.messageModal = true
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        New\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex flex-wrap bg-white p-2 flex " }, [
          _c(
            "div",
            {
              staticClass: "lg:flex-grow items-center  mr-4 flex content-center"
            },
            [
              _c(
                "li",
                {
                  staticClass: "list-none h-10 content-center",
                  on: {
                    click: function($event) {
                      return _vm.changeView()
                    }
                  }
                },
                [
                  _c(
                    "span",
                    {},
                    [
                      !_vm.list
                        ? _c("Icon", {
                            attrs: { type: "ios-apps-outline", size: "32" }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.list
                        ? _c("Icon", {
                            attrs: { type: "ios-list", size: "32" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _vm.messages.length
          ? _c("div", { staticClass: "w-full h-full" }, [
              _vm._v(
                "\n            " + _vm._s(_vm.messages) + "\n            "
              ),
              !_vm.list
                ? _c(
                    "div",
                    {
                      staticClass: "w-full flex p-2 bg-gray-100 justify-center"
                    },
                    _vm._l(_vm.messages, function(message) {
                      return _c(
                        "div",
                        {
                          key: message.title,
                          staticClass:
                            "w-1/5 overflow-hidden shadow-lg p-2 px-5 h-48 bg-white m-2 rounded"
                        },
                        [
                          _c("div", { staticClass: "w-full mb-3 " }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hairline text-xs tracking-widest text-gray-500"
                              },
                              [_c("Badge", { attrs: { status: "success" } })],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-2" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-medium tracking-wide text-lg antialiased"
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(message.subject) +
                                    "\n                        "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-2" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hairline text-sm tracking-widest capitalize text-gray-700"
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(message.body) +
                                    "\n                        "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mt-5 mb-0" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hairline text-xs tracking-widest capitalize text-gray-500"
                              },
                              [
                                _vm._v(
                                  "\n                            Posted: "
                                ),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "font-thin text-xs tracking-wide capitalize text-gray-400"
                                  },
                                  [_vm._v(" " + _vm._s(message.created_at))]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mt-5 " }, [
                            _c(
                              "li",
                              { staticClass: "list-none" },
                              [
                                _c("Avatar", {
                                  attrs: { size: "small", icon: "ios-person" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "ml-1 font-sans font-thin text-gray-600"
                                  },
                                  [_vm._v(_vm._s(message.user.username))]
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.list
                ? _c(
                    "div",
                    { staticClass: "w-full p-2 bg-gray-100" },
                    [
                      _c(
                        "List",
                        _vm._l(_vm.messages, function(msg) {
                          return _c(
                            "ListItem",
                            { key: msg.id },
                            [
                              _c("ListItemMeta", {
                                attrs: {
                                  title: msg.subject,
                                  description: msg.body
                                }
                              })
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ])
          : _c("div", { staticClass: "w-full h-full" }, [_vm._m(2)])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/6 h-10 border-r border-gray-400" }, [
      _c(
        "p",
        { staticClass: "font-medium font-serif text-3xl tracking-wide" },
        [_vm._v("\n                    Messages\n                ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-auto flex content-center" }, [
      _c("div", { staticClass: "m-2 flex flex-wrap" }, [
        _c(
          "p",
          {
            staticClass:
              "text-center w-full font-sans text-2xl font-semibold tracking-widest"
          },
          [_vm._v("\n                        0\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500"
          },
          [_vm._v("\n                       Messages\n                    ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mx-auto w-1/3 p-5 m-3 content-center" }, [
      _c("img", {
        staticClass: "object-center object-contain",
        attrs: { src: "/images/empty.svg" }
      }),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "text-xl font-medium font-sans w-full text-center pt-5"
        },
        [_vm._v(" No Messages Found")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/MessageComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/MessageComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageComponent_vue_vue_type_template_id_3f20c7be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageComponent.vue?vue&type=template&id=3f20c7be& */ "./resources/js/components/MessageComponent.vue?vue&type=template&id=3f20c7be&");
/* harmony import */ var _MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/MessageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageComponent_vue_vue_type_template_id_3f20c7be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageComponent_vue_vue_type_template_id_3f20c7be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MessageComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MessageComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MessageComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MessageComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MessageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MessageComponent.vue?vue&type=template&id=3f20c7be&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/MessageComponent.vue?vue&type=template&id=3f20c7be& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_template_id_3f20c7be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MessageComponent.vue?vue&type=template&id=3f20c7be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MessageComponent.vue?vue&type=template&id=3f20c7be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_template_id_3f20c7be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_template_id_3f20c7be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);