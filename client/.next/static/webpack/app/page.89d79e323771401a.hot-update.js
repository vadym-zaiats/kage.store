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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSeveralToCart: function() { return /* binding */ addSeveralToCart; },\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addToCartFunc\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingProd) {\n            if (existingProd.count < itemData.quantity) {\n                const updatedItem = {\n                    ...existingProd,\n                    count: existingProd.count + 1\n                };\n                return updatedItem;\n            } else {\n                return existingProd;\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst addSeveralToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addSeveralToCart\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingProd) {\n            if (existingProd.count < itemData.quantity) {\n                const updatedItem = {\n                    ...existingProd,\n                    count: existingProd.count + 1\n                };\n                return updatedItem;\n            } else {\n                return existingProd;\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUU3QyxNQUFNQyxnQkFBZ0JELGtFQUFnQkEsQ0FDM0Msc0JBQ0EsQ0FBQ0U7UUFBVSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNRSxlQUFlRCxNQUFNRSxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUN2QyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtSLFNBQVNRLE1BQU07UUFFM0MsSUFBSUosY0FBYztZQUNoQixJQUFJQSxhQUFhSyxLQUFLLEdBQUdULFNBQVNVLFFBQVEsRUFBRTtnQkFDMUMsTUFBTUMsY0FBYztvQkFDbEIsR0FBR1AsWUFBWTtvQkFDZkssT0FBT0wsYUFBYUssS0FBSyxHQUFHO2dCQUM5QjtnQkFDQSxPQUFPRTtZQUNULE9BQU87Z0JBQ0wsT0FBT1A7WUFDVDtRQUNGLE9BQU87WUFDTCxPQUFPSjtRQUNUO0lBQ0YsRUFBRSxPQUFPWSxPQUFPO1FBQ2QsT0FBT1gsZ0JBQWdCVyxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUVLLE1BQU1DLG1CQUFtQmhCLGtFQUFnQkEsQ0FDOUMseUJBQ0EsQ0FBQ0U7UUFBVSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNRSxlQUFlRCxNQUFNRSxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUN2QyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtSLFNBQVNRLE1BQU07UUFFM0MsSUFBSUosY0FBYztZQUNoQixJQUFJQSxhQUFhSyxLQUFLLEdBQUdULFNBQVNVLFFBQVEsRUFBRTtnQkFDMUMsTUFBTUMsY0FBYztvQkFDbEIsR0FBR1AsWUFBWTtvQkFDZkssT0FBT0wsYUFBYUssS0FBSyxHQUFHO2dCQUM5QjtnQkFDQSxPQUFPRTtZQUNULE9BQU87Z0JBQ0wsT0FBT1A7WUFDVDtRQUNGLE9BQU87WUFDTCxPQUFPSjtRQUNUO0lBQ0YsRUFBRSxPQUFPWSxPQUFPO1FBQ2QsT0FBT1gsZ0JBQWdCVyxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvbWlkZGxld2FyZXMvY2FydC5qcz9jNzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0RnVuYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiY2FydC9hZGRUb0NhcnRGdW5jXCIsXG4gIChpdGVtRGF0YSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdQcm9kID0gc3RhdGUuY2FydC5jYXJ0LmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLml0ZW1ObyA9PT0gaXRlbURhdGEuaXRlbU5vXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nUHJvZCkge1xuICAgICAgICBpZiAoZXhpc3RpbmdQcm9kLmNvdW50IDwgaXRlbURhdGEucXVhbnRpdHkpIHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbSA9IHtcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJvZCxcbiAgICAgICAgICAgIGNvdW50OiBleGlzdGluZ1Byb2QuY291bnQgKyAxLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBhZGRTZXZlcmFsVG9DYXJ0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L2FkZFNldmVyYWxUb0NhcnRcIixcbiAgKGl0ZW1EYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2QgPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBpdGVtRGF0YS5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kKSB7XG4gICAgICAgIGlmIChleGlzdGluZ1Byb2QuY291bnQgPCBpdGVtRGF0YS5xdWFudGl0eSkge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdQcm9kLFxuICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nUHJvZC5jb3VudCArIDEsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdXBkYXRlZEl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUHJvZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1EYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiYWRkVG9DYXJ0RnVuYyIsIml0ZW1EYXRhIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImV4aXN0aW5nUHJvZCIsImNhcnQiLCJmaW5kIiwiaXRlbSIsIml0ZW1ObyIsImNvdW50IiwicXVhbnRpdHkiLCJ1cGRhdGVkSXRlbSIsImVycm9yIiwibWVzc2FnZSIsImFkZFNldmVyYWxUb0NhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});