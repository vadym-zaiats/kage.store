"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/redux/middlewares/postOrder.js":
/*!********************************************!*\
  !*** ./src/redux/middlewares/postOrder.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postOrder: function() { return /* binding */ postOrder; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst postOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"order/postOrder\", async (param, param1)=>{\n    let { email, phone: mobile, letterSubject, letterHtml, ...rest } = param, { dispatch, rejectWithValue } = param1;\n    console.log(email, mobile, letterSubject, letterHtml);\n    try {\n        const res = await fetch(\"http://localhost:4000/api/orders/\", {\n            method: \"POST\",\n            // headers: { Token: token },\n            body: JSON.stringify({\n                email,\n                mobile,\n                letterSubject,\n                letterHtml,\n                deliveryAddress,\n                ...rest\n            })\n        });\n        if (!res.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        console.log(data);\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9wb3N0T3JkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFN0MsTUFBTUMsWUFBWUQsa0VBQWdCQSxDQUN2QyxtQkFDQTtRQUNFLEVBQUVFLEtBQUssRUFBRUMsT0FBT0MsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxNQUFNLFVBQzVELEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBRTdCQyxRQUFRQyxHQUFHLENBQUNULE9BQU9FLFFBQVFDLGVBQWVDO0lBQzFDLElBQUk7UUFDRixNQUFNTSxNQUFNLE1BQU1DLE1BQU0scUNBQXFDO1lBQzNEQyxRQUFRO1lBQ1IsNkJBQTZCO1lBQzdCQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CZjtnQkFDQUU7Z0JBQ0FDO2dCQUNBQztnQkFDQVk7Z0JBQ0EsR0FBR1gsSUFBSTtZQUNUO1FBQ0Y7UUFDQSxJQUFJLENBQUNLLElBQUlPLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTVQsSUFBSVUsSUFBSTtRQUMzQlosUUFBUUMsR0FBRyxDQUFDVTtRQUNaLE9BQU9BO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT2QsZ0JBQWdCYyxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvbWlkZGxld2FyZXMvcG9zdE9yZGVyLmpzPzM4MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBjb25zdCBwb3N0T3JkZXIgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcIm9yZGVyL3Bvc3RPcmRlclwiLFxuICBhc3luYyAoXG4gICAgeyBlbWFpbCwgcGhvbmU6IG1vYmlsZSwgbGV0dGVyU3ViamVjdCwgbGV0dGVySHRtbCwgLi4ucmVzdCB9LFxuICAgIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBtb2JpbGUsIGxldHRlclN1YmplY3QsIGxldHRlckh0bWwpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvb3JkZXJzL1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIC8vIGhlYWRlcnM6IHsgVG9rZW46IHRva2VuIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBtb2JpbGUsXG4gICAgICAgICAgbGV0dGVyU3ViamVjdCxcbiAgICAgICAgICBsZXR0ZXJIdG1sLFxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyxcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VydmVyIGVycm9yXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwicG9zdE9yZGVyIiwiZW1haWwiLCJwaG9uZSIsIm1vYmlsZSIsImxldHRlclN1YmplY3QiLCJsZXR0ZXJIdG1sIiwicmVzdCIsImRpc3BhdGNoIiwicmVqZWN0V2l0aFZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxpdmVyeUFkZHJlc3MiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/postOrder.js\n"));

/***/ })

});