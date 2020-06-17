webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Image.js":
/*!*****************************!*\
  !*** ./components/Image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _charlietango_use_native_lazy_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @charlietango/use-native-lazy-loading */ \"./node_modules/@charlietango/use-native-lazy-loading/lib/useNativeLazyLoading.esm.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.esm.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/bc/Develop/next-store/components/Image.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar CD_CLOUD = \"vercel\" || false;\nvar CD_API = \"https://res.cloudinary.com/\".concat(CD_CLOUD, \"/image/upload\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var width = _ref.width,\n      height = _ref.height,\n      publicId = _ref.publicId,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref, [\"width\", \"height\", \"publicId\"]);\n\n  var initialProps = _objectSpread({\n    width: width,\n    height: height,\n    publicId: publicId\n  }, rest);\n\n  var supportsLazyLoading = Object(_charlietango_use_native_lazy_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__[\"useInView\"])({\n    triggerOnce: true,\n    rootMargin: \"200px 0px\"\n  }),\n      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useInView, 2),\n      ref = _useInView2[0],\n      inView = _useInView2[1];\n\n  return __jsx(\"div\", {\n    ref: !supportsLazyLoading ? ref : undefined,\n    className: \"relative block overflow-hidden ease-in\",\n    style: {\n      position: \"relative\",\n      paddingBottom: \"\".concat(height > 0 && width > 0 ? height / width * 100 : 100, \"%\"),\n      background: \"#edf2f7\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, inView || supportsLazyLoading ? __jsx(\"img\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, rest, {\n    src: \"\".concat(CD_API).concat(height ? \"h_\".concat(height, \",\") : \"\").concat(width ? \"w_\".concat(width, \",\") : \"\", \"/\").concat(CD_BUCKET, \"/\").concat(publicId),\n    width: width,\n    height: height,\n    loading: \"lazy\",\n    style: {\n      position: \"absolute\",\n      width: \"100%\",\n      height: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })) : null);\n}, \"oWAOmAjvQnjH6WChOVuPSTZEUxQ=\", false, function () {\n  return [_charlietango_use_native_lazy_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__[\"useInView\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlLmpzP2M1OGUiXSwibmFtZXMiOlsiQ0RfQ0xPVUQiLCJwcm9jZXNzIiwiQ0RfQVBJIiwid2lkdGgiLCJoZWlnaHQiLCJwdWJsaWNJZCIsInJlc3QiLCJpbml0aWFsUHJvcHMiLCJzdXBwb3J0c0xhenlMb2FkaW5nIiwidXNlTmF0aXZlTGF6eUxvYWRpbmciLCJ1c2VJblZpZXciLCJ0cmlnZ2VyT25jZSIsInJvb3RNYXJnaW4iLCJyZWYiLCJpblZpZXciLCJ1bmRlZmluZWQiLCJwb3NpdGlvbiIsInBhZGRpbmdCb3R0b20iLCJiYWNrZ3JvdW5kIiwiQ0RfQlVDS0VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsWUFBWUMsS0FBN0I7QUFDQSxJQUFNQyxNQUFNLHdDQUFpQ0YsUUFBakMsa0JBQVo7QUFFZSxrRkFBMEM7QUFBQTs7QUFBQSxNQUF2Q0csS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFYQyxJQUFXOztBQUN2RCxNQUFJQyxZQUFZO0FBQUtKLFNBQUssRUFBTEEsS0FBTDtBQUFZQyxVQUFNLEVBQU5BLE1BQVo7QUFBb0JDLFlBQVEsRUFBUkE7QUFBcEIsS0FBaUNDLElBQWpDLENBQWhCOztBQUVBLE1BQU1FLG1CQUFtQixHQUFHQyxxRkFBb0IsRUFBaEQ7O0FBSHVELG1CQUlqQ0MsNkVBQVMsQ0FBQztBQUM5QkMsZUFBVyxFQUFFLElBRGlCO0FBRTlCQyxjQUFVLEVBQUU7QUFGa0IsR0FBRCxDQUp3QjtBQUFBO0FBQUEsTUFJaERDLEdBSmdEO0FBQUEsTUFJM0NDLE1BSjJDOztBQVN2RCxTQUNFO0FBQ0UsT0FBRyxFQUFFLENBQUNOLG1CQUFELEdBQXVCSyxHQUF2QixHQUE2QkUsU0FEcEM7QUFFRSxhQUFTLEVBQUMsd0NBRlo7QUFHRSxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFLFVBREw7QUFFTEMsbUJBQWEsWUFDWGIsTUFBTSxHQUFHLENBQVQsSUFBY0QsS0FBSyxHQUFHLENBQXRCLEdBQTJCQyxNQUFNLEdBQUdELEtBQVYsR0FBbUIsR0FBN0MsR0FBbUQsR0FEeEMsTUFGUjtBQUtMZSxnQkFBVSxFQUFFO0FBTFAsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0dKLE1BQU0sSUFBSU4sbUJBQVYsR0FDQyxvR0FDTUYsSUFETjtBQUVFLE9BQUcsWUFBS0osTUFBTCxTQUFjRSxNQUFNLGVBQVFBLE1BQVIsU0FBb0IsRUFBeEMsU0FDREQsS0FBSyxlQUFRQSxLQUFSLFNBQW1CLEVBRHZCLGNBRUNnQixTQUZELGNBRWNkLFFBRmQsQ0FGTDtBQUtFLFNBQUssRUFBRUYsS0FMVDtBQU1FLFVBQU0sRUFBRUMsTUFOVjtBQU9FLFdBQU8sRUFBQyxNQVBWO0FBUUUsU0FBSyxFQUFFO0FBQUVZLGNBQVEsRUFBRSxVQUFaO0FBQXdCYixXQUFLLEVBQUUsTUFBL0I7QUFBdUNDLFlBQU0sRUFBRTtBQUEvQyxLQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERCxHQVdHLElBdEJOLENBREY7QUEwQkQsQ0FuQ0Q7QUFBQSxVQUc4QkssNkVBSDlCLEVBSXdCQyxxRUFKeEI7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTmF0aXZlTGF6eUxvYWRpbmcgZnJvbSBcIkBjaGFybGlldGFuZ28vdXNlLW5hdGl2ZS1sYXp5LWxvYWRpbmdcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcblxuY29uc3QgQ0RfQ0xPVUQgPSBcInZlcmNlbFwiIHx8IHByb2Nlc3MuZW52LkNEX0NMT1VEO1xuY29uc3QgQ0RfQVBJID0gYGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tLyR7Q0RfQ0xPVUR9L2ltYWdlL3VwbG9hZGA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHdpZHRoLCBoZWlnaHQsIHB1YmxpY0lkLCAuLi5yZXN0IH0pID0+IHtcbiAgbGV0IGluaXRpYWxQcm9wcyA9IHsgd2lkdGgsIGhlaWdodCwgcHVibGljSWQsIC4uLnJlc3QgfTtcblxuICBjb25zdCBzdXBwb3J0c0xhenlMb2FkaW5nID0gdXNlTmF0aXZlTGF6eUxvYWRpbmcoKTtcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7XG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gICAgcm9vdE1hcmdpbjogXCIyMDBweCAwcHhcIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9eyFzdXBwb3J0c0xhenlMb2FkaW5nID8gcmVmIDogdW5kZWZpbmVkfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGVhc2UtaW5cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7XG4gICAgICAgICAgaGVpZ2h0ID4gMCAmJiB3aWR0aCA+IDAgPyAoaGVpZ2h0IC8gd2lkdGgpICogMTAwIDogMTAwXG4gICAgICAgIH0lYCxcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZWRmMmY3XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpblZpZXcgfHwgc3VwcG9ydHNMYXp5TG9hZGluZyA/IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIHNyYz17YCR7Q0RfQVBJfSR7aGVpZ2h0ID8gYGhfJHtoZWlnaHR9LGAgOiBcIlwifSR7XG4gICAgICAgICAgICB3aWR0aCA/IGB3XyR7d2lkdGh9LGAgOiBcIlwiXG4gICAgICAgICAgfS8ke0NEX0JVQ0tFVH0vJHtwdWJsaWNJZH1gfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Image.js\n");

/***/ })

})