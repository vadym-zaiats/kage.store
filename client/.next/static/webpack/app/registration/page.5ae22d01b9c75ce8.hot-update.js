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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [firstnameIsFocused, setFirstnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const firstnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [lastnameIsFocused, setLastnameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const lastnameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedFirstname = ()=>{\n        firstnameFocus.current.focus();\n    };\n    const handleFirstnameFocus = ()=>{\n        setFirstnameIsFocused(true);\n    };\n    const handleFirstnameBlur = ()=>{\n        setFirstnameIsFocused(false);\n    };\n    const handleSelectedLastname = ()=>{\n        lastnameFocus.current.focus();\n    };\n    const handleLastnameFocus = ()=>{\n        setLastnameIsFocused(true);\n    };\n    const handleLastnameBlur = ()=>{\n        setLastnameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\"\n    });\n    const { firstName, lastName } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: null,\n        lastName: null\n    });\n    const validateForm = ()=>{\n        let errors = {};\n        if (firstName.length < 2 || firstName.length > 60) {\n            errors.firstName = \"Firstname must be between 2 and 60 characters\";\n        }\n        if (lastName.length < 2 || lastName.length > 60) {\n            errors.firstName = \"Lastname must be between 2 and 60 characters\";\n        }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = firstName.length > 0 && lastName.length > 0;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__firstname), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__firstname-input\"]),\n                            type: \"text\",\n                            id: \"firstName\",\n                            name: \"firstName\",\n                            value: formData.firstName,\n                            onChange: handleChange,\n                            onBlur: firstName ? null : handleFirstnameBlur,\n                            onFocus: handleFirstnameFocus,\n                            ref: firstnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedFirstname,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__firstname-label\"]), \" \").concat(firstnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Імʼя\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.firstName && \"\".concat(validationErrors.firstName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__lastname), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__lastname-input\"]),\n                            type: \"text\",\n                            id: \"lastName\",\n                            name: \"lastName\",\n                            value: formData.lastName,\n                            onChange: handleChange,\n                            onBlur: lastName ? null : handleLastnameBlur,\n                            onFocus: handleLastnameFocus,\n                            ref: lastnameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedLastname,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__lastname-label\"]), \" \").concat(lastnameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Прізвище\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.lastName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.lastName && \"\".concat(validationErrors.lastName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Зареєструватись\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"vSmXYmc5k2JhWD2pZn9BGWnvUz8=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdELE1BQU1JLGlCQUFpQkwsNkNBQU1BLENBQUM7SUFDOUIsTUFBTSxDQUFDTSxtQkFBbUJDLHFCQUFxQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNTyxnQkFBZ0JSLDZDQUFNQSxDQUFDO0lBRTdCLE1BQU1TLDBCQUEwQjtRQUM5QkosZUFBZUssT0FBTyxDQUFDQyxLQUFLO0lBQzlCO0lBQ0EsTUFBTUMsdUJBQXVCO1FBQzNCUixzQkFBc0I7SUFDeEI7SUFDQSxNQUFNUyxzQkFBc0I7UUFDMUJULHNCQUFzQjtJQUN4QjtJQUVBLE1BQU1VLHlCQUF5QjtRQUM3Qk4sY0FBY0UsT0FBTyxDQUFDQyxLQUFLO0lBQzdCO0lBQ0EsTUFBTUksc0JBQXNCO1FBQzFCUixxQkFBcUI7SUFDdkI7SUFDQSxNQUFNUyxxQkFBcUI7UUFDekJULHFCQUFxQjtJQUN2QjtJQUVBLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7UUFDdkNrQixXQUFXO1FBQ1hDLFVBQVU7SUFNWjtJQUNBLE1BQU0sRUFBRUQsU0FBUyxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7SUFFaEMsTUFBTSxDQUFDSSxrQkFBa0JDLG9CQUFvQixHQUFHckIsK0NBQVFBLENBQUM7UUFDdkRrQixXQUFXO1FBQ1hDLFVBQVU7SUFFWjtJQUNBLE1BQU1HLGVBQWU7UUFDbkIsSUFBSUMsU0FBUyxDQUFDO1FBQ2QsSUFBSUwsVUFBVU0sTUFBTSxHQUFHLEtBQUtOLFVBQVVNLE1BQU0sR0FBRyxJQUFJO1lBQ2pERCxPQUFPTCxTQUFTLEdBQUc7UUFDckI7UUFDQSxJQUFJQyxTQUFTSyxNQUFNLEdBQUcs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LGlCQUFpQkQsUUFBUTs7Ozs7OzhCQUU1RCw4REFBQ2lDO29CQUNDWixXQUFXLEdBQ1RQLE9BRFluQyxxRkFBc0IsRUFBQyxLQUVwQyxPQURDbUMsa0JBQWtCbkMsZ0ZBQWlCO29CQUVyQzhDLE1BQUs7b0JBQ0xTLFVBQVUsQ0FBQ3BCOzhCQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBL0pnQmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3g/OTNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2hlcmVJc015T3JkZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3RyYXRpb24oKSB7XHJcbiAgY29uc3QgW2ZpcnN0bmFtZUlzRm9jdXNlZCwgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmaXJzdG5hbWVGb2N1cyA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbbGFzdG5hbWVJc0ZvY3VzZWQsIHNldExhc3RuYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBsYXN0bmFtZUZvY3VzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RlZEZpcnN0bmFtZSA9ICgpID0+IHtcclxuICAgIGZpcnN0bmFtZUZvY3VzLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZpcnN0bmFtZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0Rmlyc3RuYW1lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRmlyc3RuYW1lQmx1ciA9ICgpID0+IHtcclxuICAgIHNldEZpcnN0bmFtZUlzRm9jdXNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRMYXN0bmFtZSA9ICgpID0+IHtcclxuICAgIGxhc3RuYW1lRm9jdXMuY3VycmVudC5mb2N1cygpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTGFzdG5hbWVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldExhc3RuYW1lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTGFzdG5hbWVCbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0TGFzdG5hbWVJc0ZvY3VzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAvLyBsb2dpbjogXCJcIixcclxuICAgIC8vIGVtYWlsOiBcIlwiLFxyXG4gICAgLy8gcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAvLyBwYXNzd29yZFNlY29uZDogXCJcIixcclxuICAgIC8vIHBob25lOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9ID0gZm9ybURhdGE7XHJcblxyXG4gIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3JzLCBzZXRWYWxpZGF0aW9uRXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogbnVsbCxcclxuICAgIGxhc3ROYW1lOiBudWxsLFxyXG4gICAgLy8gbG9naW46IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHt9O1xyXG4gICAgaWYgKGZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZpcnN0TmFtZS5sZW5ndGggPiA2MCkge1xyXG4gICAgICBlcnJvcnMuZmlyc3ROYW1lID0gXCJGaXJzdG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDYwIGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIGlmIChsYXN0TmFtZS5sZW5ndGggPCAyIHx8IGxhc3ROYW1lLmxlbmd0aCA+IDYwKSB7XHJcbiAgICAgIGVycm9ycy5maXJzdE5hbWUgPSBcIkxhc3RuYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKGVycm9ycyk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDA7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XHJcbiAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoe1xyXG4gICAgICAuLi52YWxpZGF0aW9uRXJyb3JzLFxyXG4gICAgICBbbmFtZV06IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGlzRm9ybUZpbGxlZCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IGlzRm9ybVZhbGlkID0gbmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZpcnN0TmFtZS5sZW5ndGggPiAwICYmIGxhc3ROYW1lLmxlbmd0aCA+IDA7XHJcbiAgICByZXR1cm4gaXNGb3JtVmFsaWQ7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgLy9wb3N0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZvcm0gaGFzIHZhbGlkYXRpb24gZXJyb3JzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtYF19PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fYm9keWBdfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2ZpcnN0bmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19maXJzdG5hbWUtaW5wdXRgXX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZSA/IG51bGwgOiBoYW5kbGVGaXJzdG5hbWVCbHVyfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGaXJzdG5hbWVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtmaXJzdG5hbWVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fZmlyc3RuYW1lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIGZpcnN0bmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCG0LzKvNGPXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fdmFsaWRhdGlvblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMuZmlyc3ROYW1lICYmIGAke3ZhbGlkYXRpb25FcnJvcnMuZmlyc3ROYW1lfWB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19sYXN0bmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5sYXN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2xhc3RuYW1lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtsYXN0TmFtZSA/IG51bGwgOiBoYW5kbGVMYXN0bmFtZUJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUxhc3RuYW1lRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17bGFzdG5hbWVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRMYXN0bmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19sYXN0bmFtZS1sYWJlbFwiXX0gJHtcclxuICAgICAgICAgICAgICBsYXN0bmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLmxhc3ROYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J/RgNGW0LfQstC40YnQtVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3ZhbGlkYXRpb25cIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMubGFzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMubGFzdE5hbWUgJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5sYXN0TmFtZX1gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fYnV0dG9uXCJdfSAke1xyXG4gICAgICAgICAgICBpc0Zvcm1GaWxsZWQoKSAmJiBzdHlsZXNbXCJlbmFibGVkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1GaWxsZWQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDQl9Cw0YDQtdGU0YHRgtGA0YPQstCw0YLQuNGB0YxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWdpc3RyYXRpb24iLCJmaXJzdG5hbWVJc0ZvY3VzZWQiLCJzZXRGaXJzdG5hbWVJc0ZvY3VzZWQiLCJmaXJzdG5hbWVGb2N1cyIsImxhc3RuYW1lSXNGb2N1c2VkIiwic2V0TGFzdG5hbWVJc0ZvY3VzZWQiLCJsYXN0bmFtZUZvY3VzIiwiaGFuZGxlU2VsZWN0ZWRGaXJzdG5hbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVGaXJzdG5hbWVGb2N1cyIsImhhbmRsZUZpcnN0bmFtZUJsdXIiLCJoYW5kbGVTZWxlY3RlZExhc3RuYW1lIiwiaGFuZGxlTGFzdG5hbWVGb2N1cyIsImhhbmRsZUxhc3RuYW1lQmx1ciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwidmFsaWRhdGVGb3JtIiwiZXJyb3JzIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImlzRm9ybUZpbGxlZCIsImlzRm9ybVZhbGlkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJyZWYiLCJsYWJlbCIsIm9uQ2xpY2siLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});