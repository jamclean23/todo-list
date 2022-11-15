//Functions related to task cards

let savedCards = [];

//Takes an object containing title, description, and due date
function add(modalInfo) {
    const emptyCardContents = `<button class="upArrow">/\\</button>
        <button class="downArrow">\\/</button>
        <h3 class="title"></h3>
        <div class="created">Created:</div>
        <div class="dueDate">Due:</div>
        <p class="description"></p>
        <button class="xButton">X</button>
        <button class="checkButton">✓</button>`
    const newCard = document.createElement('div');
    newCard.innerHTML = emptyCardContents;
    newCard.classList.add('card');
    const main = document.querySelector('main');
    const firstCard = main.querySelector('.card');
    if (firstCard) {
        main.insertBefore(newCard, firstCard);
    } else {
        main.appendChild(newCard);
    }
    updateEventListeners(newCard);
    //Fill card content
    newCard.querySelector('.title').innerText = modalInfo.title;
    newCard.querySelector('.description').innerText = modalInfo.description;
    newCard.querySelector('.created').innerText += "\n" + modalInfo.created;
    newCard.querySelector('.dueDate').innerText += "\n" + modalInfo.date;
    //assign properties for later use
    newCard.meta = {};
    newCard.meta.title = modalInfo.title;
    newCard.meta.description = modalInfo.description;
    newCard.meta.created = modalInfo.created;
    newCard.meta.date = modalInfo.date;
    newCard.meta.comparedDueDate = modalInfo.comparedDueDate;
    if (!(modalInfo.completed)) {
        newCard.meta.completed = false;
    } else {
        newCard.meta.completed = true;
        newCard.classList.add('completed');
    }

    savedCards = save();
}

function remove(event) {
    const main = document.querySelector('main');
    main.removeChild(event.parentElement);
    savedCards = save();
}

function updateEventListeners(card) {
    const main = document.querySelector('main');
    //"Remove" button
    const xButton = card.querySelector('.xButton');
    xButton.addEventListener('click', (event)=>{
        remove(event.target);
    })
    //"Move up" button
    const upButton = card.querySelector('.upArrow');
    upButton.addEventListener('click', (event)=>{
        if (event.target.parentElement.previousElementSibling) {
            const previousSibling = event.target.parentElement.previousSibling;
            main.insertBefore(card, previousSibling);
            savedCards = save();
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
            savedCards = save();
        }
    });
    //"Completed" button
    const completeButton = card.querySelector('.checkButton');
    completeButton.addEventListener('click', (event)=>{
        card.classList.toggle('completed');
        sortCompletedCards();
        console.clear();
        console.log(event.target.parentElement.classList.contains('completed'));
        if (event.target.parentElement.classList.contains('completed')) {
            event.target.parentElement.meta.completed = true;
        } else {
            event.target.parentElement.meta.completed = false;
        }
        console.log(event.target.parentElement.meta.completed);
        savedCards = save();
    });
    savedCards = save();
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
    savedCards = save();
}

function save() {
    //Store card to an array to be generated on next load
    const cards = [...document.querySelectorAll('.card')];
    console.log(cards);
    let cardsString = JSON.stringify(cards);
    localStorage.setItem("cards", cardsString);
    return cardsString;

}

function viewSaved() {
    console.log(savedCards);
    return savedCards;
}

function loadCards() {
    let cards = localStorage.getItem("cards");
    if (cards) {
        cards = JSON.parse(cards);
        cards.reverse();
        cards.forEach((card)=>{
            add(card.meta);
        });
    }    
}

export {
    add,
    remove,
    updateEventListeners,
    viewSaved,
    save,
    loadCards,
}