"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/redux/middlewares/cart.js":
/*!***************************************!*\
  !*** ./src/redux/middlewares/cart.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"cart/addToCartFunc\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingItem = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingItem) {\n            if (itemData.quantity > existingItem.count) {\n                const updatedItem = {\n                    ...existingItem,\n                    count: existingItem.count + 1\n                };\n                return updatedItem;\n            } else {\n                return console.log(\"Це максимальна кількість\");\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUNKO0FBRXpDLE1BQU1FLGdCQUFnQkYsa0VBQWdCQSxDQUMzQyxzQkFDQSxDQUFDRztRQUFVLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1FLGVBQWVELE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxJQUFJLENBQ3ZDLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sS0FBS1IsU0FBU1EsTUFBTTtRQUUzQyxJQUFJSixjQUFjO1lBQ2hCLElBQUlKLFNBQVNTLFFBQVEsR0FBR0wsYUFBYU0sS0FBSyxFQUFFO2dCQUMxQyxNQUFNQyxjQUFjO29CQUNsQixHQUFHUCxZQUFZO29CQUNmTSxPQUFPTixhQUFhTSxLQUFLLEdBQUc7Z0JBQzlCO2dCQUNBLE9BQU9DO1lBQ1QsT0FBTztnQkFDTCxPQUFPQyxRQUFRQyxHQUFHLENBQUM7WUFDckI7UUFDRixPQUFPO1lBQ0wsT0FBT2I7UUFDVDtJQUNGLEVBQUUsT0FBT2MsT0FBTztRQUNkLE9BQU9iLGdCQUFnQmEsTUFBTUMsT0FBTztJQUN0QztBQUNGLEdBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L21pZGRsZXdhcmVzL2NhcnQuanM/Yzc5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi9zbGljZXMvY2FydFNsaWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnRGdW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L2FkZFRvQ2FydEZ1bmNcIixcbiAgKGl0ZW1EYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBpdGVtRGF0YS5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtRGF0YS5xdWFudGl0eSA+IGV4aXN0aW5nSXRlbS5jb3VudCkge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdJdGVtLFxuICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nSXRlbS5jb3VudCArIDEsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdXBkYXRlZEl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwi0KbQtSDQvNCw0LrRgdC40LzQsNC70YzQvdCwINC60ZbQu9GM0LrRltGB0YLRjFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1EYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiYWRkVG9DYXJ0IiwiYWRkVG9DYXJ0RnVuYyIsIml0ZW1EYXRhIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImV4aXN0aW5nSXRlbSIsImNhcnQiLCJmaW5kIiwiaXRlbSIsIml0ZW1ObyIsInF1YW50aXR5IiwiY291bnQiLCJ1cGRhdGVkSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});