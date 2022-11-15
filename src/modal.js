//Functions related to showing the modal, collecting data, and submitting.

function show(mode, card) {
    const modal = document.querySelector('.modal');
    modal.mode = mode;
    modal.workingCard = card;
    modal.classList.add('active');
    const container = modal.querySelector('.container');
    container.scrollTop = 0;
    if (mode == "edit") {
        const header = document.querySelector('.modal h2');
        header.innerText = "Edit This Task";

        const title = document.querySelector('#title');
        if (card.meta.title) {
            title.value = card.meta.title;
        }

        const description = document.querySelector('#description');
        if (card.meta.description) {
            description.value = card.meta.description;
        }

        const date = document.querySelector('#date');
        if (card.meta.date) {
            date.value = card.meta.originalDueDate;
        }
    }
}

function hide() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
}

function clear() {
    const modal = document.querySelector('.modal');
    const inputs = modal.querySelectorAll('input');
    const toBeCleared = [];
    modal.mode = '';
    modal.workingCard = '';

    //Assign each element to be cleared to array
    inputs.forEach((input)=>{
        toBeCleared.push(input);
    });
    toBeCleared.push(modal.querySelector('textarea'));
    //Clear each element
    toBeCleared.forEach((element)=>{
        element.value = "";
    });
    //Make sure the elements have default placeholders/inner text
    const header = document.querySelector('.modal h2');
    header.innerText = "Add a New Task";
    const date = document.querySelector('#date');
    date.value = "";
}

function submit() {
    const modal = document.querySelector('.modal');
    const inputs = modal.querySelectorAll('input');
    const toBeSubmitted = [];

    //Assign each element to be submitted to an array
    inputs.forEach((input)=>{
        toBeSubmitted.push(input);
    });
    toBeSubmitted.push(modal.querySelector('textarea'));
    //Assign each element value to an object
    let values = {};
    toBeSubmitted.forEach((element)=>{
        if ((element.name == 'date') && (element.value)) {
            //Store the date in a format for comparing against others
            values.comparedDueDate = new Date(element.value);
            //Store the date in original format
            values.originalDueDate = element.value;
            //Format the date for eventual output into card
            let year = element.value.slice(0,4);
            let date = element.value.slice(5) + "/" + year;
            date = date.replaceAll('-', '/');
            values[element.name] = date;
        } else {
            values[element.name] = element.value;
        }
    });
    let date =  new Date();
    values.created = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear(); 
    return values
}



export {
    show,
    hide,
    clear,
    submit,
}