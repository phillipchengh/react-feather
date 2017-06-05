/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(3);

var _Pagination = __webpack_require__(4);

var _PermalinkPagination = __webpack_require__(5);

var _Footer = __webpack_require__(2);

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
var Blog = React.createClass({
  displayName: 'Blog',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(_Header.Header, this.props),
      React.createElement(
        'div',
        { id: 'content' },
        Object.keys(this.props.Posts).map(function (p) {
          var post = this.props.Posts[p];

          console.log(post["Video-500"], !post["Video-500"]);
          switch (post.PostType) {

            /** Photosets have type photo, but get passed as video smh */
            case "photo":
              return !post["Video-500"] ? React.createElement(PhotoPost, post) : React.createElement(VideoPost, post);
            case "quote":
              return React.createElement(QuotePost, post);
            case "video":
              return React.createElement(VideoPost, post);
            case "link":
              return React.createElement(LinkPost, post);
            case "chat":
              return React.createElement(ChatPost, post);
            case "text":
              return React.createElement(TextPost, post);
            case "audio":
              return React.createElement(AudioPost, post);
          }
        }.bind(this)),
        !!this.props.Pagination && React.createElement(_Pagination.Pagination, this.props.Pagination),
        !!this.props.PermalinkPagination && React.createElement(_PermalinkPagination.PermalinkPagination, this.props.PermalinkPagination)
      ),
      React.createElement(_Footer.Footer, null)
    );
  }
});

exports.default = Blog;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Includes: theme attribution and search field */
var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "div",
      { id: "footer" },
      React.createElement(
        "form",
        { action: "/search", method: "get", id: "searchform" },
        React.createElement("input", { type: "text", name: "q", results: "5" })
      ),
      React.createElement(
        "div",
        { className: "attribution" },
        React.createElement(
          "a",
          { href: "http://www.tumblr.com/theme/3357", title: "tumblr theme feather" },
          "feather"
        ),
        " by ",
        React.createElement(
          "a",
          { href: "http://erichu.tumblr.com", title: "eric hu" },
          "eric hu"
        ),
        React.createElement("br", null),
        "react.js edit by ",
        React.createElement(
          "a",
          { href: "http://shoesnosocks.tumblr.com", title: "kevin chavez" },
          "kevin chavez"
        )
      )
    );
  }
});

exports.default = Footer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Includes: Blog title, links to pages and description */
var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "div",
      { id: "header" },
      React.createElement(
        "h1",
        null,
        React.createElement(
          "a",
          { href: "/" },
          this.props.Title
        )
      ),
      React.createElement(
        "p",
        { id: "description" },
        !!this.props.Pages && Object.keys(this.props.Pages).map(function (p) {
          var page = this.props.Pages[p];
          return React.createElement(
            "a",
            { href: page.URL, style: { marginRight: ".5em" } },
            page.Label
          );
        }.bind(this)),
        !!this.props.AskEnabled && React.createElement(
          "a",
          { href: "/ask", style: { marginRight: ".5em" } },
          "ask"
        ),
        !!this.props.SubmissionsEnabled && React.createElement(
          "a",
          { href: "/submit", style: { marginRight: ".5em" } },
          this.props.SubmitLabel
        ),
        React.createElement("br", null),
        !!this.props.Description && React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.Description } })
      )
    );
  }
});

exports.default = Header;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Pagination shown on post-list pages (like the index page of the blog, for example) */
var Pagination = React.createClass({
  displayName: "Pagination",

  render: function render() {
    return React.createElement(
      "div",
      { id: "navigation" },
      !!this.props.NextPage && React.createElement(
        "a",
        { href: this.props.NextPage, id: "nav-next", style: { textTransform: "lowercase" } },
        "\u2190 ",
        this.props["lang:Older"]
      ),
      React.createElement(
        "span",
        { className: "page_number" },
        " \xA0 ",
        this.props.CurrentPage,
        "/",
        this.props.TotalPages,
        " \xA0"
      ),
      !!this.props.PreviousPage && React.createElement(
        "a",
        { href: this.props.PreviousPage, id: "nav-prev", style: { textTransform: "lowercase" } },
        this.props["lang:Newer"],
        " \u2192"
      )
    );
  }
});

exports.default = Pagination;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Pagination shown on permalink pages */
var PermalinkPagination = React.createClass({
  displayName: "PermalinkPagination",

  render: function render() {
    return React.createElement(
      "div",
      { id: "navigation" },
      !!this.props.PreviousPost && React.createElement(
        "a",
        { href: this.props.PreviousPost, id: "nav-next", style: { textTransform: "lowercase" } },
        "\u2190 ",
        this.props["lang:Older"]
      ),
      React.createElement(
        "span",
        { className: "page_number" },
        " \xA0 ",
        this.props.CurrentPage,
        "/",
        this.props.TotalPages,
        " \xA0"
      ),
      !!this.props.NextPost && React.createElement(
        "a",
        { href: this.props.NextPost, id: "nav-prev", style: { textTransform: "lowercase" } },
        this.props["lang:Newer"],
        " \u2192"
      )
    );
  }
});

exports.default = PermalinkPagination;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _Blog = __webpack_require__(0);

ReactDOM.render(React.createElement(_Blog.Blog, props), document.getElementById('blog'));

/***/ })
/******/ ]);