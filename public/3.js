(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events/EventDetailsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Events/EventDetailsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      eventId: this.$router.params.id
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('EventModule', ['events']), {
    event: function event() {
      var id = this.eventId;
      return this.event.filter(function (ev) {
        return ev.id = id;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events/EventDetailsComponent.vue?vue&type=template&id=5b2a796a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Events/EventDetailsComponent.vue?vue&type=template&id=5b2a796a& ***!
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
    "div",
    { staticClass: "w-full h-full" },
    [
      _vm._v("\n    " + _vm._s(_vm.event) + "\n    "),
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
      _vm._l(_vm.event, function(event) {
        return _c(
          "div",
          {
            key: event.id,
            staticClass:
              "p-2 mx-auto w-4/5 flex flex-wrap content-center justify-center"
          },
          [
            _c("div", { staticClass: "w-2/3" }, [
              _c("p", { staticClass: "text-4xl font-serif" }, [
                _vm._v(
                  "\n                " + _vm._s(event.name) + "\n            "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: " font-medium text-sm" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(event.location) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: " font-medium text-sm" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(event.startdate) +
                    " - " +
                    _vm._s(event.enddate) +
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
              [
                _vm._v(
                  "\n            " + _vm._s(event.description) + "\n        "
                )
              ]
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

/***/ "./resources/js/components/Events/EventDetailsComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Events/EventDetailsComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDetailsComponent_vue_vue_type_template_id_5b2a796a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDetailsComponent.vue?vue&type=template&id=5b2a796a& */ "./resources/js/components/Events/EventDetailsComponent.vue?vue&type=template&id=5b2a796a&");
/* harmony import */ var _EventDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Events/EventDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventDetailsComponent_vue_vue_type_template_id_5b2a796a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventDetailsComponent_vue_vue_type_template_id_5b2a796a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Events/EventDetailsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Events/EventDetailsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Events/EventDetailsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventDetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events/EventDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Events/EventDetailsComponent.vue?vue&type=template&id=5b2a796a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Events/EventDetailsComponent.vue?vue&type=template&id=5b2a796a& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetailsComponent_vue_vue_type_template_id_5b2a796a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventDetailsComponent.vue?vue&type=template&id=5b2a796a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events/EventDetailsComponent.vue?vue&type=template&id=5b2a796a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetailsComponent_vue_vue_type_template_id_5b2a796a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetailsComponent_vue_vue_type_template_id_5b2a796a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);