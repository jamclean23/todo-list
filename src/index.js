import './styles.css';

const main = document.querySelector('main');
const emptyCard = 
    `<div class="card">
    <button class="upArrow">/\\</button>
    <button class="downArrow">\\/</button>
    <h3 class="title"></h3>
    <div class="created">Created:</div>
    <div class="dueDate">Due:</div>
    <p class="description"></p>
    <button class="xButton">X</button>
    <button class="checkButton">✓</button>
    </div>`

main.innerHTML += emptyCard;

console.log(emptyCard);