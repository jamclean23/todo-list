//Functions related to task cards


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

function clear() {

}

function updateEventListeners() {
    const main = document.querySelector('main');
    const cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        //"Remove" button
        const xButton = card.querySelector('.xButton');
        xButton.addEventListener('click', (event)=>{
            remove(event.target);
        })
        //"Move up" button
        const upButton = card.querySelector('.upArrow');
        upButton.addEventListener('click', (event)=>{
            if (event.target.previousSibling) {
                const previousSibling = event.target.parentElement.previousSibling;
                main.insertBefore(card, previousSibling);
            }
        });
        //"Move down" button
        const downButton = card.querySelector('.downArrow');
        downButton.addEventListener('click', (event)=>{
            if (event.target.parentElement.nextSibling) {
                const nextNextSibling = event.target.parentElement.nextSibling.nextSibling;
                if (nextNextSibling) {
                    main.insertBefore(card, nextNextSibling);
                } else {
                    main.appendChild(card);
                }
            }
        });
        //"Completed" button
        const completeButton = card.querySelector('.checkButton');
        completeButton.addEventListener('click', ()=>{
            card.classList.toggle('completed');
            sortCompletedCards();
        });

    });
}

function sortCompletedCards() {
    //Sort by due date
    const completedCards = [...document.querySelectorAll('.completed')];
    completedCards.sort((firstCard, secondCard)=>{
        if (firstCard.comparedDueDate < secondCard.comparedDueDate) {
            return -1;
        } else {
            return 1;
        }
    })
    completedCards.forEach((card)=>{
        const main = document.querySelector('main');
        main.appendChild(card);
    });
}

export {
    add,
    remove,
    clear,
    updateEventListeners,
}