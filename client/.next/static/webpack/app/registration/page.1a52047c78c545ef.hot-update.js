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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [nameIsFocused, setNameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedName = ()=>{\n        nameFocus.current.focus();\n    };\n    const handleNameFocus = ()=>{\n        setNameIsFocused(true);\n    };\n    const handleNameBlur = ()=>{\n        setNameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\"\n    });\n    const { name } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: null\n    });\n    const validateForm = ()=>{\n        let errors = {};\n        if (name.length < 2 || name.length > 60) {\n            errors.name = \"Firstname must be between 2 and 60 characters\";\n        }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = name.length > 0;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            onBlur: name ? null : handleNameBlur,\n                            onFocus: handleNameFocus,\n                            ref: nameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(nameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер замовлення\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.name && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.name && \"\".concat(validationErrors.name)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Зареєструватись\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"YwDAL9R5oTnxQTrJ66v+FkcSPts=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNSSxZQUFZTCw2Q0FBTUEsQ0FBQztJQUV6QixNQUFNTSxxQkFBcUI7UUFDekJELFVBQVVFLE9BQU8sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLE1BQU1DLGtCQUFrQjtRQUN0QkwsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTU0saUJBQWlCO1FBQ3JCTixpQkFBaUI7SUFDbkI7SUFFQSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7UUFDdkNZLE1BQU07SUFPUjtJQUNBLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUdGO0lBRWpCLE1BQU0sQ0FBQ0csa0JBQWtCQyxvQkFBb0IsR0FBR2QsK0NBQVFBLENBQUM7UUFDdkRZLE1BQU07SUFHUjtJQUNBLE1BQU1HLGVBQWU7UUFDbkIsSUFBSUMsU0FBUyxDQUFDO1FBQ2QsSUFBSUosS0FBS0ssTUFBTSxHQUFHLEtBQUtMLEtBQUtLLE1BQU0sR0FBRyxJQUFJO1lBQ3ZDRCxPQUFPSixJQUFJLEdBQUc7UUFDaEI7UUFDQUUsb0JBQW9CRTtRQUNwQixPQUFPRSxPQUFPQyxJQUFJLENBQUNILFFBQVFDLE1BQU0sS0FBSztJQUN4QztJQUNBLE1BQU1HLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFVCxJQUFJLEVBQUVVLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDWixZQUFZLENBQUNhLFdBQWM7Z0JBQ3pCLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ1osS0FBSyxFQUFFVTtZQUNWO1FBRUFSLG9CQUFvQjtZQUNsQixHQUFHRCxnQkFBZ0I7WUFDbkIsQ0FBQ0QsS0FBSyxFQUFFO1FBQ1Y7SUFDRjtJQUNBLE1BQU1hLGVBQWU7UUFDbkIsMkRBQTJEO1FBQzNELE1BQU1DLGNBQWNkLEtBQUtLLE1BQU0sR0FBRztRQUNsQyxPQUFPUztJQUNUO0lBQ0EsTUFBTUMsZUFBZSxDQUFDTjtRQUNwQkEsRUFBRU8sY0FBYztRQUNoQixJQUFJYixnQkFBZ0I7WUFDbEJjLFFBQVFDLEdBQUcsQ0FBQ3BCO1FBQ1osTUFBTTtRQUNSLE9BQU87WUFDTG1CLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2xDLDZFQUFjO2tCQUM1Qiw0RUFBQ21DO1lBQUtELFdBQVdsQyxtRkFBb0I7WUFBRW9DLFVBQVVQOzs4QkFDL0MsOERBQUNJO29CQUNDQyxXQUFXLEdBQ1RuQixPQURZZixtRkFBb0IsRUFBQyxLQUVsQyxPQURDZSxpQkFBaUJELElBQUksSUFBSWQsc0ZBQXVCOztzQ0FHbEQsOERBQUNxQzs0QkFDQ0gsV0FBV2xDLDRGQUEwQjs0QkFDckNzQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIekIsTUFBSzs0QkFDTFUsT0FBT1osU0FBU0UsSUFBSTs0QkFDcEIwQixVQUFVbEI7NEJBQ1ZtQixRQUFRM0IsT0FBTyxPQUFPSDs0QkFDdEIrQixTQUFTaEM7NEJBQ1RpQyxLQUFLckM7Ozs7OztzQ0FFUCw4REFBQ3NDOzRCQUNDQyxTQUFTdEM7NEJBQ1QyQixXQUFXLEdBQ1Q5QixPQURZSiw0RkFBMEIsRUFBQyxLQUVyQ2UsT0FERlgsaUJBQWlCSix5RkFBdUIsRUFDekMsS0FBb0QsT0FBakRlLGlCQUFpQkQsSUFBSSxJQUFJZCxzRkFBdUI7c0NBQ3JEOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNpQztvQkFDQ0MsV0FBVyxHQUNUbkIsT0FEWWYseUZBQTBCLEVBQUMsS0FFeEMsT0FEQ2UsaUJBQWlCRCxJQUFJLElBQUlkLHNGQUF1Qjs4QkFHakRlLGlCQUFpQkQsSUFBSSxJQUFJLEdBQXlCLE9BQXRCQyxpQkFBaUJELElBQUk7Ozs7Ozs4QkFFcEQsOERBQUNnQztvQkFDQ1osV0FBVyxHQUNUUCxPQURZM0IscUZBQXNCLEVBQUMsS0FFcEMsT0FEQzJCLGtCQUFrQjNCLGdGQUFpQjtvQkFFckNzQyxNQUFLO29CQUNMUyxVQUFVLENBQUNwQjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWhIZ0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4PzkzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3doZXJlSXNNeU9yZGVyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IFtuYW1lSXNGb2N1c2VkLCBzZXROYW1lSXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYW1lRm9jdXMgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkTmFtZSA9ICgpID0+IHtcclxuICAgIG5hbWVGb2N1cy5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVOYW1lRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXROYW1lSXNGb2N1c2VkKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTmFtZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBzZXROYW1lSXNGb2N1c2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICAvLyBsYXN0TmFtZTogXCJcIixcclxuICAgIC8vIGxvZ2luOiBcIlwiLFxyXG4gICAgLy8gZW1haWw6IFwiXCIsXHJcbiAgICAvLyBwYXNzd29yZDogXCJcIixcclxuICAgIC8vIHBhc3N3b3JkU2Vjb25kOiBcIlwiLFxyXG4gICAgLy8gcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBuYW1lIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogbnVsbCxcclxuICAgIC8vIGxhc3ROYW1lOiBudWxsLFxyXG4gICAgLy8gbG9naW46IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHt9O1xyXG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgMiB8fCBuYW1lLmxlbmd0aCA+IDYwKSB7XHJcbiAgICAgIGVycm9ycy5uYW1lID0gXCJGaXJzdG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDYwIGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcclxuICAgICAgLi4ucHJldkRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9ycyh7XHJcbiAgICAgIC4uLnZhbGlkYXRpb25FcnJvcnMsXHJcbiAgICAgIFtuYW1lXTogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaXNGb3JtRmlsbGVkID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgaXNGb3JtVmFsaWQgPSBuYW1lLmxlbmd0aCA+IDAgJiYgcGhvbmUubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gbmFtZS5sZW5ndGggPiAwO1xyXG4gICAgcmV0dXJuIGlzRm9ybVZhbGlkO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIC8vcG9zdFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJGb3JtIGhhcyB2YWxpZGF0aW9uIGVycm9yc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybWBdfT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2JvZHlgXX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19uYW1lXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLm5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19uYW1lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtuYW1lID8gbnVsbCA6IGhhbmRsZU5hbWVCbHVyfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVOYW1lRm9jdXN9XHJcbiAgICAgICAgICAgIHJlZj17bmFtZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZE5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbmFtZS1sYWJlbFwiXX0gJHtcclxuICAgICAgICAgICAgICBuYW1lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMubmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCd0L7QvNC10YAg0LfQsNC80L7QstC70LXQvdC90Y9cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLm5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMubmFtZSAmJiBgJHt2YWxpZGF0aW9uRXJyb3JzLm5hbWV9YH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2J1dHRvblwiXX0gJHtcclxuICAgICAgICAgICAgaXNGb3JtRmlsbGVkKCkgJiYgc3R5bGVzW1wiZW5hYmxlZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXshaXNGb3JtRmlsbGVkKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JfQsNGA0LXRlNGB0YLRgNGD0LLQsNGC0LjRgdGMXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uIiwibmFtZUlzRm9jdXNlZCIsInNldE5hbWVJc0ZvY3VzZWQiLCJuYW1lRm9jdXMiLCJoYW5kbGVTZWxlY3RlZE5hbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVOYW1lRm9jdXMiLCJoYW5kbGVOYW1lQmx1ciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwidmFsaWRhdGlvbkVycm9ycyIsInNldFZhbGlkYXRpb25FcnJvcnMiLCJ2YWxpZGF0ZUZvcm0iLCJlcnJvcnMiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJpc0Zvcm1GaWxsZWQiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwicmVmIiwibGFiZWwiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});