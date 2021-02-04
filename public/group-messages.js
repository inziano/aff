(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-messages"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/MessageComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Widgets_MessageListItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widgets/MessageListItemComponent */ "./resources/js/components/Messages/Widgets/MessageListItemComponent.vue");
/* harmony import */ var _Widgets_MessageThreadsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Widgets/MessageThreadsComponent */ "./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue");
/* harmony import */ var _Widgets_ChatDetailsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widgets/ChatDetailsComponent */ "./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'messagelist-item': _Widgets_MessageListItemComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    'message-thread': _Widgets_MessageThreadsComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    'chat-details': _Widgets_ChatDetailsComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    'search': _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    'filter-a': _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    'stats': _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    'modal-btn': _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      list: false,
      messageModal: false,
      loading: false,
      moduleName: 'MessageModule',
      admin: false,
      searchTerm: '',
      filtered: false,
      typeA: 'year',
      statsA: 'messages',
      messagestats: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('UserModule', ['members']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('MessageModule', ['messages', 'thread']), {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: year - 1960
      }, function (value, index) {
        return 1961 + index;
      }).reverse();
    },
    msg: function msg() {
      return this.messages.data;
    },
    chats: function chats() {
      return this.thread;
    }
  }),
  mounted: function mounted() {
    var _this = this;

    // 
    Echo.channel('messages').listen('MessageReplied', function (e) {
      _this.newMessage(e.message);
    });
  },
  created: function created() {
    this.fetch(this.current_user.id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('MessageModule', ['fetch', 'conversation', 'newMessage', 'newConversation']), {
    // Change view
    changeView: function changeView() {
      if (this.list === true) {
        this.list = false;
      } else {
        this.list = true;
      }
    },
    viewThread: function viewThread(e) {
      var items = {
        'first': e,
        'second': this.current_user.id
      };
      this.conversation(items);
    },
    newChat: function newChat(e) {
      var items = {
        'recipient': e,
        'sender': this.current_user.id
      };
      this.newConversation(items);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageFormComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/MessageFormComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'recipient'],
  data: function data() {
    return {
      messageForm: {
        content: ''
      },
      loading: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('MessageModule', ['create']), {
    // Submit
    onSubmit: function onSubmit() {
      var _this = this;

      // 
      var data = this.messageForm;
      data['sender'] = this.user.id;
      data['recipient'] = this.recipient; // Push message

      this.create(data).then(function (response) {
        // Notice
        _this.$Notice.success({
          title: 'Message Sent',
          desc: 'Your message has been delivered'
        });

        _this.loading = false;
        _this.messageForm.content = '';
      })["catch"](function (error) {
        _this.loading = false;

        _this.$Notice.error({
          title: 'Message not sent',
          desc: 'Your message could not be delivered'
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['threads', 'user'],
  mounted: function mounted() {
    this.fetchMember(this.recipientDets);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('UserModule', ["member"]), {
    mem: function mem() {
      return this.member.data[0];
    },
    path: function path() {
      if (typeof this.mem !== 'undefined') {
        return this.mem.image !== null ? this.mem.image : 'images/avatar.svg';
      } else {
        return 'images/avatar.svg';
      }
    },
    recipientDets: function recipientDets() {
      var seti;
      var uid = typeof this.user.id != 'undefined' ? this.user.id : " 1"; // Get the first message
      // Assuming that the conversation is only between two people i.e current user and the other guy

      var single = typeof this.threads != 'undefined' ? this.threads.slice(-1).pop() : {}; // Return the id

      if (typeof single != 'undefined') {
        seti = single.recipient.id === uid ? single.sender.user_id : single.recipient.user_id;
      } else {
        seti = 1;
      } // return set     


      return seti;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("UserModule", ["fetchMember"])),
  watch: {
    recipientDets: {
      deep: true,
      handler: function handler(newval) {
        this.fetchMember(newval);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['contacts'],
  methods: {
    newChat: function newChat(id) {
      this.$emit('startchat', id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ContactResultsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactResultsComponent */ "./resources/js/components/Messages/Widgets/ContactResultsComponent.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'contact-results': _ContactResultsComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['messages', 'user'],
  data: function data() {
    return {
      usersearch: '',
      userlist: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user']), {
    path: function path() {
      return this.user.image !== null ? this.user.image : "http://affintranet.kensters.com" + "/images/avatar.svg";
    },
    avatar: function avatar() {
      return "http://affintranet.kensters.com" + "/images/messages.svg";
    },
    message: function message() {
      var result = [];
      var map = new Map();
      var self = this;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var i = item.sender.id == self.user.id ? {
            'id': item.id,
            'person': item.recipient,
            'content': item.content,
            'created_at': item.created_at
          } : {
            'id': item.id,
            'person': item.sender,
            'content': item.content,
            'created_at': item.created_at
          };

          if (!map.has(i.person.id)) {
            map.set(i.person.id, true); // Push the unique values to result
            // Destructure object and get only required values

            result.push(function (_ref) {
              var user_id = _ref.person.user_id,
                  firstname = _ref.person.firstname,
                  lastname = _ref.person.lastname,
                  content = _ref.content,
                  created_at = _ref.created_at;
              return {
                user_id: user_id,
                firstname: firstname,
                lastname: lastname,
                content: content,
                created_at: created_at
              };
            }(i));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('MessageModule', ['search_users']), {
    view: function view(id) {
      this.$emit('viewthread', id);
    },
    search: function search() {
      var _this = this;

      var filter = {
        criteria: 'search',
        term: this.usersearch
      };
      this.search_users(filter).then(function (data) {
        _this.userlist = data;
      })["catch"](function (error) {
        _this.$Notice.error({
          title: 'Error occured'
        });
      });
    },
    newChat: function newChat(e) {
      this.$emit('newchat', e); // 

      this.userlist = [];
      this.usersearch = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageFormComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MessageFormComponent */ "./resources/js/components/Messages/MessageFormComponent.vue");
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

/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  props: ['threads', 'user'],
  components: {
    'message-form': _MessageFormComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    recipient: function recipient() {
      var id = this.user.id; // Get the first message
      // Assuming that the conversation is only between two people i.e current user and the other guy

      var single = this.threads.slice(-1).pop(); // Return the id

      var set = single.recipient.id === id ? single.sender.user_id : single.recipient.user_id;
      return set;
    },
    recipientDets: function recipientDets() {
      var id = this.user.id; // Get the first message
      // Assuming that the conversation is only between two people i.e current user and the other guy

      var single = this.threads.slice(-1).pop(); // Return the id

      var set = single.recipient.id === id ? single.sender : single.recipient;
      return set;
    }
  }
}, "components", {
  'message-form': _MessageFormComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageComponent.vue?vue&type=template&id=3c6b7244&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/MessageComponent.vue?vue&type=template&id=3c6b7244& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "w-full h-full p-5" }, [
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
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full flex flex-wrap bg-white p-2" }, [
        _c("div", {
          staticClass: "lg:flex-grow items-center  mr-4 flex content-center"
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-auto flex content-center" },
          [
            _c("stats", {
              attrs: { figure: _vm.messagestats.messages, title: _vm.statsA }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full min-h-screen flex border-t border-2" }, [
        _c(
          "div",
          { staticClass: "w-1/4 h-full bg-gray-200" },
          [
            _c("messagelist-item", {
              attrs: { messages: _vm.msg, user: _vm.current_user },
              on: {
                viewthread: function($event) {
                  return _vm.viewThread($event)
                },
                newchat: function($event) {
                  return _vm.newChat($event)
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/2 bg-gray-100" },
          [
            _c("message-thread", {
              attrs: { threads: _vm.chats, user: _vm.current_user }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/4" },
          [
            _c("chat-details", {
              attrs: { threads: _vm.chats, user: _vm.current_user }
            })
          ],
          1
        )
      ])
    ])
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
        [_vm._v("\n                    Messages\n                ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageFormComponent.vue?vue&type=template&id=02b5880c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/MessageFormComponent.vue?vue&type=template&id=02b5880c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full" }, [
    _c(
      "div",
      { staticClass: "border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0" },
      [
        _c("div", { staticClass: "relative flex" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.messageForm.content,
                expression: "messageForm.content"
              }
            ],
            staticClass:
              "w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200  py-3",
            attrs: { type: "text", placeholder: "Write Something" },
            domProps: { value: _vm.messageForm.content },
            on: {
              keypress: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onSubmit($event)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.messageForm, "content", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute right-0 items-center inset-y-0 hidden sm:flex"
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    " inline-flex items-center justify-center h-10 w-10 transition duration-500 ease-in-out text-white bg-gray-200 hover:bg-teal-400 focus:outline-none",
                  attrs: { type: "button" },
                  on: { click: _vm.onSubmit }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6 transform rotate-90",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                        }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=template&id=972f690a&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=template&id=972f690a& ***!
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
  return _c("div", [
    _vm.threads.length > 0
      ? _c("div", { staticClass: "w-full h-full p-3 bg-white" }, [
          _c("div", { staticClass: "flex flex-col items-center mt-6" }, [
            _c("img", {
              staticClass: "w-24 h-24 rounded-full",
              attrs: { src: _vm.path, alt: "" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "text-2xl mt-1 text-gray-700" }, [
              _vm._v(
                _vm._s(_vm.mem.bio.firstname) +
                  " " +
                  _vm._s(_vm.mem.bio.lastname)
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-lg text-gray-600" }, [
              _vm._v(_vm._s(_vm.mem.bio.title))
            ])
          ])
        ])
      : _c("div", [_vm._m(0)])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-wrap content-center justify-center " },
      [
        _c("img", {
          staticClass: "h-56 w-full mb-4",
          attrs: { src: "images/messages.svg" }
        }),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "text-sm font-medium font-sans text-gray-700 mx-2" },
          [_vm._v("\n          Start a new conversation\n      ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=template&id=29c70cef&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=template&id=29c70cef& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full mx-4" }, [
    _c(
      "div",
      {
        staticClass: "bg-gray-100 rounded px-6",
        staticStyle: { width: "90%" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("hr", { staticClass: "-mx-6" }),
        _vm._v(" "),
        _vm._l(_vm.contacts, function(contact) {
          return _c(
            "div",
            {
              key: contact.id,
              staticClass: "flex items-center justify-between my-4"
            },
            [
              _vm._m(1, true),
              _vm._v(" "),
              _c("div", { staticClass: "flex-1 pl-2" }, [
                _c("div", { staticClass: "text-gray-700 font-semibold" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "text-sm font-normal text-teal-600 capitalize",
                      on: {
                        click: function($event) {
                          return _vm.newChat(contact.user_id)
                        }
                      }
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(contact.firstname) +
                          " " +
                          _vm._s(contact.lastname)
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-gray-600 font-thin" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(contact.email) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "boder-b-0 my-4" })
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "border-l-4 border-teal-400 -ml-6 pl-6 flex items-center justify-between my-4"
      },
      [
        _c("div", { staticClass: "font-semibold text-gray-800" }, [
          _vm._v("Contact List")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-16" }, [
      _c("img", {
        staticClass: "w-12 h-12 rounded-full",
        attrs: { src: "https://source.unsplash.com/50x50/?nature" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=template&id=50afb40d&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=template&id=50afb40d& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-full min-h-screen" },
    [
      _c(
        "div",
        {
          staticClass: "hidden sm:block w-1/5 md:w-full bg-gray-200 px-4 pt-6"
        },
        [
          _c("div", { staticClass: "flex items-center space-x-4" }, [
            _c("img", {
              staticClass: "w-12 h-12 rounded-full",
              attrs: { src: _vm.path }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-1 flex-col leading-tight" }, [
              _c(
                "span",
                { staticClass: "text-lg font-semibold text-teal-600" },
                [_vm._v(_vm._s(_vm.user.email))]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "text-xs text-gray-600" }, [
                _vm._v(_vm._s(_vm.user.status))
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "relative mt-6 flex px-4" }, [
        _c(
          "span",
          { staticClass: "absolute inset-y-0 pl-4 flex items-center" },
          [
            _c(
              "svg",
              {
                staticClass: "h-4 w-4 text-gray-400",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.usersearch,
              expression: "usersearch"
            }
          ],
          staticClass: "py-2 pl-10 text-xs w-full placeholder-gray-400",
          attrs: { type: "text", placeholder: "Search Friends" },
          domProps: { value: _vm.usersearch },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.search($event)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.usersearch = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm.userlist.length > 0
        ? _c("contact-results", {
            attrs: { contacts: _vm.userlist },
            on: {
              startchat: function($event) {
                return _vm.newChat($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.message, function(m) {
        return _c(
          "div",
          { key: m.user_id, staticClass: "px-4 mt-5 space-y-6" },
          [
            _c("div", { staticClass: "flex items-center space-x-4 " }, [
              _c("img", {
                staticClass: "w-10 h-10 rounded-full",
                attrs: { src: _vm.avatar, alt: "My profile" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-1 flex-col leading-tight" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "span",
                      { staticClass: "text-sm font-normal text-teal-600" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-sm font-normal text-teal-600 capitalize",
                            on: {
                              click: function($event) {
                                return _vm.view(m.user_id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              " " +
                                _vm._s(m.firstname) +
                                " " +
                                _vm._s(m.lastname)
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-xs text-gray-400",
                        staticStyle: { "font-size": "0.7em" }
                      },
                      [_vm._v(_vm._s(_vm._f("moment")(m.created_at, "from")))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between mt-2" },
                  [
                    _c("span", { staticClass: "text-xs text-gray-600" }, [
                      _vm._v(_vm._s(m.content))
                    ])
                  ]
                )
              ])
            ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=template&id=649cd283&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=template&id=649cd283& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full bg-gray-100 min-h-full px-2 py-5" }, [
    _vm.threads.length > 0
      ? _c("div", { staticClass: "flex flex-wrap" }, [
          _c(
            "div",
            {
              staticClass:
                "w-full flex flex-col sm:flex-row items-center justify-between py-3 border-b-2 border-gray-200"
            },
            [
              _c(
                "div",
                { staticClass: "flex items-center space-x-4" },
                [
                  _vm.recipientDets.firstname
                    ? _c(
                        "Avatar",
                        {
                          staticStyle: { "background-color": "teal" },
                          attrs: { size: "large" }
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.recipientDets.firstname.slice(0, 1)) +
                              _vm._s(_vm.recipientDets.lastname.slice(0, 1))
                          )
                        ]
                      )
                    : _c(
                        "Avatar",
                        {
                          staticStyle: { "background-color": "teal" },
                          attrs: { size: "large" }
                        },
                        [_vm._v(" -- ")]
                      ),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col leading-tight" }, [
                    _c(
                      "div",
                      { staticClass: "text-xl mt-1 flex items-center" },
                      [
                        _c("span", { staticClass: "text-gray-700 mr-3" }, [
                          _vm._v(
                            _vm._s(_vm.recipientDets.firstname) +
                              " " +
                              _vm._s(_vm.recipientDets.lastname)
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-green-500" }, [
                          _c("svg", { attrs: { width: "10", height: "10" } }, [
                            _c("circle", {
                              attrs: {
                                cx: "5",
                                cy: "5",
                                r: "5",
                                fill: "currentColor"
                              }
                            })
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-base text-gray-600" }, [
                      _vm._v(" " + _vm._s(_vm.recipientDets.title))
                    ])
                  ])
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "w-full overflow-auto",
              staticStyle: { "max-height": "50vh" }
            },
            _vm._l(_vm.threads, function(t) {
              return _c(
                "div",
                {
                  key: t.id,
                  staticClass:
                    "m-2 px-4 py-2 rounded-lg clearfix w-3/5 text-xs",
                  class:
                    t.sender.user_id == _vm.user.id
                      ? "float-right rounded-br-none bg-teal-600 text-white"
                      : "float-left rounded-bl-none bg-gray-300 text-gray-600"
                },
                [_c("span", [_vm._v(" " + _vm._s(t.content) + " ")])]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full mt-4" },
            [
              _c("message-form", {
                attrs: { user: _vm.user, recipient: _vm.recipient }
              })
            ],
            1
          )
        ])
      : _c("div", [_vm._m(0)])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-wrap content-center justify-center " },
      [
        _c("img", {
          staticClass: "h-56 w-full mb-4",
          attrs: { src: "images/messages.svg" }
        }),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "text-sm font-medium font-sans text-gray-700 mx-2" },
          [_vm._v("\n                Start a new conversation\n            ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Messages/MessageComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Messages/MessageComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageComponent_vue_vue_type_template_id_3c6b7244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageComponent.vue?vue&type=template&id=3c6b7244& */ "./resources/js/components/Messages/MessageComponent.vue?vue&type=template&id=3c6b7244&");
/* harmony import */ var _MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages/MessageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageComponent_vue_vue_type_template_id_3c6b7244___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageComponent_vue_vue_type_template_id_3c6b7244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages/MessageComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages/MessageComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Messages/MessageComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages/MessageComponent.vue?vue&type=template&id=3c6b7244&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Messages/MessageComponent.vue?vue&type=template&id=3c6b7244& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_template_id_3c6b7244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageComponent.vue?vue&type=template&id=3c6b7244& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageComponent.vue?vue&type=template&id=3c6b7244&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_template_id_3c6b7244___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageComponent_vue_vue_type_template_id_3c6b7244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Messages/MessageFormComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Messages/MessageFormComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageFormComponent_vue_vue_type_template_id_02b5880c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageFormComponent.vue?vue&type=template&id=02b5880c& */ "./resources/js/components/Messages/MessageFormComponent.vue?vue&type=template&id=02b5880c&");
/* harmony import */ var _MessageFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages/MessageFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageFormComponent_vue_vue_type_template_id_02b5880c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageFormComponent_vue_vue_type_template_id_02b5880c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages/MessageFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages/MessageFormComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Messages/MessageFormComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages/MessageFormComponent.vue?vue&type=template&id=02b5880c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Messages/MessageFormComponent.vue?vue&type=template&id=02b5880c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFormComponent_vue_vue_type_template_id_02b5880c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageFormComponent.vue?vue&type=template&id=02b5880c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/MessageFormComponent.vue?vue&type=template&id=02b5880c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFormComponent_vue_vue_type_template_id_02b5880c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFormComponent_vue_vue_type_template_id_02b5880c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatDetailsComponent_vue_vue_type_template_id_972f690a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatDetailsComponent.vue?vue&type=template&id=972f690a& */ "./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=template&id=972f690a&");
/* harmony import */ var _ChatDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatDetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatDetailsComponent_vue_vue_type_template_id_972f690a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatDetailsComponent_vue_vue_type_template_id_972f690a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages/Widgets/ChatDetailsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatDetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=template&id=972f690a&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=template&id=972f690a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatDetailsComponent_vue_vue_type_template_id_972f690a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatDetailsComponent.vue?vue&type=template&id=972f690a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ChatDetailsComponent.vue?vue&type=template&id=972f690a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatDetailsComponent_vue_vue_type_template_id_972f690a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatDetailsComponent_vue_vue_type_template_id_972f690a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Messages/Widgets/ContactResultsComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/ContactResultsComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactResultsComponent_vue_vue_type_template_id_29c70cef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactResultsComponent.vue?vue&type=template&id=29c70cef& */ "./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=template&id=29c70cef&");
/* harmony import */ var _ContactResultsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactResultsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactResultsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactResultsComponent_vue_vue_type_template_id_29c70cef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactResultsComponent_vue_vue_type_template_id_29c70cef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages/Widgets/ContactResultsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactResultsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactResultsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactResultsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=template&id=29c70cef&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=template&id=29c70cef& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactResultsComponent_vue_vue_type_template_id_29c70cef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactResultsComponent.vue?vue&type=template&id=29c70cef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/ContactResultsComponent.vue?vue&type=template&id=29c70cef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactResultsComponent_vue_vue_type_template_id_29c70cef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactResultsComponent_vue_vue_type_template_id_29c70cef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Messages/Widgets/MessageListItemComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/MessageListItemComponent.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageListItemComponent_vue_vue_type_template_id_50afb40d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageListItemComponent.vue?vue&type=template&id=50afb40d& */ "./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=template&id=50afb40d&");
/* harmony import */ var _MessageListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageListItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageListItemComponent_vue_vue_type_template_id_50afb40d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageListItemComponent_vue_vue_type_template_id_50afb40d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages/Widgets/MessageListItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageListItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=template&id=50afb40d&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=template&id=50afb40d& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageListItemComponent_vue_vue_type_template_id_50afb40d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageListItemComponent.vue?vue&type=template&id=50afb40d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageListItemComponent.vue?vue&type=template&id=50afb40d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageListItemComponent_vue_vue_type_template_id_50afb40d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageListItemComponent_vue_vue_type_template_id_50afb40d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageThreadsComponent_vue_vue_type_template_id_649cd283___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageThreadsComponent.vue?vue&type=template&id=649cd283& */ "./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=template&id=649cd283&");
/* harmony import */ var _MessageThreadsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageThreadsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageThreadsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageThreadsComponent_vue_vue_type_template_id_649cd283___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageThreadsComponent_vue_vue_type_template_id_649cd283___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages/Widgets/MessageThreadsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageThreadsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageThreadsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageThreadsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=template&id=649cd283&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=template&id=649cd283& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageThreadsComponent_vue_vue_type_template_id_649cd283___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageThreadsComponent.vue?vue&type=template&id=649cd283& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages/Widgets/MessageThreadsComponent.vue?vue&type=template&id=649cd283&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageThreadsComponent_vue_vue_type_template_id_649cd283___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageThreadsComponent_vue_vue_type_template_id_649cd283___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);