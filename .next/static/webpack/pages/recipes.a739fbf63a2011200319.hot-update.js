"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./src/components/blog/blog.preview.js":
/*!*********************************************!*\
  !*** ./src/components/blog/blog.preview.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blog_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.date */ \"./src/components/blog/blog.date.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/joey/Documents/ac/src/components/blog/blog.preview.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar PostPreview = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c = function _c(_ref) {\n  var tags = _ref.tags,\n      title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      slug = _ref.slug;\n  // const shortenedExcerpt = excerpt.slice(0, 150);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n    className: \"card\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n      className: \"card--heading\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        as: \"/recipes/\".concat(slug),\n        href: \"/recipes/[slug]\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"card--date\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_blog_date__WEBPACK_IMPORTED_MODULE_3__.default, {\n        dateString: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"card--image\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        width: 100,\n        height: 75,\n        layout: \"fixed\",\n        src: coverImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)]\n  }, title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n});\n_c2 = PostPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPreview);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PostPreview$memo\");\n$RefreshReg$(_c2, \"PostPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ibG9nL2Jsb2cucHJldmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFdBQVcsZ0JBQUdGLDJDQUFJLE1BQUMsa0JBQXNEO0FBQUEsTUFBbkRHLElBQW1ELFFBQW5EQSxJQUFtRDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsVUFBc0MsUUFBdENBLFVBQXNDO0FBQUEsTUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0U7QUFDQSxzQkFDRTtBQUFnQixhQUFTLEVBQUMsTUFBMUI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxlQUFkO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFFLHFCQUFjQSxJQUFkLENBQVI7QUFBOEIsWUFBSSxFQUFDLGlCQUFuQztBQUFBLCtCQUNFO0FBQUEsb0JBQUlKO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0UsOERBQUMsK0NBQUQ7QUFBTSxrQkFBVSxFQUFFRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBU0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBSyxFQUFFLEdBQWQ7QUFBbUIsY0FBTSxFQUFFLEVBQTNCO0FBQStCLGNBQU0sRUFBQyxPQUF0QztBQUE4QyxXQUFHLEVBQUVEO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQSxLQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXJCdUIsQ0FBeEI7TUFBTUY7QUF1Qk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy9ibG9nLnByZXZpZXcuanM/ZmQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBEYXRlIGZyb20gXCIuL2Jsb2cuZGF0ZVwiXG5cbmNvbnN0IFBvc3RQcmV2aWV3ID0gbWVtbygoeyB0YWdzLCB0aXRsZSwgY292ZXJJbWFnZSwgZGF0ZSwgZXhjZXJwdCwgc2x1ZyB9KSA9PiB7XG4gIC8vIGNvbnN0IHNob3J0ZW5lZEV4Y2VycHQgPSBleGNlcnB0LnNsaWNlKDAsIDE1MCk7XG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17dGl0bGV9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLS1oZWFkaW5nXCI+XG4gICAgICAgIDxMaW5rIGFzPXtgL3JlY2lwZXMvJHtzbHVnfWB9IGhyZWY9XCIvcmVjaXBlcy9bc2x1Z11cIj5cbiAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS1kYXRlXCI+XG4gICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0taW1hZ2VcIj5cbiAgICAgICAgPEltYWdlIHdpZHRoPXsxMDB9IGhlaWdodD17NzV9IGxheW91dD1cImZpeGVkXCIgc3JjPXtjb3ZlckltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuZXdzLS1leGNlcnB0XCI+XG4gICAgICAgICAgPHA+e3Nob3J0ZW5lZEV4Y2VycHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGtleT17c3BlY2lhbEtleX0+e3RhZ3N9PC91bD4gKi99XG4gICAgPC9saT5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFByZXZpZXdcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJtZW1vIiwiRGF0ZSIsIlBvc3RQcmV2aWV3IiwidGFncyIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJleGNlcnB0Iiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/blog/blog.preview.js\n");

/***/ })

});