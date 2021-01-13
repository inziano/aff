(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery/GalleryComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GalleryFormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryFormComponent */ "./resources/js/components/Gallery/GalleryFormComponent.vue");
/* harmony import */ var _GalleryListItemComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryListItemComponent */ "./resources/js/components/Gallery/GalleryListItemComponent.vue");
/* harmony import */ var _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widgets/PaginationComponent */ "./resources/js/components/Widgets/PaginationComponent.vue");
/* harmony import */ var _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widgets/SearchComponent */ "./resources/js/components/Widgets/SearchComponent.vue");
/* harmony import */ var _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Widgets/FilterComponent */ "./resources/js/components/Widgets/FilterComponent.vue");
/* harmony import */ var _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widgets/StatsComponent */ "./resources/js/components/Widgets/StatsComponent.vue");
/* harmony import */ var _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Widgets/ModalbtnComponent */ "./resources/js/components/Widgets/ModalbtnComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'gallery-form': _GalleryFormComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    'gallery-list': _GalleryListItemComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search': _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    'filter-a': _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    'stats': _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    'modal-btn': _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  created: function created() {
    // confirm route has params
    if (!Object.keys(this.$route.params).length == 0) {
      // call filter method
      var filters = {
        criteria: 'owner',
        term: this.$route.params.id
      };
      this.filter(filters);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('GalleryModule', ['images', 'meta', 'links']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('AuthModule', ['currentUser'])),
  data: function data() {
    return {
      list: false,
      galleryModal: false,
      moduleName: 'GalleryModule',
      admin: false,
      searchTerm: '',
      filtered: false,
      typeA: 'year',
      typeB: 'location',
      statsA: 'events'
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])('GalleryModule', ['fetch', 'filter']), {
    changeView: function changeView() {
      if (this.list === true) {
        this.list = false;
      } else {
        this.list = true;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      galleryForm: {
        title: '',
        album: '',
        date: '',
        tags: []
      },
      image: null,
      loading: false
    };
  },
  computed: {
    showImage: function showImage() {
      if (this.image !== null) {
        return URL.createObjectURL(this.image);
      }
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this.loading
      this.loading = true; // data

      var data = this.galleryForm;
      var formdata = new FormData(); // loop 

      Object.keys(data).forEach(function (key) {
        return formdata.append(key, data[key]);
      }); // Append files

      formdata.append('image', this.image); // Push

      axios({
        method: 'post',
        url: 'api/gallery',
        data: formdata
      }).then(function (response) {
        // show notice
        _this.$Notice.success({
          title: 'Success',
          desc: 'Your image has been succesfully uploaded'
        }); // loading


        _this.loading = false;
      })["catch"](function (error) {
        // Loading
        _this.loading = false; // notice

        _this.$Notice.error({
          title: 'Error',
          desc: 'Error in uploading your image'
        });
      });
    },
    imageUpload: function imageUpload(file) {
      this.image = file;
      console.log(file.File);
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['image', 'user'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('GalleryModule', ['isAdmin']), {
    path: function path() {
      return this.image.img;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryComponent.vue?vue&type=template&id=1b1e0a73&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery/GalleryComponent.vue?vue&type=template&id=1b1e0a73& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full h-full" }, [
    _c(
      "div",
      { staticClass: "w-full h-full p-5" },
      [
        _c(
          "Modal",
          {
            model: {
              value: _vm.galleryModal,
              callback: function($$v) {
                _vm.galleryModal = $$v
              },
              expression: "galleryModal"
            }
          },
          [
            _c("gallery-form"),
            _vm._v(" "),
            _c("div", { attrs: { slot: "footer" }, slot: "footer" })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex bg-white" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-5/6 flex content-center" },
            [
              _c("search", {
                staticClass: "w-10/24",
                attrs: { "module-name": _vm.moduleName },
                on: {
                  "items-filtered": function($event) {
                    _vm.filtered = true
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex-grow content-center h-full p-2" },
                [
                  _c(
                    "filter-a",
                    {
                      staticClass: "ml-4",
                      attrs: {
                        "module-name": _vm.moduleName,
                        "filter-type": _vm.typeA
                      },
                      on: {
                        "items-filtered": function($event) {
                          _vm.filtered = true
                        }
                      }
                    },
                    [
                      _c("Icon", {
                        attrs: { type: "ios-calendar-outline", size: "16" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "filter-a",
                    {
                      staticClass: "ml-4",
                      attrs: {
                        "module-name": _vm.moduleName,
                        "filter-type": _vm.typeB
                      },
                      on: {
                        "items-filtered": function($event) {
                          _vm.filtered = true
                        }
                      }
                    },
                    [
                      _c("Icon", {
                        attrs: { type: "ios-pin-outline", size: "16" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.filtered
                    ? _c(
                        "a",
                        {
                          staticClass:
                            "ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900",
                          attrs: { size: "small", type: "text" },
                          on: {
                            click: function($event) {
                              return _vm.clearFilters()
                            }
                          }
                        },
                        [
                          _c("Icon", {
                            attrs: { type: "ios-close", size: "20" }
                          }),
                          _vm._v(
                            "\n                        Clear Filters\n                    "
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-2/24 content-center h-full p-2" },
                [
                  _c(
                    "modal-btn",
                    {
                      on: {
                        "modalbtn-clicked": function($event) {
                          _vm.galleryModal = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        New Image\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
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
        _vm.images
          ? _c("div", { staticClass: "w-full" }, [
              !_vm.list
                ? _c(
                    "div",
                    {
                      staticClass:
                        "w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center"
                    },
                    _vm._l(_vm.images, function(image) {
                      return _c("gallery-list", {
                        key: image.id,
                        attrs: { image: image }
                      })
                    }),
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full m-2 p-2 flex justify-center" },
                [
                  _c("pagination", {
                    attrs: {
                      curr: _vm.meta.curr,
                      total: _vm.meta.total,
                      size: _vm.meta.per_page,
                      "module-name": _vm.moduleName
                    }
                  })
                ],
                1
              )
            ])
          : _c("div", { staticClass: "w-full" }, [_vm._m(2)])
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
    return _c("div", { staticClass: "w-1/6 h-10 border-r border-gray-400" }, [
      _c(
        "p",
        { staticClass: "font-medium font-serif text-3xl tracking-wide" },
        [_vm._v("\n                    Gallery\n                ")]
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
          [_vm._v("\n                        Images\n                    ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full h-full" }, [
      _c("div", { staticClass: "mx-auto w-1/3 p-5 m-3 content-center" }, [
        _c("img", {
          staticClass: "object-center object-contain",
          attrs: { src: "/images/camera.svg" }
        }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "text-xl font-medium font-sans w-full text-center pt-5"
          },
          [_vm._v(" No Images Found")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=template&id=1a932d0f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=template&id=1a932d0f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "Form",
    {
      staticClass: "w-full",
      attrs: { model: _vm.galleryForm, "label-position": "top" }
    },
    [
      _c(
        "h4",
        {
          staticClass:
            "text-lg text-semibold subpixel-antialiased tracking-wider"
        },
        [_vm._v("\n        Upload Image\n    ")]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "Row",
        { attrs: { gutter: 16 } },
        [
          this.image !== null
            ? _c("Col", { staticClass: "mb-2", attrs: { span: "24" } }, [
                _c("div", [_c("img", { attrs: { src: _vm.showImage } })])
              ])
            : _c(
                "Col",
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Image" } },
                    [
                      _c(
                        "Upload",
                        {
                          attrs: {
                            type: "drag",
                            action: "",
                            "before-upload": _vm.imageUpload,
                            format: ["png", "jpeg"]
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { padding: "20px 0" } },
                            [
                              _c("Icon", {
                                staticStyle: { color: "#3399ff" },
                                attrs: { type: "ios-cloud-upload", size: "52" }
                              }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v("Click or drag files here to upload")
                              ])
                            ],
                            1
                          )
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
      ),
      _vm._v(" "),
      _c(
        "Row",
        { attrs: { gutter: 16 } },
        [
          _c(
            "Col",
            { attrs: { span: "22" } },
            [
              _c(
                "FormItem",
                { attrs: { label: "Title" } },
                [
                  _c("Input", {
                    attrs: {
                      size: "large",
                      type: "text",
                      placeholder: "Image Title"
                    },
                    model: {
                      value: _vm.galleryForm.title,
                      callback: function($$v) {
                        _vm.$set(_vm.galleryForm, "title", $$v)
                      },
                      expression: "galleryForm.title"
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
            { attrs: { span: "12" } },
            [
              _c(
                "FormItem",
                { attrs: { label: "tags" } },
                [
                  _c("Input", {
                    attrs: {
                      size: "large",
                      type: "text",
                      placeholder: "Image tags"
                    },
                    model: {
                      value: _vm.galleryForm.tags,
                      callback: function($$v) {
                        _vm.$set(_vm.galleryForm, "tags", $$v)
                      },
                      expression: "galleryForm.tags"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { attrs: { span: "12" } },
            [
              _c(
                "FormItem",
                { attrs: { label: "Date" } },
                [
                  _c(
                    "Col",
                    { attrs: { span: "12" } },
                    [
                      _c("DatePicker", {
                        staticStyle: { width: "200px" },
                        attrs: {
                          type: "date",
                          format: "yyyy/MM/DD",
                          placeholder: "Select date"
                        },
                        model: {
                          value: _vm.galleryForm.date,
                          callback: function($$v) {
                            _vm.$set(_vm.galleryForm, "date", $$v)
                          },
                          expression: "galleryForm.date"
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
                          _vm.galleryModal = false
                        }
                      }
                    },
                    [
                      _c("Icon", { attrs: { type: "ios-cancel" } }),
                      _vm._v("\n                    Cancel\n                ")
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
                                " \n                        Submit\n                        "
                              ),
                              _c("Icon", { attrs: { type: "ios-checkmark" } })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.loading
                        ? _c("span", [
                            _vm._v(
                              "\n                        Submitting...\n                    "
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=template&id=14627722&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=template&id=14627722& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bg-gray-100 p-4" }, [
    _c("div", { staticClass: "bg-white border rounded-sm max-w-md" }, [
      _c("img", { attrs: { src: _vm.path, alt: "" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center justify-between mx-4 mt-3 mb-2" },
        [
          _c("div", { staticClass: "flex items-center px-4 py-3" }, [
            _c("img", {
              staticClass: "h-8 w-8 rounded-full",
              attrs: { src: _vm.path, alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-3 " }, [
              _c(
                "span",
                {
                  staticClass:
                    "text-sm font-semibold antialiased block leading-tight"
                },
                [_vm._v(_vm._s(_vm.image.title))]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "text-gray-600 text-xs block" })
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "text-xs mx-4 mt-2 mb-4" }, [
        _vm._v(_vm._s(_vm._f("moment")(_vm.image.date, "from")))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Gallery/GalleryComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryComponent_vue_vue_type_template_id_1b1e0a73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryComponent.vue?vue&type=template&id=1b1e0a73& */ "./resources/js/components/Gallery/GalleryComponent.vue?vue&type=template&id=1b1e0a73&");
/* harmony import */ var _GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Gallery/GalleryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryComponent_vue_vue_type_template_id_1b1e0a73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryComponent_vue_vue_type_template_id_1b1e0a73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Gallery/GalleryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Gallery/GalleryComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Gallery/GalleryComponent.vue?vue&type=template&id=1b1e0a73&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryComponent.vue?vue&type=template&id=1b1e0a73& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_template_id_1b1e0a73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryComponent.vue?vue&type=template&id=1b1e0a73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryComponent.vue?vue&type=template&id=1b1e0a73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_template_id_1b1e0a73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_template_id_1b1e0a73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Gallery/GalleryFormComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryFormComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryFormComponent_vue_vue_type_template_id_1a932d0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryFormComponent.vue?vue&type=template&id=1a932d0f& */ "./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=template&id=1a932d0f&");
/* harmony import */ var _GalleryFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryFormComponent_vue_vue_type_template_id_1a932d0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryFormComponent_vue_vue_type_template_id_1a932d0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Gallery/GalleryFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=template&id=1a932d0f&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=template&id=1a932d0f& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFormComponent_vue_vue_type_template_id_1a932d0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryFormComponent.vue?vue&type=template&id=1a932d0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryFormComponent.vue?vue&type=template&id=1a932d0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFormComponent_vue_vue_type_template_id_1a932d0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFormComponent_vue_vue_type_template_id_1a932d0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Gallery/GalleryListItemComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryListItemComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryListItemComponent_vue_vue_type_template_id_14627722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryListItemComponent.vue?vue&type=template&id=14627722& */ "./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=template&id=14627722&");
/* harmony import */ var _GalleryListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryListItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryListItemComponent_vue_vue_type_template_id_14627722___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryListItemComponent_vue_vue_type_template_id_14627722___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Gallery/GalleryListItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryListItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=template&id=14627722&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=template&id=14627722& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryListItemComponent_vue_vue_type_template_id_14627722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryListItemComponent.vue?vue&type=template&id=14627722& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery/GalleryListItemComponent.vue?vue&type=template&id=14627722&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryListItemComponent_vue_vue_type_template_id_14627722___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryListItemComponent_vue_vue_type_template_id_14627722___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);