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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [nameIsFocused, setNameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedName = ()=>{\n        nameFocus.current.focus();\n    };\n    const handleNameFocus = ()=>{\n        setNameIsFocused(true);\n    };\n    const handleNameBlur = ()=>{\n        setNameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        lastName: \"\",\n        login: \"\",\n        email: \"\",\n        password: \"\",\n        passwordSecond: \"\",\n        phone: \"\"\n    });\n    const { name, phone } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: null,\n        phone: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (name.length < 2 || name.length > 60) {\n            errors.name = \"Name must be between 2 and 60 characters\";\n        }\n        // if (!phoneRegex.test(phone)) {\n        //   errors.phone = \"Формат повинен бути +380ХХХХХХХХХ\";\n        // }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = name.length;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            onBlur: name ? null : handleNameBlur,\n                            onFocus: handleNameFocus,\n                            ref: nameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(nameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер замовлення\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.name && \"\".concat(validationErrors.name)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"lGZd2c4zPI7ZA/rWTwbd3CZ46x4=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNSSxZQUFZTCw2Q0FBTUEsQ0FBQztJQUV6QixNQUFNTSxxQkFBcUI7UUFDekJELFVBQVVFLE9BQU8sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLE1BQU1DLGtCQUFrQjtRQUN0QkwsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTU0saUJBQWlCO1FBQ3JCTixpQkFBaUI7SUFDbkI7SUFFQSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7UUFDdkNZLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxnQkFBZ0I7UUFDaEJDLE9BQU87SUFDVDtJQUNBLE1BQU0sRUFBRU4sSUFBSSxFQUFFTSxLQUFLLEVBQUUsR0FBR1I7SUFFeEIsTUFBTSxDQUFDUyxrQkFBa0JDLG9CQUFvQixHQUFHcEIsK0NBQVFBLENBQUM7UUFDdkRZLE1BQU07UUFDTk0sT0FBTztJQUNUO0lBQ0EsTUFBTUcsZUFBZTtRQUNuQixNQUFNQyxhQUFhO1FBQ25CLElBQUlDLFNBQVMsQ0FBQztRQUNkLElBQUlYLEtBQUtZLE1BQU0sR0FBRyxLQUFLWixLQUFLWSxNQUFNLEdBQUcsSUFBSTtZQUN2Q0QsT0FBT1gsSUFBSSxHQUFHO1FBQ2hCO1FBQ0EsaUNBQWlDO1FBQ2pDLHdEQUF3RDtRQUN4RCxJQUFJO1FBQ0pRLG9CQUFvQkc7UUFDcEIsT0FBT0UsT0FBT0MsSUFBSSxDQUFDSCxRQUFRQyxNQUFNLEtBQUs7SUFDeEM7SUFDQSxNQUFNRyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRWhCLElBQUksRUFBRWlCLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDbkIsWUFBWSxDQUFDb0IsV0FBYztnQkFDekIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDbkIsS0FBSyxFQUFFaUI7WUFDVjtRQUVBVCxvQkFBb0I7WUFDbEIsR0FBR0QsZ0JBQWdCO1lBQ25CLENBQUNQLEtBQUssRUFBRTtRQUNWO0lBQ0Y7SUFDQSxNQUFNb0IsZUFBZTtRQUNuQiwyREFBMkQ7UUFDM0QsTUFBTUMsY0FBY3JCLEtBQUtZLE1BQU07UUFDL0IsT0FBT1M7SUFDVDtJQUNBLE1BQU1DLGVBQWUsQ0FBQ047UUFDcEJBLEVBQUVPLGNBQWM7UUFDaEIsSUFBSWQsZ0JBQWdCO1lBQ2xCZSxRQUFRQyxHQUFHLENBQUMzQjtRQUNaLE1BQU07UUFDUixPQUFPO1lBQ0wwQixRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVd6Qyw2RUFBYztrQkFDNUIsNEVBQUMwQztZQUFLRCxXQUFXekMsbUZBQW9CO1lBQUUyQyxVQUFVUDs7OEJBQy9DLDhEQUFDSTtvQkFDQ0MsV0FBVyxHQUNUcEIsT0FEWXJCLG1GQUFvQixFQUFDLEtBRWxDLE9BRENxQixpQkFBaUJQLElBQUksSUFBSWQsc0ZBQXVCOztzQ0FHbEQsOERBQUM0Qzs0QkFDQ0gsV0FBV3pDLDRGQUEwQjs0QkFDckM2QyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIaEMsTUFBSzs0QkFDTGlCLE9BQU9uQixTQUFTRSxJQUFJOzRCQUNwQmlDLFVBQVVsQjs0QkFDVm1CLFFBQVFsQyxPQUFPLE9BQU9IOzRCQUN0QnNDLFNBQVN2Qzs0QkFDVHdDLEtBQUs1Qzs7Ozs7O3NDQUVQLDhEQUFDNkM7NEJBQ0NDLFNBQVM3Qzs0QkFDVGtDLFdBQVcsR0FDVHJDLE9BRFlKLDRGQUEwQixFQUFDLEtBRXJDcUIsT0FERmpCLGlCQUFpQkoseUZBQXVCLEVBQ3pDLEtBQW9ELE9BQWpEcUIsaUJBQWlCUCxJQUFJLElBQUlkLHNGQUF1QjtzQ0FDckQ7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ3dDO29CQUNDQyxXQUFXLEdBQ1RwQixPQURZckIseUZBQTBCLEVBQUMsS0FFeEMsT0FEQ3FCLGlCQUFpQlAsSUFBSSxJQUFJZCxzRkFBdUI7OEJBR2pEcUIsaUJBQWlCUCxJQUFJLElBQUksR0FBeUIsT0FBdEJPLGlCQUFpQlAsSUFBSTs7Ozs7OzhCQWtDcEQsOERBQUN1QztvQkFDQ1osV0FBVyxHQUNUUCxPQURZbEMscUZBQXNCLEVBQUMsS0FFcEMsT0FEQ2tDLGtCQUFrQmxDLGdGQUFpQjtvQkFFckM2QyxNQUFLO29CQUNMUyxVQUFVLENBQUNwQjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQW5KZ0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3doZXJlSXNNeU9yZGVyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IFtuYW1lSXNGb2N1c2VkLCBzZXROYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkTmFtZSA9ICgpID0+IHtcclxuICAgIG5hbWVGb2N1cy5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVOYW1lRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXROYW1lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTmFtZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBzZXROYW1lSXNGb2N1c2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGxvZ2luOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIHBhc3N3b3JkU2Vjb25kOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBuYW1lLCBwaG9uZSB9ID0gZm9ybURhdGE7XHJcblxyXG4gIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3JzLCBzZXRWYWxpZGF0aW9uRXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICBwaG9uZTogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwaG9uZVJlZ2V4ID0gL15bXFwrXXswLDF9MzgwKFswLTldezl9KSQvO1xyXG4gICAgbGV0IGVycm9ycyA9IHt9O1xyXG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgMiB8fCBuYW1lLmxlbmd0aCA+IDYwKSB7XHJcbiAgICAgIGVycm9ycy5uYW1lID0gXCJOYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA2MCBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoIXBob25lUmVnZXgudGVzdChwaG9uZSkpIHtcclxuICAgIC8vICAgZXJyb3JzLnBob25lID0gXCLQpNC+0YDQvNCw0YIg0L/QvtCy0LjQvdC10L0g0LHRg9GC0LggKzM4MNCl0KXQpdCl0KXQpdCl0KXQpVwiO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2RGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKHtcclxuICAgICAgLi4udmFsaWRhdGlvbkVycm9ycyxcclxuICAgICAgW25hbWVdOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBpc0Zvcm1GaWxsZWQgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBpc0Zvcm1WYWxpZCA9IG5hbWUubGVuZ3RoID4gMCAmJiBwaG9uZS5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgaXNGb3JtVmFsaWQgPSBuYW1lLmxlbmd0aDtcclxuICAgIHJldHVybiBpc0Zvcm1WYWxpZDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAvL3Bvc3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBoYXMgdmFsaWRhdGlvbiBlcnJvcnNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5uYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fbmFtZS1pbnB1dGBdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17bmFtZSA/IG51bGwgOiBoYW5kbGVOYW1lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlTmFtZUZvY3VzfVxyXG4gICAgICAgICAgICByZWY9e25hbWVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWROYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX25hbWUtbGFiZWxcIl19ICR7XHJcbiAgICAgICAgICAgICAgbmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLm5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINC30LDQvNC+0LLQu9C10L3QvdGPXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fdmFsaWRhdGlvblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5uYW1lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLm5hbWUgJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5uYW1lfWB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fcGhvbmVcIl19ICR7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19waG9uZS1pbnB1dGBdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtwaG9uZSA/IG51bGwgOiBoYW5kbGVQaG9uZUJsdXJ9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZVBob25lRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17cGhvbmVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRQaG9uZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19waG9uZS1sYWJlbFwiXX0gJHtcclxuICAgICAgICAgICAgICBwaG9uZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdGDXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fdmFsaWRhdGlvblwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBcItCd0L7QvNC10YAg0LzQsNGUINCx0YPRgtC4INGDINGE0L7RgNC80LDRgtGWICszODDQpdCl0KXQpdCl0KXQpdCl0KVcIn1cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19idXR0b25cIl19ICR7XHJcbiAgICAgICAgICAgIGlzRm9ybUZpbGxlZCgpICYmIHN0eWxlc1tcImVuYWJsZWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17IWlzRm9ybUZpbGxlZCgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgINCX0L3QsNC50YLQuCDQt9Cw0LzQvtCy0LvQtdC90L3Rj1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlJlZ2lzdHJhdGlvbiIsIm5hbWVJc0ZvY3VzZWQiLCJzZXROYW1lSXNGb2N1c2VkIiwibmFtZUZvY3VzIiwiaGFuZGxlU2VsZWN0ZWROYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlTmFtZUZvY3VzIiwiaGFuZGxlTmFtZUJsdXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRTZWNvbmQiLCJwaG9uZSIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwidmFsaWRhdGVGb3JtIiwicGhvbmVSZWdleCIsImVycm9ycyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImlzRm9ybUZpbGxlZCIsImlzRm9ybVZhbGlkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJyZWYiLCJsYWJlbCIsIm9uQ2xpY2siLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});