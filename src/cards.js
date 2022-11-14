//Functions related to task cards

import * as Modal from './modal.js';

//Takes an object containing title, description, and due date
function add(modalInfo) {
    const emptyCard = `<div class="card workingCard">
        <button class="upArrow">/\\</button>
        <button class="downArrow">\\/</button>
        <h3 class="title"></h3>
        <div class="created">Created:</div>
        <div class="dueDate">Due:</div>
        <p class="description"></p>
        <button class="xButton">X</button>
        <button class="checkButton">✓</button>
        </div>`
    const main = document.querySelector('main');
    main.innerHTML += emptyCard;
    const workingCard = document.querySelector('.workingCard');
    updateEventListeners(workingCard);
    workingCard.querySelector('.title').innerText = modalInfo.title;
    workingCard.querySelector('.description').innerText = modalInfo.description;
    workingCard.querySelector('.created').innerText += "\n" + modalInfo.created;
    workingCard.querySelector('.dueDate').innerText += "\n" + modalInfo.date;
    workingCard.classList.remove('workingCard');
}

function remove(event) {
    const main = document.querySelector('main');
    console.log(main);
    main.removeChild(event.parentElement);
}

function moveUp() {

}

function moveDown() {

}

function clear() {

}

function updateEventListeners(workingCard) {
    const main = document.querySelector('main');
    const cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        const xButton = card.querySelector('.xButton');
        xButton.addEventListener('click', (event)=>{
            remove(event.target);
        })
    });
}

export {
    add,
    remove,
    moveUp,
    moveDown,
    clear,
    updateEventListeners,
}