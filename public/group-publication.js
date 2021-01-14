(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-publication"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user'])),
  data: function data() {
    return {
      loading: false,
      pubForm: {
        title: '',
        author: '',
        publisher: '',
        "abstract": '',
        publication_year: '',
        tags: '',
        user_id: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // disable submit button
      this.loading = true; // data

      var data = this.pubForm;
      data['user_id'] = this.current_user.id;
      var formdata = new FormData(); // Loop through data and append to formdata

      Object.keys(data).forEach(function (key) {
        return formdata.append(key, data[key]);
      }); // Append files

      formdata.append('publication', this.publication); // Push to db

      axios({
        method: 'post',
        url: 'api/publications',
        data: formdata
      }).then(function (response) {
        // Show notice
        _this.$Notice.success({
          title: 'Success',
          desc: 'Your publication has been submitted succesfully'
        }); // Loading


        _this.loading = false;

        _this.$emit('close-modal');
      })["catch"](function (error) {
        // Loading
        _this.loading = false; // Notice

        _this.$Notice.error({
          title: 'Error',
          desc: 'Error in submitting your publication'
        });
      });
    },
    publicationUpload: function publicationUpload(file) {
      this.publication = file;
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['publications'],
  data: function data() {
    return {
      columns: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: 'Title',
        key: 'title'
      }, {
        title: 'Author',
        key: 'author'
      }, {
        title: 'Downloads',
        key: 'downloads'
      }, {
        title: 'Views',
        key: 'views'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pubId: this.$route.params.id,
      pubData: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var id = this.pubId; // add views       

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.all([axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/publications/' + id)]).then(axios__WEBPACK_IMPORTED_MODULE_0___default.a.spread(function (pub) {
      // 
      _this.pubData = pub.data.data;
    }))["catch"](function (error) {
      _this.$Notice.info({
        title: 'Error',
        desc: error
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _PublicationFormComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicationFormComponent */ "./resources/js/components/Publication/PublicationFormComponent.vue");
/* harmony import */ var _PublicationListItemComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PublicationListItemComponent */ "./resources/js/components/Publication/PublicationListItemComponent.vue");
/* harmony import */ var _PublicationTableComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PublicationTableComponent */ "./resources/js/components/Publication/PublicationTableComponent.vue");
/* harmony import */ var _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Widgets/PaginationComponent */ "./resources/js/components/Widgets/PaginationComponent.vue");
/* harmony import */ var _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widgets/SearchComponent */ "./resources/js/components/Widgets/SearchComponent.vue");
/* harmony import */ var _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Widgets/FilterComponent */ "./resources/js/components/Widgets/FilterComponent.vue");
/* harmony import */ var _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Widgets/StatsComponent */ "./resources/js/components/Widgets/StatsComponent.vue");
/* harmony import */ var _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Widgets/ModalbtnComponent */ "./resources/js/components/Widgets/ModalbtnComponent.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'publication-form': _PublicationFormComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    'publist-item': _PublicationListItemComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    'publication-table': _PublicationTableComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    'search': _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    'filter-a': _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    'stats': _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_8__["default"],
    'modal-btn': _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      searchTerm: '',
      filtered: false,
      loading: false,
      pubModal: false,
      list: false,
      pubstats: '',
      typeA: 'year',
      typeB: 'tags',
      statsA: 'publications',
      statsB: 'downloads',
      statsC: 'views',
      moduleName: 'PublicationModule'
    };
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('PublicationModule', ['publications', 'meta', 'links']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['currentUser']), {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: year - 1960
      }, function (value, index) {
        return 1961 + index;
      }).reverse();
    },
    tags: function tags() {
      return _toConsumableArray(new Set(this.publications.map(function (pub) {
        return pub.tags;
      })));
    }
  }),
  mounted: function mounted() {
    var _this = this;

    // 
    Echo.channel('stats').listen('PublicationStats', function (e) {
      console.log(e);
      _this.pubstats = e.pubstats;
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('PublicationModule', ['filter', 'fetch']), {
    closeModal: function closeModal() {
      this.pubModal = false;
    },
    // clear all filters
    clearFilters: function clearFilters() {
      var _this2 = this;

      this.fetch().then(function () {
        _this2.filtered = false;
      })["catch"](function () {});
    },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=template&id=7d18b94a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=template&id=7d18b94a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "Form",
        {
          staticClass: "w-full",
          attrs: { model: _vm.pubForm, "label-position": "top" }
        },
        [
          _c(
            "h4",
            {
              staticClass:
                "text-lg text-semibold subpixel-antialiased tracking-wider"
            },
            [_vm._v("\n            Upload Publication\n        ")]
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
                { attrs: { span: "16" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Title" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          type: "text",
                          placeholder: "Publication Title"
                        },
                        model: {
                          value: _vm.pubForm.title,
                          callback: function($$v) {
                            _vm.$set(_vm.pubForm, "title", $$v)
                          },
                          expression: "pubForm.title"
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
                { attrs: { span: "8" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Publication Year" } },
                    [
                      _c("DatePicker", {
                        staticStyle: { width: "200px" },
                        attrs: { placeholder: "Select year" },
                        model: {
                          value: _vm.pubForm.publication_year,
                          callback: function($$v) {
                            _vm.$set(_vm.pubForm, "publication_year", $$v)
                          },
                          expression: "pubForm.publication_year"
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
                    { attrs: { label: "Author" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          type: "text",
                          placeholder: "Author"
                        },
                        model: {
                          value: _vm.pubForm.author,
                          callback: function($$v) {
                            _vm.$set(_vm.pubForm, "author", $$v)
                          },
                          expression: "pubForm.author"
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
                    { attrs: { label: "Publisher" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          type: "text",
                          placeholder: "Publisher"
                        },
                        model: {
                          value: _vm.pubForm.publisher,
                          callback: function($$v) {
                            _vm.$set(_vm.pubForm, "publisher", $$v)
                          },
                          expression: "pubForm.publisher"
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
                    { attrs: { label: "Abstract" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          type: "textarea",
                          placeholder: "Abstract"
                        },
                        model: {
                          value: _vm.pubForm.abstract,
                          callback: function($$v) {
                            _vm.$set(_vm.pubForm, "abstract", $$v)
                          },
                          expression: "pubForm.abstract"
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
                    { attrs: { label: "Publication" } },
                    [
                      _c(
                        "Upload",
                        {
                          attrs: {
                            type: "drag",
                            action: "",
                            "before-upload": _vm.publicationUpload,
                            format: ["docx", "doc", "pdf"]
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
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Tags" } },
                    [
                      _c(
                        "Select",
                        {
                          attrs: {
                            filterable: "",
                            multiple: "",
                            "allow-create": ""
                          },
                          model: {
                            value: _vm.pubForm.tags,
                            callback: function($$v) {
                              _vm.$set(_vm.pubForm, "tags", $$v)
                            },
                            expression: "pubForm.tags"
                          }
                        },
                        _vm._l(_vm.tags, function(tag) {
                          return _c(
                            "Option",
                            { key: tag, attrs: { value: tag } },
                            [_vm._v(_vm._s(tag))]
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
                { attrs: { span: "12" } },
                [
                  _c(
                    "ButtonGroup",
                    [
                      _c(
                        "Button",
                        {
                          on: {
                            click: function($event) {
                              _vm.pubModal = false
                            }
                          }
                        },
                        [
                          _c("Icon", { attrs: { type: "ios-cancel" } }),
                          _vm._v(
                            "\n                        Cancel\n                    "
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
                                    " \n                            Submit\n                            "
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
                                  "\n                            Submitting...\n                        "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=template&id=218ccf06&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=template&id=218ccf06& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("Table", {
        ref: "selection",
        attrs: { stripe: "", columns: _vm.columns, data: _vm.publications }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=template&id=75a869cc&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=template&id=75a869cc& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "w-full flex flex-wrap p-5" },
      _vm._l(_vm.pubData, function(pub) {
        return _c(
          "div",
          {
            key: pub.id,
            staticClass: "w-full overflow-hidden p-2 m-2 bg-white flex"
          },
          [
            _c("div", { staticClass: "w-9/12" }, [
              _c("div", { staticClass: "w-4/5 mb-3 flex items-baseline" }, [
                _c("div", { staticClass: "w-auto lg:flex-grow" }, [
                  _c(
                    "li",
                    { staticClass: "list-none lg:flex-grow" },
                    [
                      _c(
                        "Avatar",
                        { staticClass: "mx-2", attrs: { size: "default" } },
                        [_vm._v(" " + _vm._s(pub.author.slice(0, 2)))]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "font-sans font-medium tracking-wide text-gray-600 text-lg"
                        },
                        [_vm._v(_vm._s(pub.author))]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-6/24" }, [
                  _c("li", { staticClass: "list-none" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-sans font-semibold tracking-wide text-gray-600 text-xs"
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm._f("moment")(
                                pub.created_at,
                                "dddd, MMMM Do YYYY"
                              )
                            ) +
                            " "
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass:
                    "text-gray-900 font-normal text-2xl font-sans tracking-wide mb-2"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(pub.title) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-gray-900 font-sans text-base" }, [
                _c("span", { domProps: { innerHTML: _vm._s(pub.abstract) } })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-3/12 p-5 ml-3" }, [
              _vm._m(0, true),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center px-5 pt-5" },
                [
                  _c(
                    "p",
                    {
                      staticClass: "w-full text-sm font-sans tracking-wide mb-2"
                    },
                    [
                      _vm._v(
                        "\n                        Views: " +
                          _vm._s(pub.views) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("Button", { attrs: { type: "" } }, [
                    _vm._v(
                      "\n                        Download\n                    "
                    )
                  ])
                ],
                1
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center px-5 pt-5" }, [
      _c("p", { staticClass: "w-full text-xl tracking-wider font-sans" }, [
        _vm._v(
          "\n                        Publication Info\n                    "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=template&id=45a6729a&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=template&id=45a6729a& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
            attrs: { width: "700" },
            model: {
              value: _vm.pubModal,
              callback: function($$v) {
                _vm.pubModal = $$v
              },
              expression: "pubModal"
            }
          },
          [
            _c("publication-form", {
              on: {
                "close-modal": function($event) {
                  return _vm.closeModal()
                }
              }
            }),
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
                        "filter-items": _vm.years,
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
                        "filter-items": _vm.tags,
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
                        attrs: { type: "ios-bookmark-outline", size: "16" }
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
                          _vm.pubModal = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        New Publication\n                    "
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
          _c(
            "div",
            { staticClass: "w-auto flex content-center" },
            [
              _c("stats", {
                attrs: { figure: _vm.pubstats.total, title: _vm.statsA }
              }),
              _vm._v(" "),
              _c("stats", {
                attrs: { figure: _vm.pubstats.downloads, title: _vm.statsB }
              }),
              _vm._v(" "),
              _c("stats", {
                attrs: { figure: _vm.pubstats.views, title: _vm.statsC }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.publications
          ? _c("div", { staticClass: "w-full" }, [
              !_vm.list
                ? _c(
                    "div",
                    {
                      staticClass:
                        "w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center"
                    },
                    _vm._l(_vm.publications, function(publication) {
                      return _c("publist-item", {
                        key: publication.id,
                        attrs: { publication: publication }
                      })
                    }),
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.list
                ? _c(
                    "div",
                    { staticClass: "w-full" },
                    [
                      _c("publication-table", {
                        attrs: {
                          publications: _vm.publications,
                          user: _vm.current_user
                        }
                      })
                    ],
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
          : _c("div", { staticClass: "w-full" }, [_vm._m(1)])
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
        [_vm._v("\n                    Publications\n                ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mx-auto w-1/3 p-5 m-3 content-center" }, [
      _c("img", {
        staticClass: "object-center object-contain",
        attrs: { src: "/images/publications.svg" }
      }),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "text-xl font-medium font-sans w-full text-center pt-5"
        },
        [_vm._v(" No Publication Found")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Publication/PublicationFormComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationFormComponent.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublicationFormComponent_vue_vue_type_template_id_7d18b94a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicationFormComponent.vue?vue&type=template&id=7d18b94a& */ "./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=template&id=7d18b94a&");
/* harmony import */ var _PublicationFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicationFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicationFormComponent_vue_vue_type_template_id_7d18b94a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublicationFormComponent_vue_vue_type_template_id_7d18b94a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Publication/PublicationFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=template&id=7d18b94a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=template&id=7d18b94a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationFormComponent_vue_vue_type_template_id_7d18b94a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationFormComponent.vue?vue&type=template&id=7d18b94a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationFormComponent.vue?vue&type=template&id=7d18b94a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationFormComponent_vue_vue_type_template_id_7d18b94a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationFormComponent_vue_vue_type_template_id_7d18b94a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Publication/PublicationTableComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationTableComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublicationTableComponent_vue_vue_type_template_id_218ccf06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicationTableComponent.vue?vue&type=template&id=218ccf06& */ "./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=template&id=218ccf06&");
/* harmony import */ var _PublicationTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationTableComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicationTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicationTableComponent_vue_vue_type_template_id_218ccf06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublicationTableComponent_vue_vue_type_template_id_218ccf06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Publication/PublicationTableComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationTableComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=template&id=218ccf06&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=template&id=218ccf06& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationTableComponent_vue_vue_type_template_id_218ccf06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationTableComponent.vue?vue&type=template&id=218ccf06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationTableComponent.vue?vue&type=template&id=218ccf06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationTableComponent_vue_vue_type_template_id_218ccf06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationTableComponent_vue_vue_type_template_id_218ccf06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Publication/PublicationViewComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationViewComponent.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublicationViewComponent_vue_vue_type_template_id_75a869cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicationViewComponent.vue?vue&type=template&id=75a869cc& */ "./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=template&id=75a869cc&");
/* harmony import */ var _PublicationViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicationViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicationViewComponent_vue_vue_type_template_id_75a869cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublicationViewComponent_vue_vue_type_template_id_75a869cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Publication/PublicationViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=template&id=75a869cc&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=template&id=75a869cc& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationViewComponent_vue_vue_type_template_id_75a869cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationViewComponent.vue?vue&type=template&id=75a869cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationViewComponent.vue?vue&type=template&id=75a869cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationViewComponent_vue_vue_type_template_id_75a869cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationViewComponent_vue_vue_type_template_id_75a869cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Publication/PublicationsViewComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationsViewComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublicationsViewComponent_vue_vue_type_template_id_45a6729a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicationsViewComponent.vue?vue&type=template&id=45a6729a& */ "./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=template&id=45a6729a&");
/* harmony import */ var _PublicationsViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationsViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicationsViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicationsViewComponent_vue_vue_type_template_id_45a6729a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublicationsViewComponent_vue_vue_type_template_id_45a6729a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Publication/PublicationsViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationsViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationsViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationsViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=template&id=45a6729a&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=template&id=45a6729a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationsViewComponent_vue_vue_type_template_id_45a6729a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicationsViewComponent.vue?vue&type=template&id=45a6729a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publication/PublicationsViewComponent.vue?vue&type=template&id=45a6729a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationsViewComponent_vue_vue_type_template_id_45a6729a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicationsViewComponent_vue_vue_type_template_id_45a6729a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);