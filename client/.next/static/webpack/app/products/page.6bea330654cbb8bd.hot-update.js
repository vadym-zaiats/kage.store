"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx":
/*!****************************************************!*\
  !*** ./src/app/ui/productsBlock/ProductsBlock.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var _redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/redux/api/productsApi */ \"(app-pages-browser)/./src/redux/api/productsApi.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"За замовчуванням\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    // const products = useSelector(filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const { data: products, isLoading } = (0,_redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__.useGetFilteredProductQuery)(url);\n    console.log(products, isLoading);\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // dispatch(setFilteredProducts(products));\n    // dispatch(fetchFilteredProducts(url));\n    }, [\n        url\n    ]);\n    const handleSort = (e)=>{\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.sortFilter)(e.target.getAttribute(\"data-option-type\")));\n        setOptionType(e.target.getAttribute(\"data-option-text\"));\n        setSortOptions(!sortOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(ProductsBlock, \"g6VwZzHZ6nqr/D3UL86S/gel1pU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        _redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__.useGetFilteredProductQuery\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNSO0FBQ2E7QUFDbEI7QUFDd0I7QUFDWTtBQUNVO0FBSXZDO0FBQytCO0FBRTlELFNBQVNhLGNBQWMsS0FBNEI7UUFBNUIsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLEdBQUcsRUFBRSxHQUE1Qjs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQ2U7SUFDbkMsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNvQixZQUFZQyxjQUFjLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNc0IsV0FBV2xCLHdEQUFXQTtJQUM1QiwwREFBMEQ7SUFDMUQsTUFBTW1CLE1BQU0sSUFBSUMsZ0JBQWdCVixjQUFjVyxRQUFRO0lBRXRELE1BQU0sRUFBRUMsTUFBTUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLGtGQUEwQkEsQ0FBQ1k7SUFDakVNLFFBQVFDLEdBQUcsQ0FBQ0gsVUFBVUM7SUFFdEIsTUFBTUcsaUJBQWlCO1FBQ3JCZCxTQUFTLENBQUNlLFlBQWNBLFlBQVlqQjtJQUN0QztJQUVBaEIsZ0RBQVNBLENBQUM7SUFDUiwyQ0FBMkM7SUFDM0Msd0NBQXdDO0lBQzFDLEdBQUc7UUFBQ3dCO0tBQUk7SUFFUixNQUFNVSxhQUFhLENBQUNDO1FBQ2xCWixTQUFTZixxRUFBVUEsQ0FBQzJCLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQzFDZixjQUFjYSxFQUFFQyxNQUFNLENBQUNDLFlBQVksQ0FBQztRQUNwQ2pCLGVBQWUsQ0FBQ0Q7SUFDbEI7SUFFQSxxQkFDRTtBQXlGSjtHQXJIZ0JOOztRQUtHUixvREFBV0E7UUFJVU8sOEVBQTBCQTs7O0tBVGxEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3Byb2R1Y3RzQmxvY2svUHJvZHVjdHNCbG9jay5qc3g/NDcwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL9ChYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Byb2R1Y3RzQmxvY2subW9kdWxlLnNjc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRGaWx0ZXIsIHNvcnRGaWx0ZXIgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2VcIjtcbmltcG9ydCB7IGZldGNoRmlsdGVyZWRQcm9kdWN0cyB9IGZyb20gXCJAL3JlZHV4L21pZGRsZXdhcmVzL2ZpbHRlcmVkUHJvZHVjdHNcIjtcbmltcG9ydCB7XG4gIGZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvcixcbiAgc2V0RmlsdGVyZWRQcm9kdWN0cyxcbn0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2R1Y3RzU2xpY2VcIjtcbmltcG9ydCB7IHVzZUdldEZpbHRlcmVkUHJvZHVjdFF1ZXJ5IH0gZnJvbSBcIkAvcmVkdXgvYXBpL3Byb2R1Y3RzQXBpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0c0Jsb2NrKHsgdGl0bGUsIHNlYXJjaFBhcmFtcywgbnVtIH0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShudW0pO1xuICBjb25zdCBbc29ydE9wdGlvbnMsIHNldFNvcnRPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wdGlvblR5cGUsIHNldE9wdGlvblR5cGVdID0gdXNlU3RhdGUoXCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCIpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy8gY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3RvcihmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcykudG9TdHJpbmcoKTtcblxuICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzLCBpc0xvYWRpbmcgfSA9IHVzZUdldEZpbHRlcmVkUHJvZHVjdFF1ZXJ5KHVybCk7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzLCBpc0xvYWRpbmcpO1xuXG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHNldENvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIG51bSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBkaXNwYXRjaChzZXRGaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzKSk7XG4gICAgLy8gZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICB9LCBbdXJsXSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydCA9IChlKSA9PiB7XG4gICAgZGlzcGF0Y2goc29ydEZpbHRlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10eXBlXCIpKSk7XG4gICAgc2V0T3B0aW9uVHlwZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10ZXh0XCIpKTtcbiAgICBzZXRTb3J0T3B0aW9ucyghc29ydE9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD48Lz5cbiAgICAvLyA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tgXX0+XG4gICAgLy8gICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX190aXRsZWBdfT57dGl0bGV9PC9oMj5cbiAgICAvLyAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2xpc3RgXX0+XG4gICAgLy8gICAgIHt0aXRsZSA9PT0gXCLQo9GB0ZYg0LLQuNGA0L7QsdC4XCIgJiYgKFxuICAgIC8vICAgICAgIDw+XG4gICAgLy8gICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19idXR0b25gXX0+XG4gICAgLy8gICAgICAgICAgIDxidXR0b25cbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlcmBdfVxuICAgIC8vICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEZpbHRlcigpKTtcbiAgICAvLyAgICAgICAgICAgICB9fVxuICAgIC8vICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgPEltYWdlXG4gICAgLy8gICAgICAgICAgICAgICBzcmM9XCIvaW1ncy9maWx0ZXIucG5nXCJcbiAgICAvLyAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAvLyAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgLy8gICAgICAgICAgICAgICBhbHQ9XCJ0by1mYXZcIlxuICAgIC8vICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAvLyAgICAgICAgICAgICAvPlxuICAgIC8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fZmlsdGVyLS10ZXh0YF19PtCk0ZbQu9GM0YLRgNC4PC9zcGFuPlxuICAgIC8vICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAvLyAgICAgICAgIDwvbGk+XG4gICAgLy8gICAgICAgICA8bGlcbiAgICAvLyAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbYGJsb2NrX19idXR0b25gXX0gJHtcbiAgICAvLyAgICAgICAgICAgICBzb3J0T3B0aW9ucyAmJiBzdHlsZXNbYGJsb2NrX19idXR0b24tLXNvcnRgXVxuICAgIC8vICAgICAgICAgICB9YH1cbiAgICAvLyAgICAgICAgID5cbiAgICAvLyAgICAgICAgICAgPGJ1dHRvblxuICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc29ydC10eXBlYF19XG4gICAgLy8gICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgc2V0U29ydE9wdGlvbnMoIXNvcnRPcHRpb25zKTtcbiAgICAvLyAgICAgICAgICAgICB9fVxuICAgIC8vICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAge29wdGlvblR5cGV9XG4gICAgLy8gICAgICAgICAgIDwvYnV0dG9uPlxuICAgIC8vICAgICAgICAgICA8dWxcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImJsb2NrX19zb3J0LW9wdGlvbnNcIl19ICR7XG4gICAgLy8gICAgICAgICAgICAgICBzb3J0T3B0aW9ucyAmJiBzdHlsZXNbXCJibG9ja19fc29ydC1vcHRpb25zLS1vcGVuXCJdXG4gICAgLy8gICAgICAgICAgICAgfWB9XG4gICAgLy8gICAgICAgICAgID5cbiAgICAvLyAgICAgICAgICAgICA8bGlcbiAgICAvLyAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJkYXRlXCJcbiAgICAvLyAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQndCw0LnQvdC+0LLRltGI0ZZcIlxuICAgIC8vICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAvLyAgICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgICDQndCw0LnQvdC+0LLRltGI0ZZcbiAgICAvLyAgICAgICAgICAgICA8L2xpPlxuICAgIC8vICAgICAgICAgICAgIDxsaVxuICAgIC8vICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdHlwZT1cImZhbHNlXCJcbiAgICAvLyAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCJcbiAgICAvLyAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgLy8gICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAg0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgICAgIDwvbGk+XG4gICAgLy8gICAgICAgICAgICAgPGxpXG4gICAgLy8gICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiY3VycmVudFByaWNlXCJcbiAgICAvLyAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQktGW0LQg0L3QsNC50LzQtdC90YjQvtGXINGG0ZbQvdC4XCJcbiAgICAvLyAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgLy8gICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAg0JLRltC0INC90LDQudC80LXQvdGI0L7RlyDRhtGW0L3QuFxuICAgIC8vICAgICAgICAgICAgIDwvbGk+XG4gICAgLy8gICAgICAgICAgICAgPGxpXG4gICAgLy8gICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiLWN1cnJlbnRQcmljZVwiXG4gICAgLy8gICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0JLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXINGG0ZbQvdC4XCJcbiAgICAvLyAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgLy8gICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAg0JLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXINGG0ZbQvdC4XG4gICAgLy8gICAgICAgICAgICAgPC9saT5cbiAgICAvLyAgICAgICAgICAgPC91bD5cbiAgICAvLyAgICAgICAgIDwvbGk+XG4gICAgLy8gICAgICAgPC8+XG4gICAgLy8gICAgICl9XG4gICAgLy8gICAgIHtwcm9kdWN0cyAmJlxuICAgIC8vICAgICAgIEFycmF5LmlzQXJyYXkocHJvZHVjdHMpICYmXG4gICAgLy8gICAgICAgcHJvZHVjdHMubGVuZ3RoID4gMCAmJlxuICAgIC8vICAgICAgIHByb2R1Y3RzXG4gICAgLy8gICAgICAgICAuc2xpY2UoMCwgY291bnQpXG4gICAgLy8gICAgICAgICAubWFwKCh7IF9pZCwgLi4ucHJvZHVjdFByb3BzIH0pID0+IChcbiAgICAvLyAgICAgICAgICAgPENhcmQga2V5PXtfaWR9IHsuLi5wcm9kdWN0UHJvcHN9IC8+XG4gICAgLy8gICAgICAgICApKX1cbiAgICAvLyAgIDwvdWw+XG4gICAgLy8gICB7Y291bnQgPCBwcm9kdWN0cy5sZW5ndGggJiYgKFxuICAgIC8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc2hvdy1tb3JlYF19IG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfT5cbiAgICAvLyAgICAgICDQn9C+0LrQsNC30LDRgtC4INGJ0LVcbiAgICAvLyAgICAgPC9idXR0b24+XG4gICAgLy8gICApfVxuICAgIC8vIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJzdHlsZXMiLCJJbWFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRGaWx0ZXIiLCJzb3J0RmlsdGVyIiwiZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsInVzZUdldEZpbHRlcmVkUHJvZHVjdFF1ZXJ5IiwiUHJvZHVjdHNCbG9jayIsInRpdGxlIiwic2VhcmNoUGFyYW1zIiwibnVtIiwiY291bnQiLCJzZXRDb3VudCIsInNvcnRPcHRpb25zIiwic2V0U29ydE9wdGlvbnMiLCJvcHRpb25UeXBlIiwic2V0T3B0aW9uVHlwZSIsImRpc3BhdGNoIiwidXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJkYXRhIiwicHJvZHVjdHMiLCJpc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9hZE1vcmUiLCJwcmV2U3RhdGUiLCJoYW5kbGVTb3J0IiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});