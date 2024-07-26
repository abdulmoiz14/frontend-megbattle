"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"(app-pages-browser)/./src/app/components/Layout.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* harmony import */ var _public_images_Monkey1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/Monkey1.png */ \"(app-pages-browser)/./public/images/Monkey1.png\");\n/* harmony import */ var _public_images_high_voltage_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/high-voltage.png */ \"(app-pages-browser)/./public/images/high-voltage.png\");\n/* harmony import */ var _provider_telegram_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider/telegram-provider */ \"(app-pages-browser)/./src/app/provider/telegram-provider.tsx\");\n/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apis/user */ \"(app-pages-browser)/./src/app/apis/user.ts\");\n/* harmony import */ var _store_useUserStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/useUserStore */ \"(app-pages-browser)/./src/app/store/useUserStore.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { user, webApp } = (0,_provider_telegram_provider__WEBPACK_IMPORTED_MODULE_8__.telegramClient)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const [points, setPoints] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(109391);\n    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [energy, setEnergy] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(4000);\n    const [clicks, setClicks] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const setUser = (0,_store_useUserStore__WEBPACK_IMPORTED_MODULE_10__.useUserStore)((state)=>state.setUser);\n    const userData = (0,_store_useUserStore__WEBPACK_IMPORTED_MODULE_10__.useUserStore)((state)=>state.user);\n    const pointsToAdd = 10;\n    const energyToReduce = 10;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const handleClick = (e)=>{\n        if (energy - energyToReduce < 0) {\n            return;\n        }\n        const rect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - rect.left;\n        const y = e.clientY - rect.top;\n        setPoints(points + pointsToAdd);\n        setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);\n        setClicks([\n            ...clicks,\n            {\n                id: Date.now(),\n                x,\n                y\n            }\n        ]);\n    };\n    const handleAnimationEnd = (id)=>{\n        setClicks((prevClicks)=>prevClicks.filter((click)=>click.id !== id));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const registerUser = async ()=>{\n            if (user) {\n                try {\n                    const response = await (0,_apis_user__WEBPACK_IMPORTED_MODULE_9__.registerUserApi)(user.id.toString(), user.first_name, user.last_name, user.language_code);\n                    setMobile(response);\n                    console.log(\"User registered successfully:\", response);\n                    setUser(user);\n                    setLoading(false);\n                } catch (error) {\n                    setMobile(error);\n                    console.error(\"Error registering user:\", error);\n                    if (error.response) {\n                        console.error(\"Error response data:\", error.response.data);\n                    }\n                    setError(\"User not found or registration failed\");\n                    setLoading(false);\n                }\n            } else {\n                setError(\"User data not available\");\n                setLoading(false);\n            }\n        };\n        const interval = setInterval(()=>{\n            if (user) {\n                clearInterval(interval);\n                registerUser();\n            }\n        }, 100);\n        return ()=>clearInterval(interval);\n    }, [\n        user,\n        setUser\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setEnergy((prevEnergy)=>Math.min(prevEnergy + 1, 4000));\n        }, 100);\n        return ()=>clearInterval(interval);\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            energy: energy,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl font-bold\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            energy: energy,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(mobile)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        energy: energy,\n        children: [\n            pathname === \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                points: points\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 117,\n                columnNumber: 28\n            }, this),\n            pathname === \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mt-28 flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-full text-center text-xl font-bold\",\n                        children: userData === null || userData === void 0 ? void 0 : userData.first_name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-4\",\n                        onClick: handleClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: _public_images_Monkey1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                width: 256,\n                                height: 256,\n                                alt: \"Monkey\",\n                                className: \"drop-shadow-2xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this),\n                            clicks.map((click)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute text-5xl font-bold opacity-0 float\",\n                                    style: {\n                                        top: \"\".concat(click.y - 42, \"px\"),\n                                        left: \"\".concat(click.x - 28, \"px\")\n                                    },\n                                    onAnimationEnd: ()=>handleAnimationEnd(click.id),\n                                    children: \"+10\"\n                                }, click.id, false, {\n                                    fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex pl-4 mb-28 w-full justify-start items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: _public_images_high_voltage_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                        width: 44,\n                        height: 44,\n                        alt: \"High Voltage\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-2 text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white text-2xl font-bold block\",\n                                children: energy\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white text-large opacity-75\",\n                                children: \"/ 4000\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hamza\\\\OneDrive\\\\Documents\\\\MegBattle\\\\meg-battle\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"oTnX1A/M8qEjSccsPF0SNaNwDTY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        _store_useUserStore__WEBPACK_IMPORTED_MODULE_10__.useUserStore,\n        _store_useUserStore__WEBPACK_IMPORTED_MODULE_10__.useUserStore\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ1U7QUFDSztBQUNGO0FBQ0g7QUFDWTtBQUNVO0FBQ0Q7QUFDaEI7QUFDTTtBQUVyQyxTQUFTVzs7SUFDdEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHTCwyRUFBY0E7SUFDdkMsTUFBTU0sV0FBV1osNERBQVdBO0lBQzVCLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDaUIsUUFBUUMsVUFBVSxHQUFHbEIsK0NBQVFBLENBQ2xDLEVBQUU7SUFFSixNQUFNbUIsVUFBVWIsa0VBQVlBLENBQUMsQ0FBQ2MsUUFBVUEsTUFBTUQsT0FBTztJQUNyRCxNQUFNRSxXQUFXZixrRUFBWUEsQ0FBQyxDQUFDYyxRQUFVQSxNQUFNWixJQUFJO0lBQ25ELE1BQU1jLGNBQWM7SUFDcEIsTUFBTUMsaUJBQWlCO0lBRXZCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHekIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDMEIsT0FBT0MsU0FBUyxHQUFHM0IsK0NBQVFBLENBQWdCO0lBRWxELE1BQU00QixjQUFjLENBQUNDO1FBQ25CLElBQUlkLFNBQVNRLGlCQUFpQixHQUFHO1lBQy9CO1FBQ0Y7UUFDQSxNQUFNTyxPQUFPRCxFQUFFRSxhQUFhLENBQUNDLHFCQUFxQjtRQUNsRCxNQUFNQyxJQUFJSixFQUFFSyxPQUFPLEdBQUdKLEtBQUtLLElBQUk7UUFDL0IsTUFBTUMsSUFBSVAsRUFBRVEsT0FBTyxHQUFHUCxLQUFLUSxHQUFHO1FBRTlCMUIsVUFBVUQsU0FBU1c7UUFDbkJOLFVBQVVELFNBQVNRLGlCQUFp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TUFBTU4sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZXZCLDhEQUFDc0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEUsa0RBQUtBO3dCQUFDd0UsS0FBS2pFLHVFQUFXQTt3QkFBRWtFLE9BQU87d0JBQUlDLFFBQVE7d0JBQUlDLEtBQUk7Ozs7OztrQ0FDcEQsOERBQUNWO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2E7Z0NBQUtiLFdBQVU7MENBQXVDL0M7Ozs7OzswQ0FDdkQsOERBQUM0RDtnQ0FBS2IsV0FBVTswQ0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RDtHQWhKd0J2RDs7UUFFTFQsd0RBQVdBO1FBT1pRLDhEQUFZQTtRQUNYQSw4REFBWUE7OztLQVZQQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IE1vbmtleSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL01vbmtleTEucG5nJztcbmltcG9ydCBoaWdoVm9sdGFnZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2hpZ2gtdm9sdGFnZS5wbmcnO1xuaW1wb3J0IHsgdGVsZWdyYW1DbGllbnQgfSBmcm9tICcuL3Byb3ZpZGVyL3RlbGVncmFtLXByb3ZpZGVyJztcbmltcG9ydCB7IHJlZ2lzdGVyVXNlckFwaSB9IGZyb20gJy4vYXBpcy91c2VyJztcbmltcG9ydCB7IHVzZVVzZXJTdG9yZSB9IGZyb20gJy4vc3RvcmUvdXNlVXNlclN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB1c2VyLCB3ZWJBcHAgfSA9IHRlbGVncmFtQ2xpZW50KCk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKDEwOTM5MSk7XG4gIGNvbnN0IFttb2JpbGUsIHNldE1vYmlsZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtlbmVyZ3ksIHNldEVuZXJneV0gPSB1c2VTdGF0ZSg0MDAwKTtcbiAgY29uc3QgW2NsaWNrcywgc2V0Q2xpY2tzXSA9IHVzZVN0YXRlPHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdPihcbiAgICBbXVxuICApO1xuICBjb25zdCBzZXRVc2VyID0gdXNlVXNlclN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuc2V0VXNlcik7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlVXNlclN0b3JlKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHBvaW50c1RvQWRkID0gMTA7XG4gIGNvbnN0IGVuZXJneVRvUmVkdWNlID0gMTA7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICBpZiAoZW5lcmd5IC0gZW5lcmd5VG9SZWR1Y2UgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICBzZXRQb2ludHMocG9pbnRzICsgcG9pbnRzVG9BZGQpO1xuICAgIHNldEVuZXJneShlbmVyZ3kgLSBlbmVyZ3lUb1JlZHVjZSA8IDAgPyAwIDogZW5lcmd5IC0gZW5lcmd5VG9SZWR1Y2UpO1xuICAgIHNldENsaWNrcyhbLi4uY2xpY2tzLCB7IGlkOiBEYXRlLm5vdygpLCB4LCB5IH1dKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldENsaWNrcygocHJldkNsaWNrcykgPT4gcHJldkNsaWNrcy5maWx0ZXIoKGNsaWNrKSA9PiBjbGljay5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3RlclVzZXJBcGkoXG4gICAgICAgICAgICB1c2VyLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB1c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICB1c2VyLmxhc3RfbmFtZSAsXG4gICAgICAgICAgICB1c2VyLmxhbmd1YWdlX2NvZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldE1vYmlsZShyZXNwb25zZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHk6JywgcmVzcG9uc2UpO1xuICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICBzZXRNb2JpbGUoZXJyb3IpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdGVyaW5nIHVzZXI6JywgZXJyb3IpO1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVzcG9uc2UgZGF0YTonLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0RXJyb3IoJ1VzZXIgbm90IGZvdW5kIG9yIHJlZ2lzdHJhdGlvbiBmYWlsZWQnKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ1VzZXIgZGF0YSBub3QgYXZhaWxhYmxlJyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICByZWdpc3RlclVzZXIoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbdXNlciwgc2V0VXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRFbmVyZ3koKHByZXZFbmVyZ3kpID0+IE1hdGgubWluKHByZXZFbmVyZ3kgKyAxLCA0MDAwKSk7XG4gICAgfSwgMTAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgZW5lcmd5PXtlbmVyZ3l9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgZW5lcmd5PXtlbmVyZ3l9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPiAqL31cbiAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShtb2JpbGUpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgZW5lcmd5PXtlbmVyZ3l9PlxuICAgICAge3BhdGhuYW1lID09PSAnLycgJiYgPEhlYWRlciBwb2ludHM9e3BvaW50c30gLz59XG4gICAgICB7cGF0aG5hbWUgPT09ICcvJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG10LTI4IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICB7dXNlckRhdGE/LmZpcnN0X25hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtNFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e01vbmtleX1cbiAgICAgICAgICAgICAgd2lkdGg9ezI1Nn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNTZ9XG4gICAgICAgICAgICAgIGFsdD1cIk1vbmtleVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Atc2hhZG93LTJ4bFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NsaWNrcy5tYXAoKGNsaWNrKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2NsaWNrLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtNXhsIGZvbnQtYm9sZCBvcGFjaXR5LTAgZmxvYXRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0b3A6IGAke2NsaWNrLnkgLSA0Mn1weGAsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtjbGljay54IC0gMjh9cHhgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IGhhbmRsZUFuaW1hdGlvbkVuZChjbGljay5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICArMTBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcGwtNCBtYi0yOCB3LWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlIHNyYz17aGlnaFZvbHRhZ2V9IHdpZHRoPXs0NH0gaGVpZ2h0PXs0NH0gYWx0PVwiSGlnaCBWb2x0YWdlXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkIGJsb2NrXCI+e2VuZXJneX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxhcmdlIG9wYWNpdHktNzVcIj4vIDQwMDA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMYXlvdXQiLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiTW9ua2V5IiwiaGlnaFZvbHRhZ2UiLCJ0ZWxlZ3JhbUNsaWVudCIsInJlZ2lzdGVyVXNlckFwaSIsInVzZVVzZXJTdG9yZSIsIkhvbWUiLCJ1c2VyIiwid2ViQXBwIiwicGF0aG5hbWUiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJtb2JpbGUiLCJzZXRNb2JpbGUiLCJlbmVyZ3kiLCJzZXRFbmVyZ3kiLCJjbGlja3MiLCJzZXRDbGlja3MiLCJzZXRVc2VyIiwic3RhdGUiLCJ1c2VyRGF0YSIsInBvaW50c1RvQWRkIiwiZW5lcmd5VG9SZWR1Y2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDbGljayIsImUiLCJyZWN0IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiaWQiLCJEYXRlIiwibm93IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwicHJldkNsaWNrcyIsImZpbHRlciIsImNsaWNrIiwicmVnaXN0ZXJVc2VyIiwicmVzcG9uc2UiLCJ0b1N0cmluZyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInByZXZFbmVyZ3kiLCJNYXRoIiwibWluIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJtYXAiLCJzdHlsZSIsIm9uQW5pbWF0aW9uRW5kIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});