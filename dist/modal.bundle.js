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

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n//Functions related to showing the modal, collecting data, and submitting.\n\nfunction show() {\n    const modal = document.querySelector('.modal');\n    modal.classList.add('active');\n    const container = modal.querySelector('.container');\n    container.scrollTop = 0;\n}\n\nfunction hide() {\n    const modal = document.querySelector('.modal');\n    modal.classList.remove('active');\n}\n\nfunction clear() {\n    const modal = document.querySelector('.modal');\n    const inputs = modal.querySelectorAll('input');\n    const toBeCleared = [];\n\n    //Assign each element to be cleared to array\n    inputs.forEach((input)=>{\n        toBeCleared.push(input);\n    });\n    toBeCleared.push(modal.querySelector('textarea'));\n    //Clear each element\n    toBeCleared.forEach((element)=>{\n        element.value = \"\";\n    });\n}\n\nfunction submit() {\n    const modal = document.querySelector('.modal');\n    const inputs = modal.querySelectorAll('input');\n    const toBeSubmitted = [];\n\n    //Assign each element to be submitted to an array\n    inputs.forEach((input)=>{\n        toBeSubmitted.push(input);\n    });\n    toBeSubmitted.push(modal.querySelector('textarea'));\n    //Assign each element value to an object\n    let values = {};\n    toBeSubmitted.forEach((element)=>{\n        if ((element.name == 'date') && (element.value)) {\n            //Store the date in a format for comparing against others\n            values.comparedDueDate = new Date(element.value);\n            //Format the date for eventual output into card\n            let year = element.value.slice(0,4);\n            let date = element.value.slice(5) + \"/\" + year;\n            date = date.replaceAll('-', '/');\n            values[element.name] = date;\n        } else {\n            values[element.name] = element.value;\n        }\n    });\n    let date =  new Date();\n    values.created = (date.getMonth() + 1) + \"/\" + date.getDate() + \"/\" + date.getFullYear(); \n    return values\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;