/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*CSS Stylesheet*/\\n:root {\\n    --header-color: green;\\n    --main-background-color: white;\\n    --card-background-color: red;\\n    --modal-padding: 1rem;\\n}\\n\\n* {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nbody {\\n    height: 100vh;\\n    display: grid;\\n    grid-template-rows: 6rem calc(100vh - 6rem);\\n}\\n\\nbutton:active {\\n    box-shadow: inset 0 0 4px 1px black;\\n}\\n\\n/*MODAL-----------------------*/\\n.modal {\\n    position: fixed;\\n    height: 100%;\\n    width: 100%;\\n    background-color: rgba(0,0,0,.4);\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.modal.active {\\n    display: flex;\\n}\\n.modal > div {\\n    background-color: white;\\n    border-radius: 8px;\\n    padding: var(--modal-padding);\\n    width: 90%;\\n    height: 80%;\\n    overflow: auto;\\n    position: relative;\\n}\\n.modal > div > div > * {\\n    display: block;\\n    margin-inline: auto;\\n}\\n.modal h2 {\\n    display: block;\\n    width: min-content;\\n    white-space: nowrap;\\n    margin-inline: auto;\\n    height: 2rem;\\n}\\n.cancel {\\n    right: .5rem;\\n    top: .5rem;\\n    padding: .5rem 1rem;\\n    border-radius: 8px;\\n    background-color: white;\\n    border: 1px solid black;\\n    position: absolute;\\n}\\n.modal > div > div {\\n    height: calc(92% - var(--modal-padding) - 1rem);\\n    overflow: auto;\\n}\\n.modal label {\\n    width: min-content;\\n    white-space: nowrap;\\n    font-size: 1.2rem;\\n    font-weight: bold;\\n    margin-top: 2rem;\\n    margin-bottom: .5rem;\\n}\\n.modal input:first-of-type {\\n    border-radius: 8px;\\n    padding: .5rem;\\n    width: calc(100% - var(--modal-padding) - 20px);\\n}\\n.modal textarea {\\n    height: 20rem;\\n    overflow: auto;\\n    resize: none;\\n    padding: .5rem;\\n    border-radius: 8px;\\n    width: calc(100% - var(--modal-padding) - 20px);\\n}\\n.modal input[type=date] {\\n    margin-top: 1rem;\\n    margin-bottom: 1rem;\\n}\\n.modal div > div > button {\\n    font-size: 1.2rem;\\n    padding: .5rem 1rem;\\n    border-radius: 8px;\\n    margin-top: 3rem;\\n}\\n\\n/*HEADER----------------------*/\\nheader {\\n    background-color: var(--header-color);\\n    width: 100vw;\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    align-items: center;\\n}\\nheader h1 {\\n    white-space: nowrap;\\n    grid-column: 2/3;\\n    justify-self: center;\\n    color: white;\\n    -webkit-text-stroke: 1px black;\\n    font-weight: 1000;\\n}\\nheader button {\\n    height: 4rem;\\n    width: 4rem;\\n    justify-self: end;\\n    border-radius: 8px;\\n    margin-right: 1rem;\\n    border-style: none;\\n    background-color: white;\\n    font-weight: 500;\\n    font-size: 4rem;\\n    overflow: hidden;\\n    display: grid;\\n    justify-content: center;\\n    align-content: center;\\n}\\n\\n/*MAIN-----------*/\\nmain {\\n    background-color: var(--main-background-color);\\n    overflow-y: scroll;\\n    padding: 1rem;\\n}\\n\\n/*CARD-----------*/\\n.card {\\n    background-color: var(--card-background-color);\\n    margin-bottom: 1rem;\\n    border-radius: 8px;\\n    height: 10rem;\\n    padding: 1rem;\\n    column-gap: 1rem;\\n    display: grid;\\n    grid-template-columns: .5fr 3fr 5rem .5fr;\\n    grid-template-rows: 2rem 1fr 1fr 1fr;\\n    grid-template-areas: \\n    \\\"upArrow   title       created xButton\\\"\\n    \\\"upArrow   description created xButton\\\"\\n    \\\"downArrow description dueDate checkButton\\\"\\n    \\\"downArrow description dueDate checkButton\\\"\\n    ;\\n}\\n.card.completed :not(button) {\\n    text-decoration: line-through;\\n}\\n.card.completed {\\n    background-color: dimgrey;\\n}\\n.upArrow {\\n    grid-area: upArrow;\\n}\\n.title {\\n    grid-area: title;\\n    overflow: auto;\\n}\\n.created {\\n    grid-area: created;\\n}\\n.xButton {\\n    grid-area: xButton;\\n}\\n.downArrow {\\n    grid-area: downArrow;\\n}\\n.description {\\n    grid-area: description;\\n    overflow-y: scroll;\\n}\\n.dueDate {\\n    grid-area: dueDate;\\n}\\n.checkButton {\\n    grid-area: checkButton;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"updateEventListeners\": () => (/* binding */ updateEventListeners),\n/* harmony export */   \"viewSaved\": () => (/* binding */ viewSaved)\n/* harmony export */ });\n//Functions related to task cards\n\nlet savedCards = [];\n\n//Takes an object containing title, description, and due date\nfunction add(modalInfo) {\n    const emptyCardContents = `<button class=\"upArrow\">/\\\\</button>\n        <button class=\"downArrow\">\\\\/</button>\n        <h3 class=\"title\"></h3>\n        <div class=\"created\">Created:</div>\n        <div class=\"dueDate\">Due:</div>\n        <p class=\"description\"></p>\n        <button class=\"xButton\">X</button>\n        <button class=\"checkButton\">✓</button>`\n    const newCard = document.createElement('div');\n    newCard.innerHTML = emptyCardContents;\n    newCard.classList.add('card');\n    const main = document.querySelector('main');\n    const firstCard = main.querySelector('.card');\n    if (firstCard) {\n        main.appendChild(newCard);\n    } else {\n        main.appendChild(newCard);\n    }\n    updateEventListeners(newCard);\n    newCard.querySelector('.title').innerText = modalInfo.title;\n    newCard.querySelector('.description').innerText = modalInfo.description;\n    newCard.querySelector('.created').innerText += \"\\n\" + modalInfo.created;\n    newCard.querySelector('.dueDate').innerText += \"\\n\" + modalInfo.date;\n    newCard.classList.remove('newCard');\n    savedCards = save();\n}\n\nfunction remove(event) {\n    const main = document.querySelector('main');\n    main.removeChild(event.parentElement);\n    savedCards = save();\n}\n\nfunction updateEventListeners(card) {\n    const main = document.querySelector('main');\n    //\"Remove\" button\n    const xButton = card.querySelector('.xButton');\n    xButton.addEventListener('click', (event)=>{\n        remove(event.target);\n    })\n    //\"Move up\" button\n    const upButton = card.querySelector('.upArrow');\n    upButton.addEventListener('click', (event)=>{\n        if (event.target.parentElement.previousSibling) {\n            const previousSibling = event.target.parentElement.previousSibling;\n            main.insertBefore(card, previousSibling);\n        }\n    });\n    //\"Move down\" button\n    const downButton = card.querySelector('.downArrow');\n    downButton.addEventListener('click', (event)=>{\n        if (event.target.parentElement.nextSibling) {\n            const nextNextSibling = event.target.parentElement.nextSibling.nextSibling;\n            if (nextNextSibling) {\n                main.insertBefore(card, nextNextSibling);\n            } else {\n                main.appendChild(card);\n            }\n        }\n    });\n    //\"Completed\" button\n    const completeButton = card.querySelector('.checkButton');\n    completeButton.addEventListener('click', ()=>{\n        card.classList.toggle('completed');\n        sortCompletedCards();\n    });\n    savedCards = save();\n}\n\nfunction sortCompletedCards() {\n    //Sort by due date\n    const completedCards = [...document.querySelectorAll('.completed')];\n    completedCards.sort((firstCard, secondCard)=>{\n        if (firstCard.comparedDueDate < secondCard.comparedDueDate) {\n            return -1;\n        } else {\n            return 1;\n        }\n    })\n    completedCards.forEach((card)=>{\n        const main = document.querySelector('main');\n        main.appendChild(card);\n    });\n    savedCards = save();\n}\n\nfunction save() {\n    //Store card to an array to be generated on next load\n    const cards = [...document.querySelectorAll('.card')];\n    //build object to be stored\n    cards.forEach((card)=>{\n        //title\n        //description\n        //date\n        //comparedDueDate\n    });\n    return cards;\n\n}\n\nfunction viewSaved() {\n    console.log(savedCards);\n    return savedCards;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n\n\n\n//Generate Test Cards\n\nfor (let i = 0; i < 5; i++) {\n    _cards_js__WEBPACK_IMPORTED_MODULE_2__.add({title: \"Card \" + i, created: new Date().getFullYear()});\n}\n//Event Listeners\nconst addButton = document.querySelector('.addButton');\naddButton.addEventListener('click', ()=>{\n    _modal_js__WEBPACK_IMPORTED_MODULE_1__.show();\n});\n\nconst cancelButton = document.querySelector('.cancel');\ncancelButton.addEventListener('click', ()=>{\n    _modal_js__WEBPACK_IMPORTED_MODULE_1__.hide();\n    _modal_js__WEBPACK_IMPORTED_MODULE_1__.clear();\n});\n\nconst submitButton = document.querySelector('.submit');\nsubmitButton.addEventListener('click', ()=>{\n    _cards_js__WEBPACK_IMPORTED_MODULE_2__.add(_modal_js__WEBPACK_IMPORTED_MODULE_1__.submit());\n    _modal_js__WEBPACK_IMPORTED_MODULE_1__.hide();\n    _modal_js__WEBPACK_IMPORTED_MODULE_1__.clear();\n});\n\nconst devButton = document.createElement('button');\ndevButton.innerText = \"test\";\ndevButton.style.cssText = \"position: fixed; top: 1rem; left: 1rem; padding: .5rem 1rem\";\ndocument.body.appendChild(devButton);\ndevButton.addEventListener('click', ()=>{\n    const savedCards = localStorage.getItem(\"savedCards\");\n    console.log(JSON.parse(savedCards));\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n//Functions related to showing the modal, collecting data, and submitting.\n\nfunction show() {\n    const modal = document.querySelector('.modal');\n    modal.classList.add('active');\n    const container = modal.querySelector('.container');\n    container.scrollTop = 0;\n}\n\nfunction hide() {\n    const modal = document.querySelector('.modal');\n    modal.classList.remove('active');\n}\n\nfunction clear() {\n    const modal = document.querySelector('.modal');\n    const inputs = modal.querySelectorAll('input');\n    const toBeCleared = [];\n\n    //Assign each element to be cleared to array\n    inputs.forEach((input)=>{\n        toBeCleared.push(input);\n    });\n    toBeCleared.push(modal.querySelector('textarea'));\n    //Clear each element\n    toBeCleared.forEach((element)=>{\n        element.value = \"\";\n    });\n}\n\nfunction submit() {\n    const modal = document.querySelector('.modal');\n    const inputs = modal.querySelectorAll('input');\n    const toBeSubmitted = [];\n\n    //Assign each element to be submitted to an array\n    inputs.forEach((input)=>{\n        toBeSubmitted.push(input);\n    });\n    toBeSubmitted.push(modal.querySelector('textarea'));\n    //Assign each element value to an object\n    let values = {};\n    toBeSubmitted.forEach((element)=>{\n        if ((element.name == 'date') && (element.value)) {\n            //Store the date in a format for comparing against others\n            values.comparedDueDate = new Date(element.value);\n            //Format the date for eventual output into card\n            let year = element.value.slice(0,4);\n            let date = element.value.slice(5) + \"/\" + year;\n            date = date.replaceAll('-', '/');\n            values[element.name] = date;\n        } else {\n            values[element.name] = element.value;\n        }\n    });\n    let date =  new Date();\n    values.created = (date.getMonth() + 1) + \"/\" + date.getDate() + \"/\" + date.getYear(); \n    return values\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;