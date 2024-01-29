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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [nameIsFocused, setNameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [phoneIsFocused, setPhoneIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phoneFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedName = ()=>{\n        nameFocus.current.focus();\n    };\n    const handleSelectedPhone = ()=>{\n        phoneFocus.current.focus();\n    };\n    const handleNameFocus = ()=>{\n        setNameIsFocused(true);\n    };\n    const handleNameBlur = ()=>{\n        setNameIsFocused(false);\n    };\n    const handlePhoneFocus = ()=>{\n        setPhoneIsFocused(true);\n    };\n    const handlePhoneBlur = ()=>{\n        setPhoneIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        lastName: \"\",\n        login: \"\",\n        email: \"\",\n        password: \"\",\n        passwordSecond: \"\",\n        phone: \"\"\n    });\n    const { name, phone } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: null,\n        phone: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (name.length < 2 || name.length > 60) {\n            errors.name = \"Name must be between 2 and 60 characters\";\n        }\n        if (!phoneRegex.test(phone)) {\n            errors.phone = \"Формат повинен бути +380ХХХХХХХХХ\";\n        }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        const isFormValid = name.length > 0 && phone.length > 0;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        // const validFormData = new FormData();\n        // Object.entries(formData).forEach(([key, value]) => {\n        //   validFormData.set(key, value);\n        // });\n        // dispatch(postCard({ validFormData, token }));\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            onBlur: name ? null : handleNameBlur,\n                            onFocus: handleNameFocus,\n                            ref: nameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(nameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер замовлення\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.name && \"\".concat(validationErrors.name)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__phone), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-input\"]),\n                            type: \"tel\",\n                            id: \"phone\",\n                            name: \"phone\",\n                            value: formData.phone,\n                            onChange: handleChange,\n                            onBlur: phone ? null : handlePhoneBlur,\n                            onFocus: handlePhoneFocus,\n                            ref: phoneFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedPhone,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-label\"]), \" \").concat(phoneIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер телефону\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.phone && \"Номер має бути у форматі +380ХХХХХХХХХ\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"GW991J1CmTytkkZCHlAg0iEWy90=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1NLFlBQVlQLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBRTFCLE1BQU1TLHFCQUFxQjtRQUN6QkYsVUFBVUcsT0FBTyxDQUFDQyxLQUFLO0lBQ3pCO0lBQ0EsTUFBTUMsc0JBQXNCO1FBQzFCSixXQUFXRSxPQUFPLENBQUNDLEtBQUs7SUFDMUI7SUFDQSxNQUFNRSxrQkFBa0I7UUFDdEJULGlCQUFpQjtJQUNuQjtJQUNBLE1BQU1VLGlCQUFpQjtRQUNyQlYsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTVcsbUJBQW1CO1FBQ3ZCVCxrQkFBa0I7SUFDcEI7SUFDQSxNQUFNVSxrQkFBa0I7UUFDdEJWLGtCQUFrQjtJQUNwQjtJQUVBLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7UUFDdkNrQixNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsZ0JBQWdCO1FBQ2hCQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNLEVBQUVOLElBQUksRUFBRU0sS0FBSyxFQUFFLEdBQUdSO0lBRXhCLE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBRzFCLCtDQUFRQSxDQUFDO1FBQ3ZEa0IsTUFBTTtRQUNOTSxPQUFPO0lBQ1Q7SUFDQSxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLGFBQWE7UUFDbkIsSUFBSUMsU0FBUyxDQUFDO1FBQ2QsSUFBSVgsS0FBS1ksTUFBTSxHQUFHLEtBQUtaLEtBQUtZLE1B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R0FDVHJCLE9BRFkzQix5RkFBMEIsRUFBQyxLQUV4QyxPQURDMkIsaUJBQWlCRCxLQUFLLElBQUkxQixzRkFBdUI7OEJBR2xEMkIsaUJBQWlCRCxLQUFLLElBQUk7Ozs7Ozs4QkFFN0IsOERBQUNrQztvQkFDQ1osV0FBVyxHQUNUUCxPQURZekMscUZBQXNCLEVBQUMsS0FFcEMsT0FEQ3lDLGtCQUFrQnpDLGdGQUFpQjtvQkFFckNvRCxNQUFLO29CQUNMUyxVQUFVLENBQUNwQjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWpLZ0J0QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3doZXJlSXNNeU9yZGVyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IFtuYW1lSXNGb2N1c2VkLCBzZXROYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvbmVJc0ZvY3VzZWQsIHNldFBob25lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcGhvbmVGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWROYW1lID0gKCkgPT4ge1xyXG4gICAgbmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkUGhvbmUgPSAoKSA9PiB7XHJcbiAgICBwaG9uZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU5hbWVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldE5hbWVJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVOYW1lQmx1ciA9ICgpID0+IHtcclxuICAgIHNldE5hbWVJc0ZvY3VzZWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGhvbmVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldFBob25lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGhvbmVCbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0UGhvbmVJc0ZvY3VzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgbG9naW46IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgcGFzc3dvcmRTZWNvbmQ6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IG5hbWUsIHBob25lIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogbnVsbCxcclxuICAgIHBob25lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBob25lUmVnZXggPSAvXltcXCtdezAsMX0zODAoWzAtOV17OX0pJC87XHJcbiAgICBsZXQgZXJyb3JzID0ge307XHJcbiAgICBpZiAobmFtZS5sZW5ndGggPCAyIHx8IG5hbWUubGVuZ3RoID4gNjApIHtcclxuICAgICAgZXJyb3JzLm5hbWUgPSBcIk5hbWUgbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDYwIGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIGlmICghcGhvbmVSZWdleC50ZXN0KHBob25lKSkge1xyXG4gICAgICBlcnJvcnMucGhvbmUgPSBcItCk0L7RgNC80LDRgiDQv9C+0LLQuNC90LXQvSDQsdGD0YLQuCArMzgw0KXQpdCl0KXQpdCl0KXQpdClXCI7XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKGVycm9ycyk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDA7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XHJcbiAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoe1xyXG4gICAgICAuLi52YWxpZGF0aW9uRXJyb3JzLFxyXG4gICAgICBbbmFtZV06IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGlzRm9ybUZpbGxlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gbmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDA7XHJcbiAgICByZXR1cm4gaXNGb3JtVmFsaWQ7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgLy8gY29uc3QgdmFsaWRGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAvLyBPYmplY3QuZW50cmllcyhmb3JtRGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgIC8vICAgdmFsaWRGb3JtRGF0YS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICAvLyBkaXNwYXRjaChwb3N0Q2FyZCh7IHZhbGlkRm9ybURhdGEsIHRva2VuIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBoYXMgdmFsaWRhdGlvbiBlcnJvcnNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5uYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fbmFtZS1pbnB1dGBdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17bmFtZSA/IG51bGwgOiBoYW5kbGVOYW1lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlTmFtZUZvY3VzfVxyXG4gICAgICAgICAgICByZWY9e25hbWVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWROYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX25hbWUtbGFiZWxcIl19ICR7XHJcbiAgICAgICAgICAgICAgbmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLm5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINC30LDQvNC+0LLQu9C10L3QvdGPXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fdmFsaWRhdGlvblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5uYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLm5hbWUgJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5uYW1lfWB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19waG9uZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bob25lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3Bob25lID8gbnVsbCA6IGhhbmRsZVBob25lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlUGhvbmVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtwaG9uZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZFBob25lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3Bob25lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIHBob25lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90YNcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIFwi0J3QvtC80LXRgCDQvNCw0ZQg0LHRg9GC0Lgg0YMg0YTQvtGA0LzQsNGC0ZYgKzM4MNCl0KXQpdCl0KXQpdCl0KXQpVwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fYnV0dG9uXCJdfSAke1xyXG4gICAgICAgICAgICBpc0Zvcm1GaWxsZWQoKSAmJiBzdHlsZXNbXCJlbmFibGVkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1GaWxsZWQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDQl9C90LDQudGC0Lgg0LfQsNC80L7QstC70LXQvdC90Y9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWdpc3RyYXRpb24iLCJuYW1lSXNGb2N1c2VkIiwic2V0TmFtZUlzRm9jdXNlZCIsInBob25lSXNGb2N1c2VkIiwic2V0UGhvbmVJc0ZvY3VzZWQiLCJuYW1lRm9jdXMiLCJwaG9uZUZvY3VzIiwiaGFuZGxlU2VsZWN0ZWROYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlU2VsZWN0ZWRQaG9uZSIsImhhbmRsZU5hbWVGb2N1cyIsImhhbmRsZU5hbWVCbHVyIiwiaGFuZGxlUGhvbmVGb2N1cyIsImhhbmRsZVBob25lQmx1ciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwibGFzdE5hbWUiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZFNlY29uZCIsInBob25lIiwidmFsaWRhdGlvbkVycm9ycyIsInNldFZhbGlkYXRpb25FcnJvcnMiLCJ2YWxpZGF0ZUZvcm0iLCJwaG9uZVJlZ2V4IiwiZXJyb3JzIiwibGVuZ3RoIiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImlzRm9ybUZpbGxlZCIsImlzRm9ybVZhbGlkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJyZWYiLCJsYWJlbCIsIm9uQ2xpY2siLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});