(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-forum"],{

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
/* harmony import */ var _NewThreadComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewThreadComponent.vue */ "./resources/js/components/Forum/NewThreadComponent.vue");
/* harmony import */ var _ThreadListItemComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThreadListItemComponent */ "./resources/js/components/Forum/ThreadListItemComponent.vue");
/* harmony import */ var _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widgets/PaginationComponent */ "./resources/js/components/Widgets/PaginationComponent.vue");
/* harmony import */ var _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Widgets/SearchComponent */ "./resources/js/components/Widgets/SearchComponent.vue");
/* harmony import */ var _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widgets/FilterComponent */ "./resources/js/components/Widgets/FilterComponent.vue");
/* harmony import */ var _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Widgets/StatsComponent */ "./resources/js/components/Widgets/StatsComponent.vue");
/* harmony import */ var _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Widgets/ModalbtnComponent */ "./resources/js/components/Widgets/ModalbtnComponent.vue");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'new-thread': _NewThreadComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'thread-list-item': _ThreadListItemComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    'pagination': _Widgets_PaginationComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    'search': _Widgets_SearchComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    'filter-a': _Widgets_FilterComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    'stats': _Widgets_StatsComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    'modal-btn': _Widgets_ModalbtnComponent__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      list: false,
      threadModal: false,
      threadmeta: '',
      threadstats: '',
      searchTerm: '',
      filtered: false,
      typeA: 'year',
      typeB: 'topic',
      statsA: 'topics',
      statsB: 'threads',
      moduleName: 'ThreadModule'
    };
  },
  created: function created() {
    this.fetchThreads(), this.fetchTopics(), this.fetchReplies();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('AuthModule', ['current_user']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('TopicModule', ['topics']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('ReplyModule', ['replies']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('ThreadModule', ['threads', 'meta', 'links']), {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: year - 1960
      }, function (value, index) {
        return 1961 + index;
      }).reverse();
    },
    topic: function topic() {
      return _toConsumableArray(new Set(this.topics.map(function (topic) {
        return topic.title;
      })));
    }
  }),
  mounted: function mounted() {
    var _this = this;

    // Update
    Echo.channel('threads').listen('ThreadCreated', function (e) {
      _this.$store.dispatch('ThreadModule/newThread', e.threads);
    }); // Deleted thread

    Echo.channel('threads').listen('ThreadDeleted', function (e) {
      // Update threads
      _this.threadData = e.threads;
    }); // Thread like count

    Echo.channel('threads').listen('UpdateThreadLikeCount', function (e) {
      // Find index
      var idx = _this.threads.findIndex(function (elem) {
        return elem.id === e.thread[0].id;
      }); // Splice and replace array


      _this.threads.splice(idx, 1, e.thread[0]); // console.log(e.thread[0].id)

    }); // Filter threads

    Echo.channel('filters').listen('FilterThreads', function (e) {
      _this.$store.dispatch('ThreadModule/fetch', e.threads);
    }); // Search threads

    Echo.channel('searches').listen('SearchThreads', function (e) {
      _this.$store.dispatch('ThreadModule/fetch', e.threads);
    });
    Echo.channel('stats').listen('ThreadStats', function (e) {
      _this.threadstats = e.threadstats;
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
    // clear all filters
    clearFilters: function clearFilters() {
      var _this2 = this;

      this.fetchThreads().then(function () {
        _this2.filtered = false;
      })["catch"](function (error) {
        _this2.$Notice.error({
          title: 'Nothing found'
        });
      });
    },
    // Show topic threads
    showTopic: function showTopic(id) {
      var _this3 = this;

      var formdata = {
        topic: id
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'post',
        url: 'api/threads/filter',
        data: formdata
      }).then(function (response) {// Console response
      })["catch"](function (error) {
        // Console error
        _this3.$Notice.info({
          title: 'No threads found',
          desc: 'This topic has no threads'
        });
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewThreadComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/NewThreadComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['thread', 'user'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AuthModule', ['isAdmin'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ThreadModule', ['update', 'delete']), {
    // view thread
    viewThread: function viewThread(id) {
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
          id: id
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
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ReplyComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReplyComponent */ "./resources/js/components/Forum/ReplyComponent.vue");
/* harmony import */ var _NewReplyComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewReplyComponent */ "./resources/js/components/Forum/NewReplyComponent.vue");
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
      // console.log(this.replies.findIndex( elem => elem.id === e.reply[0].id))
      var idx = _this.replies.findIndex(function (elem) {
        return elem.id === e.reply[0].id;
      }); // // Splice and replace array


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
          title: 'Cannot reply to thread'
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/TopicComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/TopicComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      topicForm: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      var formdata = this.topicForm; // Push to db

      axios({
        method: 'post',
        url: 'api/topics',
        data: formdata
      }).then(function (response) {
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
    }
  }
});

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
            _c("new-thread"),
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
        _c("div", { staticClass: "w-full flex flex-wrap bg-white p-2 flex " }, [
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
          _c("div", { staticClass: "w-1/6 border-r border-r-black pt-5" }, [
            _c("nav", { staticClass: "w-full flex mb-2 " }, [
              _c("div", { staticClass: "mx-5" }, [
                _c("ul", { staticClass: "list-reset" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass:
                          "block p-2 text-gray-900 font-light tracking-wider text-sm",
                        on: { click: _vm.mostViewedThreads }
                      },
                      [_vm._v(" Popular All Time")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass:
                          "block p-2 text-gray-900 font-light tracking-wider text-sm",
                        on: { click: _vm.currentActiveThreads }
                      },
                      [_vm._v(" Active Threads")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass:
                          "block p-2 text-gray-900 font-light tracking-wider text-sm ",
                        on: { click: _vm.mostLikedThreads }
                      },
                      [_vm._v(" Popular")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass:
                          "block p-2 text-gray-900 font-light tracking-wider text-sm ",
                        on: { click: _vm.mostRecentThreads }
                      },
                      [_vm._v(" Recent")]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-5/6 px-5" }, [
            _c("div", { staticClass: "w-full" }, [
              _vm.threads
                ? _c(
                    "div",
                    _vm._l(_vm.threads, function(thread) {
                      return _c("thread-list-item", {
                        key: thread.id,
                        attrs: { thread: thread, user: _vm.current_user }
                      })
                    }),
                    1
                  )
                : _c("div", [_c("p", [_vm._v(" No discussions ")])])
            ])
          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewThreadComponent.vue?vue&type=template&id=5bf2a1e8&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/NewThreadComponent.vue?vue&type=template&id=5bf2a1e8& ***!
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
  return _c(
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
      _c(
        "h4",
        {
          staticClass:
            "text-lg text-semibold subpixel-antialiased tracking-wider"
        },
        [_vm._v(" New Thread ")]
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
            { attrs: { span: "12" } },
            [
              _c(
                "FormItem",
                { attrs: { label: "Category" } },
                [
                  _c(
                    "Select",
                    {
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
        { attrs: { gutter: 16 } },
        [
          _c(
            "Col",
            { attrs: { span: "24" } },
            [
              _c(
                "FormItem",
                { attrs: { label: "Topic" } },
                [
                  _c("Input", {
                    attrs: {
                      size: "large",
                      type: "text",
                      placeholder: "Thread Title"
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
        { attrs: { gutter: 16 } },
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
                          _vm.threadModal = false
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
                    { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                    [
                      _c("Icon", { attrs: { type: "ios-checkmark" } }),
                      _vm._v(
                        "\n                    Create Thread\n                "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e& ***!
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
  return _c("div", { staticClass: "bg-white px-4 py-3 mb-2 flex" }, [
    _c(
      "div",
      {
        staticClass: "w-3/5",
        on: {
          click: function($event) {
            return _vm.viewThread(_vm.thread.id)
          }
        }
      },
      [
        _c("div", {}, [
          _c(
            "p",
            {
              staticClass:
                "font-serif font-medium text-gray-700 tracking-wide text-xl"
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.thread.subject) +
                  "\n            "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full py-1 flex content-center" }, [
          _c("li", { staticClass: "list-none mr-2" }, [
            _c(
              "span",
              {
                staticClass:
                  "ml-1 font-sans font-thin tracking-wide text-gray-600"
              },
              [_vm._v("Posted by: " + _vm._s(_vm.thread.user.username))]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-none mx-2" }, [
            _c(
              "span",
              {
                staticClass:
                  "mr-1 font-sans font-thin tracking-wide text-gray-600 text-xs"
              },
              [
                _vm._v(
                  " " +
                    _vm._s(_vm._f("moment")(_vm.thread.created_at, "from")) +
                    " "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", { domProps: { innerHTML: _vm._s(_vm.thread.body) } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full py-1" }, [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  return _vm.showTopic(_vm.thread.topic.id)
                }
              }
            },
            [
              _c("Tag", { attrs: { color: "default" } }, [
                _vm._v(_vm._s(_vm.thread.topic.title))
              ])
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "w-2/5 h-auto flex items-center" }, [
      _c("ul", { staticClass: "flex w-full justify-center" }, [
        _c(
          "li",
          {
            staticClass:
              "m-2 p-2 font-medium font-sans text-gray-700 tracking-wider",
            on: {
              click: function($event) {
                return _vm.likeItem(_vm.thread.id)
              }
            }
          },
          [
            _c("Icon", {
              staticClass: "bg-red",
              attrs: { type: "ios-heart-outline" }
            }),
            _vm._v(" " + _vm._s(_vm.thread.likes) + "\n            ")
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "m-2 p-2 font-medium font-sans text-gray-700 tracking-wider"
          },
          [
            _c("Icon", { attrs: { type: "ios-eye-outline" } }),
            _vm._v(" " + _vm._s(_vm.thread.views) + "\n            ")
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "m-2 p-2 font-medium font-sans text-gray-700 tracking-wider"
          },
          [
            _c("Icon", { attrs: { type: "ios-chatbubbles-outline" } }),
            _vm._v(" " + _vm._s(_vm.thread.comments) + "\n            ")
          ],
          1
        ),
        _vm._v(" "),
        _vm.thread.user_id == _vm.user.id || _vm.isAdmin
          ? _c(
              "li",
              {
                staticClass:
                  "m-2 p-2 font-medium font-sans text-gray-700 tracking-wider"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "font-sm tracking-wide font-medium text-red-700",
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(_vm.thread.id)
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=template&id=a18c77f6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=template&id=a18c77f6& ***!
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
                  _c(
                    "p",
                    {
                      staticClass:
                        "text-gray-900 text-base tracking-wide font-sans font-normal"
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(thread.body) +
                          "\n                    "
                      )
                    ]
                  ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/TopicComponent.vue?vue&type=template&id=0adff247&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forum/TopicComponent.vue?vue&type=template&id=0adff247& ***!
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
  return _c(
    "div",
    { staticClass: "w-full h-full" },
    [
      _c(
        "Form",
        {
          staticClass: "w-1/4",
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
          _c(
            "h4",
            {
              staticClass:
                "text-lg text-semibold subpixel-antialiased tracking-wider"
            },
            [_vm._v(" New Topic ")]
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
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Category" } },
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
            { attrs: { gutter: 16 } },
            [
              _c(
                "Col",
                { attrs: { span: "24" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "Topic" } },
                    [
                      _c("Input", {
                        attrs: {
                          size: "large",
                          type: "text",
                          placeholder: "Description"
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

/***/ "./resources/js/components/Forum/NewThreadComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Forum/NewThreadComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewThreadComponent_vue_vue_type_template_id_5bf2a1e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewThreadComponent.vue?vue&type=template&id=5bf2a1e8& */ "./resources/js/components/Forum/NewThreadComponent.vue?vue&type=template&id=5bf2a1e8&");
/* harmony import */ var _NewThreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewThreadComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/NewThreadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewThreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewThreadComponent_vue_vue_type_template_id_5bf2a1e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewThreadComponent_vue_vue_type_template_id_5bf2a1e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/NewThreadComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/NewThreadComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Forum/NewThreadComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewThreadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewThreadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/NewThreadComponent.vue?vue&type=template&id=5bf2a1e8&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Forum/NewThreadComponent.vue?vue&type=template&id=5bf2a1e8& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThreadComponent_vue_vue_type_template_id_5bf2a1e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewThreadComponent.vue?vue&type=template&id=5bf2a1e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/NewThreadComponent.vue?vue&type=template&id=5bf2a1e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThreadComponent_vue_vue_type_template_id_5bf2a1e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThreadComponent_vue_vue_type_template_id_5bf2a1e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Forum/ThreadListItemComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Forum/ThreadListItemComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThreadListItemComponent_vue_vue_type_template_id_c4ef1a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e& */ "./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e&");
/* harmony import */ var _ThreadListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreadListItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ThreadListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ThreadListItemComponent_vue_vue_type_template_id_c4ef1a4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ThreadListItemComponent_vue_vue_type_template_id_c4ef1a4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/ThreadListItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ThreadListItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadListItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadListItemComponent_vue_vue_type_template_id_c4ef1a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadListItemComponent.vue?vue&type=template&id=c4ef1a4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadListItemComponent_vue_vue_type_template_id_c4ef1a4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadListItemComponent_vue_vue_type_template_id_c4ef1a4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/ThreadViewComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Forum/ThreadViewComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThreadViewComponent_vue_vue_type_template_id_a18c77f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreadViewComponent.vue?vue&type=template&id=a18c77f6& */ "./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=template&id=a18c77f6&");
/* harmony import */ var _ThreadViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreadViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ThreadViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ThreadViewComponent_vue_vue_type_template_id_a18c77f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ThreadViewComponent_vue_vue_type_template_id_a18c77f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/ThreadViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ThreadViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=template&id=a18c77f6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=template&id=a18c77f6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadViewComponent_vue_vue_type_template_id_a18c77f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ThreadViewComponent.vue?vue&type=template&id=a18c77f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/ThreadViewComponent.vue?vue&type=template&id=a18c77f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadViewComponent_vue_vue_type_template_id_a18c77f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreadViewComponent_vue_vue_type_template_id_a18c77f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Forum/TopicComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Forum/TopicComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicComponent_vue_vue_type_template_id_0adff247___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicComponent.vue?vue&type=template&id=0adff247& */ "./resources/js/components/Forum/TopicComponent.vue?vue&type=template&id=0adff247&");
/* harmony import */ var _TopicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Forum/TopicComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicComponent_vue_vue_type_template_id_0adff247___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicComponent_vue_vue_type_template_id_0adff247___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forum/TopicComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forum/TopicComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Forum/TopicComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/TopicComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forum/TopicComponent.vue?vue&type=template&id=0adff247&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Forum/TopicComponent.vue?vue&type=template&id=0adff247& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicComponent_vue_vue_type_template_id_0adff247___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopicComponent.vue?vue&type=template&id=0adff247& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forum/TopicComponent.vue?vue&type=template&id=0adff247&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicComponent_vue_vue_type_template_id_0adff247___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicComponent_vue_vue_type_template_id_0adff247___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);