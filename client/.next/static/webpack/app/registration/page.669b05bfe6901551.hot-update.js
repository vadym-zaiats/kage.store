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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [firstnameIsFocused, setFirstnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [lastnameIsFocused, setLastnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const firstnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const lastnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedFirstname = ()=>{\n        firstnameIsFocused.current.focus();\n    };\n    const handleFirstnameIsFocusedFocus = ()=>{\n        setFirstnameIsFocused(true);\n    };\n    const handleFirstnameIsFocusedBlur = ()=>{\n        setFirstnameIsFocused(false);\n    };\n    const handleSelectedLastname = ()=>{\n        lastnameIsFocused.current.focus();\n    };\n    const handleLastnameIsFocusedFocus = ()=>{\n        setLastnameIsFocused(true);\n    };\n    const handleLastnameIsFocusedBlur = ()=>{\n        setLastnameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\"\n    });\n    const { firstName, lastName } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: null,\n        lastName: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (firstName.length < 2 || firstName.length > 60) {\n            errors.firstName = \"Firstname must be between 2 and 60 characters\";\n        }\n        if (lastName.length < 2 || lastName.length > 60) {\n            errors.lastName = \"Lastname must be between 2 and 60 characters\";\n        }\n        // if (!phoneRegex.test(phone)) {\n        //   errors.phone = \"Формат повинен бути +380ХХХХХХХХХ\";\n        // }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = firstName.length;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__firstname), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__firstname-input\"]),\n                            type: \"text\",\n                            id: \"firstName\",\n                            name: \"firstName\",\n                            value: formData.firstName,\n                            onChange: handleChange,\n                            onBlur: firstName ? null : handleFirstnameIsFocusedBlur,\n                            onFocus: handleFirstnameIsFocusedFocus,\n                            ref: firstnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedFirstname,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__firstname-label\"]), \" \").concat(firstnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Імʼя\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.firstName && \"\".concat(validationErrors.firstName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__lastname), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__lastname-input\"]),\n                            type: \"text\",\n                            id: \"lastName\",\n                            name: \"lastName\",\n                            value: formData.lastName,\n                            onChange: handleChange,\n                            onBlur: lastName ? null : handleLastnameIsFocusedBlur,\n                            onFocus: handleLastnameIsFocusedFocus,\n                            ref: lastnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedLastname,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__lastname-label\"]), \" \").concat(lastnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Прізвище\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.lastName && \"\".concat(validationErrors.lastName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 187,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"++G36b7/DsAts2Dke0nP+zYhco4=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ0ksbUJBQW1CQyxxQkFBcUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0QsTUFBTU0saUJBQWlCUCw2Q0FBTUEsQ0FBQztJQUM5QixNQUFNUSxnQkFBZ0JSLDZDQUFNQSxDQUFDO0lBRTdCLE1BQU1TLDBCQUEwQjtRQUM5Qk4sbUJBQW1CTyxPQUFPLENBQUNDLEtBQUs7SUFDbEM7SUFDQSxNQUFNQyxnQ0FBZ0M7UUFDcENSLHNCQUFzQjtJQUN4QjtJQUNBLE1BQU1TLCtCQUErQjtRQUNuQ1Qsc0JBQXNCO0lBQ3hCO0lBQ0EsTUFBTVUseUJBQXlCO1FBQzdCVCxrQkFBa0JLLE9BQU8sQ0FBQ0MsS0FBSztJQUNqQztJQUNBLE1BQU1JLCtCQUErQjtRQUNuQ1QscUJBQXFCO0lBQ3ZCO0lBQ0EsTUFBTVUsOEJBQThCO1FBQ2xDVixxQkFBcUI7SUFDdkI7SUFFQSxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO1FBQ3ZDa0IsV0FBVztRQUNYQyxVQUFVO0lBTVo7SUFDQSxNQUFNLEVBQUVELFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdIO0lBRWhDLE1BQU0sQ0FBQ0ksa0JBQWtCQyxvQkFBb0IsR0FBR3JCLCtDQUFRQSxDQUFDO1FBQ3ZEa0IsV0FBVztRQUNYQyxVQUFVO0lBQ1o7SUFDQSxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLGFBQWE7UUFDbkIsSUFBSUMsU0FBUyxDQUFDO1FBQ2QsSUFBSU4sVUFBVU8sTUFBTSxHQUFHLEtBQUtQLFVBQVVPLE1BQU0sR0FBRyxJQUFJO1lBQ2pERCxPQUFPTixTQUFTLEdBQUc7UUFDckI7UUFDQSxJQUFJQyxTQUFTTSxNQUFNLEdBQUcsS0FBS04sU0FBU00sTUFBTSxHQUFHLElBQUk7WUFDL0NELE9BQU9MLFFBQVEsR0FBRztRQUNwQjtRQUNBLGlDQUFpQztRQUNqQyx3REFBd0Q7UUFDeEQsSUFBSTtRQUNKRSxvQkFBb0JHO1FBQ3BCLE9BQU9FLE9BQU9DLElBQUksQ0FBQ0gsUUFBUUMsTUFBTSxLQUFLO0lBQ3hDO0lBQ0EsTUFBTUcsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENmLFlBQVksQ0FBQ2dCLFdBQWM7Z0JBQ3pCLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO1FBRUFWLG9CQUFvQjtZQUNsQixHQUFHRCxnQkFBZ0I7WUFDbkIsQ0FBQ1UsS0FBSyxFQUFFO1FBQ1Y7SUFDRjtJQUNBLE1BQU1JLGVBQWU7UUFDbkIsMkRBQTJEO1FBQzNELE1BQU1DLGNBQWNqQixVQUFVTyxNQUFNO1FBQ3BDLE9BQU9VO0lBQ1Q7SUFDQSxNQUFNQyxlQUFlLENBQUNQO1FBQ3BCQSxFQUFFUSxjQUFjO1FBQ2hCLElBQUlmLGdCQUFnQjtZQUNsQmdCLFFBQVFDLEdBQUcsQ0FBQ3ZCO1FBQ1osTUFBTTtRQUNSLE9BQU87WUFDTHNCLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVzNDLDZFQUFjO2tCQUM1Qiw0RUFBQzRDO1lBQUtELFdBQVczQyxtRkFBb0I7WUFBRTZDLFVBQVVQOzs4QkFDL0MsOERBQUNJO29CQUNDQyxXQUFXLEdBQ1RyQixPQURZdEIsd0ZBQXlCLEVBQUMsS0FFdkMsT0FEQ3NCLGlCQUFpQkYsU0FBUyxJQUFJcEIsc0ZBQXVCOztzQ0FHdkQsOERBQUM4Qzs0QkFDQ0gsV0FBVzNDLGlHQUErQjs0QkFDMUMrQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIaEIsTUFBSzs0QkFDTEMsT0FBT2YsU0FBU0UsU0FBUzs0QkFDekI2QixVQUFVbkI7NEJBQ1ZvQixRQUFROUIsWUFBWSxPQUFPTjs0QkFDM0JxQyxTQUFTdEM7NEJBQ1R1QyxLQUFLNUM7Ozs7OztzQ0FFUCw4REFBQzZDOzRCQUNDQyxTQUFTNUM7NEJBQ1RpQyxXQUFXLEdBQ1R2QyxPQURZSixpR0FBK0IsRUFBQyxLQUUxQ3NCLE9BREZsQixzQkFBc0JKLHlGQUF1QixFQUM5QyxLQUF5RCxPQUF0RHNCLGlCQUFpQkYsU0FBUyxJQUFJcEIsc0ZBQXVCO3NDQUMxRDs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDMEM7b0JBQ0NDLFdBQVcsR0FDVHJCLE9BRFl0Qix5RkFBMEIsRUFBQyxLQUV4QyxPQURDc0IsaUJBQWlCRixTQUFTLElBQUlwQixzRkFBdUI7OEJBR3REc0IsaUJBQWlCRixTQUFTLElBQUksR0FBOEIsT0FBM0JFLGlCQUFpQkYsU0FBUzs7Ozs7OzhCQUU5RCw4REFBQ3NCO29CQUNDQyxXQUFXLEdBQ1RyQixPQURZdEIsdUZBQXdCLEVBQUMsS0FFdEMsT0FEQ3NCLGlCQUFpQkQsUUFBUSxJQUFJckIsc0ZBQXVCOztzQ0FHdEQsOERBQUM4Qzs0QkFDQ0gsV0FBVzNDLGdHQUE4Qjs0QkFDekMrQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIaEIsTUFBSzs0QkFDTEMsT0FBT2YsU0FBU0csUUFBUTs0QkFDeEI0QixVQUFVbkI7NEJBQ1ZvQixRQUFRN0IsV0FBVyxPQUFPSjs0QkFDMUJrQyxTQUFTbkM7NEJBQ1RvQyxLQUFLM0M7Ozs7OztzQ0FFUCw4REFBQzRDOzRCQUNDQyxTQUFTdkM7NEJBQ1Q0QixXQUFXLEdBQ1RyQyxPQURZTixnR0FBOEIsRUFBQyxLQUV6Q3NCLE9BREZoQixxQkFBcUJOLHlGQUF1QixFQUM3QyxLQUF3RCxPQUFyRHNCLGlCQUFpQkQsUUFBUSxJQUFJckIsc0ZBQXVCO3NDQUN6RDs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDMEM7b0JBQ0NDLFdBQVcsR0FDVHJCLE9BRFl0Qix5RkFBMEIsRUFBQyxLQUV4QyxPQURDc0IsaUJBQWlCRCxRQUFRLElBQUlyQixzRkFBdUI7OEJBR3JEc0IsaUJBQWlCRCxRQUFRLElBQUksR0FBNkIsT0FBMUJDLGlCQUFpQkQsUUFBUTs7Ozs7OzhCQWtDNUQsOERBQUNrQztvQkFDQ1osV0FBVyxHQUNUUCxPQURZcEMscUZBQXNCLEVBQUMsS0FFcEMsT0FEQ29DLGtCQUFrQnBDLGdGQUFpQjtvQkFFckMrQyxNQUFLO29CQUNMUyxVQUFVLENBQUNwQjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWpNZ0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3doZXJlSXNNeU9yZGVyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IFtmaXJzdG5hbWVJc0ZvY3VzZWQsIHNldEZpcnN0bmFtZUlzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xhc3RuYW1lSXNGb2N1c2VkLCBzZXRMYXN0bmFtZUlzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZmlyc3RuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbGFzdG5hbWVGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWUgPSAoKSA9PiB7XHJcbiAgICBmaXJzdG5hbWVJc0ZvY3VzZWQuY3VycmVudC5mb2N1cygpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRmlyc3RuYW1lSXNGb2N1c2VkRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRGaXJzdG5hbWVJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVGaXJzdG5hbWVJc0ZvY3VzZWRCbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkTGFzdG5hbWUgPSAoKSA9PiB7XHJcbiAgICBsYXN0bmFtZUlzRm9jdXNlZC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVMYXN0bmFtZUlzRm9jdXNlZEZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0TGFzdG5hbWVJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVMYXN0bmFtZUlzRm9jdXNlZEJsdXIgPSAoKSA9PiB7XHJcbiAgICBzZXRMYXN0bmFtZUlzRm9jdXNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIC8vIGxvZ2luOiBcIlwiLFxyXG4gICAgLy8gZW1haWw6IFwiXCIsXHJcbiAgICAvLyBwYXNzd29yZDogXCJcIixcclxuICAgIC8vIHBhc3N3b3JkU2Vjb25kOiBcIlwiLFxyXG4gICAgLy8gcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBudWxsLFxyXG4gICAgbGFzdE5hbWU6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGhvbmVSZWdleCA9IC9eW1xcK117MCwxfTM4MChbMC05XXs5fSkkLztcclxuICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgIGlmIChmaXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmaXJzdE5hbWUubGVuZ3RoID4gNjApIHtcclxuICAgICAgZXJyb3JzLmZpcnN0TmFtZSA9IFwiRmlyc3RuYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBpZiAobGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBsYXN0TmFtZS5sZW5ndGggPiA2MCkge1xyXG4gICAgICBlcnJvcnMubGFzdE5hbWUgPSBcIkxhc3RuYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoIXBob25lUmVnZXgudGVzdChwaG9uZSkpIHtcclxuICAgIC8vICAgZXJyb3JzLnBob25lID0gXCLQpNC+0YDQvNCw0YIg0L/QvtCy0LjQvdC10L0g0LHRg9GC0LggKzM4MNCl0KXQpdCl0KXQpdCl0KXQpVwiO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2RGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKHtcclxuICAgICAgLi4udmFsaWRhdGlvbkVycm9ycyxcclxuICAgICAgW25hbWVdOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBpc0Zvcm1GaWxsZWQgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBpc0Zvcm1WYWxpZCA9IG5hbWUubGVuZ3RoID4gMCAmJiBwaG9uZS5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgaXNGb3JtVmFsaWQgPSBmaXJzdE5hbWUubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGlzRm9ybVZhbGlkO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIC8vcG9zdFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJGb3JtIGhhcyB2YWxpZGF0aW9uIGVycm9yc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybWBdfT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2JvZHlgXX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19maXJzdG5hbWVcIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMuZmlyc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZmlyc3RuYW1lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWUgPyBudWxsIDogaGFuZGxlRmlyc3RuYW1lSXNGb2N1c2VkQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlRmlyc3RuYW1lSXNGb2N1c2VkRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17Zmlyc3RuYW1lRm9jdXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkRmlyc3RuYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2ZpcnN0bmFtZS1sYWJlbFwiXX0gJHtcclxuICAgICAgICAgICAgICBmaXJzdG5hbWVJc0ZvY3VzZWQgJiYgc3R5bGVzW1wiaW5wdXQtZm9jdXNlZFwiXVxyXG4gICAgICAgICAgICB9ICR7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQhtC8yrzRj1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3ZhbGlkYXRpb25cIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMuZmlyc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBgJHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZX1gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbGFzdG5hbWVcIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMubGFzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19sYXN0bmFtZS1pbnB1dGBdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17bGFzdE5hbWUgPyBudWxsIDogaGFuZGxlTGFzdG5hbWVJc0ZvY3VzZWRCbHVyfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVMYXN0bmFtZUlzRm9jdXNlZEZvY3VzfVxyXG4gICAgICAgICAgICByZWY9e2xhc3RuYW1lRm9jdXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkTGFzdG5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbGFzdG5hbWUtbGFiZWxcIl19ICR7XHJcbiAgICAgICAgICAgICAgbGFzdG5hbWVJc0ZvY3VzZWQgJiYgc3R5bGVzW1wiaW5wdXQtZm9jdXNlZFwiXVxyXG4gICAgICAgICAgICB9ICR7dmFsaWRhdGlvbkVycm9ycy5sYXN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCf0YDRltC30LLQuNGJ0LVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmxhc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLmxhc3ROYW1lICYmIGAke3ZhbGlkYXRpb25FcnJvcnMubGFzdE5hbWV9YH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19waG9uZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bob25lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3Bob25lID8gbnVsbCA6IGhhbmRsZVBob25lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlUGhvbmVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtwaG9uZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZFBob25lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3Bob25lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIHBob25lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90YNcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIFwi0J3QvtC80LXRgCDQvNCw0ZQg0LHRg9GC0Lgg0YMg0YTQvtGA0LzQsNGC0ZYgKzM4MNCl0KXQpdCl0KXQpdCl0KXQpVwifVxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2J1dHRvblwiXX0gJHtcclxuICAgICAgICAgICAgaXNGb3JtRmlsbGVkKCkgJiYgc3R5bGVzW1wiZW5hYmxlZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXshaXNGb3JtRmlsbGVkKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JfQvdCw0LnRgtC4INC30LDQvNC+0LLQu9C10L3QvdGPXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uIiwiZmlyc3RuYW1lSXNGb2N1c2VkIiwic2V0Rmlyc3RuYW1lSXNGb2N1c2VkIiwibGFzdG5hbWVJc0ZvY3VzZWQiLCJzZXRMYXN0bmFtZUlzRm9jdXNlZCIsImZpcnN0bmFtZUZvY3VzIiwibGFzdG5hbWVGb2N1cyIsImhhbmRsZVNlbGVjdGVkRmlyc3RuYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlRmlyc3RuYW1lSXNGb2N1c2VkRm9jdXMiLCJoYW5kbGVGaXJzdG5hbWVJc0ZvY3VzZWRCbHVyIiwiaGFuZGxlU2VsZWN0ZWRMYXN0bmFtZSIsImhhbmRsZUxhc3RuYW1lSXNGb2N1c2VkRm9jdXMiLCJoYW5kbGVMYXN0bmFtZUlzRm9jdXNlZEJsdXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ2YWxpZGF0aW9uRXJyb3JzIiwic2V0VmFsaWRhdGlvbkVycm9ycyIsInZhbGlkYXRlRm9ybSIsInBob25lUmVnZXgiLCJlcnJvcnMiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiaXNGb3JtRmlsbGVkIiwiaXNGb3JtVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsInJlZiIsImxhYmVsIiwib25DbGljayIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});