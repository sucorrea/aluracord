"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Titulo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Titulo */ \"./src/Components/Titulo/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction PaginaInicial() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sucorrea\"), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                // backgroundColor: appConfig.theme.colors.primary[500],\n                backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/simpsons-couch-1536x864.jpg)\",\n                backgroundRepeat: \"no-repeat\",\n                backgroundSize: \"cover\",\n                backgroundBlendMode: \"multiply\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\",\n                    flexDirection: {\n                        xs: \"column\",\n                        sm: \"row\"\n                    },\n                    width: \"100%\",\n                    maxWidth: \"700px\",\n                    borderRadius: \"5px\",\n                    padding: \"32px\",\n                    margin: \"16px\",\n                    boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        as: \"form\",\n                        onSubmit: function onSubmit(infosDoEvento) {\n                            infosDoEvento.preventDefault();\n                            console.log(\"Algu\\xe9m submeteu o form\");\n                            roteamento.push(\"/chat\");\n                        // window.location.href = '/chat';\n                        },\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            width: {\n                                xs: \"100%\",\n                                sm: \"50%\"\n                            },\n                            textAlign: \"center\",\n                            marginBottom: \"32px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_5__.Titulo, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: \"32px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                value: username,\n                                onChange: function onChange(event) {\n                                    var valor = event.target.value;\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            maxWidth: \"200px\",\n                            padding: \"16px\",\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],\n                            border: \"1px solid\",\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n                            borderRadius: \"10px\",\n                            flex: 1,\n                            minHeight: \"240px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                styleSheet: {\n                                    borderRadius: \"50%\",\n                                    marginBottom: \"16px\"\n                                },\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                    padding: \"3px 10px\",\n                                    borderRadius: \"1000px\"\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\CURSOS\\\\ImersaoReact Alura 2022\\\\aluracord\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(PaginaInicial, \"ou/C26G5OOrwejDYj/bNitqJ2dc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PaginaInicial;\nvar _c;\n$RefreshReg$(_c, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUNyRDBCLE9BQU8sRUFBRSxDQUFVO29DQUNuQkQsWUFBWSxFQUFFLENBQVE7Z0NBQ3hCLENBQUM7MENBRUFoQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztHQXRKdUJELGFBQWE7O1FBRWhCRixrREFBUzs7O0tBRk5FLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGl0dWxvIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvVGl0dWxvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJzdWNvcnJlYVwiKTtcclxuICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICBcInVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA3L3NpbXBzb25zLWNvdWNoLTE1MzZ4ODY0LmpwZylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBzbTogXCJyb3dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2Z1bmN0aW9uIChpbmZvc0RvRXZlbnRvKSB7XHJcbiAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxndcOpbSBzdWJtZXRldSBvIGZvcm1cIik7XHJcbiAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKFwiL2NoYXRcIik7XHJcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYXQnO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IFwiNTAlXCIgfSxcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMycHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5M1wiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzdWFyaW8gZGlnaXRvdVwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gT25kZSB0YSBvIHZhbG9yP1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBUcm9jYXIgbyB2YWxvciBkYSB2YXJpYXZlbFxyXG4gICAgICAgICAgICAgICAgLy8gYXRyYXbDqXMgZG8gUmVhY3QgZSBhdmlzZSBxdWVtIHByZWNpc2FcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVudHJhclwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCIyNDBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjNweCAxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1c2VybmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXBwQ29uZmlnIiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwidXNlUm91dGVyIiwiVGl0dWxvIiwiUGFnaW5hSW5pY2lhbCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3RlYW1lbnRvIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJhcyIsIm9uU3VibWl0IiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ0YWciLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwicHJpbWFyeSIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});