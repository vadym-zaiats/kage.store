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

/***/ "(app-pages-browser)/./src/app/ui/hot/page.jsx":
/*!*********************************!*\
  !*** ./src/app/ui/hot/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hot: function() { return /* binding */ Hot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var _hot_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hot.module.scss */ \"(app-pages-browser)/./src/app/ui/hot/hot.module.scss\");\n/* harmony import */ var _hot_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hot_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Hot auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Hot() {\n    _s();\n    const [numElements, setNumElements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"products\"\n        ],\n        queryFn: ()=>fetch(\"http://localhost:4000/api/products\").then((res)=>res.json())\n    });\n    const handleLoadMore = ()=>{\n        setNumElements((prevNumElements)=>prevNumElements + 4);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_hot_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"hot-wrapper\"]),\n        children: data && Array.isArray(data) && data.length > 0 ? data.map((param)=>{\n            let { name, currentPrice, imageUrls, _id, hot } = param;\n            return hot ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                name: name,\n                currentPrice: currentPrice,\n                imageUrls: imageUrls\n            }, _id, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this) : null;\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data available\"\n        }, void 0, false, {\n            fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Hot, \"z9+sWVuSihPQsnmqhusMlY31ctA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Hot;\n{\n/* \n  const mutation = useMutation({\n    mutationFn: (newProduct) => {\n      return axios.post(\"http://localhost:4000/api/products\", newProduct);\n    },\n  });\n<button\nonClick={() => {\n  mutation.mutate({\n    enabled: true,\n    imageUrls: [\"/imgs/products/t-shirt/4.png\"],\n    quantity: 7,\n    name: \"Qwuie\",\n    currentPrice: 999,\n    categories: \"t-shirt\",\n    hot: false,\n    date: new Date(),\n  });\n}}\n>\nPOST new Product\n</button> */ }var _c;\n$RefreshReg$(_c, \"Hot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvaG90L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDaEI7QUFDRztBQUNHO0FBRWhDLFNBQVNJOztJQUNkLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNLEVBQUVNLElBQUksRUFBRSxHQUFHUCwrREFBUUEsQ0FBQztRQUN4QlEsVUFBVTtZQUFDO1NBQVc7UUFDdEJDLFNBQVMsSUFDUEMsTUFBTSxzQ0FBc0NDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQ3RFO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCUixlQUFlLENBQUNTLGtCQUFvQkEsa0JBQWtCO0lBQ3hEO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdkLHdFQUFxQjtrQkFDbENJLFFBQVFXLE1BQU1DLE9BQU8sQ0FBQ1osU0FBU0EsS0FBS2EsTUFBTSxHQUFHLElBQzVDYixLQUFLYyxHQUFHLENBQUM7Z0JBQUMsRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7bUJBQ25EQSxvQkFDRSw4REFBQ3hCLDRDQUFJQTtnQkFFSG9CLE1BQU1BO2dCQUNOQyxjQUFjQTtnQkFDZEMsV0FBV0E7ZUFITkM7Ozs7dUJBS0w7MkJBR04sOERBQUNFO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0dBL0JnQnZCOztRQUdHSiwyREFBUUE7OztLQUhYSTtBQWlDaEI7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBcUJRLEdBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9ob3QvcGFnZS5qc3g/YmQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL2NhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaG90Lm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBIb3QoKSB7XG4gIGNvbnN0IFtudW1FbGVtZW50cywgc2V0TnVtRWxlbWVudHNdID0gdXNlU3RhdGUoNCk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFtcInByb2R1Y3RzXCJdLFxuICAgIHF1ZXJ5Rm46ICgpID0+XG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvcHJvZHVjdHNcIikudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgc2V0TnVtRWxlbWVudHMoKHByZXZOdW1FbGVtZW50cykgPT4gcHJldk51bUVsZW1lbnRzICsgNCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bob3Qtd3JhcHBlcmBdfT5cbiAgICAgIHtkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwID8gKFxuICAgICAgICBkYXRhLm1hcCgoeyBuYW1lLCBjdXJyZW50UHJpY2UsIGltYWdlVXJscywgX2lkLCBob3QgfSkgPT5cbiAgICAgICAgICBob3QgPyAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgIGltYWdlVXJscz17aW1hZ2VVcmxzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyBkYXRhIGF2YWlsYWJsZTwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbntcbiAgLyogXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IChuZXdQcm9kdWN0KSA9PiB7XG4gICAgICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvcHJvZHVjdHNcIiwgbmV3UHJvZHVjdCk7XG4gICAgfSxcbiAgfSk7XG48YnV0dG9uXG5vbkNsaWNrPXsoKSA9PiB7XG4gIG11dGF0aW9uLm11dGF0ZSh7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBpbWFnZVVybHM6IFtcIi9pbWdzL3Byb2R1Y3RzL3Qtc2hpcnQvNC5wbmdcIl0sXG4gICAgcXVhbnRpdHk6IDcsXG4gICAgbmFtZTogXCJRd3VpZVwiLFxuICAgIGN1cnJlbnRQcmljZTogOTk5LFxuICAgIGNhdGVnb3JpZXM6IFwidC1zaGlydFwiLFxuICAgIGhvdDogZmFsc2UsXG4gICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgfSk7XG59fVxuPlxuUE9TVCBuZXcgUHJvZHVjdFxuPC9idXR0b24+ICovXG59XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJzdHlsZXMiLCJIb3QiLCJudW1FbGVtZW50cyIsInNldE51bUVsZW1lbnRzIiwiZGF0YSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJoYW5kbGVMb2FkTW9yZSIsInByZXZOdW1FbGVtZW50cyIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJjdXJyZW50UHJpY2UiLCJpbWFnZVVybHMiLCJfaWQiLCJob3QiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/hot/page.jsx\n"));

/***/ })

});