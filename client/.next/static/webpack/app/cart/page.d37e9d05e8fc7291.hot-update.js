"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/redux/middlewares/cart.js":
/*!***************************************!*\
  !*** ./src/redux/middlewares/cart.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSeveralToCart: function() { return /* binding */ addSeveralToCart; },\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addToCartFunc\", (productData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === productData.itemNo);\n        if (existingProd) {\n            if (existingProd.count < productData.quantity) {\n                const updatedItem = {\n                    ...existingProd,\n                    count: existingProd.count + 1\n                };\n                return updatedItem;\n            } else {\n                return existingProd;\n            }\n        } else {\n            return productData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst addSeveralToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"cart/addSeveralToCart\", (productData, param)=>{\n    let { rejectWithValue, getState } = param;\n    try {\n        const state = getState();\n        const existingProd = state.cart.cart.find((item)=>item.itemNo === productData.itemNo);\n        if (existingProd) {\n            if (existingProd.count + productData.count <= productData.quantity && existingProd.count + productData.count !== 1) {\n                const updatedItem = {\n                    ...existingProd,\n                    count: existingProd.count + productData.count\n                };\n                return updatedItem;\n            } else if (existingProd.count + productData.count === 1) {\n                return console.log(\"dd\");\n            } else {\n                return existingProd;\n            }\n        } else {\n            return productData;\n        }\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n}); // export const decreaseToCart = createAsyncThunk(\n //   \"cart/decreaseToCart\",\n //   (productData, { rejectWithValue, getState }) => {\n //     try {\n //       const state = getState();\n //       const existingProd = state.cart.cart.find(\n //         (item) => item.itemNo === productData.itemNo\n //       );\n //       if (existingProd) {\n //         if (existingProd.count + productData.count <= productData.quantity) {\n //           const updatedItem = {\n //             ...existingProd,\n //             count: existingProd.count + productData.count,\n //           };\n //           return updatedItem;\n //         } else {\n //           return existingProd;\n //         }\n //       } else {\n //         return productData;\n //       }\n //     } catch (error) {\n //       return rejectWithValue(error.message);\n //     }\n //   }\n // );\n // export const increaseToCart = createAsyncThunk(\n //   \"cart/increaseToCart\",\n //   (productData, { rejectWithValue, getState }) => {\n //     try {\n //       const state = getState();\n //       const existingProd = state.cart.cart.find(\n //         (item) => item.itemNo === productData.itemNo\n //       );\n //       if (existingProd) {\n //         if (existingProd.count + productData.count <= productData.quantity) {\n //           const updatedItem = {\n //             ...existingProd,\n //             count: existingProd.count + productData.count,\n //           };\n //           return updatedItem;\n //         } else {\n //           return existingProd;\n //         }\n //       } else {\n //         return productData;\n //       }\n //     } catch (error) {\n //       return rejectWithValue(error.message);\n //     }\n //   }\n // );\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUU3QyxNQUFNQyxnQkFBZ0JELGtFQUFnQkEsQ0FDM0Msc0JBQ0EsQ0FBQ0U7UUFBYSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNRSxlQUFlRCxNQUFNRSxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUN2QyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtSLFlBQVlRLE1BQU07UUFFOUMsSUFBSUosY0FBYztZQUNoQixJQUFJQSxhQUFhSyxLQUFLLEdBQUdULFlBQVlVLFFBQVEsRUFBRTtnQkFDN0MsTUFBTUMsY0FBYztvQkFDbEIsR0FBR1AsWUFBWTtvQkFDZkssT0FBT0wsYUFBYUssS0FBSyxHQUFHO2dCQUM5QjtnQkFDQSxPQUFPRTtZQUNULE9BQU87Z0JBQ0wsT0FBT1A7WUFDVDtRQUNGLE9BQU87WUFDTCxPQUFPSjtRQUNUO0lBQ0YsRUFBRSxPQUFPWSxPQUFPO1FBQ2QsT0FBT1gsZ0JBQWdCVyxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUNLLE1BQU1DLG1CQUFtQmhCLGtFQUFnQkEsQ0FDOUMseUJBQ0EsQ0FBQ0U7UUFBYSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUUQ7UUFDZCxNQUFNRSxlQUFlRCxNQUFNRSxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUN2QyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtSLFlBQVlRLE1BQU07UUFFOUMsSUFBSUosY0FBYztZQUNoQixJQUNFQSxhQUFhSyxLQUFLLEdBQUdULFlBQVlTLEtBQUssSUFBSVQsWUFBWVUsUUFBUSxJQUM5RE4sYUFBYUssS0FBSyxHQUFHVCxZQUFZUyxLQUFLLEtBQUssR0FDM0M7Z0JBQ0EsTUFBTUUsY0FBYztvQkFDbEIsR0FBR1AsWUFBWTtvQkFDZkssT0FBT0wsYUFBYUssS0FBSyxHQUFHVCxZQUFZUyxLQUFLO2dCQUMvQztnQkFDQSxPQUFPRTtZQUNULE9BQU8sSUFBSVAsYUFBYUssS0FBSyxHQUFHVCxZQUFZUyxLQUFLLEtBQUssR0FBRztnQkFDdkQsT0FBT00sUUFBUUMsR0FBRyxDQUFDO1lBQ3JCLE9BQU87Z0JBQ0wsT0FBT1o7WUFDVDtRQUNGLE9BQU87WUFDTCxPQUFPSjtRQUNUO0lBQ0YsRUFBRSxPQUFPWSxPQUFPO1FBQ2QsT0FBT1gsZ0JBQWdCVyxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQSxDQUVGLGtEQUFrRDtDQUNsRCwyQkFBMkI7Q0FDM0Isc0RBQXNEO0NBQ3RELFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMsbURBQW1EO0NBQ25ELHVEQUF1RDtDQUN2RCxXQUFXO0NBQ1gsNEJBQTRCO0NBQzVCLGdGQUFnRjtDQUNoRixrQ0FBa0M7Q0FDbEMsK0JBQStCO0NBQy9CLDZEQUE2RDtDQUM3RCxlQUFlO0NBQ2YsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQiw4QkFBOEI7Q0FDOUIsVUFBVTtDQUNWLHdCQUF3QjtDQUN4QiwrQ0FBK0M7Q0FDL0MsUUFBUTtDQUNSLE1BQU07Q0FDTixLQUFLO0NBQ0wsa0RBQWtEO0NBQ2xELDJCQUEyQjtDQUMzQixzREFBc0Q7Q0FDdEQsWUFBWTtDQUNaLGtDQUFrQztDQUNsQyxtREFBbUQ7Q0FDbkQsdURBQXVEO0NBQ3ZELFdBQVc7Q0FDWCw0QkFBNEI7Q0FDNUIsZ0ZBQWdGO0NBQ2hGLGtDQUFrQztDQUNsQywrQkFBK0I7Q0FDL0IsNkRBQTZEO0NBQzdELGVBQWU7Q0FDZixnQ0FBZ0M7Q0FDaEMsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLDhCQUE4QjtDQUM5QixVQUFVO0NBQ1Ysd0JBQXdCO0NBQ3hCLCtDQUErQztDQUMvQyxRQUFRO0NBQ1IsTUFBTTtDQUNOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L21pZGRsZXdhcmVzL2NhcnQuanM/Yzc5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydEZ1bmMgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImNhcnQvYWRkVG9DYXJ0RnVuY1wiLFxuICAocHJvZHVjdERhdGEsIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZCA9IHN0YXRlLmNhcnQuY2FydC5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pdGVtTm8gPT09IHByb2R1Y3REYXRhLml0ZW1Ob1xuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2QpIHtcbiAgICAgICAgaWYgKGV4aXN0aW5nUHJvZC5jb3VudCA8IHByb2R1Y3REYXRhLnF1YW50aXR5KSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ1Byb2QsXG4gICAgICAgICAgICBjb3VudDogZXhpc3RpbmdQcm9kLmNvdW50ICsgMSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB1cGRhdGVkSXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9kO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvZHVjdERhdGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuZXhwb3J0IGNvbnN0IGFkZFNldmVyYWxUb0NhcnQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImNhcnQvYWRkU2V2ZXJhbFRvQ2FydFwiLFxuICAocHJvZHVjdERhdGEsIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZCA9IHN0YXRlLmNhcnQuY2FydC5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pdGVtTm8gPT09IHByb2R1Y3REYXRhLml0ZW1Ob1xuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2QpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV4aXN0aW5nUHJvZC5jb3VudCArIHByb2R1Y3REYXRhLmNvdW50IDw9IHByb2R1Y3REYXRhLnF1YW50aXR5ICYmXG4gICAgICAgICAgZXhpc3RpbmdQcm9kLmNvdW50ICsgcHJvZHVjdERhdGEuY291bnQgIT09IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ1Byb2QsXG4gICAgICAgICAgICBjb3VudDogZXhpc3RpbmdQcm9kLmNvdW50ICsgcHJvZHVjdERhdGEuY291bnQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdXBkYXRlZEl0ZW07XG4gICAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdQcm9kLmNvdW50ICsgcHJvZHVjdERhdGEuY291bnQgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJkZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9kO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvZHVjdERhdGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuXG4vLyBleHBvcnQgY29uc3QgZGVjcmVhc2VUb0NhcnQgPSBjcmVhdGVBc3luY1RodW5rKFxuLy8gICBcImNhcnQvZGVjcmVhc2VUb0NhcnRcIixcbi8vICAgKHByb2R1Y3REYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4vLyAgICAgICBjb25zdCBleGlzdGluZ1Byb2QgPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbi8vICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBwcm9kdWN0RGF0YS5pdGVtTm9cbi8vICAgICAgICk7XG4vLyAgICAgICBpZiAoZXhpc3RpbmdQcm9kKSB7XG4vLyAgICAgICAgIGlmIChleGlzdGluZ1Byb2QuY291bnQgKyBwcm9kdWN0RGF0YS5jb3VudCA8PSBwcm9kdWN0RGF0YS5xdWFudGl0eSkge1xuLy8gICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuLy8gICAgICAgICAgICAgLi4uZXhpc3RpbmdQcm9kLFxuLy8gICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nUHJvZC5jb3VudCArIHByb2R1Y3REYXRhLmNvdW50LFxuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBwcm9kdWN0RGF0YTtcbi8vICAgICAgIH1cbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICk7XG4vLyBleHBvcnQgY29uc3QgaW5jcmVhc2VUb0NhcnQgPSBjcmVhdGVBc3luY1RodW5rKFxuLy8gICBcImNhcnQvaW5jcmVhc2VUb0NhcnRcIixcbi8vICAgKHByb2R1Y3REYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4vLyAgICAgICBjb25zdCBleGlzdGluZ1Byb2QgPSBzdGF0ZS5jYXJ0LmNhcnQuZmluZChcbi8vICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBwcm9kdWN0RGF0YS5pdGVtTm9cbi8vICAgICAgICk7XG4vLyAgICAgICBpZiAoZXhpc3RpbmdQcm9kKSB7XG4vLyAgICAgICAgIGlmIChleGlzdGluZ1Byb2QuY291bnQgKyBwcm9kdWN0RGF0YS5jb3VudCA8PSBwcm9kdWN0RGF0YS5xdWFudGl0eSkge1xuLy8gICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xuLy8gICAgICAgICAgICAgLi4uZXhpc3RpbmdQcm9kLFxuLy8gICAgICAgICAgICAgY291bnQ6IGV4aXN0aW5nUHJvZC5jb3VudCArIHByb2R1Y3REYXRhLmNvdW50LFxuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIHJldHVybiBleGlzdGluZ1Byb2Q7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBwcm9kdWN0RGF0YTtcbi8vICAgICAgIH1cbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImFkZFRvQ2FydEZ1bmMiLCJwcm9kdWN0RGF0YSIsInJlamVjdFdpdGhWYWx1ZSIsImdldFN0YXRlIiwic3RhdGUiLCJleGlzdGluZ1Byb2QiLCJjYXJ0IiwiZmluZCIsIml0ZW0iLCJpdGVtTm8iLCJjb3VudCIsInF1YW50aXR5IiwidXBkYXRlZEl0ZW0iLCJlcnJvciIsIm1lc3NhZ2UiLCJhZGRTZXZlcmFsVG9DYXJ0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});