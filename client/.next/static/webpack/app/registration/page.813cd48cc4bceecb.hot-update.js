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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ \"(app-pages-browser)/./src/app/ui/registration/validation.js\");\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Registration() {\n    _s();\n    const [firstnameIsFocused, setFirstnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const firstnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [lastnameIsFocused, setLastnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const lastnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // firstName\n    const handleSelectedFirstname = ()=>{\n        firstnameFocus.current.focus();\n    };\n    const handleFirstnameFocus = ()=>{\n        setFirstnameIsFocused(true);\n    };\n    const handleFirstnameBlur = ()=>{\n        setFirstnameIsFocused(false);\n    };\n    // lastName\n    const handleSelectedLastname = ()=>{\n        lastnameFocus.current.focus();\n    };\n    const handleLastnameFocus = ()=>{\n        setLastnameIsFocused(true);\n    };\n    const handleLastnameBlur = ()=>{\n        setLastnameIsFocused(false);\n    };\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: {\n            firstName: \"\",\n            lastName: \"\"\n        },\n        validationSchema: _validation__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        onSubmit: (values)=>{\n            alert(JSON.stringify(values, null, 2));\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form)),\n        onSubmit: formik.handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__firstname), \" \").concat(formik.touched.firstName && formik.errors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().data__invalid)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"form__firstname-input\"]),\n                        type: \"text\",\n                        id: \"firstName\",\n                        name: \"firstName\",\n                        value: formik.values.firstName,\n                        onChange: formik.handleChange,\n                        onBlur: formik.values.firstName ? null : handleFirstnameBlur,\n                        onFocus: handleFirstnameFocus,\n                        ref: firstnameFocus\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"firstName\",\n                        onClick: handleSelectedFirstname,\n                        className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"form__firstname-label\"]), \" \").concat(firstnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"input-focused\"]), \" \").concat(formik.touched.firstName && formik.errors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().data__invalid)),\n                        children: \"Імʼя\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            formik.touched.firstName && formik.errors.firstName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__error),\n                children: formik.errors.firstName\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__lastname), \" \").concat(formik.touched.lastName && formik.errors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().data__invalid)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"form__lastname-input\"]),\n                        type: \"text\",\n                        id: \"lastName\",\n                        name: \"lastName\",\n                        value: formik.values.lastName,\n                        onChange: formik.handleChange,\n                        onBlur: formik.values.lastName ? null : handleLastnameBlur,\n                        onFocus: handleLastnameFocus,\n                        ref: lastnameFocus\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"lastName\",\n                        onClick: handleSelectedLastname,\n                        className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"form__lastname-label\"]), \" \").concat(lastnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"input-focused\"]), \" \").concat(formik.touched.lastName && formik.errors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().data__invalid)),\n                        children: \"Прізвище\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            formik.touched.lastName && formik.errors.lastName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__error),\n                children: formik.errors.lastName\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__button)),\n                type: \"submit\",\n                children: \"Зареєструватись\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"R6JJ6f8z9GM0vQae2jvifqhxYw8=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVzRDtBQUNuQjtBQUNNO0FBQ0c7QUFFckMsU0FBU0s7O0lBQ2QsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNTSxpQkFBaUJMLDZDQUFNQSxDQUFDO0lBQzlCLE1BQU0sQ0FBQ00sbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTVMsZ0JBQWdCUiw2Q0FBTUEsQ0FBQztJQUM3QixZQUFZO0lBQ1osTUFBTVMsMEJBQTBCO1FBQzlCSixlQUFlSyxPQUFPLENBQUNDLEtBQUs7SUFDOUI7SUFDQSxNQUFNQyx1QkFBdUI7UUFDM0JSLHNCQUFzQjtJQUN4QjtJQUNBLE1BQU1TLHNCQUFzQjtRQUMxQlQsc0JBQXNCO0lBQ3hCO0lBQ0EsV0FBVztJQUNYLE1BQU1VLHlCQUF5QjtRQUM3Qk4sY0FBY0UsT0FBTyxDQUFDQyxLQUFLO0lBQzdCO0lBQ0EsTUFBTUksc0JBQXNCO1FBQzFCUixxQkFBcUI7SUFDdkI7SUFDQSxNQUFNUyxxQkFBcUI7UUFDekJULHFCQUFxQjtJQUN2QjtJQUVBLE1BQU1VLFNBQVNuQixpREFBU0EsQ0FBQztRQUN2Qm9CLGVBQWU7WUFDYkMsV0FBVztZQUNYQyxVQUFVO1FBQ1o7UUFDQW5CLGtCQUFrQkEsbURBQWdCQTtRQUNsQ29CLFVBQVUsQ0FBQ0M7WUFDVEMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSCxRQUFRLE1BQU07UUFDckM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDSTtRQUFLQyxXQUFXLEdBQWtCLE9BQWY5Qiw2RUFBYztRQUFJd0IsVUFBVUosT0FBT1csWUFBWTs7MEJBQ2pFLDhEQUFDQztnQkFDQ0YsV0FBVyxHQUNUVixPQURZcEIsd0ZBQXlCLEVBQUMsS0FJdkMsT0FIQ29CLE9BQU9hLE9BQU8sQ0FBQ1gsU0FBUyxJQUN4QkYsT0FBT2MsTUFBTSxDQUFDWixTQUFTLElBQ3ZCdEIsc0ZBQXVCOztrQ0FHekIsOERBQUNtQzt3QkFDQ0wsV0FBVzlCLGlHQUErQjt3QkFDMUNvQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxPQUFPbkIsT0FBT0ssTUFBTSxDQUFDSCxTQUFTO3dCQUM5QmtCLFVBQVVwQixPQUFPcUIsWUFBWTt3QkFDN0JDLFFBQVF0QixPQUFPSyxNQUFNLENBQUNILFNBQVMsR0FBRyxPQUFPTjt3QkFDekMyQixTQUFTNUI7d0JBQ1Q2QixLQUFLcEM7Ozs7OztrQ0FFUCw4REFBQ3FDO3dCQUNDQyxTQUFRO3dCQUNSQyxTQUFTbkM7d0JBQ1RrQixXQUFXLEdBQ1R4QixPQURZTixpR0FBK0IsRUFBQyxLQUc1Q29CLE9BRkFkLHNCQUFzQk4seUZBQXVCLEVBQzlDLEtBSUEsT0FIQ29CLE9BQU9hLE9BQU8sQ0FBQ1gsU0FBUyxJQUN4QkYsT0FBT2MsTUFBTSxDQUFDWixTQUFTLElBQ3ZCdEIsc0ZBQXVCO2tDQUUxQjs7Ozs7Ozs7Ozs7O1lBSUZvQixPQUFPYSxPQUFPLENBQUNYLFNBQVMsSUFBSUYsT0FBT2MsTUFBTSxDQUFDWixTQUFTLGtCQUNsRCw4REFBQ1U7Z0JBQUlGLFdBQVc5QixvRkFBcUI7MEJBQUdvQixPQUFPYyxNQUFNLENBQUNaLFNBQVM7Ozs7OzswQkFFakUsOERBQUNVO2dCQUNDRixXQUFXLEdBQ1RWLE9BRFlwQix1RkFBd0IsRUFBQyxLQUl0QyxPQUhDb0IsT0FBT2EsT0FBTyxDQUFDVixRQUFRLElBQ3ZCSCxPQUFPYyxNQUFNLENBQUNYLFFBQVEsSUFDdEJ2QixzRkFBdUI7O2tDQUd6Qiw4REFBQ21DO3dCQUNDTCxXQUFXOUIsZ0dBQThCO3dCQUN6Q29DLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLE9BQU9uQixPQUFPSyxNQUFNLENBQUNGLFFBQVE7d0JBQzdCaUIsVUFBVXBCLE9BQU9xQixZQUFZO3dCQUM3QkMsUUFBUXRCLE9BQU9LLE1BQU0sQ0FBQ0YsUUFBUSxHQUFHLE9BQU9KO3dCQUN4Q3dCLFNBQVN6Qjt3QkFDVDBCLEtBQUtqQzs7Ozs7O2tDQUVQLDhEQUFDa0M7d0JBQ0NDLFNBQVE7d0JBQ1JDLFNBQVM5Qjt3QkFDVGEsV0FBVyxHQUNUckIsT0FEWVQsZ0dBQThCLEVBQUMsS0FHM0NvQixPQUZBWCxxQkFBcUJULHlGQUF1QixFQUM3QyxLQUlBLE9BSENvQixPQUFPYSxPQUFPLENBQUNWLFFBQVEsSUFDdkJILE9BQU9jLE1BQU0sQ0FBQ1gsUUFBUSxJQUN0QnZCLHNGQUF1QjtrQ0FFMUI7Ozs7Ozs7Ozs7OztZQUlGb0IsT0FBT2EsT0FBTyxDQUFDVixRQUFRLElBQUlILE9BQU9jLE1BQU0sQ0FBQ1gsUUFBUSxrQkFDaEQsOERBQUNTO2dCQUFJRixXQUFXOUIsb0ZBQXFCOzBCQUFHb0IsT0FBT2MsTUFBTSxDQUFDWCxRQUFROzs7Ozs7MEJBRWhFLDhEQUFDeUI7Z0JBQU9sQixXQUFXLEdBQTBCLE9BQXZCOUIscUZBQXNCO2dCQUFJb0MsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBS3BFO0dBakhnQi9COztRQTBCQ0osNkNBQVNBOzs7S0ExQlZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3g/OTNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi93aGVyZUlzTXlPcmRlckZvcm0ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB2YWxpZGF0aW9uU2NoZW1hIGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbigpIHtcbiAgY29uc3QgW2ZpcnN0bmFtZUlzRm9jdXNlZCwgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZmlyc3RuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtsYXN0bmFtZUlzRm9jdXNlZCwgc2V0TGFzdG5hbWVJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsYXN0bmFtZUZvY3VzID0gdXNlUmVmKG51bGwpO1xuICAvLyBmaXJzdE5hbWVcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWUgPSAoKSA9PiB7XG4gICAgZmlyc3RuYW1lRm9jdXMuY3VycmVudC5mb2N1cygpO1xuICB9O1xuICBjb25zdCBoYW5kbGVGaXJzdG5hbWVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRGaXJzdG5hbWVJc0ZvY3VzZWQodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUZpcnN0bmFtZUJsdXIgPSAoKSA9PiB7XG4gICAgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkKGZhbHNlKTtcbiAgfTtcbiAgLy8gbGFzdE5hbWVcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRMYXN0bmFtZSA9ICgpID0+IHtcbiAgICBsYXN0bmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTGFzdG5hbWVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRMYXN0bmFtZUlzRm9jdXNlZCh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTGFzdG5hbWVCbHVyID0gKCkgPT4ge1xuICAgIHNldExhc3RuYW1lSXNGb2N1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYTogdmFsaWRhdGlvblNjaGVtYSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtXCJdfWB9IG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19maXJzdG5hbWVcIl19ICR7XG4gICAgICAgICAgZm9ybWlrLnRvdWNoZWQuZmlyc3ROYW1lICYmXG4gICAgICAgICAgZm9ybWlrLmVycm9ycy5maXJzdE5hbWUgJiZcbiAgICAgICAgICBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZmlyc3RuYW1lLWlucHV0YF19XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5maXJzdE5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25CbHVyPXtmb3JtaWsudmFsdWVzLmZpcnN0TmFtZSA/IG51bGwgOiBoYW5kbGVGaXJzdG5hbWVCbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZpcnN0bmFtZUZvY3VzfVxuICAgICAgICAgIHJlZj17Zmlyc3RuYW1lRm9jdXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkRmlyc3RuYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fZmlyc3RuYW1lLWxhYmVsXCJdfSAke1xuICAgICAgICAgICAgZmlyc3RuYW1lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cbiAgICAgICAgICB9ICR7XG4gICAgICAgICAgICBmb3JtaWsudG91Y2hlZC5maXJzdE5hbWUgJiZcbiAgICAgICAgICAgIGZvcm1pay5lcnJvcnMuZmlyc3ROYW1lICYmXG4gICAgICAgICAgICBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICDQhtC8yrzRj1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICB7Zm9ybWlrLnRvdWNoZWQuZmlyc3ROYW1lICYmIGZvcm1pay5lcnJvcnMuZmlyc3ROYW1lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZXJyb3JgXX0+e2Zvcm1pay5lcnJvcnMuZmlyc3ROYW1lfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19sYXN0bmFtZVwiXX0gJHtcbiAgICAgICAgICBmb3JtaWsudG91Y2hlZC5sYXN0TmFtZSAmJlxuICAgICAgICAgIGZvcm1pay5lcnJvcnMubGFzdE5hbWUgJiZcbiAgICAgICAgICBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fbGFzdG5hbWUtaW5wdXRgXX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5sYXN0TmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbkJsdXI9e2Zvcm1pay52YWx1ZXMubGFzdE5hbWUgPyBudWxsIDogaGFuZGxlTGFzdG5hbWVCbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUxhc3RuYW1lRm9jdXN9XG4gICAgICAgICAgcmVmPXtsYXN0bmFtZUZvY3VzfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwibGFzdE5hbWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkTGFzdG5hbWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19sYXN0bmFtZS1sYWJlbFwiXX0gJHtcbiAgICAgICAgICAgIGxhc3RuYW1lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cbiAgICAgICAgICB9ICR7XG4gICAgICAgICAgICBmb3JtaWsudG91Y2hlZC5sYXN0TmFtZSAmJlxuICAgICAgICAgICAgZm9ybWlrLmVycm9ycy5sYXN0TmFtZSAmJlxuICAgICAgICAgICAgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAg0J/RgNGW0LfQstC40YnQtVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICB7Zm9ybWlrLnRvdWNoZWQubGFzdE5hbWUgJiYgZm9ybWlrLmVycm9ycy5sYXN0TmFtZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2Vycm9yYF19Pntmb3JtaWsuZXJyb3JzLmxhc3ROYW1lfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19idXR0b25cIl19YH0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICDQl9Cw0YDQtdGU0YHRgtGA0YPQstCw0YLQuNGB0YxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VGb3JtaWsiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInZhbGlkYXRpb25TY2hlbWEiLCJSZWdpc3RyYXRpb24iLCJmaXJzdG5hbWVJc0ZvY3VzZWQiLCJzZXRGaXJzdG5hbWVJc0ZvY3VzZWQiLCJmaXJzdG5hbWVGb2N1cyIsImxhc3RuYW1lSXNGb2N1c2VkIiwic2V0TGFzdG5hbWVJc0ZvY3VzZWQiLCJsYXN0bmFtZUZvY3VzIiwiaGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVGaXJzdG5hbWVGb2N1cyIsImhhbmRsZUZpcnN0bmFtZUJsdXIiLCJoYW5kbGVTZWxlY3RlZExhc3RuYW1lIiwiaGFuZGxlTGFzdG5hbWVGb2N1cyIsImhhbmRsZUxhc3RuYW1lQmx1ciIsImZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9ybSIsImNsYXNzTmFtZSIsImhhbmRsZVN1Ym1pdCIsImRpdiIsInRvdWNoZWQiLCJlcnJvcnMiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsInJlZiIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});