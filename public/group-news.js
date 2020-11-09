(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-news"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/ArticleComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/ArticleComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      article: '',
      articleId: this.$route.params.id
    };
  },
  computed: {
    image_url: function image_url() {
      var url = 'images/landing.jpg';
      return url;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var id = this.articleId;
    axios({
      method: 'get',
      url: 'api/news/' + id
    }).then(function (response) {
      _this.article = response.data.data;
      console.log(_this.article);
    })["catch"](function (error) {
      console.log(error);

      _this.$Notice.info({
        title: 'News',
        desc: 'No news currently'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/NewsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _NewsFormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsFormComponent */ "./resources/js/components/News/NewsFormComponent.vue");
/* harmony import */ var _NewsListItemComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsListItemComponent */ "./resources/js/components/News/NewsListItemComponent.vue");
/* harmony import */ var _NewsTableComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsTableComponent */ "./resources/js/components/News/NewsTableComponent.vue");
/* harmony import */ var _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widgets/PaginationComponent */ "./resources/js/components/Widgets/PaginationComponent.vue");
/* harmony import */ var _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Widgets/SearchComponent */ "./resources/js/components/Widgets/SearchComponent.vue");
/* harmony import */ var _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widgets/FilterComponent */ "./resources/js/components/Widgets/FilterComponent.vue");
/* harmony import */ var _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Widgets/StatsComponent */ "./resources/js/components/Widgets/StatsComponent.vue");
/* harmony import */ var _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Widgets/ModalbtnComponent */ "./resources/js/components/Widgets/ModalbtnComponent.vue");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'news-form': _NewsFormComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    'newslist-item': _NewsListItemComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    'news-table': _NewsTableComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    'search': _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    'filter-a': _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    'stats': _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    'modal-btn': _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      list: false,
      newsModal: false,
      updateList: [],
      searchTerm: '',
      filtered: false,
      newsstats: '',
      typeA: 'year',
      statsA: 'articles',
      moduleName: 'NewsModule'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('NewsModule', ['news', 'meta', 'links']), {
    // Years
    years: function years() {
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

    // Search news
    Echo.channel('searches').listen('SearchNews', function (e) {
      _this.news = e.news;
      _this.newsMeta = [];
    }); // Update

    Echo.channel('news').listen('NewsCreated', function (e) {
      _this.newArticle(e.news);
    }); // Update

    Echo.channel('news').listen('NewsDeleted', function (e) {
      _this.news = e.news;
    });
    Echo.channel('stats').listen('NewsStats', function (e) {
      _this.newsstats = e.newsstats;
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('NewsModule', ['newArticle', 'filter', 'fetch']), {
    // Publish
    publishArticle: function publishArticle() {
      var _this2 = this;

      var formdata = {
        id: this.updateList,
        published: '1'
      }; // push to axios

      axios({
        method: 'patch',
        url: 'api/news',
        data: formdata
      }).then(function (response) {
        _this2.$Notice.success({
          title: 'Article Published',
          desc: ''
        });
      })["catch"](function (error) {
        _this2.$Notice.error({
          title: 'Article not Published',
          desc: ''
        });
      });
    },
    // Cancel
    closeModal: function closeModal() {
      this.newsModal = false;
    },
    // Change view
    changeView: function changeView() {
      if (this.list === true) {
        this.list = false;
      } else {
        this.list = true;
      }
    },
    // clear all filters
    clearFilters: function clearFilters() {
      var _this3 = this;

      this.fetch().then(function () {
        _this3.filtered = false;
      })["catch"](function () {
        _this3.$Notice.error({
          title: 'Nothing found'
        });
      });
    },
    // Select and update status
    addToList: function addToList(val) {
      var id = val.map(function (resp) {
        return resp.id;
      });
      this.updateList = id;
      console.log(this.updateList);
    },
    removeFromList: function removeFromList(val) {
      var id = val.map(function (resp) {
        return resp.id;
      });
      this.updateList.filter(function (resp) {
        !id.includes(resp);
      });
      console.log(id);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsFormComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/NewsFormComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user'])),
  data: function data() {
    return {
      newsForm: {
        title: '',
        body: '',
        published: ''
      },
      config: {
        placeholder: 'Compose an article...',
        theme: 'snow',
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'script': 'sub'
          }, {
            'script': 'super'
          }], [{
            'indent': '-1'
          }, {
            'indent': '+1'
          }], [{
            'direction': 'rtl'
          }], [{
            'size': ['small', false, 'large', 'huge']
          }], [{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], [{
            'font': []
          }], [{
            'color': []
          }, {
            'background': []
          }], [{
            'align': []
          }], ['clean']],
          syntax: {
            highlight: function highlight(text) {
              return hljs.highlightAuto(text).value;
            }
          }
        }
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('NewsModule', ['create']), {
    // Cancel
    onCancel: function onCancel() {
      this.$emit('close-modal');
    },
    // Submit
    onSubmit: function onSubmit() {
      var _this = this;

      var formdata = this.newsForm;
      formdata['user_id'] = this.current_user.id;
      formdata['published'] = 0; // Push to db

      this.create(formdata).then(function (response) {
        _this.$Notice.success({
          title: 'News Created',
          desc: 'Your news was succesfully created'
        });

        _this.$emit('close-modal');
      })["catch"](function (error) {
        _this.$Notice.error({
          title: 'News not created',
          desc: 'Your news was not created'
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsTableComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/NewsTableComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['news'],
  data: function data() {
    return {
      newsArticles: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: 'ID',
        key: 'id'
      }, {
        title: 'Title',
        key: 'title'
      }, {
        title: 'Posted',
        key: 'created_at'
      }, {
        title: 'Published',
        key: 'published'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/ArticleComponent.vue?vue&type=template&id=76cc85a8&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/ArticleComponent.vue?vue&type=template&id=76cc85a8& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        "ul",
        { staticClass: "w-full flex flex-wrap bg-white h-8 m-0 mb-5 p-0" },
        [
          _c("div", {}, [
            _c(
              "li",
              { staticClass: "mt-5 ml-5" },
              [
                _c("Icon", {
                  attrs: { type: "ios-arrow-round-back", size: "44" },
                  on: {
                    click: function($event) {
                      return _vm.$router.go(-1)
                    }
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.article, function(article) {
        return _c(
          "div",
          {
            key: article.id,
            staticClass:
              "p-2 mx-auto w-4/5 flex flex-wrap content-center justify-center"
          },
          [
            _c("div", { staticClass: "w-2/3" }, [
              _c("p", { staticClass: "text-4xl font-serif" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(article.title) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: " font-medium text-sm" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(
                      _vm._f("moment")(article.created_at, "Do MMMM YYYY")
                    ) +
                    "\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "mt-6 w-2/3 text-lg tracking-wide font-sans font-normal"
              },
              [_vm._v("\n            " + _vm._s(article.body) + "\n        ")]
            )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsComponent.vue?vue&type=template&id=4288988e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/NewsComponent.vue?vue&type=template&id=4288988e& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            attrs: { fullscreen: "", title: "Write Article" },
            model: {
              value: _vm.newsModal,
              callback: function($$v) {
                _vm.newsModal = $$v
              },
              expression: "newsModal"
            }
          },
          [
            _c("news-form", {
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
                          _vm.newsModal = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        New Article\n                    "
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
                attrs: { figure: _vm.newsstats.articles, title: _vm.statsA }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.news.length
          ? _c("div", { staticClass: "w-full h-full" }, [
              !_vm.list
                ? _c(
                    "div",
                    {
                      staticClass:
                        "w-full flex flex-wrap p-2 bg-gray-200 justify-center"
                    },
                    _vm._l(_vm.news, function(article) {
                      return _c("newslist-item", {
                        key: article.id,
                        staticClass: "w-1/4",
                        attrs: { article: article }
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
                    [_c("news-table", { attrs: { news: _vm.news } })],
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
          : _c("div", { staticClass: "w-full h-full" }, [_vm._m(1)])
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
        [_vm._v("\n                    News\n                ")]
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
        attrs: { src: "/images/empty.svg" }
      }),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "text-xl font-medium font-sans w-full text-center pt-5"
        },
        [_vm._v(" No News Found")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsFormComponent.vue?vue&type=template&id=190ec355&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/NewsFormComponent.vue?vue&type=template&id=190ec355& ***!
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
  return _c(
    "div",
    [
      _c(
        "Form",
        {
          staticClass: "w-full",
          attrs: { model: _vm.newsForm, "label-position": "top" }
        },
        [
          _c(
            "h4",
            {
              staticClass:
                "text-lg text-semibold subpixel-antialiased tracking-wider"
            },
            [_vm._v(" New Article ")]
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
                    { attrs: { label: "Title" } },
                    [
                      _c("Input", {
                        attrs: { type: "text", placeholder: "News Title" },
                        model: {
                          value: _vm.newsForm.title,
                          callback: function($$v) {
                            _vm.$set(_vm.newsForm, "title", $$v)
                          },
                          expression: "newsForm.title"
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
                    {
                      staticClass: "h-full",
                      staticStyle: { "min-height": "300px" },
                      attrs: { label: "Article" }
                    },
                    [
                      _c("quill", {
                        attrs: { config: _vm.config, output: "html" },
                        model: {
                          value: _vm.newsForm.body,
                          callback: function($$v) {
                            _vm.$set(_vm.newsForm, "body", $$v)
                          },
                          expression: "newsForm.body"
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
                              return _vm.onCancel()
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
                          attrs: { type: "primary" },
                          on: { click: _vm.onSubmit }
                        },
                        [
                          _c("Icon", { attrs: { type: "ios-checkmark" } }),
                          _vm._v(
                            "\n                        Create\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsTableComponent.vue?vue&type=template&id=e9fb107a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News/NewsTableComponent.vue?vue&type=template&id=e9fb107a& ***!
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
  return _c(
    "div",
    [
      _c("Table", {
        ref: "selection",
        attrs: { stripe: "", columns: _vm.newsArticles, data: _vm.news },
        on: {
          "on-select": _vm.addToList,
          "on-select-all": _vm.addToList,
          "on-select-cancel": _vm.removeFromList,
          "on-select-all-cancel": _vm.removeFromList
        }
      }),
      _vm._v(" "),
      _c(
        "Button",
        {
          staticClass: "mt-3",
          attrs: { type: "success" },
          on: { click: _vm.publishArticle }
        },
        [_vm._v("Publish")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/News/ArticleComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/News/ArticleComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleComponent_vue_vue_type_template_id_76cc85a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleComponent.vue?vue&type=template&id=76cc85a8& */ "./resources/js/components/News/ArticleComponent.vue?vue&type=template&id=76cc85a8&");
/* harmony import */ var _ArticleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/News/ArticleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArticleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleComponent_vue_vue_type_template_id_76cc85a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArticleComponent_vue_vue_type_template_id_76cc85a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/News/ArticleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/News/ArticleComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/News/ArticleComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/ArticleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/News/ArticleComponent.vue?vue&type=template&id=76cc85a8&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/News/ArticleComponent.vue?vue&type=template&id=76cc85a8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleComponent_vue_vue_type_template_id_76cc85a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleComponent.vue?vue&type=template&id=76cc85a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/ArticleComponent.vue?vue&type=template&id=76cc85a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleComponent_vue_vue_type_template_id_76cc85a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleComponent_vue_vue_type_template_id_76cc85a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/News/NewsComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/News/NewsComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsComponent_vue_vue_type_template_id_4288988e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsComponent.vue?vue&type=template&id=4288988e& */ "./resources/js/components/News/NewsComponent.vue?vue&type=template&id=4288988e&");
/* harmony import */ var _NewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/News/NewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsComponent_vue_vue_type_template_id_4288988e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsComponent_vue_vue_type_template_id_4288988e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/News/NewsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/News/NewsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/News/NewsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/News/NewsComponent.vue?vue&type=template&id=4288988e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/News/NewsComponent.vue?vue&type=template&id=4288988e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsComponent_vue_vue_type_template_id_4288988e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsComponent.vue?vue&type=template&id=4288988e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsComponent.vue?vue&type=template&id=4288988e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsComponent_vue_vue_type_template_id_4288988e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsComponent_vue_vue_type_template_id_4288988e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/News/NewsFormComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/News/NewsFormComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsFormComponent_vue_vue_type_template_id_190ec355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsFormComponent.vue?vue&type=template&id=190ec355& */ "./resources/js/components/News/NewsFormComponent.vue?vue&type=template&id=190ec355&");
/* harmony import */ var _NewsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/News/NewsFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsFormComponent_vue_vue_type_template_id_190ec355___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsFormComponent_vue_vue_type_template_id_190ec355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/News/NewsFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/News/NewsFormComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/News/NewsFormComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/News/NewsFormComponent.vue?vue&type=template&id=190ec355&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/News/NewsFormComponent.vue?vue&type=template&id=190ec355& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFormComponent_vue_vue_type_template_id_190ec355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsFormComponent.vue?vue&type=template&id=190ec355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsFormComponent.vue?vue&type=template&id=190ec355&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFormComponent_vue_vue_type_template_id_190ec355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFormComponent_vue_vue_type_template_id_190ec355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/News/NewsTableComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/News/NewsTableComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsTableComponent_vue_vue_type_template_id_e9fb107a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsTableComponent.vue?vue&type=template&id=e9fb107a& */ "./resources/js/components/News/NewsTableComponent.vue?vue&type=template&id=e9fb107a&");
/* harmony import */ var _NewsTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsTableComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/News/NewsTableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsTableComponent_vue_vue_type_template_id_e9fb107a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsTableComponent_vue_vue_type_template_id_e9fb107a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/News/NewsTableComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/News/NewsTableComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/News/NewsTableComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsTableComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsTableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/News/NewsTableComponent.vue?vue&type=template&id=e9fb107a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/News/NewsTableComponent.vue?vue&type=template&id=e9fb107a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTableComponent_vue_vue_type_template_id_e9fb107a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsTableComponent.vue?vue&type=template&id=e9fb107a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News/NewsTableComponent.vue?vue&type=template&id=e9fb107a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTableComponent_vue_vue_type_template_id_e9fb107a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTableComponent_vue_vue_type_template_id_e9fb107a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);