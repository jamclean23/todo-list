import './styles.css';
import * as Modal from './modal.js';
import * as Cards from './cards.js';

//Generate Test Cards
for (let i = 0; i < 5; i++) {
    Cards.add({title: "Card " + i, created: new Date().getFullYear()});
}

//Event Listeners
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', ()=>{
    Modal.show();
});

const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', ()=>{
    Modal.hide();
    Modal.clear();
});

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', ()=>{
    Cards.add(Modal.submit());
    Modal.hide();
    Modal.clear();
});

const devButton = document.createElement('button');
devButton.innerText = "test";
devButton.style.cssText = "position: fixed; top: 1rem; left: 1rem; padding: .5rem 1rem";
document.body.appendChild(devButton);
devButton.addEventListener('click', ()=>{
});
