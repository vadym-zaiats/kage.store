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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [firstnameIsFocused, setFirstnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const firstnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [lastnameIsFocused, setLastnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const lastnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loginIsFocused, setLoginIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const loginFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [emailIsFocused, setEmailIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const emailFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // firstName\n    const handleSelectedFirstname = ()=>{\n        firstnameFocus.current.focus();\n    };\n    const handleFirstnameFocus = ()=>{\n        setFirstnameIsFocused(true);\n    };\n    const handleFirstnameBlur = ()=>{\n        setFirstnameIsFocused(false);\n    };\n    // lastName\n    const handleSelectedLastname = ()=>{\n        lastnameFocus.current.focus();\n    };\n    const handleLastnameFocus = ()=>{\n        setLastnameIsFocused(true);\n    };\n    const handleLastnameBlur = ()=>{\n        setLastnameIsFocused(false);\n    };\n    // Login\n    const handleSelectedLogin = ()=>{\n        loginFocus.current.focus();\n    };\n    const handleLoginFocus = ()=>{\n        setLoginIsFocused(true);\n    };\n    const handleLoginBlur = ()=>{\n        setLoginIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        login: \"\",\n        email: \"\"\n    });\n    const { firstName, lastName, login } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: null,\n        lastName: null,\n        login: null\n    });\n    const validateForm = ()=>{\n        let errors = {};\n        if (firstName.length < 2 || firstName.length > 60) {\n            errors.firstName = \"Firstname must be between 2 and 60 characters\";\n        }\n        if (lastName.length < 2 || lastName.length > 60) {\n            errors.lastName = \"Lastname must be between 2 and 60 characters\";\n        }\n        if (login.length < 2 || login.length > 60) {\n            errors.login = \"Login must be between 2 and 60 characters\";\n        }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = firstName.length > 0 && lastName.length > 0 && login.length > 0;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__firstname), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__firstname-input\"]),\n                            type: \"text\",\n                            id: \"firstName\",\n                            name: \"firstName\",\n                            value: formData.firstName,\n                            onChange: handleChange,\n                            onBlur: firstName ? null : handleFirstnameBlur,\n                            onFocus: handleFirstnameFocus,\n                            ref: firstnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedFirstname,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__firstname-label\"]), \" \").concat(firstnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Імʼя\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.firstName && \"\".concat(validationErrors.firstName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__lastname), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__lastname-input\"]),\n                            type: \"text\",\n                            id: \"lastName\",\n                            name: \"lastName\",\n                            value: formData.lastName,\n                            onChange: handleChange,\n                            onBlur: lastName ? null : handleLastnameBlur,\n                            onFocus: handleLastnameFocus,\n                            ref: lastnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedLastname,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__lastname-label\"]), \" \").concat(lastnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Прізвище\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.lastName && \"\".concat(validationErrors.lastName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 164,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__login), \" \").concat(validationErrors.login && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__login-input\"]),\n                            type: \"text\",\n                            id: \"login\",\n                            name: \"login\",\n                            value: formData.login,\n                            onChange: handleChange,\n                            onBlur: login ? null : handleLoginBlur,\n                            onFocus: handleLoginFocus,\n                            ref: loginFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 176,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedLogin,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__login-label\"]), \" \").concat(loginIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.login && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Логін\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 187,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 171,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.login && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.login && \"\".concat(validationErrors.login)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 196,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Зареєструватись\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 203,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"F3zmxPXRFaVhtlwt2MlVc32QrL4=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdELE1BQU1JLGlCQUFpQkwsNkNBQU1BLENBQUM7SUFDOUIsTUFBTSxDQUFDTSxtQkFBbUJDLHFCQUFxQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNTyxnQkFBZ0JSLDZDQUFNQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxrQkFBa0IsR0FBR1QsK0NBQVFBLENBQUM7SUFDckQsTUFBTVUsYUFBYVgsNkNBQU1BLENBQUM7SUFDMUIsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNYSxhQUFhZCw2Q0FBTUEsQ0FBQztJQUMxQixZQUFZO0lBQ1osTUFBTWUsMEJBQTBCO1FBQzlCVixlQUFlVyxPQUFPLENBQUNDLEtBQUs7SUFDOUI7SUFDQSxNQUFNQyx1QkFBdUI7UUFDM0JkLHNCQUFzQjtJQUN4QjtJQUNBLE1BQU1lLHNCQUFzQjtRQUMxQmYsc0JBQXNCO0lBQ3hCO0lBQ0EsV0FBVztJQUNYLE1BQU1nQix5QkFBeUI7UUFDN0JaLGNBQWNRLE9BQU8sQ0FBQ0MsS0FBSztJQUM3QjtJQUNBLE1BQU1JLHNCQUFzQjtRQUMxQmQscUJBQXFCO0lBQ3ZCO0lBQ0EsTUFBTWUscUJBQXFCO1FBQ3pCZixxQkFBcUI7SUFDdkI7SUFDQSxRQUFRO0lBQ1IsTUFBTWdCLHNCQUFzQjtRQUMxQlosV0FBV0ssT0FBTyxDQUFDQyxLQUFLO0lBQzFCO0lBQ0EsTUFBTU8sbUJBQW1CO1FBQ3ZCZCxrQkFBa0I7SUFDcEI7SUFDQSxNQUFNZSxrQkFBa0I7UUFDdEJmLGtCQUFrQjtJQUNwQjtJQUVBLE1BQU0sQ0FBQ2dCLFVBQVVDLFlB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L0Isc0ZBQXVCO3NDQUN0RDs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDb0Q7b0JBQ0NDLFdBQVcsR0FDVHBCLE9BRFlqQyx5RkFBMEIsRUFBQyxLQUV4QyxPQURDaUMsaUJBQWlCRixLQUFLLElBQUkvQixzRkFBdUI7OEJBR2xEaUMsaUJBQWlCRixLQUFLLElBQUksR0FBMEIsT0FBdkJFLGlCQUFpQkYsS0FBSzs7Ozs7OzhCQUV0RCw4REFBQ2tDO29CQUNDWixXQUFXLEdBQ1RQLE9BRFk5QyxxRkFBc0IsRUFBQyxLQUVwQyxPQURDOEMsa0JBQWtCOUMsZ0ZBQWlCO29CQUVyQ3lELE1BQUs7b0JBQ0xTLFVBQVUsQ0FBQ3BCOzhCQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBak5nQjNDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3g/OTNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2hlcmVJc015T3JkZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3RyYXRpb24oKSB7XHJcbiAgY29uc3QgW2ZpcnN0bmFtZUlzRm9jdXNlZCwgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmaXJzdG5hbWVGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbbGFzdG5hbWVJc0ZvY3VzZWQsIHNldExhc3RuYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBsYXN0bmFtZUZvY3VzID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtsb2dpbklzRm9jdXNlZCwgc2V0TG9naW5Jc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGxvZ2luRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2VtYWlsSXNGb2N1c2VkLCBzZXRFbWFpbElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZW1haWxGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuICAvLyBmaXJzdE5hbWVcclxuICBjb25zdCBoYW5kbGVTZWxlY3RlZEZpcnN0bmFtZSA9ICgpID0+IHtcclxuICAgIGZpcnN0bmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZpcnN0bmFtZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRmlyc3RuYW1lQmx1ciA9ICgpID0+IHtcclxuICAgIHNldEZpcnN0bmFtZUlzRm9jdXNlZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBsYXN0TmFtZVxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkTGFzdG5hbWUgPSAoKSA9PiB7XHJcbiAgICBsYXN0bmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUxhc3RuYW1lRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRMYXN0bmFtZUlzRm9jdXNlZCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUxhc3RuYW1lQmx1ciA9ICgpID0+IHtcclxuICAgIHNldExhc3RuYW1lSXNGb2N1c2VkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIExvZ2luXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRMb2dpbiA9ICgpID0+IHtcclxuICAgIGxvZ2luRm9jdXMuY3VycmVudC5mb2N1cygpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTG9naW5Gb2N1cyA9ICgpID0+IHtcclxuICAgIHNldExvZ2luSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTG9naW5CbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0TG9naW5Jc0ZvY3VzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBsb2dpbjogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgLy8gcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAvLyBwYXNzd29yZFNlY29uZDogXCJcIixcclxuICAgIC8vIHBob25lOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgbG9naW4gfSA9IGZvcm1EYXRhO1xyXG5cclxuICBjb25zdCBbdmFsaWRhdGlvbkVycm9ycywgc2V0VmFsaWRhdGlvbkVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6IG51bGwsXHJcbiAgICBsYXN0TmFtZTogbnVsbCxcclxuICAgIGxvZ2luOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgIGlmIChmaXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmaXJzdE5hbWUubGVuZ3RoID4gNjApIHtcclxuICAgICAgZXJyb3JzLmZpcnN0TmFtZSA9IFwiRmlyc3RuYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBpZiAobGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBsYXN0TmFtZS5sZW5ndGggPiA2MCkge1xyXG4gICAgICBlcnJvcnMubGFzdE5hbWUgPSBcIkxhc3RuYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBpZiAobG9naW4ubGVuZ3RoIDwgMiB8fCBsb2dpbi5sZW5ndGggPiA2MCkge1xyXG4gICAgICBlcnJvcnMubG9naW4gPSBcIkxvZ2luIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKGVycm9ycyk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDA7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XHJcbiAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoe1xyXG4gICAgICAuLi52YWxpZGF0aW9uRXJyb3JzLFxyXG4gICAgICBbbmFtZV06IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGlzRm9ybUZpbGxlZCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IGlzRm9ybVZhbGlkID0gbmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9XHJcbiAgICAgIGZpcnN0TmFtZS5sZW5ndGggPiAwICYmIGxhc3ROYW1lLmxlbmd0aCA+IDAgJiYgbG9naW4ubGVuZ3RoID4gMDtcclxuICAgIHJldHVybiBpc0Zvcm1WYWxpZDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAvL3Bvc3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBoYXMgdmFsaWRhdGlvbiBlcnJvcnNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fZmlyc3RuYW1lXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2ZpcnN0bmFtZS1pbnB1dGBdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lID8gbnVsbCA6IGhhbmRsZUZpcnN0bmFtZUJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZpcnN0bmFtZUZvY3VzfVxyXG4gICAgICAgICAgICByZWY9e2ZpcnN0bmFtZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZEZpcnN0bmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19maXJzdG5hbWUtbGFiZWxcIl19ICR7XHJcbiAgICAgICAgICAgICAgZmlyc3RuYW1lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMuZmlyc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0IbQvMq80Y9cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWV9YH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2xhc3RuYW1lXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmxhc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fbGFzdG5hbWUtaW5wdXRgXX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2xhc3ROYW1lID8gbnVsbCA6IGhhbmRsZUxhc3RuYW1lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlTGFzdG5hbWVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtsYXN0bmFtZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZExhc3RuYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2xhc3RuYW1lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIGxhc3RuYW1lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMubGFzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQn9GA0ZbQt9Cy0LjRidC1XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fdmFsaWRhdGlvblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5sYXN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5sYXN0TmFtZSAmJiBgJHt2YWxpZGF0aW9uRXJyb3JzLmxhc3ROYW1lfWB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19sb2dpblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5sb2dpbiAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2xvZ2luLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJsb2dpblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsb2dpblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sb2dpbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtsb2dpbiA/IG51bGwgOiBoYW5kbGVMb2dpbkJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUxvZ2luRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17bG9naW5Gb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRMb2dpbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19sb2dpbi1sYWJlbFwiXX0gJHtcclxuICAgICAgICAgICAgICBsb2dpbklzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLmxvZ2luICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0JvQvtCz0ZbQvVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3ZhbGlkYXRpb25cIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMubG9naW4gJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMubG9naW4gJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5sb2dpbn1gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fYnV0dG9uXCJdfSAke1xyXG4gICAgICAgICAgICBpc0Zvcm1GaWxsZWQoKSAmJiBzdHlsZXNbXCJlbmFibGVkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1GaWxsZWQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDQl9Cw0YDQtdGU0YHRgtGA0YPQstCw0YLQuNGB0YxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWdpc3RyYXRpb24iLCJmaXJzdG5hbWVJc0ZvY3VzZWQiLCJzZXRGaXJzdG5hbWVJc0ZvY3VzZWQiLCJmaXJzdG5hbWVGb2N1cyIsImxhc3RuYW1lSXNGb2N1c2VkIiwic2V0TGFzdG5hbWVJc0ZvY3VzZWQiLCJsYXN0bmFtZUZvY3VzIiwibG9naW5Jc0ZvY3VzZWQiLCJzZXRMb2dpbklzRm9jdXNlZCIsImxvZ2luRm9jdXMiLCJlbWFpbElzRm9jdXNlZCIsInNldEVtYWlsSXNGb2N1c2VkIiwiZW1haWxGb2N1cyIsImhhbmRsZVNlbGVjdGVkRmlyc3RuYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlRmlyc3RuYW1lRm9jdXMiLCJoYW5kbGVGaXJzdG5hbWVCbHVyIiwiaGFuZGxlU2VsZWN0ZWRMYXN0bmFtZSIsImhhbmRsZUxhc3RuYW1lRm9jdXMiLCJoYW5kbGVMYXN0bmFtZUJsdXIiLCJoYW5kbGVTZWxlY3RlZExvZ2luIiwiaGFuZGxlTG9naW5Gb2N1cyIsImhhbmRsZUxvZ2luQmx1ciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImxvZ2luIiwiZW1haWwiLCJ2YWxpZGF0aW9uRXJyb3JzIiwic2V0VmFsaWRhdGlvbkVycm9ycyIsInZhbGlkYXRlRm9ybSIsImVycm9ycyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJpc0Zvcm1GaWxsZWQiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwicmVmIiwibGFiZWwiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});