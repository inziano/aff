(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-forum"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      threadForm: {
        topic_id: '',
        subject: '',
        body: ''
      },
      config: {
        placeholder: 'Compose a question...',
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('TopicModule', ['topics'])),
  methods: {
    // Submit
    onSubmit: function onSubmit() {
      var _this = this;

      var formdata = this.threadForm;
      formdata['user_id'] = this.current_user.id; // Create

      this.$store.dispatch('ThreadModule/create', formdata).then(function () {
        _this.$Notice.success({
          title: 'Thread Created',
          desc: 'Your thread was succesfully created'
        });
      })["catch"](function () {
        _this.$Notice.error({
          title: 'Thread not created',
          desc: 'Your thread was not created'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['threads', 'user'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['isAdmin'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ThreadModule', ['update', 'delete']), {
    // view thread
    viewThread: function viewThread(id, title) {
      var data = {
        views: 1
      }; // Update

      this.update({
        id: id,
        data: data
      });
      this.$router.push({
        name: 'thread',
        params: {
          id: id,
          title: title
        }
      });
    },
    // Emit methods when clicked
    deleteItem: function deleteItem(id) {
      // Delete item
      this["delete"](id);
    },
    // Like thread
    likeItem: function likeItem(id) {
      var data = {
        likes: 1
      }; // Update

      this.update({
        id: id,
        data: data
      });
    },
    showTopic: function showTopic(title) {
      this.$emit('showTopicThread', title);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ReplyComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ReplyComponent */ "./resources/js/components/Forum/ReplyComponent.vue");
/* harmony import */ var _NewReplyComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NewReplyComponent */ "./resources/js/components/Forum/NewReplyComponent.vue");
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
      threadId: this.$route.params.id,
      reply: false
    };
  },
  components: {
    'reply': _ReplyComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    'new-reply': _NewReplyComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    // Thread view count
    Echo.channel('threads').listen('threadViewCount', function (e) {
      console.log(e); // console.log(this.replies.findIndex( elem => elem.id === e.reply[0].id))
      // let idx = this.threads.findIndex( elem=> elem.id === e.thread[0].id)
      // // // Splice and replace array
      // this.replies.splice(idx, 1, e.thread[0])
    }); // Reply liked

    Echo.channel('replies').listen('UpdateReplyLikeCount', function (e) {
      // Find index
      var idx = _this.replies.findIndex(function (elem) {
        return elem.id === e.reply[0].id;
      }); // Splice and replace array


      _this.replies.splice(idx, 1, e.reply[0]);
    }); // Reply

    Echo.channel('replies').listen('ThreadReplied', function (e) {
      _this.update(e.thread);

      _this.newReply(e.reply);
    });
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('ThreadModule', ['threads']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('ReplyModule', ['replies']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['current_user']), {
    threadData: function threadData() {
      var _this2 = this;

      return this.threads.filter(function (threads) {
        return threads.id === _this2.threadId;
      });
    },
    threadReplies: function threadReplies() {
      var _this3 = this;

      return this.replies.filter(function (replies) {
        // console.log(this.threadId)
        return replies.thread_id === _this3.threadId;
      });
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('ThreadModule', ['update']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('ReplyModule', ['newReply']), {
    onReply: function onReply() {
      var _this4 = this;

      var formdata = this.replyForm; // Add user and thread

      formdata['user_id'] = this.current_user.id;
      formdata['thread_id'] = this.threadId; // Post reply

      this.$store.dispatch('ReplyModule/create', formdata).then(function (response) {
        // 
        _this4.reply = false;

        _this4.$Notice.success({
          title: 'Replied to thread'
        });
      })["catch"](function (error) {
        _this4.$Notice.error({
          title: 'You are not authorised to reply to this thread'
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _DiscussionListItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscussionListItemComponent */ "./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue");
/* harmony import */ var _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Widgets/PaginationComponent */ "./resources/js/components/Widgets/PaginationComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'discussion-list-item': _DiscussionListItemComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      moduleName: 'ThreadModule'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user', 'isAdmin']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ThreadModule', ['threads', 'meta', 'links'])),
  methods: {
    showTopic: function showTopic(title) {
      this.$emit('showTopicThread', title);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ForumComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ForumComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Topics_TopicFormComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topics/TopicFormComponent */ "./resources/js/components/Forum/Topics/TopicFormComponent.vue");
/* harmony import */ var _Topics_TopicsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Topics/TopicsComponent */ "./resources/js/components/Forum/Topics/TopicsComponent.vue");
/* harmony import */ var _Discussions_DiscussionsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Discussions/DiscussionsComponent */ "./resources/js/components/Forum/Discussions/DiscussionsComponent.vue");
/* harmony import */ var _Discussions_DiscussionFormComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Discussions/DiscussionFormComponent */ "./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'topics-view': _Topics_TopicsComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    'topic-form': _Topics_TopicFormComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    'discussions-view': _Discussions_DiscussionsComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    'discussion-form': _Discussions_DiscussionFormComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    'search': _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    'filter-a': _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    'stats': _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_8__["default"],
    'modal-btn': _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      list: false,
      threadModal: false,
      topicModal: false,
      moduleName: 'ThreadModule',
      threadstats: '',
      filtered: false,
      typeA: 'year',
      typeB: 'topic',
      statsA: 'topics',
      statsB: 'threads',
      loading: true,
      topicslist: false,
      threadlist: false,
      topicEdit: {}
    };
  },
  created: function created() {
    var _this = this;

    this.fetchThreads().then(function (response) {
      // Set loading to false
      _this.showthreads();
    })["catch"](function (error) {
      // Display this error in human readable format
      _this.topicslist = true;
    }), this.fetchTopics(), this.fetchReplies();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('ReplyModule', ['replies']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('TopicModule', ['topics']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['current_user', 'isAdmin']), {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: year - 1960
      }, function (value, index) {
        return 1961 + index;
      }).reverse();
    },
    topic: function topic() {
      // Ensure topics are there first
      var t = typeof this.topics != 'undefined' ? this.topics : []; // If there is stuff in there

      if (Object.keys(t).length === 0) {
        return _toConsumableArray(new Set(t.map(function (topic) {
          return topic.title;
        })));
      } else {
        var response = ['No Topics '];
        return response;
      }
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    // Update
    Echo.channel('threads').listen('ThreadCreated', function (e) {
      _this2.$store.dispatch('ThreadModule/newThread', e.threads);
    }); // Thread like count

    Echo.channel('threads').listen('UpdateThreadLikeCount', function (e) {
      // Find index
      var idx = _this2.threads.findIndex(function (elem) {
        return elem.id === e.thread[0].id;
      }); // Splice and replace array


      _this2.threads.splice(idx, 1, e.thread[0]); // console.log(e.thread[0].id)

    });
    Echo.channel('stats').listen('ThreadStats', function (e) {
      _this2.threadstats = e.threadstats;
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('ThreadModule', {
    fetchThreads: 'fetch',
    filterThreads: 'filter'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('ReplyModule', {
    fetchTopics: 'fetch'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('TopicModule', {
    fetchReplies: 'fetch'
  }), {
    // Show all topics
    showtopics: function showtopics() {
      this.topicslist = true;
      this.threadlist = this.loading = false;
    },
    // Show all threads
    showthreads: function showthreads() {
      this.threadlist = true;
      this.topicslist = this.loading = false;
    },
    // clear all filters
    clearFilters: function clearFilters() {
      var _this3 = this;

      this.fetchThreads().then(function () {
        _this3.filtered = false;
      })["catch"](function (error) {
        _this3.$Notice.error({
          title: 'Nothing found'
        });
      });
    },
    // Show topic threads
    showTopic: function showTopic(title) {
      var _this4 = this;

      this.filterThreads({
        'criteria': 'topic',
        'term': title
      }).then(function (response) {
        _this4.threadlist = true;
        _this4.topicslist = _this4.loading = false;
      })["catch"](function (error) {
        // Console error
        _this4.$Notice.info({
          title: 'No threads found',
          desc: 'This topic has no threads'
        });
      });
    },
    // Edit topic
    editTopics: function editTopics(topic) {
      this.topicEdit = topic;
      this.topicModal = true;
    },
    // Recent threads
    mostRecentThreads: function mostRecentThreads() {
      this.filterThreads({
        'criteria': 'recent',
        'term': 'recent'
      });
    },
    // Top popular threads
    mostLikedThreads: function mostLikedThreads() {
      // Loop through thread return the top threads
      this.filterThreads({
        'criteria': 'popular',
        'term': 'popular'
      });
    },
    // Top viewed threads
    mostViewedThreads: function mostViewedThreads() {
      // Loop through thread return top thread
      this.filterThreads({
        'criteria': 'mostViewed',
        'term': 'mostviewed'
      });
    },
    // active threads
    // TODO: fix bug, double click to fetch data
    currentActiveThreads: function currentActiveThreads() {
      // Top recent comments
      this.filterThreads({
        'criteria': 'active',
        'term': 'active'
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewReplyComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/NewReplyComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['threadId', 'replyId', 'user'],
  data: function data() {
    return {
      replyForm: {
        body: ''
      },
      config: {
        placeholder: 'Compose a reply',
        theme: 'snow'
      },
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
    };
  },
  methods: {
    createReply: function createReply() {
      var _this = this;

      var formdata = this.replyForm; // Add user and thread

      formdata['user_id'] = this.user;
      formdata['thread_id'] = this.threadId;
      formdata['reply_id'] = this.replyId; // Post reply

      this.$store.dispatch('ReplyModule/create', formdata).then(function (response) {
        _this.$Message.success('Reply sent');
      })["catch"](function (error) {
        _this.$Message.success('Reply not sent');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ReplyComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ReplyComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewReplyComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewReplyComponent */ "./resources/js/components/Forum/NewReplyComponent.vue");
/* harmony import */ var _ReplyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplyComponent */ "./resources/js/components/Forum/ReplyComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'reply',
  props: ['reply', 'user'],
  components: {
    'reply': _ReplyComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    'new-reply': _NewReplyComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      replysm: false
    };
  },
  methods: {
    likeReply: function likeReply(id) {
      var _this = this;

      var data = {
        likes: 1
      }; // axios

      axios({
        method: 'patch',
        url: 'api/replies/' + id,
        data: data
      }).then(function (response) {
        _this.$Notice.success({
          title: 'You liked this'
        });
      })["catch"](function (error) {
        _this.$Notice.error({
          title: 'Error'
        });
      });
    },
    deleteReply: function deleteReply(id) {
      var _this2 = this;

      axios({
        method: 'delete',
        url: 'api/replies/' + id
      }).then(function (response) {
        _this2.$Notice.success({
          title: 'Reply Deleted'
        });
      })["catch"](function (error) {
        _this2.$Notice.error({
          title: 'Reply not deleted'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['topic'],
  data: function data() {
    return {
      topicForm: {
        title: this.topic.title,
        description: this.topic.description,
        "public": this.topic["public"]
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('TopicModule', ['topics'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('TopicModule', ['create', 'update']), {
    onSubmit: function onSubmit() {
      var _this = this;

      var formdata = this.topicForm; // Push to db

      this.create(formdata).then(function (response) {
        _this.$Notice.success({
          title: 'Topic Created',
          desc: 'Your topic was succesfully created'
        });
      })["catch"](function (error) {
        _this.$Notice.error({
          title: 'Topic not created',
          desc: 'Your topic was not created'
        });
      });
    },
    updateTopic: function updateTopic() {
      var _this2 = this;

      var formdata = this.topicForm; // Data

      var params = {
        id: this.topic.id,
        data: formdata
      };
      this.update(params).then(function (response) {
        _this2.$Notice.success({
          title: 'Topic Updated',
          desc: 'Your topic was succesfully updated'
        })["catch"](function (error) {
          _this2.$Notice.error({
            title: 'Topic not updated',
            desc: 'Your topic was not updated'
          });
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['topics', 'isAdmin', 'user'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['subscriptions'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('TopicModule', ['delete', 'subscribe', 'unsubscribe']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AuthModule', {
    sub: 'subscribe'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AuthModule', {
    unsub: 'unsubscribe'
  }), {
    // Following
    following: function following(id) {
      return this.subscriptions.includes(id);
    },
    followTopic: function followTopic(topic) {
      var _this = this;

      var data = {
        'user': this.user.id
      };
      var params = {
        'topic': topic.id,
        'data': data
      };
      this.subscribe(params).then(function (response) {
        _this.sub(topic);
      })["catch"](function (error) {
        _this.$Notice.error({
          title: 'Cannot follow this topic'
        });
      });
    },
    unfollowTopic: function unfollowTopic(topic) {
      var _this2 = this;

      var data = {
        'user': this.user.id
      };
      var params = {
        'topic': topic.id,
        'data': data
      };
      this.unsubscribe(params).then(function (response) {
        _this2.unsub(topic);
      })["catch"](function (error) {
        _this2.$Notice.error({
          title: 'Cannot unfollow this topic'
        });
      });
    },
    showTopicThreads: function showTopicThreads(title) {
      this.$emit('showTopicThread', title);
    },
    editTopic: function editTopic(id, title) {
      this.$router.push({
        name: 'topic',
        params: {
          id: id,
          title: title
        }
      });
    },
    deleteTopic: function deleteTopic(id) {
      this["delete"](id).then(function (response) {})["catch"](function (error) {});
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TopicFormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicFormComponent */ "./resources/js/components/Forum/Topics/TopicFormComponent.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'topic-form': _TopicFormComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('TopicModule', ['topics']), {
    topic: function topic() {
      var _this = this;

      var top = this.topics.filter(function (t) {
        return t.id === _this.topicId;
      });
      return top[0];
    }
  }),
  data: function data() {
    return {
      topicId: this.$route.params.id,
      addition: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TopicListItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicListItemComponent */ "./resources/js/components/Forum/Topics/TopicListItemComponent.vue");
/* harmony import */ var _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Widgets/PaginationComponent */ "./resources/js/components/Widgets/PaginationComponent.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'topic-list-item': _TopicListItemComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      moduleName: 'ForumModule'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['current_user', 'isAdmin']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('TopicModule', ['topics', 'meta', 'links'])),
  methods: {
    showTopic: function showTopic(title) {
      this.$emit('showTopicThread', title);
    },
    editTopic: function editTopic(topic) {
      this.$emit('editTopic', topic);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=template&id=5986d504&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=template&id=5986d504& ***!
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
    { staticClass: "mb-2 py-2" },
    [
      _c(
        "Form",
        {
          attrs: { "label-position": "top" },
          model: {
            value: _vm.threadForm,
            callback: function($$v) {
              _vm.threadForm = $$v
            },
            expression: "threadForm"
          }
        },
        [
          _c("div", { staticClass: "w-full flex my-4 p-2 bg-gray-100" }, [
            _c("div", { staticClass: "w-1/3" }, [
              _c("p", { staticClass: "text-base" }, [
                _vm._v(" Discussion question ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "Row",
            { staticClass: "px-4", attrs: { gutter: 16 } },
            [
              _c(
                "Col",
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Discussion Title" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          type: "text",
                          placeholder: "Discussion title"
                        },
                        model: {
                          value: _vm.threadForm.subject,
                          callback: function($$v) {
                            _vm.$set(_vm.threadForm, "subject", $$v)
                          },
                          expression: "threadForm.subject"
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
            { staticClass: "px-4", attrs: { gutter: 16 } },
            [
              _c(
                "Col",
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Discusion Question" } },
                    [
                      _c("quill", {
                        attrs: { config: _vm.config, output: "html" },
                        model: {
                          value: _vm.threadForm.body,
                          callback: function($$v) {
                            _vm.$set(_vm.threadForm, "body", $$v)
                          },
                          expression: "threadForm.body"
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
          _c("div", { staticClass: "w-full flex my-4 p-2 bg-gray-100" }, [
            _c("div", { staticClass: "w-1/3" }, [
              _c("p", { staticClass: "text-base" }, [
                _vm._v(" Discussion topic ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "Row",
            { staticClass: "px-4", attrs: { gutter: 16 } },
            [
              _c(
                "Col",
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Topic" } },
                    [
                      _c(
                        "Select",
                        {
                          attrs: { size: "large" },
                          model: {
                            value: _vm.threadForm.topic_id,
                            callback: function($$v) {
                              _vm.$set(_vm.threadForm, "topic_id", $$v)
                            },
                            expression: "threadForm.topic_id"
                          }
                        },
                        _vm._l(_vm.topics, function(topic) {
                          return _c(
                            "Option",
                            { key: topic.id, attrs: { value: topic.id } },
                            [_vm._v(" " + _vm._s(topic.title))]
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
            { staticClass: "px-4", attrs: { gutter: 16 } },
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
                              _vm.threadModal = false
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
                            "\n                        Create Thread\n                    "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.threads, function(thread) {
      return _c(
        "div",
        {
          key: thread.id,
          staticClass:
            "max-w-4xl px-10 my-4 py-2 border-l-4 border-teal-800 bg-white shadow-md"
        },
        [
          _c("div", { staticClass: "flex justify-between items-center" }, [
            _c("span", { staticClass: "font-light text-gray-600 text-xs" }, [
              _vm._v(
                _vm._s(
                  _vm._f("moment")(thread.created_at, "dddd, MMMM Do YYYY")
                )
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "px-2 py-1 bg-gray-600 text-gray-100 font-medium rounded hover:bg-gray-500 text-xs",
                on: {
                  click: function($event) {
                    return _vm.showTopic(thread.topic.title)
                  }
                }
              },
              [_vm._v(_vm._s(thread.topic.title))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2" }, [
            _c(
              "a",
              {
                staticClass:
                  "text-gray-700 font-sans font-medium hover:text-gray-600 cursor-pointer",
                on: {
                  click: function($event) {
                    return _vm.viewThread(thread.id, thread.subject)
                  }
                }
              },
              [_vm._v(_vm._s(thread.subject))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-between items-center mt-2" }, [
            _c("div", { staticClass: "mt-4 flex items-center" }, [
              _c("div", { staticClass: "flex mr-2 text-gray-700 text-sm" }, [
                _c(
                  "li",
                  {
                    staticClass:
                      "list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider ",
                    on: {
                      click: function($event) {
                        return _vm.likeItem(thread.id)
                      }
                    }
                  },
                  [
                    _c("Icon", {
                      staticClass: "bg-red",
                      attrs: { type: "ios-heart-outline" }
                    }),
                    _vm._v(
                      " " + _vm._s(thread.likes) + "\n                    "
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mr-2 text-gray-700 text-sm" }, [
                _c(
                  "li",
                  {
                    staticClass:
                      "list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider"
                  },
                  [
                    _c("Icon", { attrs: { type: "ios-eye-outline" } }),
                    _vm._v(
                      " " + _vm._s(thread.views) + "\n                    "
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mr-2 text-gray-700 text-sm" }, [
                _c(
                  "li",
                  {
                    staticClass:
                      "list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider"
                  },
                  [
                    _c("Icon", { attrs: { type: "ios-chatbubbles-outline" } }),
                    _vm._v(
                      " " + _vm._s(thread.comments) + "\n                    "
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mr-2 text-gray-700 text-sm" }, [
                thread.user_id == _vm.user.id || _vm.isAdmin
                  ? _c(
                      "li",
                      {
                        staticClass:
                          "list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "font-sm tracking-wide font-medium text-red-700",
                            on: {
                              click: function($event) {
                                return _vm.deleteItem(thread.id)
                              }
                            }
                          },
                          [_c("Icon", { attrs: { type: "ios-trash" } })],
                          1
                        )
                      ]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "a",
                { staticClass: "flex items-center", attrs: { href: "#" } },
                [
                  _c("img", {
                    staticClass:
                      "mx-4 w-10 h-10 object-cover rounded-full hidden sm:block",
                    attrs: { src: "images/discuss.svg", alt: "avatar" }
                  }),
                  _vm._v(" "),
                  _c("h1", { staticClass: "text-gray-700 font-bold" }, [
                    _vm._v(_vm._s(thread.user.username))
                  ])
                ]
              )
            ])
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3& ***!
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
  return _c("div", { staticClass: "w-full h-full" }, [
    _c("div", { staticClass: "w-full flex flex-wrap p-5" }, [
      _c(
        "div",
        { staticClass: "w-full h-full flex flex-wrap p-2" },
        [
          _vm._l(_vm.threadData, function(thread) {
            return _c(
              "div",
              {
                key: thread.id,
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
                          thread.user.username
                            ? _c(
                                "Avatar",
                                {
                                  staticClass: "mx-2",
                                  attrs: { size: "default" }
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(thread.user.username.slice(0, 2))
                                  )
                                ]
                              )
                            : _c("Avatar", [_vm._v(" -- ")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-sans font-medium tracking-wide text-gray-600 text-lg"
                            },
                            [_vm._v(_vm._s(thread.user.username))]
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
                                  _vm._f("moment")(thread.created_at, "from")
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
                        "text-gray-900 font-normal text-4xl font-sans tracking-wide mb-2"
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(thread.subject) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", {
                    staticClass:
                      "text-gray-900 text-base tracking-wide font-sans font-normal",
                    domProps: { innerHTML: _vm._s(thread.body) }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-2/5 mt-3 " }, [
                    !_vm.reply
                      ? _c(
                          "a",
                          {
                            staticClass:
                              "font-sm tracking-wide font-medium font-sans text-gray-700",
                            on: {
                              click: function($event) {
                                _vm.reply = true
                              }
                            }
                          },
                          [_vm._v(" Reply")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.reply
                    ? _c(
                        "div",
                        { staticClass: "w-2/5 mt-5" },
                        [
                          _c("new-reply", {
                            attrs: {
                              threadId: thread.id,
                              user: _vm.current_user.id
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
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
                          staticClass:
                            "w-full text-sm font-sans tracking-wide mb-2"
                        },
                        [
                          _vm._v(
                            "\n                            Views: " +
                              _vm._s(thread.views) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "w-full text-sm font-sans tracking-wide mb-2"
                        },
                        [
                          _vm._v(
                            "\n                            Tags: " +
                              _vm._s(thread.topic.title) +
                              "\n                        "
                          )
                        ]
                      )
                    ]
                  )
                ])
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full overflow-hidden p-2 m-2" },
            _vm._l(_vm.threadReplies, function(reply) {
              return _c("reply", {
                key: reply.id,
                staticClass: "w-10/12 pl-1 pt-2",
                attrs: { reply: reply, user: _vm.current_user }
              })
            }),
            1
          )
        ],
        2
      )
    ])
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
          "\n                            Discussion Info\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=template&id=c088e462&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=template&id=c088e462& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full p-4 h-auto" }, [
    _c(
      "div",
      { staticClass: "w-full" },
      [
        _c("discussion-list-item", {
          attrs: { threads: _vm.threads, user: _vm.current_user },
          on: {
            showTopicThread: function($event) {
              return _vm.showTopic($event)
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.meta
      ? _c(
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
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ForumComponent.vue?vue&type=template&id=16fc2b95&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ForumComponent.vue?vue&type=template&id=16fc2b95& ***!
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
              value: _vm.threadModal,
              callback: function($$v) {
                _vm.threadModal = $$v
              },
              expression: "threadModal"
            }
          },
          [
            _c("discussion-form"),
            _vm._v(" "),
            _c("div", { attrs: { slot: "footer" }, slot: "footer" })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "Modal",
          {
            attrs: { width: "700" },
            model: {
              value: _vm.topicModal,
              callback: function($$v) {
                _vm.topicModal = $$v
              },
              expression: "topicModal"
            }
          },
          [
            _c("topic-form", { attrs: { topic: _vm.topicEdit } }),
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
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.topic.length > 0,
                          expression: "topic.length > 0"
                        }
                      ],
                      staticClass: "ml-4",
                      attrs: {
                        "module-name": _vm.moduleName,
                        "filter-items": _vm.topic,
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
                        attrs: { type: "ios-book-outline", size: "16" }
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
                          _vm.threadModal = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        New Thread\n                    "
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
                attrs: { figure: _vm.threadstats.topics, title: _vm.statsA }
              }),
              _vm._v(" "),
              _c("stats", {
                attrs: { figure: _vm.threadstats.threads, title: _vm.statsB }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex flex-wrap pt-5 min-h-screen" }, [
          _c(
            "div",
            {
              staticClass:
                "w-1/6 relative bg-white pt-5 border-r-2 border-gray-200"
            },
            [
              _c(
                "div",
                { staticClass: "flex flex-col sm:flex-row sm:justify-around" },
                [
                  _c("div", { staticClass: "w-72 h-screen" }, [
                    _c("nav", { staticClass: "mt-10 px-6" }, [
                      _c("div", [
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-gray-600 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal"
                          },
                          [
                            _vm._v(
                              "\n                                    Topics\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: { click: _vm.showtopics }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        Explore topics\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.isAdmin,
                                expression: "isAdmin"
                              }
                            ],
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: {
                              click: function($event) {
                                _vm.topicModal = true
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        Create new topic\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-gray-600 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal"
                          },
                          [
                            _vm._v(
                              "\n                                    Discussions\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: { click: _vm.showthreads }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        All discussions\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: { click: _vm.mostLikedThreads }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        Popular discussions\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: { click: _vm.mostViewedThreads }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        Top discussions\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: { click: _vm.currentActiveThreads }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        Active discussions\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start",
                            on: { click: _vm.mostRecentThreads }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "mx-4 text-md font-normal" },
                              [
                                _vm._v(
                                  "\n                                        Recent discussions\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "flex-grow text-right" })
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-5/6 px-5" },
            [
              _c("topics-view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.topicslist,
                    expression: "topicslist"
                  }
                ],
                on: {
                  showTopicThread: function($event) {
                    return _vm.showTopic($event)
                  },
                  editTopic: function($event) {
                    return _vm.editTopics($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("discussions-view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.threadlist,
                    expression: "threadlist"
                  }
                ],
                on: {
                  showTopicThread: function($event) {
                    return _vm.showTopic($event)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading"
                    }
                  ],
                  staticClass: "w-full p-4 h-auto"
                },
                [_vm._m(1)]
              )
            ],
            1
          )
        ])
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
        [_vm._v("\n                    Forum\n                ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        { staticClass: "flex flex-wrap content-center justify-center " },
        [
          _c("img", {
            staticClass: "h-48 w-full mb-4",
            attrs: { src: "images/discuss.svg" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "font-light text-gray-600" }, [
            _vm._v(
              "\n                                Follow some topics to get started\n                            "
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewReplyComponent.vue?vue&type=template&id=64364e4a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/NewReplyComponent.vue?vue&type=template&id=64364e4a& ***!
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
      _c(
        "Form",
        { attrs: { model: _vm.replyForm, "label-position": "top" } },
        [
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
                    { attrs: { label: "Reply" } },
                    [
                      _c("quill", {
                        attrs: { config: _vm.config, output: "html" },
                        model: {
                          value: _vm.replyForm.body,
                          callback: function($$v) {
                            _vm.$set(_vm.replyForm, "body", $$v)
                          },
                          expression: "replyForm.body"
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
                              _vm.reply = false
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
                          attrs: { type: "success" },
                          on: { click: _vm.createReply }
                        },
                        [
                          _c("Icon", { attrs: { type: "ios-checkmark" } }),
                          _vm._v(
                            "\n                        Submit\n                    "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ReplyComponent.vue?vue&type=template&id=5c89d728&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ReplyComponent.vue?vue&type=template&id=5c89d728& ***!
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
  return _c("ul", [
    _c(
      "li",
      { staticClass: " list-none w-auto m-2 ml-5 rounded-sm" },
      [
        _c("div", { staticClass: "bg-white px-3 py-4" }, [
          _c("div", { staticClass: "w-full" }, [
            _c(
              "li",
              { staticClass: "list-none" },
              [
                _c("Avatar", { attrs: { size: "small", icon: "ios-person" } }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "ml-1 font-sans font-thin text-gray-600" },
                  [_vm._v(_vm._s(_vm.reply.user.username))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-2 mt-2 font-medium font-sans" }, [
            _c("span", {
              staticClass: "text-base",
              domProps: { innerHTML: _vm._s(_vm.reply.body) }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "p-2 font-thin text-xs text-gray-600" }, [
            _vm._v(_vm._s(_vm._f("moment")(_vm.reply.created_at, "from")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2 mb-2 w-full flex flex-wrap " }, [
            _c(
              "li",
              {
                staticClass: "p-2 ml-2",
                on: {
                  click: function($event) {
                    return _vm.likeReply(_vm.reply.id)
                  }
                }
              },
              [
                _c("Icon", { attrs: { type: "ios-heart-outline" } }),
                _c("span", { staticClass: "ml-2 font-medium text-sm" }, [
                  _vm._v(" " + _vm._s(_vm.reply.likes))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "p-2 ml-2" }, [
              _c(
                "a",
                {
                  staticClass:
                    "font-sm tracking-wide font-medium font-sans text-gray-700",
                  on: {
                    click: function($event) {
                      _vm.replysm = true
                    }
                  }
                },
                [_vm._v("Reply")]
              )
            ]),
            _vm._v(" "),
            _vm.reply.user_id === _vm.user.id
              ? _c("li", { staticClass: "p-2 ml-2" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "font-sm tracking-wide font-medium font-sans text-gray-700 hover:text-red-700",
                      on: {
                        click: function($event) {
                          return _vm.deleteReply(_vm.reply.id)
                        }
                      }
                    },
                    [_vm._v(" Remove ")]
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.replysm
            ? _c(
                "div",
                { staticClass: "w-2/5 mt-5" },
                [
                  _c("new-reply", {
                    attrs: {
                      threadId: _vm.reply.thread_id,
                      replyId: _vm.reply.id,
                      user: _vm.user.id
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._l(_vm.reply.replies, function(reply) {
          return _c("reply", {
            key: reply.id,
            staticClass: "pl-2",
            attrs: { reply: reply, user: _vm.user }
          })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=template&id=28243dec&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=template&id=28243dec& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mb-2 py-2" },
    [
      _c(
        "Form",
        {
          attrs: { "label-position": "top" },
          model: {
            value: _vm.topicForm,
            callback: function($$v) {
              _vm.topicForm = $$v
            },
            expression: "topicForm"
          }
        },
        [
          _c("div", { staticClass: "w-full flex my-4 p-2 bg-gray-100" }, [
            _c("div", { staticClass: "w-1/3" }, [
              _c("p", { staticClass: "text-base" }, [_vm._v(" Topic ")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "Row",
            { staticClass: "px-4", attrs: { gutter: 16 } },
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
                        attrs: {
                          size: "large",
                          type: "text",
                          placeholder: "Title"
                        },
                        model: {
                          value: _vm.topicForm.title,
                          callback: function($$v) {
                            _vm.$set(_vm.topicForm, "title", $$v)
                          },
                          expression: "topicForm.title"
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
            { staticClass: "px-4", attrs: { gutter: 16 } },
            [
              _c(
                "Col",
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Description" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          placeholder: "Description",
                          type: "textarea"
                        },
                        model: {
                          value: _vm.topicForm.description,
                          callback: function($$v) {
                            _vm.$set(_vm.topicForm, "description", $$v)
                          },
                          expression: "topicForm.description"
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
          _c("div", { staticClass: "w-full flex my-4 p-2 bg-gray-100" }, [
            _c("div", { staticClass: "w-1/3" }, [
              _c("p", { staticClass: "text-base" }, [_vm._v(" Topic privacy ")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "Row",
            { staticClass: "px-4", attrs: { gutter: 16 } },
            [
              _c(
                "Col",
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Public" } },
                    [
                      _c("i-switch", {
                        attrs: { size: "large" },
                        model: {
                          value: _vm.topicForm.public,
                          callback: function($$v) {
                            _vm.$set(_vm.topicForm, "public", $$v)
                          },
                          expression: "topicForm.public"
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
            { staticClass: "px-4", attrs: { gutter: 16 } },
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
                        [
                          _c("Icon", { attrs: { type: "ios-cancel" } }),
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.topic.id
                        ? _c(
                            "Button",
                            {
                              attrs: { type: "primary" },
                              on: { click: _vm.updateTopic }
                            },
                            [
                              _c("Icon", { attrs: { type: "ios-checkmark" } }),
                              _vm._v(
                                "\n                        Update\n                    "
                              )
                            ],
                            1
                          )
                        : _c(
                            "Button",
                            {
                              attrs: { type: "primary" },
                              on: { click: _vm.onSubmit }
                            },
                            [
                              _c("Icon", { attrs: { type: "ios-checkmark" } }),
                              _vm._v(
                                "\n                        Create Topic\n                    "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=template&id=41d45d02&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=template&id=41d45d02& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-4/5" },
    _vm._l(_vm.topics, function(topic) {
      return _c(
        "div",
        {
          key: topic.id,
          staticClass:
            "flex border-l-4 border-teal-800 mb-2 p-12 px-6 py-10 sm:px-10 sm:py-6 bg-white shadow-md lg:shadow-lg h-40"
        },
        [
          _c("div", { staticClass: "w-1/2 flex" }, [
            _vm._m(0, true),
            _vm._v(" "),
            _c("div", { staticClass: "w-3/4 px-4 py-4" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-medium font-sans text-gray-700 mb-2 cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.showTopicThreads(topic.title)
                    }
                  }
                },
                [_vm._v(" " + _vm._s(topic.title) + " ")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-xs text-gray-500" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(topic.description) +
                    "\n                "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/2 border-l-2 border-gray-600 px-4" }, [
            _c("div", { staticClass: "w-full flex border-b border-gray-400" }, [
              _c("div", { staticClass: "flex-grow p-3 w-1/3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex justify-center text-xs text-gray-500 mb-2"
                  },
                  [
                    _vm._v(
                      "\n                        Discussions\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      " flex font-medium text-sm text-gray-700  justify-center"
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(topic.discussions) +
                        "\n                    "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex-grow p-3 w-1/3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex justify-center text-xs text-gray-500 mb-2"
                  },
                  [
                    _vm._v(
                      "\n                        Subscribers\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      " flex font-medium text-sm text-gray-700  justify-center"
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(topic.subscribers) +
                        "\n                    "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex-grow p-3 w-1/3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex justify-center text-xs text-gray-500 mb-2"
                  },
                  [
                    _vm._v(
                      "\n                        Activity\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      " flex font-medium text-xs text-gray-700  justify-center"
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm._f("moment")(topic.activity, "from", true)) +
                        "\n                    "
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full flex" }, [
              _c("div", { staticClass: "flex-grow p-3 w-1/4" }, [
                _c("ul", { staticClass: "flex w-full justify-start" }, [
                  _c(
                    "li",
                    {
                      staticClass:
                        "text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer"
                    },
                    [
                      topic.public
                        ? _c("Icon", {
                            attrs: { size: "18", type: "md-unlock" }
                          })
                        : _c("Icon", { attrs: { size: "18", type: "md-lock" } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer"
                    },
                    [
                      _vm.following(topic.id)
                        ? _c(
                            "a",
                            {
                              staticClass:
                                "font-normal font-sans text-gray-700 tracking-wider cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.unfollowTopic(topic)
                                }
                              }
                            },
                            [
                              _c("Icon", {
                                attrs: {
                                  size: "18",
                                  color: "red",
                                  type: "ios-heart"
                                }
                              }),
                              _vm._v(" Following ")
                            ],
                            1
                          )
                        : _c(
                            "a",
                            {
                              staticClass:
                                "font-normal font-sans text-gray-700 tracking-wider cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.followTopic(topic)
                                }
                              }
                            },
                            [
                              _c("Icon", {
                                attrs: { size: "18", type: "ios-heart-outline" }
                              }),
                              _vm._v(" Follow ")
                            ],
                            1
                          )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isAdmin,
                          expression: "isAdmin"
                        }
                      ],
                      staticClass:
                        "text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.editTopic(topic.id, topic.title)
                        }
                      }
                    },
                    [
                      _c("Icon", { attrs: { size: "18", type: "ios-eye" } }),
                      _vm._v(" Edit\n                        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isAdmin,
                          expression: "isAdmin"
                        }
                      ],
                      staticClass:
                        "text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.deleteTopic(topic.id)
                        }
                      }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "font-sm tracking-wide font-medium" },
                        [
                          _c("Icon", {
                            attrs: {
                              size: "18",
                              color: "red",
                              type: "ios-trash"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/4" }, [
      _c("img", {
        staticClass: "h-24 w-full mb-4",
        attrs: { src: "images/discuss.svg" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=template&id=2bdc65ab&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=template&id=2bdc65ab& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "w-full overflow-hidden p-2 m-2 bg-white flex" }, [
      _c("div", { staticClass: "w-9/12" }, [
        _c("div", { staticClass: "w-4/5 mb-3 flex items-baseline" }, [
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
                      _vm._s(_vm._f("moment")(_vm.topic.created_at, "from")) +
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
              "text-gray-900 font-normal text-4xl font-sans tracking-wide mb-2"
          },
          [
            _vm._v(
              "\n                " + _vm._s(_vm.topic.title) + "\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c("p", {
          staticClass:
            "text-gray-900 text-base tracking-wide font-sans font-normal",
          domProps: { innerHTML: _vm._s(_vm.topic.description) }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-3/12 p-5 ml-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap items-center px-5 pt-5" }, [
          _c(
            "p",
            { staticClass: "w-full text-sm font-sans tracking-wide mb-2" },
            [
              _vm._v(
                "\n                    Discussions: " +
                  _vm._s(_vm.topic.discussions) +
                  "\n                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "w-full text-sm font-sans tracking-wide mb-2" },
            [
              _vm._v(
                "\n                    Subs: " +
                  _vm._s(_vm.topic.subscribers) +
                  "\n                "
              )
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "w-full flex mt-4 p-2 bg-gray-100 hover:bg-teal-100" },
      [
        _c("div", { staticClass: "w-1/3" }, [
          !_vm.addition
            ? _c("p", { staticClass: "text-base" }, [_vm._v(" Edit Topic ")])
            : _c("p", { staticClass: "text-base" }, [_vm._v(" Topic ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3" }, [
          !_vm.addition
            ? _c(
                "a",
                {
                  staticClass: "px-2 text-gray-700 hover:text-gray-900",
                  on: {
                    click: function($event) {
                      _vm.addition = true
                    }
                  }
                },
                [_c("Icon", { attrs: { type: "ios-add", size: "30" } })],
                1
              )
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _vm.addition
      ? _c(
          "div",
          { staticClass: "w-full px-4 py-2" },
          [
            _c("topic-form", {
              staticClass: "w-4/5",
              attrs: { topic: _vm.topic }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center px-5 pt-5" }, [
      _c("p", { staticClass: "w-full text-xl tracking-wider font-sans" }, [
        _vm._v("\n                    Topic Info\n                ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=template&id=1e390de7&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=template&id=1e390de7& ***!
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
  return _c("div", { staticClass: "w-full p-4 h-auto" }, [
    _c(
      "div",
      { staticClass: "w-full" },
      [
        _c("topic-list-item", {
          attrs: {
            topics: _vm.topics,
            isAdmin: _vm.isAdmin,
            user: _vm.current_user
          },
          on: {
            showTopicThread: function($event) {
              return _vm.showTopic($event)
            },
            editTopic: function($event) {
              return _vm.editTopic($event)
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.meta
      ? _c(
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
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiscussionFormComponent_vue_vue_type_template_id_5986d504___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscussionFormComponent.vue?vue&type=template&id=5986d504& */ "./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=template&id=5986d504&");
/* harmony import */ var _DiscussionFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscussionFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiscussionFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscussionFormComponent_vue_vue_type_template_id_5986d504___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiscussionFormComponent_vue_vue_type_template_id_5986d504___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Discussions/DiscussionFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=template&id=5986d504&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=template&id=5986d504& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionFormComponent_vue_vue_type_template_id_5986d504___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionFormComponent.vue?vue&type=template&id=5986d504& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionFormComponent.vue?vue&type=template&id=5986d504&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionFormComponent_vue_vue_type_template_id_5986d504___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionFormComponent_vue_vue_type_template_id_5986d504___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiscussionListItemComponent_vue_vue_type_template_id_3eb1c6d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2& */ "./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2&");
/* harmony import */ var _DiscussionListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscussionListItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiscussionListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscussionListItemComponent_vue_vue_type_template_id_3eb1c6d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiscussionListItemComponent_vue_vue_type_template_id_3eb1c6d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionListItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionListItemComponent_vue_vue_type_template_id_3eb1c6d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionListItemComponent.vue?vue&type=template&id=3eb1c6d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionListItemComponent_vue_vue_type_template_id_3eb1c6d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionListItemComponent_vue_vue_type_template_id_3eb1c6d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiscussionViewComponent_vue_vue_type_template_id_5d3efcc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3& */ "./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3&");
/* harmony import */ var _DiscussionViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscussionViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiscussionViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscussionViewComponent_vue_vue_type_template_id_5d3efcc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiscussionViewComponent_vue_vue_type_template_id_5d3efcc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Discussions/DiscussionViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionViewComponent_vue_vue_type_template_id_5d3efcc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionViewComponent.vue?vue&type=template&id=5d3efcc3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionViewComponent_vue_vue_type_template_id_5d3efcc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionViewComponent_vue_vue_type_template_id_5d3efcc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionsComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionsComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiscussionsComponent_vue_vue_type_template_id_c088e462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscussionsComponent.vue?vue&type=template&id=c088e462& */ "./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=template&id=c088e462&");
/* harmony import */ var _DiscussionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscussionsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiscussionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscussionsComponent_vue_vue_type_template_id_c088e462___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiscussionsComponent_vue_vue_type_template_id_c088e462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Discussions/DiscussionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=template&id=c088e462&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=template&id=c088e462& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionsComponent_vue_vue_type_template_id_c088e462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiscussionsComponent.vue?vue&type=template&id=c088e462& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Discussions/DiscussionsComponent.vue?vue&type=template&id=c088e462&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionsComponent_vue_vue_type_template_id_c088e462___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscussionsComponent_vue_vue_type_template_id_c088e462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/ForumComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Forum/ForumComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumComponent_vue_vue_type_template_id_16fc2b95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumComponent.vue?vue&type=template&id=16fc2b95& */ "./resources/js/components/Forum/ForumComponent.vue?vue&type=template&id=16fc2b95&");
/* harmony import */ var _ForumComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/ForumComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumComponent_vue_vue_type_template_id_16fc2b95___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumComponent_vue_vue_type_template_id_16fc2b95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/ForumComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/ForumComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Forum/ForumComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForumComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ForumComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/ForumComponent.vue?vue&type=template&id=16fc2b95&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Forum/ForumComponent.vue?vue&type=template&id=16fc2b95& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumComponent_vue_vue_type_template_id_16fc2b95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForumComponent.vue?vue&type=template&id=16fc2b95& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ForumComponent.vue?vue&type=template&id=16fc2b95&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumComponent_vue_vue_type_template_id_16fc2b95___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumComponent_vue_vue_type_template_id_16fc2b95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/NewReplyComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Forum/NewReplyComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewReplyComponent_vue_vue_type_template_id_64364e4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewReplyComponent.vue?vue&type=template&id=64364e4a& */ "./resources/js/components/Forum/NewReplyComponent.vue?vue&type=template&id=64364e4a&");
/* harmony import */ var _NewReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewReplyComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/NewReplyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewReplyComponent_vue_vue_type_template_id_64364e4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewReplyComponent_vue_vue_type_template_id_64364e4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/NewReplyComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/NewReplyComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Forum/NewReplyComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReplyComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewReplyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/NewReplyComponent.vue?vue&type=template&id=64364e4a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Forum/NewReplyComponent.vue?vue&type=template&id=64364e4a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReplyComponent_vue_vue_type_template_id_64364e4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReplyComponent.vue?vue&type=template&id=64364e4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewReplyComponent.vue?vue&type=template&id=64364e4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReplyComponent_vue_vue_type_template_id_64364e4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReplyComponent_vue_vue_type_template_id_64364e4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/ReplyComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Forum/ReplyComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReplyComponent_vue_vue_type_template_id_5c89d728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReplyComponent.vue?vue&type=template&id=5c89d728& */ "./resources/js/components/Forum/ReplyComponent.vue?vue&type=template&id=5c89d728&");
/* harmony import */ var _ReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplyComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/ReplyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReplyComponent_vue_vue_type_template_id_5c89d728___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReplyComponent_vue_vue_type_template_id_5c89d728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/ReplyComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/ReplyComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Forum/ReplyComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ReplyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/ReplyComponent.vue?vue&type=template&id=5c89d728&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Forum/ReplyComponent.vue?vue&type=template&id=5c89d728& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyComponent_vue_vue_type_template_id_5c89d728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyComponent.vue?vue&type=template&id=5c89d728& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ReplyComponent.vue?vue&type=template&id=5c89d728&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyComponent_vue_vue_type_template_id_5c89d728___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyComponent_vue_vue_type_template_id_5c89d728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicFormComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicFormComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicFormComponent_vue_vue_type_template_id_28243dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicFormComponent.vue?vue&type=template&id=28243dec& */ "./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=template&id=28243dec&");
/* harmony import */ var _TopicFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicFormComponent_vue_vue_type_template_id_28243dec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicFormComponent_vue_vue_type_template_id_28243dec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Topics/TopicFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=template&id=28243dec&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=template&id=28243dec& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicFormComponent_vue_vue_type_template_id_28243dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicFormComponent.vue?vue&type=template&id=28243dec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicFormComponent.vue?vue&type=template&id=28243dec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicFormComponent_vue_vue_type_template_id_28243dec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicFormComponent_vue_vue_type_template_id_28243dec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicListItemComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicListItemComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicListItemComponent_vue_vue_type_template_id_41d45d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicListItemComponent.vue?vue&type=template&id=41d45d02& */ "./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=template&id=41d45d02&");
/* harmony import */ var _TopicListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicListItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicListItemComponent_vue_vue_type_template_id_41d45d02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicListItemComponent_vue_vue_type_template_id_41d45d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Topics/TopicListItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicListItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=template&id=41d45d02&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=template&id=41d45d02& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicListItemComponent_vue_vue_type_template_id_41d45d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicListItemComponent.vue?vue&type=template&id=41d45d02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicListItemComponent.vue?vue&type=template&id=41d45d02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicListItemComponent_vue_vue_type_template_id_41d45d02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicListItemComponent_vue_vue_type_template_id_41d45d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicViewComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicViewComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicViewComponent_vue_vue_type_template_id_2bdc65ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicViewComponent.vue?vue&type=template&id=2bdc65ab& */ "./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=template&id=2bdc65ab&");
/* harmony import */ var _TopicViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicViewComponent_vue_vue_type_template_id_2bdc65ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicViewComponent_vue_vue_type_template_id_2bdc65ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Topics/TopicViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=template&id=2bdc65ab&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=template&id=2bdc65ab& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicViewComponent_vue_vue_type_template_id_2bdc65ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicViewComponent.vue?vue&type=template&id=2bdc65ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicViewComponent.vue?vue&type=template&id=2bdc65ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicViewComponent_vue_vue_type_template_id_2bdc65ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicViewComponent_vue_vue_type_template_id_2bdc65ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicsComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicsComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicsComponent_vue_vue_type_template_id_1e390de7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicsComponent.vue?vue&type=template&id=1e390de7& */ "./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=template&id=1e390de7&");
/* harmony import */ var _TopicsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicsComponent_vue_vue_type_template_id_1e390de7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicsComponent_vue_vue_type_template_id_1e390de7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/Topics/TopicsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=template&id=1e390de7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=template&id=1e390de7& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsComponent_vue_vue_type_template_id_1e390de7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicsComponent.vue?vue&type=template&id=1e390de7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/Topics/TopicsComponent.vue?vue&type=template&id=1e390de7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsComponent_vue_vue_type_template_id_1e390de7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsComponent_vue_vue_type_template_id_1e390de7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);