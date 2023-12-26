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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"cart/addToCartFunc\", (itemData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingItem = state.cart.cart.find((item)=>item.itemNo === itemData.itemNo);\n        if (existingItem) {\n            // Если товар уже есть в корзине, увеличиваем count\n            const updatedItem = {\n                ...existingItem,\n                count: existingItem.count + 1\n            };\n            // Обновляем товар в корзине в состоянии\n            return updatedItem;\n        } else {\n            // Если товара нет в корзине, добавляем его\n            return itemData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUNKO0FBRXpDLE1BQU1FLGdCQUFnQkYsa0VBQWdCQSxDQUMzQyxzQkFDQSxDQUFDRztRQUFVLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxRQUFRRDtRQUNkLE1BQU1FLGVBQWVELE1BQU1FLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxJQUFJLENBQ3ZDLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sS0FBS1IsU0FBU1EsTUFBTTtRQUUzQyxJQUFJSixjQUFjO1lBQ2hCLG1EQUFtRDtZQUNuRCxNQUFNSyxjQUFjO2dCQUNsQixHQUFHTCxZQUFZO2dCQUNmTSxPQUFPTixhQUFhTSxLQUFLLEdBQUc7WUFDOUI7WUFDQSx3Q0FBd0M7WUFDeEMsT0FBT0Q7UUFDVCxPQUFPO1lBQ0wsMkNBQTJDO1lBQzNDLE9BQU9UO1FBQ1Q7SUFDRixFQUFFLE9BQU9XLE9BQU87UUFDZCxPQUFPVixnQkFBZ0JVLE1BQU1DLE9BQU87SUFDdEM7QUFDRixHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzP2M3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vc2xpY2VzL2NhcnRTbGljZVwiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0RnVuYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiY2FydC9hZGRUb0NhcnRGdW5jXCIsXG4gIChpdGVtRGF0YSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gc3RhdGUuY2FydC5jYXJ0LmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLml0ZW1ObyA9PT0gaXRlbURhdGEuaXRlbU5vXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgICAvLyDQldGB0LvQuCDRgtC+0LLQsNGAINGD0LbQtSDQtdGB0YLRjCDQsiDQutC+0YDQt9C40L3QtSwg0YPQstC10LvQuNGH0LjQstCw0LXQvCBjb3VudFxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbSA9IHtcbiAgICAgICAgICAuLi5leGlzdGluZ0l0ZW0sXG4gICAgICAgICAgY291bnQ6IGV4aXN0aW5nSXRlbS5jb3VudCArIDEsXG4gICAgICAgIH07XG4gICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgtC+0LLQsNGAINCyINC60L7RgNC30LjQvdC1INCyINGB0L7RgdGC0L7Rj9C90LjQuFxuICAgICAgICByZXR1cm4gdXBkYXRlZEl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDQldGB0LvQuCDRgtC+0LLQsNGA0LAg0L3QtdGCINCyINC60L7RgNC30LjQvdC1LCDQtNC+0LHQsNCy0LvRj9C10Lwg0LXQs9C+XG4gICAgICAgIHJldHVybiBpdGVtRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImFkZFRvQ2FydCIsImFkZFRvQ2FydEZ1bmMiLCJpdGVtRGF0YSIsInJlamVjdFdpdGhWYWx1ZSIsImdldFN0YXRlIiwic3RhdGUiLCJleGlzdGluZ0l0ZW0iLCJjYXJ0IiwiZmluZCIsIml0ZW0iLCJpdGVtTm8iLCJ1cGRhdGVkSXRlbSIsImNvdW50IiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});