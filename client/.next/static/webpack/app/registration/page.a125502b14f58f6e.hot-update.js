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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [firstnameIsFocused, setFirstnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const firstnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedFirstname = ()=>{\n        firstnameIsFocused.current.focus();\n    };\n    const handleFirstnameIsFocusedFocus = ()=>{\n        setFirstnameIsFocused(true);\n    };\n    const handleFirstnameIsFocusedBlur = ()=>{\n        setFirstnameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\"\n    });\n    const { firstName, phone } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (firstName.length < 2 || firstName.length > 60) {\n            errors.firstName = \"Name must be between 2 and 60 characters\";\n        }\n        // if (!phoneRegex.test(phone)) {\n        //   errors.phone = \"Формат повинен бути +380ХХХХХХХХХ\";\n        // }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = firstName.length;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"firstName\",\n                            name: \"firstName\",\n                            value: formData.firstName,\n                            onChange: handleChange,\n                            onBlur: firstName ? null : handleFirstnameBlur,\n                            onFocus: handleFirstnameFocus,\n                            ref: firstnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(nameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Імʼя\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.firstName && \"\".concat(validationErrors.firstName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"Z1ubK+cKYMhdGmOWtFZJUt+tk4s=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdELE1BQU1JLGlCQUFpQkwsNkNBQU1BLENBQUM7SUFFOUIsTUFBTU0sMEJBQTBCO1FBQzlCSCxtQkFBbUJJLE9BQU8sQ0FBQ0MsS0FBSztJQUNsQztJQUNBLE1BQU1DLGdDQUFnQztRQUNwQ0wsc0JBQXNCO0lBQ3hCO0lBQ0EsTUFBTU0sK0JBQStCO1FBQ25DTixzQkFBc0I7SUFDeEI7SUFFQSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7UUFDdkNZLFdBQVc7SUFPYjtJQUNBLE1BQU0sRUFBRUEsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR0g7SUFFN0IsTUFBTSxDQUFDSSxrQkFBa0JDLG9CQUFvQixHQUFHZiwrQ0FBUUEsQ0FBQztRQUN2RFksV0FBVztJQUViO0lBQ0EsTUFBTUksZUFBZTtRQUNuQixNQUFNQyxhQUFhO1FBQ25CLElBQUlDLFNBQVMsQ0FBQztRQUNkLElBQUlOLFVBQVVPLE1BQU0sR0FBRyxLQUFLUCxVQUFVTyxNQUFNLEdBQUcsSUFBSTtZQUNqREQsT0FBT04sU0FBUyxHQUFHO1FBQ3JCO1FBQ0EsaUNBQWlDO1FBQ2pDLHdEQUF3RDtRQUN4RCxJQUFJO1FBQ0pHLG9CQUFvQkc7UUFDcEIsT0FBT0UsT0FBT0MsSUFBSSxDQUFDSCxRQUFRQyxNQUFNLEtBQUs7SUFDeEM7SUFDQSxNQUFNRyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2YsWUFBWSxDQUFDZ0IsV0FBYztnQkFDekIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7UUFFQVYsb0JBQW9CO1lBQ2xCLEdBQUdELGdCQUFnQjtZQUNuQixDQUFDVSxLQUFLLEVBQUU7UUFDVjtJQUNGO0lBQ0EsTUFBTUksZUFBZTtRQUNuQiwyREFBMkQ7UUFDM0QsTUFBTUMsY0FBY2pCLFVBQVVPLE1BQU07UUFDcEMsT0FBT1U7SUFDVDtJQUNBLE1BQU1DLGVBQWUsQ0FBQ1A7UUFDcEJBLEVBQUVRLGNBQWM7UUFDaEIsSUFBSWYsZ0JBQWdCO1lBQ2xCZ0IsUUFBUUMsR0FBRyxDQUFDdkI7UUFDWixNQUFNO1FBQ1IsT0FBTztZQUNMc0IsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXckMsNkVBQWM7a0JBQzVCLDRFQUFDc0M7WUFBS0QsV0FBV3JDLG1GQUFvQjtZQUFFdUMsVUFBVVA7OzhCQUMvQyw4REFBQ0k7b0JBQ0NDLFdBQVcsR0FDVHJCLE9BRFloQixtRkFBb0IsRUFBQyxLQUVsQyxPQURDZ0IsaUJBQWlCRixTQUFTLElBQUlkLHNGQUF1Qjs7c0NBR3ZELDhEQUFDd0M7NEJBQ0NILFdBQVdyQyw0RkFBMEI7NEJBQ3JDeUMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSGhCLE1BQUs7NEJBQ0xDLE9BQU9mLFNBQVNFLFNBQVM7NEJBQ3pCNkIsVUFBVW5COzRCQUNWb0IsUUFBUTlCLFlBQVksT0FBTytCOzRCQUMzQkMsU0FBU0M7NEJBQ1RDLEtBQUsxQzs7Ozs7O3NDQUVQLDhEQUFDMkM7NEJBQ0NDLFNBQVNDOzRCQUNUZCxXQUFXLEdBQ1RlLE9BRFlwRCw0RkFBMEIsRUFBQyxLQUVyQ2dCLE9BREZvQyxpQkFBaUJwRCx5RkFBdUIsRUFDekMsS0FBeUQsT0FBdERnQixpQkFBaUJGLFNBQVMsSUFBSWQsc0ZBQXVCO3NDQUMxRDs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDb0M7b0JBQ0NDLFdBQVcsR0FDVHJCLE9BRFloQix5RkFBMEIsRUFBQyxLQUV4QyxPQURDZ0IsaUJBQWlCRixTQUFTLElBQUlkLHNGQUF1Qjs4QkFHdERnQixpQkFBaUJGLFNBQVMsSUFBSSxHQUE4QixPQUEzQkUsaUJBQWlCRixTQUFTOzs7Ozs7OEJBa0M5RCw4REFBQ3VDO29CQUNDaEIsV0FBVyxHQUNUUCxPQURZOUIscUZBQXNCLEVBQUMsS0FFcEMsT0FEQzhCLGtCQUFrQjlCLGdGQUFpQjtvQkFFckN5QyxNQUFLO29CQUNMYSxVQUFVLENBQUN4Qjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQW5KZ0IzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3doZXJlSXNNeU9yZGVyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IFtmaXJzdG5hbWVJc0ZvY3VzZWQsIHNldEZpcnN0bmFtZUlzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZmlyc3RuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkRmlyc3RuYW1lID0gKCkgPT4ge1xyXG4gICAgZmlyc3RuYW1lSXNGb2N1c2VkLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZpcnN0bmFtZUlzRm9jdXNlZEZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRmlyc3RuYW1lSXNGb2N1c2VkQmx1ciA9ICgpID0+IHtcclxuICAgIHNldEZpcnN0bmFtZUlzRm9jdXNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAvLyBsYXN0TmFtZTogXCJcIixcclxuICAgIC8vIGxvZ2luOiBcIlwiLFxyXG4gICAgLy8gZW1haWw6IFwiXCIsXHJcbiAgICAvLyBwYXNzd29yZDogXCJcIixcclxuICAgIC8vIHBhc3N3b3JkU2Vjb25kOiBcIlwiLFxyXG4gICAgLy8gcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBmaXJzdE5hbWUsIHBob25lIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBudWxsLFxyXG4gICAgLy8gcGhvbmU6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGhvbmVSZWdleCA9IC9eW1xcK117MCwxfTM4MChbMC05XXs5fSkkLztcclxuICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgIGlmIChmaXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmaXJzdE5hbWUubGVuZ3RoID4gNjApIHtcclxuICAgICAgZXJyb3JzLmZpcnN0TmFtZSA9IFwiTmFtZSBtdXN0IGJlIGJldHdlZW4gMiBhbmQgNjAgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCFwaG9uZVJlZ2V4LnRlc3QocGhvbmUpKSB7XHJcbiAgICAvLyAgIGVycm9ycy5waG9uZSA9IFwi0KTQvtGA0LzQsNGCINC/0L7QstC40L3QtdC9INCx0YPRgtC4ICszODDQpdCl0KXQpdCl0KXQpdCl0KVcIjtcclxuICAgIC8vIH1cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcclxuICAgICAgLi4ucHJldkRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9ycyh7XHJcbiAgICAgIC4uLnZhbGlkYXRpb25FcnJvcnMsXHJcbiAgICAgIFtuYW1lXTogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaXNGb3JtRmlsbGVkID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgaXNGb3JtVmFsaWQgPSBuYW1lLmxlbmd0aCA+IDAgJiYgcGhvbmUubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gZmlyc3ROYW1lLmxlbmd0aDtcclxuICAgIHJldHVybiBpc0Zvcm1WYWxpZDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAvL3Bvc3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBoYXMgdmFsaWRhdGlvbiBlcnJvcnNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19uYW1lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWUgPyBudWxsIDogaGFuZGxlRmlyc3RuYW1lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlRmlyc3RuYW1lRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17Zmlyc3RuYW1lRm9jdXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkTmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19uYW1lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIG5hbWVJc0ZvY3VzZWQgJiYgc3R5bGVzW1wiaW5wdXQtZm9jdXNlZFwiXVxyXG4gICAgICAgICAgICB9ICR7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQhtC8yrzRj1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3ZhbGlkYXRpb25cIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMuZmlyc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBgJHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZX1gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3Bob25lXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcGhvbmUtaW5wdXRgXX1cclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17cGhvbmUgPyBudWxsIDogaGFuZGxlUGhvbmVCbHVyfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVQaG9uZUZvY3VzfVxyXG4gICAgICAgICAgICByZWY9e3Bob25lRm9jdXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkUGhvbmV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fcGhvbmUtbGFiZWxcIl19ICR7XHJcbiAgICAgICAgICAgICAgcGhvbmVJc0ZvY3VzZWQgJiYgc3R5bGVzW1wiaW5wdXQtZm9jdXNlZFwiXVxyXG4gICAgICAgICAgICB9ICR7dmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3Rg1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3ZhbGlkYXRpb25cIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgXCLQndC+0LzQtdGAINC80LDRlCDQsdGD0YLQuCDRgyDRhNC+0YDQvNCw0YLRliArMzgw0KXQpdCl0KXQpdCl0KXQpdClXCJ9XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fYnV0dG9uXCJdfSAke1xyXG4gICAgICAgICAgICBpc0Zvcm1GaWxsZWQoKSAmJiBzdHlsZXNbXCJlbmFibGVkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1GaWxsZWQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDQl9C90LDQudGC0Lgg0LfQsNC80L7QstC70LXQvdC90Y9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWdpc3RyYXRpb24iLCJmaXJzdG5hbWVJc0ZvY3VzZWQiLCJzZXRGaXJzdG5hbWVJc0ZvY3VzZWQiLCJmaXJzdG5hbWVGb2N1cyIsImhhbmRsZVNlbGVjdGVkRmlyc3RuYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlRmlyc3RuYW1lSXNGb2N1c2VkRm9jdXMiLCJoYW5kbGVGaXJzdG5hbWVJc0ZvY3VzZWRCbHVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsInBob25lIiwidmFsaWRhdGlvbkVycm9ycyIsInNldFZhbGlkYXRpb25FcnJvcnMiLCJ2YWxpZGF0ZUZvcm0iLCJwaG9uZVJlZ2V4IiwiZXJyb3JzIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImlzRm9ybUZpbGxlZCIsImlzRm9ybVZhbGlkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUZpcnN0bmFtZUJsdXIiLCJvbkZvY3VzIiwiaGFuZGxlRmlyc3RuYW1lRm9jdXMiLCJyZWYiLCJsYWJlbCIsIm9uQ2xpY2siLCJoYW5kbGVTZWxlY3RlZE5hbWUiLCJuYW1lSXNGb2N1c2VkIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});