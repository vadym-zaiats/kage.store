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

/***/ "(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx":
/*!****************************************************!*\
  !*** ./src/app/ui/productsBlock/ProductsBlock.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProductsBlock(param) {\n    let { title, products, num } = param;\n    _s();\n    const itemsToShowInitially = 10; // Количество элементов для отображения при загрузке страницы\n    const itemsPerLoad = 5; // Количество элементов для загрузки при нажатии \"Показать больше\"\n    const [visibleData, setVisibleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products.slice(0, itemsToShowInitially));\n    const [remainingData, setRemainingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products.slice(itemsToShowInitially));\n    // const [count, setCount] = useState(num);\n    const handleLoadMore = ()=>{\n        // setCount((prevState) => prevState + num);\n        const nextBatch = remainingData.slice(0, itemsPerLoad);\n        setVisibleData((prevData)=>[\n                ...prevData,\n                ...nextBatch\n            ]);\n        setRemainingData((prevRemaining)=>prevRemaining.slice(itemsPerLoad));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block__list),\n                children: products && Array.isArray(products) && products.length > 0 && products// .slice(0, count)\n                .map((param)=>{\n                    let { name, currentPrice, imageUrls, _id, itemNo, quantity, categories, date, hot, sale } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        name: name,\n                        currentPrice: currentPrice,\n                        imageUrls: imageUrls,\n                        itemNo: itemNo,\n                        quantity: quantity,\n                        categories: categories,\n                        date: date,\n                        hot: hot,\n                        sale: sale\n                    }, _id, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"Pm2nFjyvNU30Vg1zVVV494k9ipY=\");\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDRztBQUNhO0FBRTFDLFNBQVNHLGNBQWMsS0FBd0I7UUFBeEIsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLEdBQUcsRUFBRSxHQUF4Qjs7SUFDNUIsTUFBTUMsdUJBQXVCLElBQUksNkRBQTZEO0lBQzlGLE1BQU1DLGVBQWUsR0FBRyxrRUFBa0U7SUFDMUYsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUM1Q0ssU0FBU00sS0FBSyxDQUFDLEdBQUdKO0lBRXBCLE1BQU0sQ0FBQ0ssZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUNoREssU0FBU00sS0FBSyxDQUFDSjtJQUdqQiwyQ0FBMkM7SUFDM0MsTUFBTU8saUJBQWlCO1FBQ3JCLDRDQUE0QztRQUM1QyxNQUFNQyxZQUFZSCxjQUFjRCxLQUFLLENBQUMsR0FBR0g7UUFDekNFLGVBQWUsQ0FBQ00sV0FBYTttQkFBSUE7bUJBQWFEO2FBQVU7UUFDeERGLGlCQUFpQixDQUFDSSxnQkFBa0JBLGNBQWNOLEtBQUssQ0FBQ0g7SUFDMUQ7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBV2pCLHlFQUFlOzswQkFDN0IsOERBQUNrQjtnQkFBR0QsV0FBV2pCLGdGQUFzQjswQkFBR0U7Ozs7OzswQkFDeEMsOERBQUNjO2dCQUFJQyxXQUFXakIsK0VBQXFCOzBCQUNsQ0csWUFDQ2dCLE1BQU1DLE9BQU8sQ0FBQ2pCLGFBQ2RBLFNBQVNrQixNQUFNLEdBQUcsS0FDbEJsQixRQUNFLG1CQUFtQjtpQkFDbEJtQixHQUFHLENBQ0Y7d0JBQUMsRUFDQ0MsSUFBSSxFQUNKQyxZQUFZLEVBQ1pDLFNBQVMsRUFDVEMsR0FBRyxFQUNIQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEMsSUFBSSxFQUNMO3lDQUNDLDhEQUFDakMsMkNBQUlBO3dCQUVId0IsTUFBTUE7d0JBQ05DLGNBQWNBO3dCQUNkQyxXQUFXQTt3QkFDWEUsUUFBUUE7d0JBQ1JDLFVBQVVBO3dCQUNWQyxZQUFZQTt3QkFDWkMsTUFBTUE7d0JBQ05DLEtBQUtBO3dCQUNMQyxNQUFNQTt1QkFURE47Ozs7Ozs7Ozs7OzBCQWVqQiw4REFBQ087Z0JBQU9oQixXQUFXakIsdUZBQTBCO2dCQUFFa0MsU0FBU3RCOzBCQUFnQjs7Ozs7Ozs7Ozs7O0FBTTlFO0dBOURnQlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2suanN4PzQ3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQv0KFhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHNCbG9jay5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdHNCbG9jayh7IHRpdGxlLCBwcm9kdWN0cywgbnVtIH0pIHtcbiAgY29uc3QgaXRlbXNUb1Nob3dJbml0aWFsbHkgPSAxMDsgLy8g0JrQvtC70LjRh9C10YHRgtCy0L4g0Y3Qu9C10LzQtdC90YLQvtCyINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0YtcbiAgY29uc3QgaXRlbXNQZXJMb2FkID0gNTsgLy8g0JrQvtC70LjRh9C10YHRgtCy0L4g0Y3Qu9C10LzQtdC90YLQvtCyINC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCBcItCf0L7QutCw0LfQsNGC0Ywg0LHQvtC70YzRiNC1XCJcbiAgY29uc3QgW3Zpc2libGVEYXRhLCBzZXRWaXNpYmxlRGF0YV0gPSB1c2VTdGF0ZShcbiAgICBwcm9kdWN0cy5zbGljZSgwLCBpdGVtc1RvU2hvd0luaXRpYWxseSlcbiAgKTtcbiAgY29uc3QgW3JlbWFpbmluZ0RhdGEsIHNldFJlbWFpbmluZ0RhdGFdID0gdXNlU3RhdGUoXG4gICAgcHJvZHVjdHMuc2xpY2UoaXRlbXNUb1Nob3dJbml0aWFsbHkpXG4gICk7XG5cbiAgLy8gY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShudW0pO1xuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICAvLyBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyBudW0pO1xuICAgIGNvbnN0IG5leHRCYXRjaCA9IHJlbWFpbmluZ0RhdGEuc2xpY2UoMCwgaXRlbXNQZXJMb2FkKTtcbiAgICBzZXRWaXNpYmxlRGF0YSgocHJldkRhdGEpID0+IFsuLi5wcmV2RGF0YSwgLi4ubmV4dEJhdGNoXSk7XG4gICAgc2V0UmVtYWluaW5nRGF0YSgocHJldlJlbWFpbmluZykgPT4gcHJldlJlbWFpbmluZy5zbGljZShpdGVtc1BlckxvYWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrYF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fdGl0bGVgXX0+e3RpdGxlfTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fbGlzdGBdfT5cbiAgICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9kdWN0cykgJiZcbiAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcHJvZHVjdHNcbiAgICAgICAgICAgIC8vIC5zbGljZSgwLCBjb3VudClcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmxzLFxuICAgICAgICAgICAgICAgIF9pZCxcbiAgICAgICAgICAgICAgICBpdGVtTm8sXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgICAgIGhvdCxcbiAgICAgICAgICAgICAgICBzYWxlLFxuICAgICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZT17Y3VycmVudFByaWNlfVxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmxzPXtpbWFnZVVybHN9XG4gICAgICAgICAgICAgICAgICBpdGVtTm89e2l0ZW1Ob31cbiAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgaG90PXtob3R9XG4gICAgICAgICAgICAgICAgICBzYWxlPXtzYWxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiB7Y291bnQgPCBwcm9kdWN0cy5sZW5ndGggJiYgKCAqL31cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zaG93LW1vcmVgXX0gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxuICAgICAgICDQn9C+0LrQsNC30LDRgtC4INGJ0LVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgey8qICl9ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIlByb2R1Y3RzQmxvY2siLCJ0aXRsZSIsInByb2R1Y3RzIiwibnVtIiwiaXRlbXNUb1Nob3dJbml0aWFsbHkiLCJpdGVtc1BlckxvYWQiLCJ2aXNpYmxlRGF0YSIsInNldFZpc2libGVEYXRhIiwic2xpY2UiLCJyZW1haW5pbmdEYXRhIiwic2V0UmVtYWluaW5nRGF0YSIsImhhbmRsZUxvYWRNb3JlIiwibmV4dEJhdGNoIiwicHJldkRhdGEiLCJwcmV2UmVtYWluaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtYXAiLCJuYW1lIiwiY3VycmVudFByaWNlIiwiaW1hZ2VVcmxzIiwiX2lkIiwiaXRlbU5vIiwicXVhbnRpdHkiLCJjYXRlZ29yaWVzIiwiZGF0ZSIsImhvdCIsInNhbGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});