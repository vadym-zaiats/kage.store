"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./src/app/ui/registration/Registration.jsx":
/*!**************************************************!*\
  !*** ./src/app/ui/registration/Registration.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Registration() {\n    _s();\n    const [firstnameIsFocused, setFirstnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const firstnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // firstName\n    const handleSelectedFirstname = ()=>{\n        firstnameFocus.current.focus();\n    };\n    const handleFirstnameFocus = ()=>{\n        setFirstnameIsFocused(true);\n    };\n    const handleFirstnameBlur = ()=>{\n        setFirstnameIsFocused(false);\n    };\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            firstName: \"\"\n        },\n        onSubmit: (values)=>{\n            alert(JSON.stringify(values, null, 2));\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: formik.handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__firstname)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"form__firstname-input\"]),\n                        type: \"text\",\n                        id: \"firstName\",\n                        name: \"firstName\",\n                        value: formik.values.firstName,\n                        onChange: formik.handleChange,\n                        onBlur: formik.values.firstName ? null : handleFirstnameBlur,\n                        onFocus: handleFirstnameFocus,\n                        ref: firstnameFocus\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        onClick: handleSelectedFirstname,\n                        className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"form__firstname-label\"]), \" \").concat(firstnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"input-focused\"])),\n                        children: \"Імʼя\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"hc58MmhDKsW8cl9tlDlQdCL+8HY=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik\n    ];\n});\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXNEO0FBQ25CO0FBQ007QUFFbEMsU0FBU0k7O0lBQ2QsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNSyxpQkFBaUJKLDZDQUFNQSxDQUFDO0lBQzlCLFlBQVk7SUFDWixNQUFNSywwQkFBMEI7UUFDOUJELGVBQWVFLE9BQU8sQ0FBQ0MsS0FBSztJQUM5QjtJQUNBLE1BQU1DLHVCQUF1QjtRQUMzQkwsc0JBQXNCO0lBQ3hCO0lBQ0EsTUFBTU0sc0JBQXNCO1FBQzFCTixzQkFBc0I7SUFDeEI7SUFFQSxNQUFNTyxTQUFTWixpREFBU0EsQ0FBQztRQUN2QmEsZUFBZTtZQUNiQyxXQUFXO1FBQ2I7UUFDQUMsVUFBVSxDQUFDQztZQUNUQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNILFFBQVEsTUFBTTtRQUNyQztJQUNGO0lBQ0EscUJBQ0UsOERBQUNJO1FBQUtMLFVBQVVILE9BQU9TLFlBQVk7OzBCQVNqQyw4REFBQ0M7Z0JBQUlDLFdBQVcsR0FBNkIsT0FBMUJ4Qix3RkFBeUI7O2tDQUMxQyw4REFBQ3lCO3dCQUNDRCxXQUFXeEIsaUdBQStCO3dCQUMxQzBCLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLE9BQU9oQixPQUFPSSxNQUFNLENBQUNGLFNBQVM7d0JBQzlCZSxVQUFVakIsT0FBT2tCLFlBQVk7d0JBQzdCQyxRQUFRbkIsT0FBT0ksTUFBTSxDQUFDRixTQUFTLEdBQUcsT0FBT0g7d0JBQ3pDcUIsU0FBU3RCO3dCQUNUdUIsS0FBSzNCOzs7Ozs7a0NBRVAsOERBQUM0Qjt3QkFDQ0MsU0FBUTt3QkFDUkMsU0FBUzdCO3dCQUNUZ0IsV0FBVyxHQUNUbkIsT0FEWUwsaUdBQStCLEVBQUMsS0FFN0MsT0FEQ0ssc0JBQXNCTCx5RkFBdUI7a0NBRWhEOzs7Ozs7Ozs7Ozs7MEJBS0gsOERBQUNzQztnQkFBT1osTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVCO0dBMURnQnRCOztRQWNDSCw2Q0FBU0E7OztLQWRWRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2hlcmVJc015T3JkZXJGb3JtLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3RyYXRpb24oKSB7XG4gIGNvbnN0IFtmaXJzdG5hbWVJc0ZvY3VzZWQsIHNldEZpcnN0bmFtZUlzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGZpcnN0bmFtZUZvY3VzID0gdXNlUmVmKG51bGwpO1xuICAvLyBmaXJzdE5hbWVcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWUgPSAoKSA9PiB7XG4gICAgZmlyc3RuYW1lRm9jdXMuY3VycmVudC5mb2N1cygpO1xuICB9O1xuICBjb25zdCBoYW5kbGVGaXJzdG5hbWVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRGaXJzdG5hbWVJc0ZvY3VzZWQodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUZpcnN0bmFtZUJsdXIgPSAoKSA9PiB7XG4gICAgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICB9LFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XG4gICAgICAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19maXJzdG5hbWVcIl19YH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19maXJzdG5hbWUtaW5wdXRgXX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZpcnN0TmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbkJsdXI9e2Zvcm1pay52YWx1ZXMuZmlyc3ROYW1lID8gbnVsbCA6IGhhbmRsZUZpcnN0bmFtZUJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRmlyc3RuYW1lRm9jdXN9XG4gICAgICAgICAgcmVmPXtmaXJzdG5hbWVGb2N1c31cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZEZpcnN0bmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2ZpcnN0bmFtZS1sYWJlbFwiXX0gJHtcbiAgICAgICAgICAgIGZpcnN0bmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICDQhtC8yrzRj1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VGb3JtaWsiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlJlZ2lzdHJhdGlvbiIsImZpcnN0bmFtZUlzRm9jdXNlZCIsInNldEZpcnN0bmFtZUlzRm9jdXNlZCIsImZpcnN0bmFtZUZvY3VzIiwiaGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVGaXJzdG5hbWVGb2N1cyIsImhhbmRsZUZpcnN0bmFtZUJsdXIiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiZmlyc3ROYW1lIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJyZWYiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});