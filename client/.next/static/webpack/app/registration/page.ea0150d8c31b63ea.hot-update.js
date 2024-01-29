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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [firstNameIsFocused, setFirstNameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [phoneIsFocused, setPhoneIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phoneFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedName = ()=>{\n        nameFocus.current.focus();\n    };\n    const handleSelectedPhone = ()=>{\n        phoneFocus.current.focus();\n    };\n    const handleNameFocus = ()=>{\n        setFirstNameIsFocused(true);\n    };\n    const handleNameBlur = ()=>{\n        setFirstNameIsFocused(false);\n    };\n    const handlePhoneFocus = ()=>{\n        setPhoneIsFocused(true);\n    };\n    const handlePhoneBlur = ()=>{\n        setPhoneIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        login: \"\",\n        email: \"\",\n        password: \"\",\n        passwordSecond: \"\",\n        telephone: \"\"\n    });\n    const { firstName, lastName, login, email, password, passwordSecond, telephone } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: null,\n        phone: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (firstName.length < 2 || firstName.length > 60) {\n            errors.firstName = \"Name must be between 2 and 60 characters\";\n        }\n        if (!phoneRegex.test(phone)) {\n            errors.phone = \"Формат повинен бути 380ХХХХХХХХХ\";\n        }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        const isFormValid = firstName.length > 0 && telephone.length > 0;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            onBlur: firstName ? null : handleNameBlur,\n                            onFocus: handleNameFocus,\n                            ref: nameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(firstNameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер замовлення\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.firstName && \"\".concat(validationErrors.firstName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__phone), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-input\"]),\n                            type: \"tel\",\n                            id: \"phone\",\n                            name: \"phone\",\n                            value: formData.phone,\n                            onChange: handleChange,\n                            onBlur: telephone ? null : handlePhoneBlur,\n                            onFocus: handlePhoneFocus,\n                            ref: phoneFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedPhone,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-label\"]), \" \").concat(phoneIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер телефону\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.phone && \"Номер має бути у форматі +380ХХХХХХХХХ\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"XIVQy8EiGeFqq1QbiLH8YPetZAY=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ0ksZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsTUFBTU0sWUFBWVAsNkNBQU1BLENBQUM7SUFDekIsTUFBTVEsYUFBYVIsNkNBQU1BLENBQUM7SUFFMUIsTUFBTVMscUJBQXFCO1FBQ3pCRixVQUFVRyxPQUFPLENBQUNDLEtBQUs7SUFDekI7SUFDQSxNQUFNQyxzQkFBc0I7UUFDMUJKLFdBQVdFLE9BQU8sQ0FBQ0MsS0FBSztJQUMxQjtJQUNBLE1BQU1FLGtCQUFrQjtRQUN0QlQsc0JBQXNCO0lBQ3hCO0lBQ0EsTUFBTVUsaUJBQWlCO1FBQ3JCVixzQkFBc0I7SUFDeEI7SUFDQSxNQUFNVyxtQkFBbUI7UUFDdkJULGtCQUFrQjtJQUNwQjtJQUNBLE1BQU1VLGtCQUFrQjtRQUN0QlYsa0JBQWtCO0lBQ3BCO0lBRUEsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztRQUN2Q2tCLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxnQkFBZ0I7UUFDaEJDLFdBQVc7SUFDYjtJQUNBLE1BQU0sRUFDSk4sU0FBUyxFQUNUQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLGNBQWMsRUFDZEMsU0FBUyxFQUNWLEdBQUdSO0lBRUosTUFBTSxDQUFDUyxrQkFBa0JDLG9CQUFvQixHQUFHMUIsK0NBQVFBLENBQUM7UUFDdkRrQixXQUFXO1FBQ1hTLE9BQU87SUFDVDtJQUNBLE1BQU1DLGVBQWU7UUFDbkIsTUFBTUMsYUFBYTtRQUNuQixJQUFJQyxTQUFTLENBQUM7UUFDZCxJQUFJWixVQUFVYSxNQUFNLEdBQUcsS0FBS2IsVUFBVWEsTUFBTSxHQUFHLElBQUk7WUFDakRELE9BQU9aLFNBQVMsR0FBRztRQUNyQjtRQUNBLElBQUksQ0FBQ1csV0FBV0csSUFBSSxDQUFDTCxRQUFRO1lBQzNCRyxPQUFPSCxLQUFLLEdBQUc7UUFDakI7UUFDQUQsb0JBQW9CSTtRQUNwQixPQUFPRyxPQUFPQyxJQUFJLENBQUNKLFFBQVFDLE1BQU0sS0FBSztJQUN4QztJQUNBLE1BQU1JLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDdEIsWUFBWSxDQUFDdUIsV0FBYztnQkFDekIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7UUFFQVosb0JBQW9CO1lBQ2xCLEdBQUdELGdCQUFnQjtZQUNuQixDQUFDWSxLQUFLLEVBQUU7UUFDVjtJQUNGO0lBQ0EsTUFBTUksZUFBZTtRQUNuQixNQUFNQyxjQUFjeEIsVUFBVWEsTUFBTSxHQUFHLEtBQUtQLFVBQVVPLE1BQU0sR0FBRztRQUMvRCxPQUFPVztJQUNUO0lBQ0EsTUFBTUMsZUFBZSxDQUFDUDtRQUNwQkEsRUFBRVEsY0FBYztRQUNoQixJQUFJaEIsZ0JBQWdCO1lBQ2xCaUIsUUFBUUMsR0FBRyxDQUFDOUI7UUFDWixNQUFNO1FBQ1IsT0FBTztZQUNMNkIsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXbEQsNkVBQWM7a0JBQzVCLDRFQUFDbUQ7WUFBS0QsV0FBV2xELG1GQUFvQjtZQUFFb0QsVUFBVVA7OzhCQUMvQyw4REFBQ0k7b0JBQ0NDLFdBQVcsR0FDVHZCLE9BRFkzQixtRkFBb0IsRUFBQyxLQUVsQyxPQURDMkIsaUJBQWlCUCxTQUFTLElBQUlwQixzRkFBdUI7O3NDQUd2RCw4REFBQ3FEOzRCQUNDSCxXQUFXbEQsNEZBQTBCOzRCQUNyQ3NELE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hoQixNQUFLOzRCQUNMQyxPQUFPdEIsU0FBU3FCLElBQUk7NEJBQ3BCaUIsVUFBVW5COzRCQUNWb0IsUUFBUXJDLFlBQVksT0FBT0w7NEJBQzNCMkMsU0FBUzVDOzRCQUNUNkMsS0FBS25EOzs7Ozs7c0NBRVAsOERBQUNvRDs0QkFDQ0MsU0FBU25EOzRCQUNUd0MsV0FBVyxHQUNUOUMsT0FEWUosNEZBQTBCLEVBQUMsS0FFckMyQixPQURGdkIsc0JBQXNCSix5RkFBdUIsRUFDOUMsS0FBeUQsT0FBdEQyQixpQkFBaUJQLFNBQVMsSUFBSXBCLHNGQUF1QjtzQ0FDMUQ7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ2lEO29CQUNDQyxXQUFXLEdBQ1R2QixPQURZM0IseUZBQTBCLEVBQUMsS0FFeEMsT0FEQzJCLGlCQUFpQlAsU0FBUyxJQUFJcEIsc0ZBQXVCOzhCQUd0RDJCLGlCQUFpQlAsU0FBUyxJQUFJLEdBQThCLE9BQTNCTyxpQkFBaUJQLFNBQVM7Ozs7Ozs4QkFFOUQsOERBQUM2QjtvQkFDQ0MsV0FBVyxHQUNUdkIsT0FEWTNCLG9GQUFxQixFQUFDLEtBRW5DLE9BREMyQixpQkFBaUJFLEtBQUssSUFBSTdCLHNGQUF1Qjs7c0NBR25ELDhEQUFDcUQ7NEJBQ0NILFdBQVdsRCw2RkFBMkI7NEJBQ3RDc0QsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSGhCLE1BQUs7NEJBQ0xDLE9BQU90QixTQUFTVyxLQUFLOzRCQUNyQjJCLFVBQVVuQjs0QkFDVm9CLFFBQVEvQixZQUFZLE9BQU9UOzRCQUMzQnlDLFNBQVMxQzs0QkFDVDJDLEtBQUtsRDs7Ozs7O3NDQUVQLDhEQUFDbUQ7NEJBQ0NDLFNBQVNoRDs0QkFDVHFDLFdBQVcsR0FDVDVDLE9BRFlOLDZGQUEyQixFQUFDLEtBRXRDMkIsT0FERnJCLGtCQUFrQk4seUZBQXVCLEVBQzFDLEtBQXFELE9BQWxEMkIsaUJBQWlCRSxLQUFLLElBQUk3QixzRkFBdUI7c0NBQ3REOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNpRDtvQkFDQ0MsV0FBVyxHQUNUdkIsT0FEWTNCLHlGQUEwQixFQUFDLEtBRXhDLE9BREMyQixpQkFBaUJFLEtBQUssSUFBSTdCLHNGQUF1Qjs4QkFHbEQyQixpQkFBaUJFLEtBQUssSUFBSTs7Ozs7OzhCQUU3Qiw4REFBQ2lDO29CQUNDWixXQUFXLEdBQ1RQLE9BRFkzQyxxRkFBc0IsRUFBQyxLQUVwQyxPQURDMkMsa0JBQWtCM0MsZ0ZBQWlCO29CQUVyQ3NELE1BQUs7b0JBQ0xTLFVBQVUsQ0FBQ3BCOzhCQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBcktnQnhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3g/OTNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2hlcmVJc015T3JkZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3RyYXRpb24oKSB7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZUlzRm9jdXNlZCwgc2V0Rmlyc3ROYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvbmVJc0ZvY3VzZWQsIHNldFBob25lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcGhvbmVGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWROYW1lID0gKCkgPT4ge1xyXG4gICAgbmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkUGhvbmUgPSAoKSA9PiB7XHJcbiAgICBwaG9uZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU5hbWVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEZpcnN0TmFtZUlzRm9jdXNlZCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU5hbWVCbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0Rmlyc3ROYW1lSXNGb2N1c2VkKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVBob25lRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRQaG9uZUlzRm9jdXNlZCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVBob25lQmx1ciA9ICgpID0+IHtcclxuICAgIHNldFBob25lSXNGb2N1c2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgbG9naW46IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgcGFzc3dvcmRTZWNvbmQ6IFwiXCIsXHJcbiAgICB0ZWxlcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICBsb2dpbixcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICBwYXNzd29yZFNlY29uZCxcclxuICAgIHRlbGVwaG9uZSxcclxuICB9ID0gZm9ybURhdGE7XHJcblxyXG4gIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3JzLCBzZXRWYWxpZGF0aW9uRXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogbnVsbCxcclxuICAgIHBob25lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBob25lUmVnZXggPSAvXltcXCtdezAsMX0zODAoWzAtOV17OX0pJC87XHJcbiAgICBsZXQgZXJyb3JzID0ge307XHJcbiAgICBpZiAoZmlyc3ROYW1lLmxlbmd0aCA8IDIgfHwgZmlyc3ROYW1lLmxlbmd0aCA+IDYwKSB7XHJcbiAgICAgIGVycm9ycy5maXJzdE5hbWUgPSBcIk5hbWUgbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDYwIGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIGlmICghcGhvbmVSZWdleC50ZXN0KHBob25lKSkge1xyXG4gICAgICBlcnJvcnMucGhvbmUgPSBcItCk0L7RgNC80LDRgiDQv9C+0LLQuNC90LXQvSDQsdGD0YLQuCAzODDQpdCl0KXQpdCl0KXQpdCl0KVcIjtcclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcclxuICAgICAgLi4ucHJldkRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9ycyh7XHJcbiAgICAgIC4uLnZhbGlkYXRpb25FcnJvcnMsXHJcbiAgICAgIFtuYW1lXTogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaXNGb3JtRmlsbGVkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNGb3JtVmFsaWQgPSBmaXJzdE5hbWUubGVuZ3RoID4gMCAmJiB0ZWxlcGhvbmUubGVuZ3RoID4gMDtcclxuICAgIHJldHVybiBpc0Zvcm1WYWxpZDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAvL3Bvc3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBoYXMgdmFsaWRhdGlvbiBlcnJvcnNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19uYW1lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWUgPyBudWxsIDogaGFuZGxlTmFtZUJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZU5hbWVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtuYW1lRm9jdXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkTmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19uYW1lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCd0L7QvNC10YAg0LfQsNC80L7QstC70LXQvdC90Y9cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWV9YH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3Bob25lXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcGhvbmUtaW5wdXRgXX1cclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17dGVsZXBob25lID8gbnVsbCA6IGhhbmRsZVBob25lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlUGhvbmVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtwaG9uZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZFBob25lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3Bob25lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIHBob25lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90YNcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIFwi0J3QvtC80LXRgCDQvNCw0ZQg0LHRg9GC0Lgg0YMg0YTQvtGA0LzQsNGC0ZYgKzM4MNCl0KXQpdCl0KXQpdCl0KXQpVwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fYnV0dG9uXCJdfSAke1xyXG4gICAgICAgICAgICBpc0Zvcm1GaWxsZWQoKSAmJiBzdHlsZXNbXCJlbmFibGVkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1GaWxsZWQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDQl9C90LDQudGC0Lgg0LfQsNC80L7QstC70LXQvdC90Y9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWdpc3RyYXRpb24iLCJmaXJzdE5hbWVJc0ZvY3VzZWQiLCJzZXRGaXJzdE5hbWVJc0ZvY3VzZWQiLCJwaG9uZUlzRm9jdXNlZCIsInNldFBob25lSXNGb2N1c2VkIiwibmFtZUZvY3VzIiwicGhvbmVGb2N1cyIsImhhbmRsZVNlbGVjdGVkTmFtZSIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVNlbGVjdGVkUGhvbmUiLCJoYW5kbGVOYW1lRm9jdXMiLCJoYW5kbGVOYW1lQmx1ciIsImhhbmRsZVBob25lRm9jdXMiLCJoYW5kbGVQaG9uZUJsdXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZFNlY29uZCIsInRlbGVwaG9uZSIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwicGhvbmUiLCJ2YWxpZGF0ZUZvcm0iLCJwaG9uZVJlZ2V4IiwiZXJyb3JzIiwibGVuZ3RoIiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJpc0Zvcm1GaWxsZWQiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwicmVmIiwibGFiZWwiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});