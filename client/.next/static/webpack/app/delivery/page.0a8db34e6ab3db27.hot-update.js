"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/delivery/page",{

/***/ "(app-pages-browser)/./src/app/ui/delivery/Delivery.jsx":
/*!******************************************!*\
  !*** ./src/app/ui/delivery/Delivery.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Delivery: function() { return /* binding */ Delivery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _delivery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery.module.scss */ \"(app-pages-browser)/./src/app/ui/delivery/delivery.module.scss\");\n/* harmony import */ var _delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deliveryType_deliveryType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deliveryType/deliveryType */ \"(app-pages-browser)/./src/app/ui/delivery/deliveryType/deliveryType.jsx\");\n/* __next_internal_client_entry_do_not_use__ Delivery auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Delivery() {\n    _s();\n    const [newPost, setNewPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [newPostDelivery, setNewPostDelivery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ukrPost, setukrPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery__title),\n                children: \"ДОСТАВКА\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery__types),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>{\n                            setNewPost(true);\n                            setNewPostDelivery(false);\n                            setukrPost(false);\n                        },\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery__type), \" \").concat(newPost && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type--active\"])),\n                        children: \"Нова Пошта\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>{\n                            setNewPost(false);\n                            setNewPostDelivery(true);\n                            setukrPost(false);\n                        },\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery__type), \" \").concat(newPostDelivery && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type--active\"])),\n                        children: \"Адресна доставка Новою поштою\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>{\n                            setNewPost(false);\n                            setNewPostDelivery(false);\n                            setukrPost(true);\n                        },\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery__type), \" \").concat(ukrPost && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type--active\"])),\n                        children: \"Укрпошта\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__types-content\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type-content\"]), \" \").concat(newPost && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type-content--active\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deliveryType_deliveryType__WEBPACK_IMPORTED_MODULE_2__.DeliveryType, {\n                            term: \"1-2 доби\",\n                            sending: \"кожен день після 16:00 окрім суботи та неділі\",\n                            payment: \"передоплата банківською картою онлайн або оплата при отриманні замовлення\",\n                            cost: \"безкоштовно - сума замовлення від 1000 грн. і при умові 100% передоплати; приблизно 70 грн.* - передоплата; приблизно 110 грн. + 2%* - оплата при отриманні замовлення.\",\n                            type: \"Доставка на відділення нової пошти\",\n                            typeHow: \"Нова пошта – оператор №1 на ринку експрес-доставки, який надає послуги швидкої, зручної та надійної доставки посилок в будь-яку точку України. Має безліч відділень по всій країні. Доставляє посилки між обласними центрами за 24 години. Актуальні терміни доставки до Вашого міста Ви можете узнати на сайті Нової Пошти.\",\n                            receiving: \"Як отримати посилку на Новій Пошті?\",\n                            receivingHow: \"Для того, щоб отримати посилку на Новій пошті Вам знадобиться паспорт або додаток на мобільному телефоні від компанії Нова пошта. При отриманні відправлення, оператору відділення, потрібно назвати номер транспортної накладної або Ваш номер телефона, або Прізвище, або відсканувати додаток. Оператор видасть Вам посилку, відкрийте її й уважно огляньте. Якщо Вас все влаштовує, то просто заберіть посилку, якщо вона вже оплачена  або, якщо у Вас відправка з післяплатою, то попередньо сплатіть її. Якщо Ви бачите якийсь брак, або щось сталось з відправленням під час транспортування, то зафіксуйте цей факт зі співробітником Нової Пошти та далі дійте за його підказками. Хочемо Вас запевнити, що ми ніколи не відправляємо чашки з відбитими ручками або одяг з дірками від ножиць, тому якщо Ви стали свідком такого, то це результат недбалого транспортування або слідство необережного відкриття посилки. Тому дуже просимо звертати увагу на те, що Вам показує співробітник Нової пошти та своєчасно фіксувати цей факт в його присутності та писати скаргу. Також звертаємо Вашу увагу на те, що відправлення зберігається на відділенні Нової пошти протягом 5 днів, а потім повертається нам, це умови зберігання, які пропонує компанія Нова Пошта для інтернет-магазинів, ми не можемо якось вплинути на них. Якщо у Вас не виходить забрати замовлення в цей термін, повідомте, будь ласка, наших менеджерів про це і вони спробують збільшити кількість днів зберігання, якщо це можливо.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type-content\"]), \" \").concat(newPostDelivery && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type-content--active\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deliveryType_deliveryType__WEBPACK_IMPORTED_MODULE_2__.DeliveryType, {\n                            term: \"1-2 доби\",\n                            sending: \"кожен день після 16:00 окрім суботи та неділі\",\n                            payment: \"передоплата\",\n                            cost: \"приблизно 120 грн.* - передоплата;\",\n                            type: \"Адресна доставка курʼєром\",\n                            typeHow: \"Якщо Ви хочете, щоб замовлення Вам було доставлено до дому або в офіс, то Ви можете скористатись цим видом доставки.\",\n                            receiving: \"Як отримати відправлення?\",\n                            receivingHow: \"Для того, щоб отримати відправлення, Вам знадобиться паспорт або мобільний додаток від копніі Нова пошта. В день доставки Вам заздалегідь зателефонує кур'єр і узгодить час, у котрий Вам буде зручно отримати відправлення. Якщо Вас не буде на місці, або у Вас змінились плани, будь ласка, попередьте про це кур'єра. Після того, як кур'єр привезе замовлення, будь ласка, уважно огляньте посилку. Якщо Вас все влаштовує, то просто заберіть посилку, якщо вона вже оплачена  або, якщо у Вас відправка з післяплатою, то попередньо сплатіть її. Якщо Ви бачите якийсь брак, або щось сталось з відправленням під час транспортування, то зафіксуйте цей факт зі співробітником Нової Пошти та далі дійте за його підказками. Хочемо Вас запевнити, що ми ніколи не відправляємо чашки з відбитими ручками або одяг з дірками від ножиць, тому якщо Ви стали свідком такого, то це результат недбалого транспортування або слідство необережного відкриття посилки. Тому дуже просимо звертати увагу на те, що Вам показує співробітник Нової пошти та своєчасно фіксувати цей факт в його присутності та писати скаргу. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type-content\"]), \" \").concat(ukrPost && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"delivery__type-content--active\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deliveryType_deliveryType__WEBPACK_IMPORTED_MODULE_2__.DeliveryType, {\n                            term: \"3-4 доби\",\n                            sending: \"кожен день після 16:00 окрім суботи та неділі\",\n                            payment: \"передоплата\",\n                            cost: \"безкоштовно - сума замовлення від 1000 грн. і при умові 100% передоплати; приблизно 50 грн.* - передоплата;\",\n                            type: \"Доставка на відділення \\xabУкрпошта\\xbb\",\n                            typeHow: \"Якщо термін доставки не має для великого значення або Ви живете там де є тільки відділення Укрпошти, або Ви просто вирішили трошки зберегти кошти на доставці - то Ви можете обрати доставку Укрпоштою.\",\n                            receiving: \"Як отримати відправлення?\",\n                            receivingHow: \"Для того, щоб отримати відправлення, Вам знадобиться паспорт або мобільний додаток від копніі Нова пошта. В день доставки Вам заздалегідь зателефонує кур'єр і узгодить час, у котрий Вам буде зручно отримати відправлення. Якщо Вас не буде на місці, або у Вас змінились плани, будь ласка, попередьте про це кур'єра. Після того, як кур'єр привезе замовлення, будь ласка, уважно огляньте посилку. Якщо Вас все влаштовує, то просто заберіть посилку, якщо вона вже оплачена  або, якщо у Вас відправка з післяплатою, то попередньо сплатіть її. Якщо Ви бачите якийсь брак, або щось сталось з відправленням під час транспортування, то зафіксуйте цей факт зі співробітником Нової Пошти та далі дійте за його підказками. Хочемо Вас запевнити, що ми ніколи не відправляємо чашки з відбитими ручками або одяг з дірками від ножиць, тому якщо Ви стали свідком такого, то це результат недбалого транспортування або слідство необережного відкриття посилки. Тому дуже просимо звертати увагу на те, що Вам показує співробітник Нової пошти та своєчасно фіксувати цей факт в його присутності та писати скаргу. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Delivery, \"cldpfACEux71v+DSo8bffSoFZaw=\");\n_c = Delivery;\nvar _c;\n$RefreshReg$(_c, \"Delivery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZGVsaXZlcnkvRGVsaXZlcnkuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNYO0FBQzBCO0FBQ3BELFNBQVNHOztJQUNkLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBV1gsdUVBQWU7OzBCQUM3Qiw4REFBQ2E7Z0JBQUdGLFdBQVdYLDhFQUFzQjswQkFBRTs7Ozs7OzBCQUN2Qyw4REFBQ2U7Z0JBQUdKLFdBQVdYLDhFQUFzQjs7a0NBQ25DLDhEQUFDaUI7d0JBQ0NDLFNBQVM7NEJBQ1BiLFdBQVc7NEJBQ1hFLG1CQUFtQjs0QkFDbkJFLFdBQVc7d0JBQ2I7d0JBQ0FFLFdBQVcsR0FDVFAsT0FEWUosNkVBQXdCLEVBQUMsS0FFdEMsT0FEQ0ksV0FBV0osd0ZBQWdDO2tDQUU5Qzs7Ozs7O2tDQUdELDhEQUFDaUI7d0JBQ0NDLFNBQVM7NEJBQ1BiLFdBQVc7NEJBQ1hFLG1CQUFtQjs0QkFDbkJFLFdBQVc7d0JBQ2I7d0JBQ0FFLFdBQVcsR0FDVEwsT0FEWU4sNkVBQXdCLEVBQUMsS0FFdEMsT0FEQ00sbUJBQW1CTix3RkFBZ0M7a0NBRXREOzs7Ozs7a0NBR0QsOERBQUNpQjt3QkFDQ0MsU0FBUzs0QkFDUGIsV0FBVzs0QkFDWEUsbUJBQW1COzRCQUNuQkUsV0FBVzt3QkFDYjt3QkFDQUUsV0FBVyxHQUNUSCxPQURZUiw2RUFBd0IsRUFBQyxLQUV0QyxPQURDUSxXQUFXUix3RkFBZ0M7a0NBRTlDOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNlO2dCQUFHSixXQUFXLEdBQXFDLE9BQWxDWCx5RkFBaUM7O2tDQUNqRCw4REFBQ2lCO3dCQUNDTixXQUFXLEdBQ1RQLE9BRFlKLHdGQUFnQyxFQUFDLEtBRTlDLE9BRENJLFdBQVdKLGdHQUF3QztrQ0FHckQsNEVBQUNFLG9FQUFZQTs0QkFDWGlCLE1BQU07NEJBQ05DLFNBQVM7NEJBQ1RDLFNBQ0U7NEJBRUZDLE1BQ0U7NEJBRUZDLE1BQU07NEJBQ05DLFNBQ0U7NEJBRUZDLFdBQVc7NEJBQ1hDLGNBQ0U7Ozs7Ozs7Ozs7O2tDQUlOLDhEQUFDVDt3QkFDQ04sV0FBVyxHQUNUTCxPQURZTix3RkFBZ0MsRUFBQyxLQUU5QyxPQURDTSxtQkFBbUJOLGdHQUF3QztrQ0FHN0QsNEVBQUNFLG9FQUFZQTs0QkFDWGlCLE1BQU07NEJBQ05DLFNBQVM7NEJBQ1RDLFNBQVM7NEJBQ1RDLE1BQU07NEJBQ05DLE1BQU07NEJBQ05DLFNBQ0U7NEJBRUZDLFdBQVc7NEJBQ1hDLGNBQ0U7Ozs7Ozs7Ozs7O2tDQUlOLDhEQUFDVDt3QkFDQ04sV0FBVyxHQUNUSCxPQURZUix3RkFBZ0MsRUFBQyxLQUU5QyxPQURDUSxXQUFXUixnR0FBd0M7a0NBR3JELDRFQUFDRSxvRUFBWUE7NEJBQ1hpQixNQUFNOzRCQUNOQyxTQUFTOzRCQUNUQyxTQUFTOzRCQUNUQyxNQUNFOzRCQUVGQyxNQUFNOzRCQUNOQyxTQUNFOzRCQUVGQyxXQUFXOzRCQUNYQyxjQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0dBcEhnQnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZGVsaXZlcnkvRGVsaXZlcnkuanN4PzY2ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZGVsaXZlcnkubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEZWxpdmVyeVR5cGUgfSBmcm9tIFwiLi9kZWxpdmVyeVR5cGUvZGVsaXZlcnlUeXBlXCI7XG5leHBvcnQgZnVuY3Rpb24gRGVsaXZlcnkoKSB7XG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbmV3UG9zdERlbGl2ZXJ5LCBzZXROZXdQb3N0RGVsaXZlcnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdWtyUG9zdCwgc2V0dWtyUG9zdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGl2ZXJ5fT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5kZWxpdmVyeV9fdGl0bGV9PtCU0J7QodCi0JDQktCa0JA8L2gzPlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRlbGl2ZXJ5X190eXBlc30+XG4gICAgICAgIDxsaVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldE5ld1Bvc3QodHJ1ZSk7XG4gICAgICAgICAgICBzZXROZXdQb3N0RGVsaXZlcnkoZmFsc2UpO1xuICAgICAgICAgICAgc2V0dWtyUG9zdChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImRlbGl2ZXJ5X190eXBlXCJdfSAke1xuICAgICAgICAgICAgbmV3UG9zdCAmJiBzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS0tYWN0aXZlXCJdXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICDQndC+0LLQsCDQn9C+0YjRgtCwXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldE5ld1Bvc3QoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TmV3UG9zdERlbGl2ZXJ5KHRydWUpO1xuICAgICAgICAgICAgc2V0dWtyUG9zdChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImRlbGl2ZXJ5X190eXBlXCJdfSAke1xuICAgICAgICAgICAgbmV3UG9zdERlbGl2ZXJ5ICYmIHN0eWxlc1tcImRlbGl2ZXJ5X190eXBlLS1hY3RpdmVcIl1cbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgINCQ0LTRgNC10YHQvdCwINC00L7RgdGC0LDQstC60LAg0J3QvtCy0L7RjiDQv9C+0YjRgtC+0Y5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0TmV3UG9zdChmYWxzZSk7XG4gICAgICAgICAgICBzZXROZXdQb3N0RGVsaXZlcnkoZmFsc2UpO1xuICAgICAgICAgICAgc2V0dWtyUG9zdCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZGVsaXZlcnlfX3R5cGVcIl19ICR7XG4gICAgICAgICAgICB1a3JQb3N0ICYmIHN0eWxlc1tcImRlbGl2ZXJ5X190eXBlLS1hY3RpdmVcIl1cbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgINCj0LrRgNC/0L7RiNGC0LBcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZXMtY29udGVudFwiXX1gfT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS1jb250ZW50XCJdfSAke1xuICAgICAgICAgICAgbmV3UG9zdCAmJiBzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS1jb250ZW50LS1hY3RpdmVcIl1cbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxEZWxpdmVyeVR5cGVcbiAgICAgICAgICAgIHRlcm09e1wiMS0yINC00L7QsdC4XCJ9XG4gICAgICAgICAgICBzZW5kaW5nPXtcItC60L7QttC10L0g0LTQtdC90Ywg0L/RltGB0LvRjyAxNjowMCDQvtC60YDRltC8INGB0YPQsdC+0YLQuCDRgtCwINC90LXQtNGW0LvRllwifVxuICAgICAgICAgICAgcGF5bWVudD17XG4gICAgICAgICAgICAgIFwi0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQsCDQsdCw0L3QutGW0LLRgdGM0LrQvtGOINC60LDRgNGC0L7RjiDQvtC90LvQsNC50L0g0LDQsdC+INC+0L/Qu9Cw0YLQsCDQv9GA0Lgg0L7RgtGA0LjQvNCw0L3QvdGWINC30LDQvNC+0LLQu9C10L3QvdGPXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvc3Q9e1xuICAgICAgICAgICAgICBcItCx0LXQt9C60L7RiNGC0L7QstC90L4gLSDRgdGD0LzQsCDQt9Cw0LzQvtCy0LvQtdC90L3RjyDQstGW0LQgMTAwMCDQs9GA0L0uINGWINC/0YDQuCDRg9C80L7QstGWIDEwMCUg0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQuDsg0L/RgNC40LHQu9C40LfQvdC+IDcwINCz0YDQvS4qIC0g0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQsDsg0L/RgNC40LHQu9C40LfQvdC+IDExMCDQs9GA0L0uICsgMiUqIC0g0L7Qv9C70LDRgtCwINC/0YDQuCDQvtGC0YDQuNC80LDQvdC90ZYg0LfQsNC80L7QstC70LXQvdC90Y8uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR5cGU9e1wi0JTQvtGB0YLQsNCy0LrQsCDQvdCwINCy0ZbQtNC00ZbQu9C10L3QvdGPINC90L7QstC+0Zcg0L/QvtGI0YLQuFwifVxuICAgICAgICAgICAgdHlwZUhvdz17XG4gICAgICAgICAgICAgIFwi0J3QvtCy0LAg0L/QvtGI0YLQsCDigJMg0L7Qv9C10YDQsNGC0L7RgCDihJYxINC90LAg0YDQuNC90LrRgyDQtdC60YHQv9GA0LXRgS3QtNC+0YHRgtCw0LLQutC4LCDRj9C60LjQuSDQvdCw0LTQsNGUINC/0L7RgdC70YPQs9C4INGI0LLQuNC00LrQvtGXLCDQt9GA0YPRh9C90L7RlyDRgtCwINC90LDQtNGW0LnQvdC+0Zcg0LTQvtGB0YLQsNCy0LrQuCDQv9C+0YHQuNC70L7QuiDQsiDQsdGD0LTRjC3Rj9C60YMg0YLQvtGH0LrRgyDQo9C60YDQsNGX0L3QuC4g0JzQsNGUINCx0LXQt9C70ZbRhyDQstGW0LTQtNGW0LvQtdC90Ywg0L/QviDQstGB0ZbQuSDQutGA0LDRl9C90ZYuINCU0L7RgdGC0LDQstC70Y/RlCDQv9C+0YHQuNC70LrQuCDQvNGW0LYg0L7QsdC70LDRgdC90LjQvNC4INGG0LXQvdGC0YDQsNC80Lgg0LfQsCAyNCDQs9C+0LTQuNC90LguINCQ0LrRgtGD0LDQu9GM0L3RliDRgtC10YDQvNGW0L3QuCDQtNC+0YHRgtCw0LLQutC4INC00L4g0JLQsNGI0L7Qs9C+INC80ZbRgdGC0LAg0JLQuCDQvNC+0LbQtdGC0LUg0YPQt9C90LDRgtC4INC90LAg0YHQsNC50YLRliDQndC+0LLQvtGXINCf0L7RiNGC0LguXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY2VpdmluZz17XCLQr9C6INC+0YLRgNC40LzQsNGC0Lgg0L/QvtGB0LjQu9C60YMg0L3QsCDQndC+0LLRltC5INCf0L7RiNGC0ZY/XCJ9XG4gICAgICAgICAgICByZWNlaXZpbmdIb3c9e1xuICAgICAgICAgICAgICBcItCU0LvRjyDRgtC+0LPQviwg0YnQvtCxINC+0YLRgNC40LzQsNGC0Lgg0L/QvtGB0LjQu9C60YMg0L3QsCDQndC+0LLRltC5INC/0L7RiNGC0ZYg0JLQsNC8INC30L3QsNC00L7QsdC40YLRjNGB0Y8g0L/QsNGB0L/QvtGA0YIg0LDQsdC+INC00L7QtNCw0YLQvtC6INC90LAg0LzQvtCx0ZbQu9GM0L3QvtC80YMg0YLQtdC70LXRhNC+0L3RliDQstGW0LQg0LrQvtC80L/QsNC90ZbRlyDQndC+0LLQsCDQv9C+0YjRgtCwLiDQn9GA0Lgg0L7RgtGA0LjQvNCw0L3QvdGWINCy0ZbQtNC/0YDQsNCy0LvQtdC90L3Rjywg0L7Qv9C10YDQsNGC0L7RgNGDINCy0ZbQtNC00ZbQu9C10L3QvdGPLCDQv9C+0YLRgNGW0LHQvdC+INC90LDQt9Cy0LDRgtC4INC90L7QvNC10YAg0YLRgNCw0L3RgdC/0L7RgNGC0L3QvtGXINC90LDQutC70LDQtNC90L7RlyDQsNCx0L4g0JLQsNGIINC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCwg0LDQsdC+INCf0YDRltC30LLQuNGJ0LUsINCw0LHQviDQstGW0LTRgdC60LDQvdGD0LLQsNGC0Lgg0LTQvtC00LDRgtC+0LouINCe0L/QtdGA0LDRgtC+0YAg0LLQuNC00LDRgdGC0Ywg0JLQsNC8INC/0L7RgdC40LvQutGDLCDQstGW0LTQutGA0LjQudGC0LUg0ZfRlyDQuSDRg9Cy0LDQttC90L4g0L7Qs9C70Y/QvdGM0YLQtS4g0K/QutGJ0L4g0JLQsNGBINCy0YHQtSDQstC70LDRiNGC0L7QstGD0ZQsINGC0L4g0L/RgNC+0YHRgtC+INC30LDQsdC10YDRltGC0Ywg0L/QvtGB0LjQu9C60YMsINGP0LrRidC+INCy0L7QvdCwINCy0LbQtSDQvtC/0LvQsNGH0LXQvdCwICDQsNCx0L4sINGP0LrRidC+INGDINCS0LDRgSDQstGW0LTQv9GA0LDQstC60LAg0Lcg0L/RltGB0LvRj9C/0LvQsNGC0L7Rjiwg0YLQviDQv9C+0L/QtdGA0LXQtNC90YzQviDRgdC/0LvQsNGC0ZbRgtGMINGX0ZcuINCv0LrRidC+INCS0Lgg0LHQsNGH0LjRgtC1INGP0LrQuNC50YHRjCDQsdGA0LDQuiwg0LDQsdC+INGJ0L7RgdGMINGB0YLQsNC70L7RgdGMINC3INCy0ZbQtNC/0YDQsNCy0LvQtdC90L3Rj9C8INC/0ZbQtCDRh9Cw0YEg0YLRgNCw0L3RgdC/0L7RgNGC0YPQstCw0L3QvdGPLCDRgtC+INC30LDRhNGW0LrRgdGD0LnRgtC1INGG0LXQuSDRhNCw0LrRgiDQt9GWINGB0L/RltCy0YDQvtCx0ZbRgtC90LjQutC+0Lwg0J3QvtCy0L7RlyDQn9C+0YjRgtC4INGC0LAg0LTQsNC70ZYg0LTRltC50YLQtSDQt9CwINC50L7Qs9C+INC/0ZbQtNC60LDQt9C60LDQvNC4LiDQpdC+0YfQtdC80L4g0JLQsNGBINC30LDQv9C10LLQvdC40YLQuCwg0YnQviDQvNC4INC90ZbQutC+0LvQuCDQvdC1INCy0ZbQtNC/0YDQsNCy0LvRj9GU0LzQviDRh9Cw0YjQutC4INC3INCy0ZbQtNCx0LjRgtC40LzQuCDRgNGD0YfQutCw0LzQuCDQsNCx0L4g0L7QtNGP0LMg0Lcg0LTRltGA0LrQsNC80Lgg0LLRltC0INC90L7QttC40YbRjCwg0YLQvtC80YMg0Y/QutGJ0L4g0JLQuCDRgdGC0LDQu9C4INGB0LLRltC00LrQvtC8INGC0LDQutC+0LPQviwg0YLQviDRhtC1INGA0LXQt9GD0LvRjNGC0LDRgiDQvdC10LTQsdCw0LvQvtCz0L4g0YLRgNCw0L3RgdC/0L7RgNGC0YPQstCw0L3QvdGPINCw0LHQviDRgdC70ZbQtNGB0YLQstC+INC90LXQvtCx0LXRgNC10LbQvdC+0LPQviDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtGB0LjQu9C60LguINCi0L7QvNGDINC00YPQttC1INC/0YDQvtGB0LjQvNC+INC30LLQtdGA0YLQsNGC0Lgg0YPQstCw0LPRgyDQvdCwINGC0LUsINGJ0L4g0JLQsNC8INC/0L7QutCw0LfRg9GUINGB0L/RltCy0YDQvtCx0ZbRgtC90LjQuiDQndC+0LLQvtGXINC/0L7RiNGC0Lgg0YLQsCDRgdCy0L7RlNGH0LDRgdC90L4g0YTRltC60YHRg9Cy0LDRgtC4INGG0LXQuSDRhNCw0LrRgiDQsiDQudC+0LPQviDQv9GA0LjRgdGD0YLQvdC+0YHRgtGWINGC0LAg0L/QuNGB0LDRgtC4INGB0LrQsNGA0LPRgy4g0KLQsNC60L7QtiDQt9Cy0LXRgNGC0LDRlNC80L4g0JLQsNGI0YMg0YPQstCw0LPRgyDQvdCwINGC0LUsINGJ0L4g0LLRltC00L/RgNCw0LLQu9C10L3QvdGPINC30LHQtdGA0ZbQs9Cw0ZTRgtGM0YHRjyDQvdCwINCy0ZbQtNC00ZbQu9C10L3QvdGWINCd0L7QstC+0Zcg0L/QvtGI0YLQuCDQv9GA0L7RgtGP0LPQvtC8IDUg0LTQvdGW0LIsINCwINC/0L7RgtGW0Lwg0L/QvtCy0LXRgNGC0LDRlNGC0YzRgdGPINC90LDQvCwg0YbQtSDRg9C80L7QstC4INC30LHQtdGA0ZbQs9Cw0L3QvdGPLCDRj9C60ZYg0L/RgNC+0L/QvtC90YPRlCDQutC+0LzQv9Cw0L3RltGPINCd0L7QstCwINCf0L7RiNGC0LAg0LTQu9GPINGW0L3RgtC10YDQvdC10YIt0LzQsNCz0LDQt9C40L3RltCyLCDQvNC4INC90LUg0LzQvtC20LXQvNC+INGP0LrQvtGB0Ywg0LLQv9C70LjQvdGD0YLQuCDQvdCwINC90LjRhS4g0K/QutGJ0L4g0YMg0JLQsNGBINC90LUg0LLQuNGF0L7QtNC40YLRjCDQt9Cw0LHRgNCw0YLQuCDQt9Cw0LzQvtCy0LvQtdC90L3RjyDQsiDRhtC10Lkg0YLQtdGA0LzRltC9LCDQv9C+0LLRltC00L7QvNGC0LUsINCx0YPQtNGMINC70LDRgdC60LAsINC90LDRiNC40YUg0LzQtdC90LXQtNC20LXRgNGW0LIg0L/RgNC+INGG0LUg0ZYg0LLQvtC90Lgg0YHQv9GA0L7QsdGD0Y7RgtGMINC30LHRltC70YzRiNC40YLQuCDQutGW0LvRjNC60ZbRgdGC0Ywg0LTQvdGW0LIg0LfQsdC10YDRltCz0LDQvdC90Y8sINGP0LrRidC+INGG0LUg0LzQvtC20LvQuNCy0L4uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImRlbGl2ZXJ5X190eXBlLWNvbnRlbnRcIl19ICR7XG4gICAgICAgICAgICBuZXdQb3N0RGVsaXZlcnkgJiYgc3R5bGVzW1wiZGVsaXZlcnlfX3R5cGUtY29udGVudC0tYWN0aXZlXCJdXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8RGVsaXZlcnlUeXBlXG4gICAgICAgICAgICB0ZXJtPXtcIjEtMiDQtNC+0LHQuFwifVxuICAgICAgICAgICAgc2VuZGluZz17XCLQutC+0LbQtdC9INC00LXQvdGMINC/0ZbRgdC70Y8gMTY6MDAg0L7QutGA0ZbQvCDRgdGD0LHQvtGC0Lgg0YLQsCDQvdC10LTRltC70ZZcIn1cbiAgICAgICAgICAgIHBheW1lbnQ9e1wi0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQsFwifVxuICAgICAgICAgICAgY29zdD17XCLQv9GA0LjQsdC70LjQt9C90L4gMTIwINCz0YDQvS4qIC0g0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQsDtcIn1cbiAgICAgICAgICAgIHR5cGU9e1wi0JDQtNGA0LXRgdC90LAg0LTQvtGB0YLQsNCy0LrQsCDQutGD0YDKvNGU0YDQvtC8XCJ9XG4gICAgICAgICAgICB0eXBlSG93PXtcbiAgICAgICAgICAgICAgXCLQr9C60YnQviDQktC4INGF0L7Rh9C10YLQtSwg0YnQvtCxINC30LDQvNC+0LLQu9C10L3QvdGPINCS0LDQvCDQsdGD0LvQviDQtNC+0YHRgtCw0LLQu9C10L3QviDQtNC+INC00L7QvNGDINCw0LHQviDQsiDQvtGE0ZbRgSwg0YLQviDQktC4INC80L7QttC10YLQtSDRgdC60L7RgNC40YHRgtCw0YLQuNGB0Ywg0YbQuNC8INCy0LjQtNC+0Lwg0LTQvtGB0YLQsNCy0LrQuC5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjZWl2aW5nPXtcItCv0Log0L7RgtGA0LjQvNCw0YLQuCDQstGW0LTQv9GA0LDQstC70LXQvdC90Y8/XCJ9XG4gICAgICAgICAgICByZWNlaXZpbmdIb3c9e1xuICAgICAgICAgICAgICBcItCU0LvRjyDRgtC+0LPQviwg0YnQvtCxINC+0YLRgNC40LzQsNGC0Lgg0LLRltC00L/RgNCw0LLQu9C10L3QvdGPLCDQktCw0Lwg0LfQvdCw0LTQvtCx0LjRgtGM0YHRjyDQv9Cw0YHQv9C+0YDRgiDQsNCx0L4g0LzQvtCx0ZbQu9GM0L3QuNC5INC00L7QtNCw0YLQvtC6INCy0ZbQtCDQutC+0L/QvdGW0ZYg0J3QvtCy0LAg0L/QvtGI0YLQsC4g0JIg0LTQtdC90Ywg0LTQvtGB0YLQsNCy0LrQuCDQktCw0Lwg0LfQsNC30LTQsNC70LXQs9GW0LTRjCDQt9Cw0YLQtdC70LXRhNC+0L3Rg9GUINC60YPRgCfRlNGAINGWINGD0LfQs9C+0LTQuNGC0Ywg0YfQsNGBLCDRgyDQutC+0YLRgNC40Lkg0JLQsNC8INCx0YPQtNC1INC30YDRg9GH0L3QviDQvtGC0YDQuNC80LDRgtC4INCy0ZbQtNC/0YDQsNCy0LvQtdC90L3Rjy4g0K/QutGJ0L4g0JLQsNGBINC90LUg0LHRg9C00LUg0L3QsCDQvNGW0YHRhtGWLCDQsNCx0L4g0YMg0JLQsNGBINC30LzRltC90LjQu9C40YHRjCDQv9C70LDQvdC4LCDQsdGD0LTRjCDQu9Cw0YHQutCwLCDQv9C+0L/QtdGA0LXQtNGM0YLQtSDQv9GA0L4g0YbQtSDQutGD0YAn0ZTRgNCwLiDQn9GW0YHQu9GPINGC0L7Qs9C+LCDRj9C6INC60YPRgCfRlNGAINC/0YDQuNCy0LXQt9C1INC30LDQvNC+0LLQu9C10L3QvdGPLCDQsdGD0LTRjCDQu9Cw0YHQutCwLCDRg9Cy0LDQttC90L4g0L7Qs9C70Y/QvdGM0YLQtSDQv9C+0YHQuNC70LrRgy4g0K/QutGJ0L4g0JLQsNGBINCy0YHQtSDQstC70LDRiNGC0L7QstGD0ZQsINGC0L4g0L/RgNC+0YHRgtC+INC30LDQsdC10YDRltGC0Ywg0L/QvtGB0LjQu9C60YMsINGP0LrRidC+INCy0L7QvdCwINCy0LbQtSDQvtC/0LvQsNGH0LXQvdCwICDQsNCx0L4sINGP0LrRidC+INGDINCS0LDRgSDQstGW0LTQv9GA0LDQstC60LAg0Lcg0L/RltGB0LvRj9C/0LvQsNGC0L7Rjiwg0YLQviDQv9C+0L/QtdGA0LXQtNC90YzQviDRgdC/0LvQsNGC0ZbRgtGMINGX0ZcuINCv0LrRidC+INCS0Lgg0LHQsNGH0LjRgtC1INGP0LrQuNC50YHRjCDQsdGA0LDQuiwg0LDQsdC+INGJ0L7RgdGMINGB0YLQsNC70L7RgdGMINC3INCy0ZbQtNC/0YDQsNCy0LvQtdC90L3Rj9C8INC/0ZbQtCDRh9Cw0YEg0YLRgNCw0L3RgdC/0L7RgNGC0YPQstCw0L3QvdGPLCDRgtC+INC30LDRhNGW0LrRgdGD0LnRgtC1INGG0LXQuSDRhNCw0LrRgiDQt9GWINGB0L/RltCy0YDQvtCx0ZbRgtC90LjQutC+0Lwg0J3QvtCy0L7RlyDQn9C+0YjRgtC4INGC0LAg0LTQsNC70ZYg0LTRltC50YLQtSDQt9CwINC50L7Qs9C+INC/0ZbQtNC60LDQt9C60LDQvNC4LiDQpdC+0YfQtdC80L4g0JLQsNGBINC30LDQv9C10LLQvdC40YLQuCwg0YnQviDQvNC4INC90ZbQutC+0LvQuCDQvdC1INCy0ZbQtNC/0YDQsNCy0LvRj9GU0LzQviDRh9Cw0YjQutC4INC3INCy0ZbQtNCx0LjRgtC40LzQuCDRgNGD0YfQutCw0LzQuCDQsNCx0L4g0L7QtNGP0LMg0Lcg0LTRltGA0LrQsNC80Lgg0LLRltC0INC90L7QttC40YbRjCwg0YLQvtC80YMg0Y/QutGJ0L4g0JLQuCDRgdGC0LDQu9C4INGB0LLRltC00LrQvtC8INGC0LDQutC+0LPQviwg0YLQviDRhtC1INGA0LXQt9GD0LvRjNGC0LDRgiDQvdC10LTQsdCw0LvQvtCz0L4g0YLRgNCw0L3RgdC/0L7RgNGC0YPQstCw0L3QvdGPINCw0LHQviDRgdC70ZbQtNGB0YLQstC+INC90LXQvtCx0LXRgNC10LbQvdC+0LPQviDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtGB0LjQu9C60LguINCi0L7QvNGDINC00YPQttC1INC/0YDQvtGB0LjQvNC+INC30LLQtdGA0YLQsNGC0Lgg0YPQstCw0LPRgyDQvdCwINGC0LUsINGJ0L4g0JLQsNC8INC/0L7QutCw0LfRg9GUINGB0L/RltCy0YDQvtCx0ZbRgtC90LjQuiDQndC+0LLQvtGXINC/0L7RiNGC0Lgg0YLQsCDRgdCy0L7RlNGH0LDRgdC90L4g0YTRltC60YHRg9Cy0LDRgtC4INGG0LXQuSDRhNCw0LrRgiDQsiDQudC+0LPQviDQv9GA0LjRgdGD0YLQvdC+0YHRgtGWINGC0LAg0L/QuNGB0LDRgtC4INGB0LrQsNGA0LPRgy4gXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImRlbGl2ZXJ5X190eXBlLWNvbnRlbnRcIl19ICR7XG4gICAgICAgICAgICB1a3JQb3N0ICYmIHN0eWxlc1tcImRlbGl2ZXJ5X190eXBlLWNvbnRlbnQtLWFjdGl2ZVwiXVxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPERlbGl2ZXJ5VHlwZVxuICAgICAgICAgICAgdGVybT17XCIzLTQg0LTQvtCx0LhcIn1cbiAgICAgICAgICAgIHNlbmRpbmc9e1wi0LrQvtC20LXQvSDQtNC10L3RjCDQv9GW0YHQu9GPIDE2OjAwINC+0LrRgNGW0Lwg0YHRg9Cx0L7RgtC4INGC0LAg0L3QtdC00ZbQu9GWXCJ9XG4gICAgICAgICAgICBwYXltZW50PXtcItC/0LXRgNC10LTQvtC/0LvQsNGC0LBcIn1cbiAgICAgICAgICAgIGNvc3Q9e1xuICAgICAgICAgICAgICBcItCx0LXQt9C60L7RiNGC0L7QstC90L4gLSDRgdGD0LzQsCDQt9Cw0LzQvtCy0LvQtdC90L3RjyDQstGW0LQgMTAwMCDQs9GA0L0uINGWINC/0YDQuCDRg9C80L7QstGWIDEwMCUg0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQuDsg0L/RgNC40LHQu9C40LfQvdC+IDUwINCz0YDQvS4qIC0g0L/QtdGA0LXQtNC+0L/Qu9Cw0YLQsDtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHlwZT17XCLQlNC+0YHRgtCw0LLQutCwINC90LAg0LLRltC00LTRltC70LXQvdC90Y8gwqvQo9C60YDQv9C+0YjRgtCwwrtcIn1cbiAgICAgICAgICAgIHR5cGVIb3c9e1xuICAgICAgICAgICAgICBcItCv0LrRidC+INGC0LXRgNC80ZbQvSDQtNC+0YHRgtCw0LLQutC4INC90LUg0LzQsNGUINC00LvRjyDQstC10LvQuNC60L7Qs9C+INC30L3QsNGH0LXQvdC90Y8g0LDQsdC+INCS0Lgg0LbQuNCy0LXRgtC1INGC0LDQvCDQtNC1INGUINGC0ZbQu9GM0LrQuCDQstGW0LTQtNGW0LvQtdC90L3RjyDQo9C60YDQv9C+0YjRgtC4LCDQsNCx0L4g0JLQuCDQv9GA0L7RgdGC0L4g0LLQuNGA0ZbRiNC40LvQuCDRgtGA0L7RiNC60Lgg0LfQsdC10YDQtdCz0YLQuCDQutC+0YjRgtC4INC90LAg0LTQvtGB0YLQsNCy0YbRliAtINGC0L4g0JLQuCDQvNC+0LbQtdGC0LUg0L7QsdGA0LDRgtC4INC00L7RgdGC0LDQstC60YMg0KPQutGA0L/QvtGI0YLQvtGOLlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWNlaXZpbmc9e1wi0K/QuiDQvtGC0YDQuNC80LDRgtC4INCy0ZbQtNC/0YDQsNCy0LvQtdC90L3Rjz9cIn1cbiAgICAgICAgICAgIHJlY2VpdmluZ0hvdz17XG4gICAgICAgICAgICAgIFwi0JTQu9GPINGC0L7Qs9C+LCDRidC+0LEg0L7RgtGA0LjQvNCw0YLQuCDQstGW0LTQv9GA0LDQstC70LXQvdC90Y8sINCS0LDQvCDQt9C90LDQtNC+0LHQuNGC0YzRgdGPINC/0LDRgdC/0L7RgNGCINCw0LHQviDQvNC+0LHRltC70YzQvdC40Lkg0LTQvtC00LDRgtC+0Log0LLRltC0INC60L7Qv9C90ZbRliDQndC+0LLQsCDQv9C+0YjRgtCwLiDQkiDQtNC10L3RjCDQtNC+0YHRgtCw0LLQutC4INCS0LDQvCDQt9Cw0LfQtNCw0LvQtdCz0ZbQtNGMINC30LDRgtC10LvQtdGE0L7QvdGD0ZQg0LrRg9GAJ9GU0YAg0ZYg0YPQt9Cz0L7QtNC40YLRjCDRh9Cw0YEsINGDINC60L7RgtGA0LjQuSDQktCw0Lwg0LHRg9C00LUg0LfRgNGD0YfQvdC+INC+0YLRgNC40LzQsNGC0Lgg0LLRltC00L/RgNCw0LLQu9C10L3QvdGPLiDQr9C60YnQviDQktCw0YEg0L3QtSDQsdGD0LTQtSDQvdCwINC80ZbRgdGG0ZYsINCw0LHQviDRgyDQktCw0YEg0LfQvNGW0L3QuNC70LjRgdGMINC/0LvQsNC90LgsINCx0YPQtNGMINC70LDRgdC60LAsINC/0L7Qv9C10YDQtdC00YzRgtC1INC/0YDQviDRhtC1INC60YPRgCfRlNGA0LAuINCf0ZbRgdC70Y8g0YLQvtCz0L4sINGP0Log0LrRg9GAJ9GU0YAg0L/RgNC40LLQtdC30LUg0LfQsNC80L7QstC70LXQvdC90Y8sINCx0YPQtNGMINC70LDRgdC60LAsINGD0LLQsNC20L3QviDQvtCz0LvRj9C90YzRgtC1INC/0L7RgdC40LvQutGDLiDQr9C60YnQviDQktCw0YEg0LLRgdC1INCy0LvQsNGI0YLQvtCy0YPRlCwg0YLQviDQv9GA0L7RgdGC0L4g0LfQsNCx0LXRgNGW0YLRjCDQv9C+0YHQuNC70LrRgywg0Y/QutGJ0L4g0LLQvtC90LAg0LLQttC1INC+0L/Qu9Cw0YfQtdC90LAgINCw0LHQviwg0Y/QutGJ0L4g0YMg0JLQsNGBINCy0ZbQtNC/0YDQsNCy0LrQsCDQtyDQv9GW0YHQu9GP0L/Qu9Cw0YLQvtGOLCDRgtC+INC/0L7Qv9C10YDQtdC00L3RjNC+INGB0L/Qu9Cw0YLRltGC0Ywg0ZfRly4g0K/QutGJ0L4g0JLQuCDQsdCw0YfQuNGC0LUg0Y/QutC40LnRgdGMINCx0YDQsNC6LCDQsNCx0L4g0YnQvtGB0Ywg0YHRgtCw0LvQvtGB0Ywg0Lcg0LLRltC00L/RgNCw0LLQu9C10L3QvdGP0Lwg0L/RltC0INGH0LDRgSDRgtGA0LDQvdGB0L/QvtGA0YLRg9Cy0LDQvdC90Y8sINGC0L4g0LfQsNGE0ZbQutGB0YPQudGC0LUg0YbQtdC5INGE0LDQutGCINC30ZYg0YHQv9GW0LLRgNC+0LHRltGC0L3QuNC60L7QvCDQndC+0LLQvtGXINCf0L7RiNGC0Lgg0YLQsCDQtNCw0LvRliDQtNGW0LnRgtC1INC30LAg0LnQvtCz0L4g0L/RltC00LrQsNC30LrQsNC80LguINCl0L7Rh9C10LzQviDQktCw0YEg0LfQsNC/0LXQstC90LjRgtC4LCDRidC+INC80Lgg0L3RltC60L7Qu9C4INC90LUg0LLRltC00L/RgNCw0LLQu9GP0ZTQvNC+INGH0LDRiNC60Lgg0Lcg0LLRltC00LHQuNGC0LjQvNC4INGA0YPRh9C60LDQvNC4INCw0LHQviDQvtC00Y/QsyDQtyDQtNGW0YDQutCw0LzQuCDQstGW0LQg0L3QvtC20LjRhtGMLCDRgtC+0LzRgyDRj9C60YnQviDQktC4INGB0YLQsNC70Lgg0YHQstGW0LTQutC+0Lwg0YLQsNC60L7Qs9C+LCDRgtC+INGG0LUg0YDQtdC30YPQu9GM0YLQsNGCINC90LXQtNCx0LDQu9C+0LPQviDRgtGA0LDQvdGB0L/QvtGA0YLRg9Cy0LDQvdC90Y8g0LDQsdC+INGB0LvRltC00YHRgtCy0L4g0L3QtdC+0LHQtdGA0LXQttC90L7Qs9C+INCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0YHQuNC70LrQuC4g0KLQvtC80YMg0LTRg9C20LUg0L/RgNC+0YHQuNC80L4g0LfQstC10YDRgtCw0YLQuCDRg9Cy0LDQs9GDINC90LAg0YLQtSwg0YnQviDQktCw0Lwg0L/QvtC60LDQt9GD0ZQg0YHQv9GW0LLRgNC+0LHRltGC0L3QuNC6INCd0L7QstC+0Zcg0L/QvtGI0YLQuCDRgtCwINGB0LLQvtGU0YfQsNGB0L3QviDRhNGW0LrRgdGD0LLQsNGC0Lgg0YbQtdC5INGE0LDQutGCINCyINC50L7Qs9C+INC/0YDQuNGB0YPRgtC90L7RgdGC0ZYg0YLQsCDQv9C40YHQsNGC0Lgg0YHQutCw0YDQs9GDLiBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiRGVsaXZlcnlUeXBlIiwiRGVsaXZlcnkiLCJuZXdQb3N0Iiwic2V0TmV3UG9zdCIsIm5ld1Bvc3REZWxpdmVyeSIsInNldE5ld1Bvc3REZWxpdmVyeSIsInVrclBvc3QiLCJzZXR1a3JQb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGVsaXZlcnkiLCJoMyIsImRlbGl2ZXJ5X190aXRsZSIsInVsIiwiZGVsaXZlcnlfX3R5cGVzIiwibGkiLCJvbkNsaWNrIiwidGVybSIsInNlbmRpbmciLCJwYXltZW50IiwiY29zdCIsInR5cGUiLCJ0eXBlSG93IiwicmVjZWl2aW5nIiwicmVjZWl2aW5nSG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/delivery/Delivery.jsx\n"));

/***/ })

});