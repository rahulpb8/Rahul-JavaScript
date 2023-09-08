const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const placeInput = document.getElementById('place');
const companyInput = document.getElementById('company');
const pinInput = document.getElementById('pincode');
const prePopulatedBtn = document.getElementById('prepopulatedButton');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    checkInputs();
    form.reset();
});
prePopulatedBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        nameInput.value = formData.name;
        phoneInput.value = formData.phone;
        placeInput.value = formData.place;
        companyInput.value = formData.company;
        pinInput.value = formData.pincode;
    }
});

function checkInputs() {
    const nameInputValue = nameInput.value.trim();
    const phoneInputValue = phoneInput.value.trim();
    const placeInputValue = placeInput.value.trim();
    const companyInputValue = companyInput.value.trim();
    const pinInputValue = pinInput.value.trim();

    let isValid = true;

    if(nameInputValue === ''){
        setErrorFor(nameInput, 'Name should not empty');
        isValid = false;
    }
    if(phoneInputValue === null || phoneInputValue === '') {
        setErrorFor(phoneInput, 'Phone number can not be blank');
        isValid = false;
    }
    else if(Number.isNaN(phoneInputValue)){
        setErrorFor(phoneInput, 'Phone number should be an integer');
        isValid = false;
    }
    else if(phoneInputValue.length !== 10){
        setErrorFor(phoneInput, 'Phone number should be 10 integers');
        isValid = false;
    }
    if(placeInputValue === '') {
        setErrorFor(placeInput, 'Place can not be blank, please enter place');
        isValid = false;
    }
    if(companyInputValue === '') {
        setErrorFor(companyInput, 'Company name is required');
        isValid = false;
    }
    if(pinInputValue ===''){
        setErrorFor(pinInput, 'Pincode is required');
        isValid = false;
    }
    else if(Number.isNaN(phoneInputValue)){
        setErrorFor(pinInput, 'Phone number should be an integer');
        isValid = false;
    }

    if (isValid === true) {
        const formData = {name : nameInputValue, place : placeInputValue, phone : phoneInputValue, company : companyInputValue, pincode : pinInputValue,};
        localStorage.setItem('formData', JSON.stringify(formData));
        form.reset();
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
    

   