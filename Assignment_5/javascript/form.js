/*eslint linebreak-style: ["error", "unix"]*/

//1. Make a form with fields name, phone number, place, company name, pin code
    const form = document.getElementById('form');
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const placeInput = document.getElementById("place");
    const companyInput = document.getElementById("company");
    const pinInput = document.getElementById("pincode");
    const prePopulatedBtn = document.getElementById("prepopulatedButton");

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        checkInputs();
        form.reset();
    });

//1.e Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise, the button will be disabled.
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

// 1.a if any of the fields are empty on submitting it should show corresponding error messages below all the required fields.

// 1.b pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.

// 1.c The minimum length of the phone number should be 10, otherwise, show the corresponding error msg below the mobile no. field.
    function checkInputs() {
        const nameInputValue = nameInput.value.trim();
        const phoneInputValue = phoneInput.value.trim();
        const placeInputValue = placeInput.value.trim();
        const companyInputValue = companyInput.value.trim();
        const pinInputValue = pinInput.value.trim();

        isValid = true;

        if(nameInputValue === ''){
            setErrorFor(nameInput, 'Name should not empty');
            isValid = false
        }
        if(phoneInputValue === null || phoneInputValue === '') {
            setErrorFor(phoneInput, 'Phone number can not be blank');
            isValid = false
        }
        else if(Number.isNaN(phoneInputValue)){
            setErrorFor(phoneInput, 'Phone number should be an integer');
            isValid = false
        }
        else if(phoneInputValue.length !== 10){
            setErrorFor(phoneInput, 'Phone number should be 10 integers');
            isValid = false
        }
       if(placeInputValue === '') {
            setErrorFor(placeInput, 'Place can not be blank, please enter place');
            isValid = false
        }
       if(companyInputValue === '') {
            setErrorFor(companyInput, 'Company name is required');
            isValid = false
        }
       if(pinInputValue ===''){
            setErrorFor(pinInput, 'Pincode is required');
            isValid = false
        }
       else if(Number.isNaN(phoneInputValue)){
            setErrorFor(pinInput, 'Phone number should be an integer');
            isValid = false
        }

//1.d. On submission of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page)
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
    

   
