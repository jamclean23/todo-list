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