import './styles.css';
import * as Modal from './modal.js';
import * as Cards from './cards.js';

//Event Listeners
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', ()=>{
    Modal.show();
});

//Load cards from previous save
Cards.loadCards();

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
