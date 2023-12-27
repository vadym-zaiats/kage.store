"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/redux/middlewares/cart.js":
/*!***************************************!*\
  !*** ./src/redux/middlewares/cart.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSeveralToCart: function() { return /* binding */ addSeveralToCart; },\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; },\n/* harmony export */   delFromCart: function() { return /* binding */ delFromCart; },\n/* harmony export */   totalSumFunc: function() { return /* binding */ totalSumFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addToCartFunc\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingProd) {\n            if (existingProd.count < itemData.quantity) {\n                const updatedItem = {\n                    ...existingProd,\n                    count: existingProd.count + 1\n                };\n                return updatedItem;\n            } else {\n                return existingProd;\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst addSeveralToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addSeveralToCart\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingProd) {\n            if (existingProd.count + itemData.count <= itemData.quantity) {\n                const updatedItem = {\n                    ...existingProd,\n                    count: existingProd.count + itemData.count\n                };\n                return updatedItem;\n            } else {\n                return existingProd;\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst delFromCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/delFromCart\", (param, param1)=>{\n    let { itemNo } = param, { rejectWithValue, getState } = param1;\n    try {\n        const state = getState();\n        const newArr = state.cart.cart.filter((product)=>product.itemNo !== itemNo);\n        return newArr;\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst totalSumFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/totalSumFunc\", (_, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const totalSum = state.cart.cart.map((prod)=>{\n            console.log(prod.count * prod.currentPrice);\n        });\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBRTdDLE1BQU1DLGdCQUFnQkQsa0VBQWdCQSxDQUMzQyxzQkFDQSxDQUFDRTtRQUFVLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1FLGVBQWVELE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxJQUFJLENBQ3ZDLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sS0FBS1IsU0FBU1EsTUFBTTtRQUUzQyxJQUFJSixjQUFjO1lBQ2hCLElBQUlBLGFBQWFLLEtBQUssR0FBR1QsU0FBU1UsUUFBUSxFQUFFO2dCQUMxQyxNQUFNQyxjQUFjO29CQUNsQixHQUFHUCxZQUFZO29CQUNmSyxPQUFPTCxhQUFhSyxLQUFLLEdBQUc7Z0JBQzlCO2dCQUNBLE9BQU9FO1lBQ1QsT0FBTztnQkFDTCxPQUFPUDtZQUNUO1FBQ0YsT0FBTztZQUNMLE9BQU9KO1FBQ1Q7SUFDRixFQUFFLE9BQU9ZLE9BQU87UUFDZCxPQUFPWCxnQkFBZ0JXLE1BQU1DLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUssTUFBTUMsbUJBQW1CaEIsa0VBQWdCQSxDQUM5Qyx5QkFDQSxDQUFDRTtRQUFVLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1FLGVBQWVELE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxJQUFJLENBQ3ZDLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sS0FBS1IsU0FBU1EsTUFBTTtRQUUzQyxJQUFJSixjQUFjO1lBQ2hCLElBQUlBLGFBQWFLLEtBQUssR0FBR1QsU0FBU1MsS0FBSyxJQUFJVCxTQUFTVSxRQUFRLEVBQUU7Z0JBQzVELE1BQU1DLGNBQWM7b0JBQ2xCLEdBQUdQLFlBQVk7b0JBQ2ZLLE9BQU9MLGFBQWFLLEtBQUssR0FBR1QsU0FBU1MsS0FBSztnQkFDNUM7Z0JBQ0EsT0FBT0U7WUFDVCxPQUFPO2dCQUNMLE9BQU9QO1lBQ1Q7UUFDRixPQUFPO1lBQ0wsT0FBT0o7UUFDVDtJQUNGLEVBQUUsT0FBT1ksT0FBTztRQUNkLE9BQU9YLGdCQUFnQlcsTUFBTUMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFDSyxNQUFNRSxjQUFjakIsa0VBQWdCQSxDQUN6QyxvQkFDQTtRQUFDLEVBQUVVLE1BQU0sRUFBRSxVQUFFLEVBQUVQLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1jLFNBQVNiLE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDWSxNQUFNLENBQ25DLENBQUNDLFVBQVlBLFFBQVFWLE1BQU0sS0FBS0E7UUFFbEMsT0FBT1E7SUFDVCxFQUFFLE9BQU9KLE9BQU87UUFDZCxPQUFPWCxnQkFBZ0JXLE1BQU1DLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBQ0ssTUFBTU0sZUFBZXJCLGtFQUFnQkEsQ0FDMUMscUJBQ0EsQ0FBQ3NCO1FBQUcsRUFBRW5CLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQy9CLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1tQixXQUFXbEIsTUFBTUUsSUFBSSxDQUFDQSxJQUFJLENBQUNpQixHQUFHLENBQUMsQ0FBQ0M7WUFDcENDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS2QsS0FBSyxHQUFHYyxLQUFLRyxZQUFZO1FBQzVDO0lBQ0YsRUFBRSxPQUFPZCxPQUFPO1FBQ2QsT0FBT1gsZ0JBQWdCVyxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvbWlkZGxld2FyZXMvY2FydC5qcz9jNzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0RnVuYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiY2FydC9hZGRUb0NhcnRGdW5jXCIsXG4gIChpdGVtRGF0YSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdQcm9kID0gc3RhdGUuY2FydC5jYXJ0LmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLml0ZW1ObyA9PT0gaXRlbURhdGEuaXRlbU5vXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nUHJvZCkge1xuICAgICAgICBpZiAoZXhpc3RpbmdQcm9kLmNvdW50IDwgaXRlbURhdGEucXVhbnRpdHkpIHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbSA9IHtcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJvZCxcbiAgICAgICAgICAgIGNvdW50OiBleGlzdGluZ1Byb2QuY291bnQgKyAxLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBhZGRTZXZlcmFsVG9DYXJ0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L2FkZFNldmVyYWxUb0NhcnRcIixcbiAgKGl0ZW1EYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2QgPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBpdGVtRGF0YS5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kKSB7XG4gICAgICAgIGlmIChleGlzdGluZ1Byb2QuY291bnQgKyBpdGVtRGF0YS5jb3VudCA8PSBpdGVtRGF0YS5xdWFudGl0eSkge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdQcm9kLFxuICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nUHJvZC5jb3VudCArIGl0ZW1EYXRhLmNvdW50LFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5leHBvcnQgY29uc3QgZGVsRnJvbUNhcnQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImNhcnQvZGVsRnJvbUNhcnRcIixcbiAgKHsgaXRlbU5vIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IG5ld0FyciA9IHN0YXRlLmNhcnQuY2FydC5maWx0ZXIoXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0Lml0ZW1ObyAhPT0gaXRlbU5vXG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5leHBvcnQgY29uc3QgdG90YWxTdW1GdW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L3RvdGFsU3VtRnVuY1wiLFxuICAoXywgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgY29uc3QgdG90YWxTdW0gPSBzdGF0ZS5jYXJ0LmNhcnQubWFwKChwcm9kKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2QuY291bnQgKiBwcm9kLmN1cnJlbnRQcmljZSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImFkZFRvQ2FydEZ1bmMiLCJpdGVtRGF0YSIsInJlamVjdFdpdGhWYWx1ZSIsImdldFN0YXRlIiwic3RhdGUiLCJleGlzdGluZ1Byb2QiLCJjYXJ0IiwiZmluZCIsIml0ZW0iLCJpdGVtTm8iLCJjb3VudCIsInF1YW50aXR5IiwidXBkYXRlZEl0ZW0iLCJlcnJvciIsIm1lc3NhZ2UiLCJhZGRTZXZlcmFsVG9DYXJ0IiwiZGVsRnJvbUNhcnQiLCJuZXdBcnIiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidG90YWxTdW1GdW5jIiwiXyIsInRvdGFsU3VtIiwibWFwIiwicHJvZCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});