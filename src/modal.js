//Functions related to showing the modal, collecting data, and submitting.

function show() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    const container = modal.querySelector('.container');
    container.scrollTop = 0;
}

function hide() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
}

function clear() {
    const modal = document.querySelector('.modal');
    const inputs = modal.querySelectorAll('input');
    const toBeCleared = [];

    //Assign each element to be cleared to array
    inputs.forEach((input)=>{
        toBeCleared.push(input);
    });
    toBeCleared.push(modal.querySelector('textarea'));
    //Clear each element
    toBeCleared.forEach((element)=>{
        element.value = "";
    });
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