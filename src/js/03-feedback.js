import throttle from "lodash.throttle";
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormInput, 500) );
formEl.addEventListener('submit', onFormSubmit);
let inputObj = {};
const LOCAL_STORAGE_KEY = "feedback-form-state";

inputCheck();


function onFormInput (event) {
    
    inputObj[event.target.name] = event.target.value;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputObj))
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset()
    localStorage.removeItem(LOCAL_STORAGE_KEY);
};

function inputCheck() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedDataPars =JSON.parse(savedData);
    if(savedData){
        
        formEl.elements.email.value = savedDataPars.email || '';
        formEl.elements.message.value = savedDataPars.message || '';
        console.log(savedDataPars);
    };

};
