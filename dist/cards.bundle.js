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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"loadCards\": () => (/* binding */ loadCards),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"update\": () => (/* binding */ update),\n/* harmony export */   \"updateEventListeners\": () => (/* binding */ updateEventListeners),\n/* harmony export */   \"viewSaved\": () => (/* binding */ viewSaved)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n//Functions related to task cards\n\n\n\n\nlet savedCards = [];\n\n//Takes an object containing title, description, and due date\nfunction add(modalInfo) {\n    const emptyCardContents = `<button class=\"upArrow\">/\\\\</button>\n        <button class=\"downArrow\">\\\\/</button>\n        <h3 class=\"title\"></h3>\n        <div class=\"created\">Created:</div>\n        <div class=\"dueDate\">Due:</div>\n        <p class=\"description\"></p>\n        <button class=\"xButton\">X</button>\n        <button class=\"checkButton\">✓</button>`\n    const newCard = document.createElement('div');\n    newCard.innerHTML = emptyCardContents;\n    newCard.classList.add('card');\n    const main = document.querySelector('main');\n    const firstCard = main.querySelector('.card');\n    if (firstCard) {\n        main.insertBefore(newCard, firstCard);\n    } else {\n        main.appendChild(newCard);\n    }\n    updateEventListeners(newCard);\n    //Fill card content\n    newCard.querySelector('.title').innerText = modalInfo.title;\n    newCard.querySelector('.description').innerText = modalInfo.description;\n    newCard.querySelector('.created').innerText += \"\\n\" + modalInfo.created;\n    newCard.querySelector('.dueDate').innerText += \"\\n\" + modalInfo.date;\n    //assign properties for later use\n    newCard.meta = {};\n    newCard.meta.title = modalInfo.title;\n    newCard.meta.description = modalInfo.description;\n    newCard.meta.created = modalInfo.created;\n    newCard.meta.date = modalInfo.date;\n    newCard.meta.comparedDueDate = modalInfo.comparedDueDate;\n    newCard.meta.originalDueDate = modalInfo.originalDueDate;\n    if (!(modalInfo.completed)) {\n        newCard.meta.completed = false;\n    } else {\n        newCard.meta.completed = true;\n        newCard.classList.add('completed');\n    }\n\n    savedCards = save();\n}\n\nfunction remove(event) {\n    const main = document.querySelector('main');\n    main.removeChild(event.parentElement);\n    savedCards = save();\n}\n\nfunction updateEventListeners(card) {\n    const main = document.querySelector('main');\n    //\"Remove\" button\n    const xButton = card.querySelector('.xButton');\n    xButton.addEventListener('click', (event)=>{\n        remove(event.target);\n    })\n    //\"Move up\" button\n    const upButton = card.querySelector('.upArrow');\n    upButton.addEventListener('click', (event)=>{\n        if (event.target.parentElement.previousElementSibling) {\n            const previousSibling = event.target.parentElement.previousSibling;\n            main.insertBefore(card, previousSibling);\n            savedCards = save();\n        }\n    });\n    //\"Move down\" button\n    const downButton = card.querySelector('.downArrow');\n    downButton.addEventListener('click', (event)=>{\n        if (event.target.parentElement.nextSibling) {\n            const nextNextSibling = event.target.parentElement.nextSibling.nextSibling;\n            if (nextNextSibling) {\n                main.insertBefore(card, nextNextSibling);\n            } else {\n                main.appendChild(card);\n            }\n            savedCards = save();\n        }\n    });\n\n    //\"Completed\" button\n    const completeButton = card.querySelector('.checkButton');\n    completeButton.addEventListener('click', (event)=>{\n        card.classList.toggle('completed');\n        waitForTransition(event.target.parentElement, sortCompletedCards);\n        //sortCompletedCards();\n        if (event.target.parentElement.classList.contains('completed')) {\n            event.target.parentElement.meta.completed = true;\n        } else {\n            event.target.parentElement.meta.completed = false;\n        }\n        savedCards = save();\n    });\n    savedCards = save();\n\n    //Expand on clicking title or description\n    const title = card.querySelector('h3');\n    title.addEventListener('click', editModal);\n    const description = card.querySelector('p');\n    description.addEventListener('click', editModal);\n\n    function editModal(event) {\n        _modal_js__WEBPACK_IMPORTED_MODULE_0__.show(\"edit\", event.target.parentElement);\n    }\n}\n\nfunction sortCompletedCards() {\n    //Sort by due date\n    const completedCards = [...document.querySelectorAll('.completed')];\n    completedCards.sort((firstCard, secondCard)=>{\n        if (firstCard.comparedDueDate < secondCard.comparedDueDate) {\n            return -1;\n        } else {\n            return 1;\n        }\n    })\n    completedCards.forEach((card)=>{\n        const main = document.querySelector('main');\n        main.appendChild(card);\n    });\n    savedCards = save();\n}\n\nfunction save() {\n    //Store card to an array to be generated on next load\n    const cards = [...document.querySelectorAll('.card')];\n    let cardsString = JSON.stringify(cards);\n    localStorage.setItem(\"cards\", cardsString);\n    return cardsString;\n\n}\n\nfunction viewSaved() {\n    console.log(savedCards);\n    return savedCards;\n}\n\nfunction loadCards() {\n    let cards = localStorage.getItem(\"cards\");\n    if (cards) {\n        cards = JSON.parse(cards);\n        cards.reverse();\n        cards.forEach((card)=>{\n            add(card.meta);\n        });\n    }    \n}\n\nfunction waitForTransition(element, functionToFire) {\n    console.log(\"transitioning\");\n    console.log(element);\n    function whichTransition(){\n        const transitions = {\n            'transition':'transitionend',\n            'OTransition':'oTransitionEnd',\n            'MozTransition':'transitionend',\n            'WebkitTransition':'webkitTransitionEnd'\n        }\n        for (const transition in transitions) {\n            if (element.style[transition] !== \"undefined\") {\n                return transitions[transition];\n            }\n        }    \n    }\n    let transitionend = whichTransition();\n    element.addEventListener(transitionend, functionToFire, false);\n}\n\nfunction update(modalInfo, workingCard) {\n    const title = workingCard.querySelector('h3');\n    workingCard.meta.title = modalInfo.title;\n    title.innerText = modalInfo.title;\n\n    const description = workingCard.querySelector('p');\n    workingCard.meta.description = modalInfo.description;\n    description.innerText = modalInfo.description;\n\n    const date = workingCard.querySelector('.dueDate');\n    workingCard.meta.date = modalInfo.date;\n    workingCard.originalDueDate = modalInfo.originalDueDate;\n    workingCard.comparedDueDate = modalInfo.comparedDueDate;\n    date.innerText = \"Due: \" + \"\\n\" + modalInfo.date;\n\n\n    savedCards = save();\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/cards.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n//Functions related to showing the modal, collecting data, and submitting.\n\nfunction show(mode, card) {\n    const modal = document.querySelector('.modal');\n    modal.mode = mode;\n    modal.workingCard = card;\n    modal.classList.add('active');\n    const container = modal.querySelector('.container');\n    container.scrollTop = 0;\n    if (mode == \"edit\") {\n        const header = document.querySelector('.modal h2');\n        header.innerText = \"Edit This Task\";\n\n        const title = document.querySelector('#title');\n        if (card.meta.title) {\n            title.value = card.meta.title;\n        }\n\n        const description = document.querySelector('#description');\n        if (card.meta.description) {\n            description.value = card.meta.description;\n        }\n\n        const date = document.querySelector('#date');\n        if (card.meta.date) {\n            date.value = card.meta.originalDueDate;\n        }\n    }\n}\n\nfunction hide() {\n    const modal = document.querySelector('.modal');\n    modal.classList.remove('active');\n}\n\nfunction clear() {\n    const modal = document.querySelector('.modal');\n    const inputs = modal.querySelectorAll('input');\n    const toBeCleared = [];\n    modal.mode = '';\n    modal.workingCard = '';\n\n    //Assign each element to be cleared to array\n    inputs.forEach((input)=>{\n        toBeCleared.push(input);\n    });\n    toBeCleared.push(modal.querySelector('textarea'));\n    //Clear each element\n    toBeCleared.forEach((element)=>{\n        element.value = \"\";\n    });\n    //Make sure the elements have default placeholders/inner text\n    const header = document.querySelector('.modal h2');\n    header.innerText = \"Add a New Task\";\n    const date = document.querySelector('#date');\n    date.value = \"\";\n}\n\nfunction submit() {\n    const modal = document.querySelector('.modal');\n    const inputs = modal.querySelectorAll('input');\n    const toBeSubmitted = [];\n\n    //Assign each element to be submitted to an array\n    inputs.forEach((input)=>{\n        toBeSubmitted.push(input);\n    });\n    toBeSubmitted.push(modal.querySelector('textarea'));\n    //Assign each element value to an object\n    let values = {};\n    toBeSubmitted.forEach((element)=>{\n        if ((element.name == 'date') && (element.value)) {\n            //Store the date in a format for comparing against others\n            values.comparedDueDate = new Date(element.value);\n            //Store the date in original format\n            values.originalDueDate = element.value;\n            //Format the date for eventual output into card\n            let year = element.value.slice(0,4);\n            let date = element.value.slice(5) + \"/\" + year;\n            date = date.replaceAll('-', '/');\n            values[element.name] = date;\n        } else {\n            values[element.name] = element.value;\n        }\n    });\n    let date =  new Date();\n    values.created = (date.getMonth() + 1) + \"/\" + date.getDate() + \"/\" + date.getFullYear(); \n    return values\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modal.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cards.js");
/******/ 	
/******/ })()
;