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

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"updateEventListeners\": () => (/* binding */ updateEventListeners)\n/* harmony export */ });\n//Functions related to task cards\n\n\n//Takes an object containing title, description, and due date\nfunction add(modalInfo) {\n    const emptyCard = `<div class=\"card workingCard\">\n        <button class=\"upArrow\">/\\\\</button>\n        <button class=\"downArrow\">\\\\/</button>\n        <h3 class=\"title\"></h3>\n        <div class=\"created\">Created:</div>\n        <div class=\"dueDate\">Due:</div>\n        <p class=\"description\"></p>\n        <button class=\"xButton\">X</button>\n        <button class=\"checkButton\">✓</button>\n        </div>`\n    const main = document.querySelector('main');\n    main.innerHTML += emptyCard;\n    const workingCard = document.querySelector('.workingCard');\n    updateEventListeners(workingCard);\n    workingCard.querySelector('.title').innerText = modalInfo.title;\n    workingCard.querySelector('.description').innerText = modalInfo.description;\n    workingCard.querySelector('.created').innerText += \"\\n\" + modalInfo.created;\n    workingCard.querySelector('.dueDate').innerText += \"\\n\" + modalInfo.date;\n    workingCard.classList.remove('workingCard');\n}\n\nfunction remove(event) {\n    const main = document.querySelector('main');\n    console.log(main);\n    main.removeChild(event.parentElement);\n}\n\nfunction clear() {\n\n}\n\nfunction updateEventListeners() {\n    const main = document.querySelector('main');\n    const cards = document.querySelectorAll('.card');\n    cards.forEach((card)=>{\n        //\"Remove\" button\n        const xButton = card.querySelector('.xButton');\n        xButton.addEventListener('click', (event)=>{\n            remove(event.target);\n        })\n        //\"Move up\" button\n        const upButton = card.querySelector('.upArrow');\n        upButton.addEventListener('click', (event)=>{\n            if (event.target.previousSibling) {\n                const previousSibling = event.target.parentElement.previousSibling;\n                main.insertBefore(card, previousSibling);\n            }\n        });\n        //\"Move down\" button\n        const downButton = card.querySelector('.downArrow');\n        downButton.addEventListener('click', (event)=>{\n            if (event.target.parentElement.nextSibling) {\n                const nextNextSibling = event.target.parentElement.nextSibling.nextSibling;\n                if (nextNextSibling) {\n                    main.insertBefore(card, nextNextSibling);\n                } else {\n                    main.appendChild(card);\n                }\n            }\n        });\n        //\"Completed\" button\n        const completeButton = card.querySelector('.checkButton');\n        completeButton.addEventListener('click', ()=>{\n            card.classList.toggle('completed');\n            sortCompletedCards();\n        });\n\n    });\n}\n\nfunction sortCompletedCards() {\n    //Sort by due date\n    const completedCards = [...document.querySelectorAll('.completed')];\n    completedCards.sort((firstCard, secondCard)=>{\n        if (firstCard.comparedDueDate < secondCard.comparedDueDate) {\n            return -1;\n        } else {\n            return 1;\n        }\n    })\n    completedCards.forEach((card)=>{\n        const main = document.querySelector('main');\n        main.appendChild(card);\n    });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/cards.js?");

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
/******/ 	__webpack_modules__["./src/cards.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;