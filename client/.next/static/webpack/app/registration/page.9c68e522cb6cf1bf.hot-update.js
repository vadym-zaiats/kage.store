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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [nameIsFocused, setNameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [phoneIsFocused, setPhoneIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phoneFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedName = ()=>{\n        nameFocus.current.focus();\n    };\n    const handleNameFocus = ()=>{\n        setNameIsFocused(true);\n    };\n    const handleNameBlur = ()=>{\n        setNameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        lastName: \"\",\n        login: \"\",\n        email: \"\",\n        password: \"\",\n        passwordSecond: \"\",\n        phone: \"\"\n    });\n    const { name, phone } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: null,\n        phone: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (name.length < 2 || name.length > 60) {\n            errors.name = \"Name must be between 2 and 60 characters\";\n        }\n        if (!phoneRegex.test(phone)) {\n            errors.phone = \"Формат повинен бути +380ХХХХХХХХХ\";\n        }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = name.length;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        // const validFormData = new FormData();\n        // Object.entries(formData).forEach(([key, value]) => {\n        //   validFormData.set(key, value);\n        // });\n        // dispatch(postCard({ validFormData, token }));\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            onBlur: name ? null : handleNameBlur,\n                            onFocus: handleNameFocus,\n                            ref: nameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(nameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер замовлення\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.name && \"\".concat(validationErrors.name)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__phone), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-input\"]),\n                            type: \"tel\",\n                            id: \"phone\",\n                            name: \"phone\",\n                            value: formData.phone,\n                            onChange: handleChange,\n                            onBlur: phone ? null : handlePhoneBlur,\n                            onFocus: handlePhoneFocus,\n                            ref: phoneFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedPhone,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-label\"]), \" \").concat(phoneIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер телефону\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.phone && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.phone && \"Номер має бути у форматі +380ХХХХХХХХХ\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 140,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"GW991J1CmTytkkZCHlAg0iEWy90=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1NLFlBQVlQLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBRTFCLE1BQU1TLHFCQUFxQjtRQUN6QkYsVUFBVUcsT0FBTyxDQUFDQyxLQUFLO0lBQ3pCO0lBQ0EsTUFBTUMsa0JBQWtCO1FBQ3RCUixpQkFBaUI7SUFDbkI7SUFDQSxNQUFNUyxpQkFBaUI7UUFDckJULGlCQUFpQjtJQUNuQjtJQUVBLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztRQUN2Q2UsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGdCQUFnQjtRQUNoQkMsT0FBTztJQUNUO0lBQ0EsTUFBTSxFQUFFTixJQUFJLEVBQUVNLEtBQUssRUFBRSxHQUFHUjtJQUV4QixNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUd2QiwrQ0FBUUEsQ0FBQztRQUN2RGUsTUFBTTtRQUNOTSxPQUFPO0lBQ1Q7SUFDQSxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLGFBQWE7UUFDbkIsSUFBSUMsU0FBUyxDQUFDO1FBQ2QsSUFBSVgsS0FBS1ksTUFBTSxHQUFHLEtBQUtaLEtBQUtZLE1BQU0sR0FBRyxJQUFJO1lBQ3ZDRCxPQUFPWCxJQUFJLEdBQUc7UUFDaEI7UUFDQSxJQUFJLENBQUNVLFdBQVdHLElBQUksQ0FBQ1AsUUFBUTtZQUMzQkssT0FBT0wsS0FBSyxHQUFHO1FBQ2pCO1FBQ0FFLG9CQUFvQkc7UUFDcEIsT0FB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S0FFcEMsT0FEQ3NDLGtCQUFrQnRDLGdGQUFpQjtvQkFFckNpRCxNQUFLO29CQUNMWSxVQUFVLENBQUN2Qjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXpKZ0JuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3doZXJlSXNNeU9yZGVyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IFtuYW1lSXNGb2N1c2VkLCBzZXROYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvbmVJc0ZvY3VzZWQsIHNldFBob25lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcGhvbmVGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWROYW1lID0gKCkgPT4ge1xyXG4gICAgbmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU5hbWVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldE5hbWVJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVOYW1lQmx1ciA9ICgpID0+IHtcclxuICAgIHNldE5hbWVJc0ZvY3VzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgbG9naW46IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgcGFzc3dvcmRTZWNvbmQ6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IG5hbWUsIHBob25lIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogbnVsbCxcclxuICAgIHBob25lOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBob25lUmVnZXggPSAvXltcXCtdezAsMX0zODAoWzAtOV17OX0pJC87XHJcbiAgICBsZXQgZXJyb3JzID0ge307XHJcbiAgICBpZiAobmFtZS5sZW5ndGggPCAyIHx8IG5hbWUubGVuZ3RoID4gNjApIHtcclxuICAgICAgZXJyb3JzLm5hbWUgPSBcIk5hbWUgbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDYwIGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIGlmICghcGhvbmVSZWdleC50ZXN0KHBob25lKSkge1xyXG4gICAgICBlcnJvcnMucGhvbmUgPSBcItCk0L7RgNC80LDRgiDQv9C+0LLQuNC90LXQvSDQsdGD0YLQuCArMzgw0KXQpdCl0KXQpdCl0KXQpdClXCI7XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKGVycm9ycyk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDA7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XHJcbiAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoe1xyXG4gICAgICAuLi52YWxpZGF0aW9uRXJyb3JzLFxyXG4gICAgICBbbmFtZV06IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGlzRm9ybUZpbGxlZCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IGlzRm9ybVZhbGlkID0gbmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IG5hbWUubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGlzRm9ybVZhbGlkO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIC8vIGNvbnN0IHZhbGlkRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgLy8gT2JqZWN0LmVudHJpZXMoZm9ybURhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAvLyAgIHZhbGlkRm9ybURhdGEuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy8gZGlzcGF0Y2gocG9zdENhcmQoeyB2YWxpZEZvcm1EYXRhLCB0b2tlbiB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZvcm0gaGFzIHZhbGlkYXRpb24gZXJyb3JzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtYF19PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fYm9keWBdfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX25hbWVcIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMubmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX25hbWUtaW5wdXRgXX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e25hbWUgPyBudWxsIDogaGFuZGxlTmFtZUJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZU5hbWVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtuYW1lRm9jdXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGVkTmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19uYW1lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIG5hbWVJc0ZvY3VzZWQgJiYgc3R5bGVzW1wiaW5wdXQtZm9jdXNlZFwiXVxyXG4gICAgICAgICAgICB9ICR7dmFsaWRhdGlvbkVycm9ycy5uYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J3QvtC80LXRgCDQt9Cw0LzQvtCy0LvQtdC90L3Rj1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3ZhbGlkYXRpb25cIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMubmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5uYW1lICYmIGAke3ZhbGlkYXRpb25FcnJvcnMubmFtZX1gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fcGhvbmVcIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19waG9uZS1pbnB1dGBdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtwaG9uZSA/IG51bGwgOiBoYW5kbGVQaG9uZUJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZVBob25lRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17cGhvbmVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRQaG9uZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19waG9uZS1sYWJlbFwiXX0gJHtcclxuICAgICAgICAgICAgICBwaG9uZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdGDXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fdmFsaWRhdGlvblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBcItCd0L7QvNC10YAg0LzQsNGUINCx0YPRgtC4INGDINGE0L7RgNC80LDRgtGWICszODDQpdCl0KXQpdCl0KXQpdCl0KVcIn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2J1dHRvblwiXX0gJHtcclxuICAgICAgICAgICAgaXNGb3JtRmlsbGVkKCkgJiYgc3R5bGVzW1wiZW5hYmxlZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXshaXNGb3JtRmlsbGVkKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JfQvdCw0LnRgtC4INC30LDQvNC+0LLQu9C10L3QvdGPXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uIiwibmFtZUlzRm9jdXNlZCIsInNldE5hbWVJc0ZvY3VzZWQiLCJwaG9uZUlzRm9jdXNlZCIsInNldFBob25lSXNGb2N1c2VkIiwibmFtZUZvY3VzIiwicGhvbmVGb2N1cyIsImhhbmRsZVNlbGVjdGVkTmFtZSIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZU5hbWVGb2N1cyIsImhhbmRsZU5hbWVCbHVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJsYXN0TmFtZSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkU2Vjb25kIiwicGhvbmUiLCJ2YWxpZGF0aW9uRXJyb3JzIiwic2V0VmFsaWRhdGlvbkVycm9ycyIsInZhbGlkYXRlRm9ybSIsInBob25lUmVnZXgiLCJlcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiaXNGb3JtRmlsbGVkIiwiaXNGb3JtVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsInJlZiIsImxhYmVsIiwib25DbGljayIsImhhbmRsZVBob25lQmx1ciIsImhhbmRsZVBob25lRm9jdXMiLCJoYW5kbGVTZWxlY3RlZFBob25lIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});