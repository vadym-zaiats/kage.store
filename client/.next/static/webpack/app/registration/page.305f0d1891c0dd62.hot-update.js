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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whereIsMyOrderForm.module.scss */ \"(app-pages-browser)/./src/app/ui/registration/whereIsMyOrderForm.module.scss\");\n/* harmony import */ var _whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Registration auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [nameIsFocused, setNameIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const nameFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSelectedName = ()=>{\n        nameFocus.current.focus();\n    };\n    const handleNameFocus = ()=>{\n        setNameIsFocused(true);\n    };\n    const handleNameBlur = ()=>{\n        setNameIsFocused(false);\n    };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\"\n    });\n    const { firstName, phone } = formData;\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: null\n    });\n    const validateForm = ()=>{\n        const phoneRegex = /^[\\+]{0,1}380([0-9]{9})$/;\n        let errors = {};\n        if (firstName.length < 2 || firstName.length > 60) {\n            errors.firstName = \"Name must be between 2 and 60 characters\";\n        }\n        // if (!phoneRegex.test(phone)) {\n        //   errors.phone = \"Формат повинен бути +380ХХХХХХХХХ\";\n        // }\n        setValidationErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        setValidationErrors({\n            ...validationErrors,\n            [name]: \"\"\n        });\n    };\n    const isFormFilled = ()=>{\n        // const isFormValid = name.length > 0 && phone.length > 0;\n        const isFormValid = firstName.length;\n        return isFormValid;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            console.log(formData);\n        //post\n        } else {\n            console.log(\"Form has validation errors\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            value: formData.firstName,\n                            onChange: handleChange,\n                            onBlur: firstName ? null : handleNameBlur,\n                            onFocus: handleNameFocus,\n                            ref: nameFocus\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onClick: handleSelectedName,\n                            className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-label\"]), \" \").concat(nameIsFocused && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-focused\"]), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                            children: \"Номер замовлення\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__validation), \" \").concat(validationErrors.firstName && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data__invalid)),\n                    children: validationErrors.firstName && \"\".concat(validationErrors.firstName)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button), \" \").concat(isFormFilled() && (_whereIsMyOrderForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enabled)),\n                    type: \"submit\",\n                    disabled: !isFormFilled(),\n                    children: \"Знайти замовлення\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/registration/Registration.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"zoxDoPX02b8BUDT1E3vk2LH7YDA=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDYjtBQUVsQyxTQUFTRzs7SUFDZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNSSxZQUFZTCw2Q0FBTUEsQ0FBQztJQUV6QixNQUFNTSxxQkFBcUI7UUFDekJELFVBQVVFLE9BQU8sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLE1BQU1DLGtCQUFrQjtRQUN0QkwsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTU0saUJBQWlCO1FBQ3JCTixpQkFBaUI7SUFDbkI7SUFFQSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7UUFDdkNZLFdBQVc7SUFPYjtJQUNBLE1BQU0sRUFBRUEsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR0g7SUFFN0IsTUFBTSxDQUFDSSxrQkFBa0JDLG9CQUFvQixHQUFHZiwrQ0FBUUEsQ0FBQztRQUN2RFksV0FBVztJQUViO0lBQ0EsTUFBTUksZUFBZTtRQUNuQixNQUFNQyxhQUFhO1FBQ25CLElBQUlDLFNBQVMsQ0FBQztRQUNkLElBQUlOLFVBQVVPLE1BQU0sR0FBRyxLQUFLUCxVQUFVTyxNQUFNLEdBQUcsSUFBSTtZQUNqREQsT0FBT04sU0FBUyxHQUFHO1FBQ3JCO1FBQ0EsaUNBQWlDO1FBQ2pDLHdEQUF3RDtRQUN4RCxJQUFJO1FBQ0pHLG9CQUFvQkc7UUFDcEIsT0FBT0UsT0FBT0MsSUFBSSxDQUFDSCxRQUFRQyxNQUFNLEtBQUs7SUFDeEM7SUFDQSxNQUFNRyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2YsWUFBWSxDQUFDZ0IsV0FBYztnQkFDekIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7UUFFQVYsb0JBQW9CO1lBQ2xCLEdBQUdELGdCQUFnQjtZQUNuQixDQUFDVSxLQUFLLEVBQUU7UUFDVjtJQUNGO0lBQ0EsTUFBTUksZUFBZTtRQUNuQiwyREFBMkQ7UUFDM0QsTUFBTUMsY0FBY2pCLFVBQVVPLE1BQU07UUFDcEMsT0FBT1U7SUFDVDtJQUNBLE1BQU1DLGVBQWUsQ0FBQ1A7UUFDcEJBLEVBQUVRLGNBQWM7UUFDaEIsSUFBSWYsZ0JBQWdCO1lBQ2xCZ0IsUUFBUUMsR0FBRyxDQUFDdkI7UUFDWixNQUFNO1FBQ1IsT0FBTztZQUNMc0IsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXckMsNkVBQWM7a0JBQzVCLDRFQUFDc0M7WUFBS0QsV0FBV3JDLG1GQUFvQjtZQUFFdUMsVUFBVVA7OzhCQUMvQyw4REFBQ0k7b0JBQ0NDLFdBQVcsR0FDVHJCLE9BRFloQixtRkFBb0IsRUFBQyxLQUVsQyxPQURDZ0IsaUJBQWlCRixTQUFTLElBQUlkLHNGQUF1Qjs7c0NBR3ZELDhEQUFDd0M7NEJBQ0NILFdBQVdyQyw0RkFBMEI7NEJBQ3JDeUMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSGhCLE1BQUs7NEJBQ0xDLE9BQU9mLFNBQVNFLFNBQVM7NEJBQ3pCNkIsVUFBVW5COzRCQUNWb0IsUUFBUTlCLFlBQVksT0FBT0g7NEJBQzNCa0MsU0FBU25DOzRCQUNUb0MsS0FBS3hDOzs7Ozs7c0NBRVAsOERBQUN5Qzs0QkFDQ0MsU0FBU3pDOzRCQUNUOEIsV0FBVyxHQUNUakMsT0FEWUosNEZBQTBCLEVBQUMsS0FFckNnQixPQURGWixpQkFBaUJKLHlGQUF1QixFQUN6QyxLQUF5RCxPQUF0RGdCLGlCQUFpQkYsU0FBUyxJQUFJZCxzRkFBdUI7c0NBQzFEOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNvQztvQkFDQ0MsV0FBVyxHQUNUckIsT0FEWWhCLHlGQUEwQixFQUFDLEtBRXhDLE9BRENnQixpQkFBaUJGLFNBQVMsSUFBSWQsc0ZBQXVCOzhCQUd0RGdCLGlCQUFpQkYsU0FBUyxJQUFJLEdBQThCLE9BQTNCRSxpQkFBaUJGLFNBQVM7Ozs7Ozs4QkFrQzlELDhEQUFDbUM7b0JBQ0NaLFdBQVcsR0FDVFAsT0FEWTlCLHFGQUFzQixFQUFDLEtBRXBDLE9BREM4QixrQkFBa0I5QixnRkFBaUI7b0JBRXJDeUMsTUFBSztvQkFDTFMsVUFBVSxDQUFDcEI7OEJBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FuSmdCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9yZWdpc3RyYXRpb24vUmVnaXN0cmF0aW9uLmpzeD85M2YxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi93aGVyZUlzTXlPcmRlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbigpIHtcclxuICBjb25zdCBbbmFtZUlzRm9jdXNlZCwgc2V0TmFtZUlzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbmFtZUZvY3VzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RlZE5hbWUgPSAoKSA9PiB7XHJcbiAgICBuYW1lRm9jdXMuY3VycmVudC5mb2N1cygpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTmFtZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0TmFtZUlzRm9jdXNlZCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU5hbWVCbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0TmFtZUlzRm9jdXNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAvLyBsYXN0TmFtZTogXCJcIixcclxuICAgIC8vIGxvZ2luOiBcIlwiLFxyXG4gICAgLy8gZW1haWw6IFwiXCIsXHJcbiAgICAvLyBwYXNzd29yZDogXCJcIixcclxuICAgIC8vIHBhc3N3b3JkU2Vjb25kOiBcIlwiLFxyXG4gICAgLy8gcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBmaXJzdE5hbWUsIHBob25lIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBudWxsLFxyXG4gICAgLy8gcGhvbmU6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGhvbmVSZWdleCA9IC9eW1xcK117MCwxfTM4MChbMC05XXs5fSkkLztcclxuICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgIGlmIChmaXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmaXJzdE5hbWUubGVuZ3RoID4gNjApIHtcclxuICAgICAgZXJyb3JzLmZpcnN0TmFtZSA9IFwiTmFtZSBtdXN0IGJlIGJldHdlZW4gMiBhbmQgNjAgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCFwaG9uZVJlZ2V4LnRlc3QocGhvbmUpKSB7XHJcbiAgICAvLyAgIGVycm9ycy5waG9uZSA9IFwi0KTQvtGA0LzQsNGCINC/0L7QstC40L3QtdC9INCx0YPRgtC4ICszODDQpdCl0KXQpdCl0KXQpdCl0KVcIjtcclxuICAgIC8vIH1cclxuICAgIHNldFZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcclxuICAgICAgLi4ucHJldkRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgc2V0VmFsaWRhdGlvbkVycm9ycyh7XHJcbiAgICAgIC4uLnZhbGlkYXRpb25FcnJvcnMsXHJcbiAgICAgIFtuYW1lXTogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaXNGb3JtRmlsbGVkID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgaXNGb3JtVmFsaWQgPSBuYW1lLmxlbmd0aCA+IDAgJiYgcGhvbmUubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gZmlyc3ROYW1lLmxlbmd0aDtcclxuICAgIHJldHVybiBpc0Zvcm1WYWxpZDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAvL3Bvc3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBoYXMgdmFsaWRhdGlvbiBlcnJvcnNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZm9ybV9fbmFtZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19uYW1lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZSA/IG51bGwgOiBoYW5kbGVOYW1lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlTmFtZUZvY3VzfVxyXG4gICAgICAgICAgICByZWY9e25hbWVGb2N1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWROYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX25hbWUtbGFiZWxcIl19ICR7XHJcbiAgICAgICAgICAgICAgbmFtZUlzRm9jdXNlZCAmJiBzdHlsZXNbXCJpbnB1dC1mb2N1c2VkXCJdXHJcbiAgICAgICAgICAgIH0gJHt2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCd0L7QvNC10YAg0LfQsNC80L7QstC70LXQvdC90Y9cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmZpcnN0TmFtZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWUgJiYgYCR7dmFsaWRhdGlvbkVycm9ycy5maXJzdE5hbWV9YH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX19waG9uZVwiXX0gJHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5waG9uZSAmJiBzdHlsZXNbXCJkYXRhX19pbnZhbGlkXCJdXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bob25lLWlucHV0YF19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3Bob25lID8gbnVsbCA6IGhhbmRsZVBob25lQmx1cn1cclxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlUGhvbmVGb2N1c31cclxuICAgICAgICAgICAgcmVmPXtwaG9uZUZvY3VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZFBob25lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX3Bob25lLWxhYmVsXCJdfSAke1xyXG4gICAgICAgICAgICAgIHBob25lSXNGb2N1c2VkICYmIHN0eWxlc1tcImlucHV0LWZvY3VzZWRcIl1cclxuICAgICAgICAgICAgfSAke3ZhbGlkYXRpb25FcnJvcnMucGhvbmUgJiYgc3R5bGVzW1wiZGF0YV9faW52YWxpZFwiXX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90YNcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmb3JtX192YWxpZGF0aW9uXCJdfSAke1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIHN0eWxlc1tcImRhdGFfX2ludmFsaWRcIl1cclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLnBob25lICYmIFwi0J3QvtC80LXRgCDQvNCw0ZQg0LHRg9GC0Lgg0YMg0YTQvtGA0LzQsNGC0ZYgKzM4MNCl0KXQpdCl0KXQpdCl0KXQpVwifVxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZvcm1fX2J1dHRvblwiXX0gJHtcclxuICAgICAgICAgICAgaXNGb3JtRmlsbGVkKCkgJiYgc3R5bGVzW1wiZW5hYmxlZFwiXVxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXshaXNGb3JtRmlsbGVkKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg0JfQvdCw0LnRgtC4INC30LDQvNC+0LLQu9C10L3QvdGPXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uIiwibmFtZUlzRm9jdXNlZCIsInNldE5hbWVJc0ZvY3VzZWQiLCJuYW1lRm9jdXMiLCJoYW5kbGVTZWxlY3RlZE5hbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVOYW1lRm9jdXMiLCJoYW5kbGVOYW1lQmx1ciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJwaG9uZSIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwidmFsaWRhdGVGb3JtIiwicGhvbmVSZWdleCIsImVycm9ycyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJpc0Zvcm1GaWxsZWQiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwicmVmIiwibGFiZWwiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/Registration.jsx\n"));

/***/ })

});