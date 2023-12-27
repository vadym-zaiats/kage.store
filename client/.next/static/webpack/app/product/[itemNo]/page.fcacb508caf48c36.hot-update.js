"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[itemNo]/page",{

/***/ "(app-pages-browser)/./src/redux/middlewares/cart.js":
/*!***************************************!*\
  !*** ./src/redux/middlewares/cart.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSeveralToCart: function() { return /* binding */ addSeveralToCart; },\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; },\n/* harmony export */   delFromCart: function() { return /* binding */ delFromCart; },\n/* harmony export */   totalSumFunc: function() { return /* binding */ totalSumFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addToCartFunc\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingProd) {\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                if (existingProd.count < itemData.quantity) {\n                    const updatedProd = {\n                        ...existingProd,\n                        count: existingProd.count + 1\n                    };\n                    state.cart.cart[existingProductIndex] = updatedProd;\n                }\n            } else {\n                return existingProd;\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst addSeveralToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addSeveralToCart\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingProd) {\n            if (existingProd.count + itemData.count <= itemData.quantity) {\n                const updatedProd = {\n                    ...existingProd,\n                    count: existingProd.count + itemData.count\n                };\n                return updatedProd;\n            } else {\n                return existingProd;\n            }\n        } else {\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst delFromCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/delFromCart\", (param, param1)=>{\n    let { itemNo } = param, { dispatch, rejectWithValue, getState } = param1;\n    try {\n        const state = getState();\n        const newArr = state.cart.cart.filter((product)=>product.itemNo !== itemNo);\n        return newArr;\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst totalSumFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/totalSumFunc\", (_, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const cartList = state.cart.cart;\n        const arrOfSums = [];\n        cartList.map((prod)=>{\n            arrOfSums.push(prod.count * prod.currentPrice);\n        });\n        const totalSum = arrOfSums.reduce((sum, item)=>item + sum, 0);\n        console.log(totalSum);\n        return totalSum;\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBRTdDLE1BQU1DLGdCQUFnQkQsa0VBQWdCQSxDQUMzQyxzQkFDQSxDQUFDRTtRQUFVLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1FLGVBQWVELE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxJQUFJLENBQ3ZDLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sS0FBS1IsU0FBU1EsTUFBTTtRQUUzQyxJQUFJSixjQUFjO1lBQ2hCLE1BQU1LLHVCQUF1Qk4sTUFBTUUsSUFBSSxDQUFDSyxTQUFTLENBQy9DLENBQUNDLE9BQVNBLEtBQUtILE1BQU0sS0FBS0ksT0FBT0MsT0FBTyxDQUFDTCxNQUFNO1lBRWpELElBQUlDLHlCQUF5QixDQUFDLEdBQUc7Z0JBQy9CLElBQUlMLGFBQWFVLEtBQUssR0FBR2QsU0FBU2UsUUFBUSxFQUFFO29CQUMxQyxNQUFNQyxjQUFjO3dCQUNsQixHQUFHWixZQUFZO3dCQUNmVSxPQUFPVixhQUFhVSxLQUFLLEdBQUc7b0JBQzlCO29CQUNBWCxNQUFNRSxJQUFJLENBQUNBLElBQUksQ0FBQ0kscUJBQXFCLEdBQUdPO2dCQUMxQztZQUNGLE9BUUs7Z0JBQ0gsT0FBT1o7WUFDVDtRQUNGLE9BQU87WUFDTCxPQUFPSjtRQUNUO0lBQ0YsRUFBRSxPQUFPaUIsT0FBTztRQUNkLE9BQU9oQixnQkFBZ0JnQixNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUVLLE1BQU1DLG1CQUFtQnJCLGtFQUFnQkEsQ0FDOUMseUJBQ0EsQ0FBQ0U7UUFBVSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNRSxlQUFlRCxNQUFNRSxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUN2QyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtSLFNBQVNRLE1BQU07UUFFM0MsSUFBSUosY0FBYztZQUNoQixJQUFJQSxhQUFhVSxLQUFLLEdBQUdkLFNBQVNjLEtBQUssSUFBSWQsU0FBU2UsUUFBUSxFQUFFO2dCQUM1RCxNQUFNQyxjQUFjO29CQUNsQixHQUFHWixZQUFZO29CQUNmVSxPQUFPVixhQUFhVSxLQUFLLEdBQUdkLFNBQVNjLEtBQUs7Z0JBQzVDO2dCQUNBLE9BQU9FO1lBQ1QsT0FBTztnQkFDTCxPQUFPWjtZQUNUO1FBQ0YsT0FBTztZQUNMLE9BQU9KO1FBQ1Q7SUFDRixFQUFFLE9BQU9pQixPQUFPO1FBQ2QsT0FBT2hCLGdCQUFnQmdCLE1BQU1DLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBQ0ssTUFBTUUsY0FBY3RCLGtFQUFnQkEsQ0FDekMsb0JBQ0E7UUFBQyxFQUFFVSxNQUFNLEVBQUUsVUFBRSxFQUFFYSxRQUFRLEVBQUVwQixlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUNsRCxJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNb0IsU0FBU25CLE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0IsTUFBTSxDQUNuQyxDQUFDQyxVQUFZQSxRQUFRaEIsTUFBTSxLQUFLQTtRQUVsQyxPQUFPYztJQUNULEVBQUUsT0FBT0wsT0FBTztRQUNkLE9BQU9oQixnQkFBZ0JnQixNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUNLLE1BQU1PLGVBQWUzQixrRUFBZ0JBLENBQzFDLHFCQUNBLENBQUM0QjtRQUFHLEVBQUV6QixlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUMvQixJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNeUIsV0FBV3hCLE1BQU1FLElBQUksQ0FBQ0EsSUFBSTtRQUNoQyxNQUFNdUIsWUFBWSxFQUFFO1FBQ3BCRCxTQUFTRSxHQUFHLENBQUMsQ0FBQ2xCO1lBQ1ppQixVQUFVRSxJQUFJLENBQUNuQixLQUFLRyxLQUFLLEdBQUdILEtBQUtvQixZQUFZO1FBQy9DO1FBQ0EsTUFBTUMsV0FBV0osVUFBVUssTUFBTSxDQUFDLENBQUNDLEtBQUszQixPQUFTQSxPQUFPMkIsS0FBSztRQUM3REMsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLE9BQU9BO0lBQ1QsRUFBRSxPQUFPZixPQUFPO1FBQ2QsT0FBT2hCLGdCQUFnQmdCLE1BQU1DLE9BQU87SUFDdEM7QUFDRixHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzP2M3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnRGdW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L2FkZFRvQ2FydEZ1bmNcIixcbiAgKGl0ZW1EYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2QgPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBpdGVtRGF0YS5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdEluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoXG4gICAgICAgICAgKHByb2QpID0+IHByb2QuaXRlbU5vID09PSBhY3Rpb24ucGF5bG9hZC5pdGVtTm9cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGlmIChleGlzdGluZ1Byb2QuY291bnQgPCBpdGVtRGF0YS5xdWFudGl0eSkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByb2QgPSB7XG4gICAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJvZCxcbiAgICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nUHJvZC5jb3VudCArIDEsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3RhdGUuY2FydC5jYXJ0W2V4aXN0aW5nUHJvZHVjdEluZGV4XSA9IHVwZGF0ZWRQcm9kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoZXhpc3RpbmdQcm9kLmNvdW50IDwgaXRlbURhdGEucXVhbnRpdHkpIHtcbiAgICAgICAgLy8gICBjb25zdCB1cGRhdGVkUHJvZCA9IHtcbiAgICAgICAgLy8gICAgIC4uLmV4aXN0aW5nUHJvZCxcbiAgICAgICAgLy8gICAgIGNvdW50OiBleGlzdGluZ1Byb2QuY291bnQgKyAxLFxuICAgICAgICAvLyAgIH07XG4gICAgICAgIC8vICAgcmV0dXJuIHVwZGF0ZWRQcm9kO1xuICAgICAgICAvLyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBhZGRTZXZlcmFsVG9DYXJ0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L2FkZFNldmVyYWxUb0NhcnRcIixcbiAgKGl0ZW1EYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2QgPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBpdGVtRGF0YS5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kKSB7XG4gICAgICAgIGlmIChleGlzdGluZ1Byb2QuY291bnQgKyBpdGVtRGF0YS5jb3VudCA8PSBpdGVtRGF0YS5xdWFudGl0eSkge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kID0ge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdQcm9kLFxuICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nUHJvZC5jb3VudCArIGl0ZW1EYXRhLmNvdW50LFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZWRQcm9kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5leHBvcnQgY29uc3QgZGVsRnJvbUNhcnQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImNhcnQvZGVsRnJvbUNhcnRcIixcbiAgKHsgaXRlbU5vIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBjb25zdCBuZXdBcnIgPSBzdGF0ZS5jYXJ0LmNhcnQuZmlsdGVyKFxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pdGVtTm8gIT09IGl0ZW1Ob1xuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuZXhwb3J0IGNvbnN0IHRvdGFsU3VtRnVuYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiY2FydC90b3RhbFN1bUZ1bmNcIixcbiAgKF8sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGNhcnRMaXN0ID0gc3RhdGUuY2FydC5jYXJ0O1xuICAgICAgY29uc3QgYXJyT2ZTdW1zID0gW107XG4gICAgICBjYXJ0TGlzdC5tYXAoKHByb2QpID0+IHtcbiAgICAgICAgYXJyT2ZTdW1zLnB1c2gocHJvZC5jb3VudCAqIHByb2QuY3VycmVudFByaWNlKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG90YWxTdW0gPSBhcnJPZlN1bXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0gKyBzdW0sIDApO1xuICAgICAgY29uc29sZS5sb2codG90YWxTdW0pO1xuICAgICAgcmV0dXJuIHRvdGFsU3VtO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiYWRkVG9DYXJ0RnVuYyIsIml0ZW1EYXRhIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImV4aXN0aW5nUHJvZCIsImNhcnQiLCJmaW5kIiwiaXRlbSIsIml0ZW1ObyIsImV4aXN0aW5nUHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicHJvZCIsImFjdGlvbiIsInBheWxvYWQiLCJjb3VudCIsInF1YW50aXR5IiwidXBkYXRlZFByb2QiLCJlcnJvciIsIm1lc3NhZ2UiLCJhZGRTZXZlcmFsVG9DYXJ0IiwiZGVsRnJvbUNhcnQiLCJkaXNwYXRjaCIsIm5ld0FyciIsImZpbHRlciIsInByb2R1Y3QiLCJ0b3RhbFN1bUZ1bmMiLCJfIiwiY2FydExpc3QiLCJhcnJPZlN1bXMiLCJtYXAiLCJwdXNoIiwiY3VycmVudFByaWNlIiwidG90YWxTdW0iLCJyZWR1Y2UiLCJzdW0iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});