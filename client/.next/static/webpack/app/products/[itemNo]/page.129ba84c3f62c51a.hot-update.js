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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productsApi: function() { return /* binding */ productsApi; },\n/* harmony export */   useGetCurrentProductQuery: function() { return /* binding */ useGetCurrentProductQuery; },\n/* harmony export */   useGetProductsQuery: function() { return /* binding */ useGetProductsQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n\nconst productsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"productsApi\",\n    tagTypes: [\n        \"Products\"\n    ],\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"http://localhost:4000/\"\n    }),\n    endpoints: (builder)=>({\n            getProducts: builder.query({\n                query: ()=>\"api/products\",\n                providesTags: ()=>[\n                        {\n                            type: \"Products\"\n                        }\n                    ]\n            }),\n            getCurrentProduct: builder.query({\n                query: (itemNo)=>\"api/products/\".concat(itemNo),\n                providesTags: ()=>[\n                        {\n                            type: \"Products\"\n                        }\n                    ]\n            }),\n            getFilteredProduct: builder.query({\n                query: (url)=>\"api/products/filter?\".concat(url),\n                providesTags: ()=>[\n                        {\n                            type: \"Products\"\n                        }\n                    ]\n            })\n        })\n});\nconst { useGetProductsQuery, useGetCurrentProductQuery } = productsApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9hcGkvcHJvZHVjdHNBcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUU7QUFFbEUsTUFBTUUsY0FBY0YsdUVBQVNBLENBQUM7SUFDbkNHLGFBQWE7SUFDYkMsVUFBVTtRQUFDO0tBQVc7SUFDdEJDLFdBQVdKLDRFQUFjQSxDQUFDO1FBQ3hCSyxTQUFTO0lBQ1g7SUFDQUMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxhQUFhRCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3pCQSxPQUFPLElBQU07Z0JBQ2JDLGNBQWMsSUFBTTt3QkFBQzs0QkFBRUMsTUFBTTt3QkFBVztxQkFBRTtZQUM1QztZQUNBQyxtQkFBbUJMLFFBQVFFLEtBQUssQ0FBQztnQkFDL0JBLE9BQU8sQ0FBQ0ksU0FBVyxnQkFBdUIsT0FBUEE7Z0JBQ25DSCxjQUFjLElBQU07d0JBQUM7NEJBQUVDLE1BQU07d0JBQVc7cUJBQUU7WUFDNUM7WUFDQUcsb0JBQW9CUCxRQUFRRSxLQUFLLENBQUM7Z0JBQ2hDQSxPQUFPLENBQUNNLE1BQVEsdUJBQTJCLE9BQUpBO2dCQUN2Q0wsY0FBYyxJQUFNO3dCQUFDOzRCQUFFQyxNQUFNO3dCQUFXO3FCQUFFO1lBQzVDO1FBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFSyxtQkFBbUIsRUFBRUMseUJBQXlCLEVBQUUsR0FBR2hCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FwaS9wcm9kdWN0c0FwaS5qcz8xMWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNBcGkgPSBjcmVhdGVBcGkoe1xuICByZWR1Y2VyUGF0aDogXCJwcm9kdWN0c0FwaVwiLFxuICB0YWdUeXBlczogW1wiUHJvZHVjdHNcIl0sXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgIGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL1wiLFxuICB9KSxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRQcm9kdWN0czogYnVpbGRlci5xdWVyeSh7XG4gICAgICBxdWVyeTogKCkgPT4gXCJhcGkvcHJvZHVjdHNcIixcbiAgICAgIHByb3ZpZGVzVGFnczogKCkgPT4gW3sgdHlwZTogXCJQcm9kdWN0c1wiIH1dLFxuICAgIH0pLFxuICAgIGdldEN1cnJlbnRQcm9kdWN0OiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiAoaXRlbU5vKSA9PiBgYXBpL3Byb2R1Y3RzLyR7aXRlbU5vfWAsXG4gICAgICBwcm92aWRlc1RhZ3M6ICgpID0+IFt7IHR5cGU6IFwiUHJvZHVjdHNcIiB9XSxcbiAgICB9KSxcbiAgICBnZXRGaWx0ZXJlZFByb2R1Y3Q6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6ICh1cmwpID0+IGBhcGkvcHJvZHVjdHMvZmlsdGVyPyR7dXJsfWAsXG4gICAgICBwcm92aWRlc1RhZ3M6ICgpID0+IFt7IHR5cGU6IFwiUHJvZHVjdHNcIiB9XSxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSwgdXNlR2V0Q3VycmVudFByb2R1Y3RRdWVyeSB9ID0gcHJvZHVjdHNBcGk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwcm9kdWN0c0FwaSIsInJlZHVjZXJQYXRoIiwidGFnVHlwZXMiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldFByb2R1Y3RzIiwicXVlcnkiLCJwcm92aWRlc1RhZ3MiLCJ0eXBlIiwiZ2V0Q3VycmVudFByb2R1Y3QiLCJpdGVtTm8iLCJnZXRGaWx0ZXJlZFByb2R1Y3QiLCJ1cmwiLCJ1c2VHZXRQcm9kdWN0c1F1ZXJ5IiwidXNlR2V0Q3VycmVudFByb2R1Y3RRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/api/productsApi.js\n"));

/***/ })

});