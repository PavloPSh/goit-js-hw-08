import throttle from "lodash.throttle";
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormInput, 500) );
formEl.addEventListener('submit', onFormSubmit);
let inputObj = {};
const LOCAL_STORAGE_KEY = "feedback-form-state";

inputCheck();


function onFormInput (event) {
    
    inputObj[event.target.name] = event.target.value;
    console.log('Current data:', inputObj)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputObj))
    
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset()
    localStorage.removeItem(LOCAL_STORAGE_KEY);
};

function inputCheck() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedData){
        const savedDataPars = JSON.parse(savedData);
        console.log('Local storage data:',savedDataPars)
        Object.entries(savedDataPars).forEach (([name, value]) => {
        inputObj[name] = value;
        formEl.elements[name].value = value;
        });
    };

};

