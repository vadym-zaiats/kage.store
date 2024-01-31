"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[itemNo]/page",{

/***/ "(app-pages-browser)/./src/redux/api/productsApi.js":
/*!**************************************!*\
  !*** ./src/redux/api/productsApi.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productsApi: function() { return /* binding */ productsApi; },\n/* harmony export */   useGetCurrentProductQuery: function() { return /* binding */ useGetCurrentProductQuery; },\n/* harmony export */   useGetProductsQuery: function() { return /* binding */ useGetProductsQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n\nconst productsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"productsApi\",\n    tagTypes: [\n        \"Products\"\n    ],\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"http://localhost:4000/\"\n    }),\n    endpoints: (builder)=>({\n            getProducts: builder.query({\n                query: ()=>\"api/products\",\n                providesTags: ()=>[\n                        {\n                            type: \"Products\"\n                        }\n                    ]\n            }),\n            getCurrentProduct: builder.query({\n                query: (itemNo)=>\"api/products/\".concat(itemNo),\n                providesTags: ()=>[\n                        {\n                            type: \"Products\"\n                        }\n                    ]\n            })\n        })\n});\nconst { useGetProductsQuery, useGetCurrentProductQuery } = productsApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9hcGkvcHJvZHVjdHNBcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUU7QUFFbEUsTUFBTUUsY0FBY0YsdUVBQVNBLENBQUM7SUFDbkNHLGFBQWE7SUFDYkMsVUFBVTtRQUFDO0tBQVc7SUFDdEJDLFdBQVdKLDRFQUFjQSxDQUFDO1FBQ3hCSyxTQUFTO0lBQ1g7SUFDQUMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxhQUFhRCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3pCQSxPQUFPLElBQU07Z0JBQ2JDLGNBQWMsSUFBTTt3QkFBQzs0QkFBRUMsTUFBTTt3QkFBVztxQkFBRTtZQUM1QztZQUNBQyxtQkFBbUJMLFFBQVFFLEtBQUssQ0FBQztnQkFDL0JBLE9BQU8sQ0FBQ0ksU0FBVyxnQkFBdUIsT0FBUEE7Z0JBQ25DSCxjQUFjLElBQU07d0JBQUM7NEJBQUVDLE1BQU07d0JBQVc7cUJBQUU7WUFDNUM7UUFLRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVHLG1CQUFtQixFQUFFQyx5QkFBeUIsRUFBRSxHQUFHZCxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9hcGkvcHJvZHVjdHNBcGkuanM/MTFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzQXBpID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6IFwicHJvZHVjdHNBcGlcIixcbiAgdGFnVHlwZXM6IFtcIlByb2R1Y3RzXCJdLFxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtcbiAgICBiYXNlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9cIixcbiAgfSksXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgZ2V0UHJvZHVjdHM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6ICgpID0+IFwiYXBpL3Byb2R1Y3RzXCIsXG4gICAgICBwcm92aWRlc1RhZ3M6ICgpID0+IFt7IHR5cGU6IFwiUHJvZHVjdHNcIiB9XSxcbiAgICB9KSxcbiAgICBnZXRDdXJyZW50UHJvZHVjdDogYnVpbGRlci5xdWVyeSh7XG4gICAgICBxdWVyeTogKGl0ZW1ObykgPT4gYGFwaS9wcm9kdWN0cy8ke2l0ZW1Ob31gLFxuICAgICAgcHJvdmlkZXNUYWdzOiAoKSA9PiBbeyB0eXBlOiBcIlByb2R1Y3RzXCIgfV0sXG4gICAgfSksXG4gICAgLy8gZ2V0RmlsdGVyZWRQcm9kdWN0OiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAvLyAgIHF1ZXJ5OiAodXJsKSA9PiBgYXBpL3Byb2R1Y3RzL2ZpbHRlcj8ke3VybH1gLFxuICAgIC8vICAgcHJvdmlkZXNUYWdzOiAoKSA9PiBbeyB0eXBlOiBcIlByb2R1Y3RzXCIgfV0sXG4gICAgLy8gfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldFByb2R1Y3RzUXVlcnksIHVzZUdldEN1cnJlbnRQcm9kdWN0UXVlcnkgfSA9IHByb2R1Y3RzQXBpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwicHJvZHVjdHNBcGkiLCJyZWR1Y2VyUGF0aCIsInRhZ1R5cGVzIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwicHJvdmlkZXNUYWdzIiwidHlwZSIsImdldEN1cnJlbnRQcm9kdWN0IiwiaXRlbU5vIiwidXNlR2V0UHJvZHVjdHNRdWVyeSIsInVzZUdldEN1cnJlbnRQcm9kdWN0UXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/api/productsApi.js\n"));

/***/ })

});