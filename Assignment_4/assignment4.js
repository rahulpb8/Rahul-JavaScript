/*eslint linebreak-style: ["error", "unix"]*/

//9. When the control+enter key is pressed show an alert message.
function keyPress(event) {
    if(event.ctrlKey && event.key === 'Enter'){
        window.alert('Pressed ctrl+enter');
    }
}
document.addEventListener('keydown', keyPress);

//1.a Write a function to 
//Calculate the height of the end user's browser screen
  
function displayScreenHeight(){
    let userScreenHeight = window.innerHeight;
    let height = document.getElementById('height');
    height.innerText = 'User screen height: '+userScreenHeight+'px';
}
window.addEventListener('DOMContentLoaded', displayScreenHeight);

//1.b To console the name of the web host

function displayHostName(){
    let hostName = window.location.hostname;
    console.log(hostName);
}
displayHostName();

//1.c To show a warning message if there is no https protocol used in the visited website.

function checkProtocol(){
    if(window.location.protocol !== 'https:'){
        window.alert('WARNING: This page is not secured');
    }
}
window.addEventListener('load', checkProtocol);

//1.d To show an alert message after 10sec while the page is refreshed.

function timeoutAlert(){
    setTimeout(function(){
        window.alert('This alert is after 10 seconds');},10000);
}
window.addEventListener('load', timeoutAlert);

//2. Store your basic details in local storage of the browser every time the page loads,
// then console them and finally delete them after 1 minute of the page load. 

function storeDetails(){
    const personalDetails = {name :'Rahul', Age : 22, gender : 'Male'};
    localStorage.setItem('user', JSON.stringify(personalDetails));
}

storeDetails();

function consolePersonalDetails(){
    const details = localStorage.getItem('user');
    console.log(details);
}
consolePersonalDetails();

function removePersonalDetails(){
    localStorage.removeItem('user');
    console.log('Details deleted');
}
setTimeout(removePersonalDetails, 60000);

//3 Create a form and submit button, on click of the button store your basic details from the form in the cookies.

let today = new Date();
let expiry = new Date(today.getTime()+ 30 * 24 * 3600 * 1000);

function setCookie(name, value){
    document.cookie = name + '=' + (value || '') + '; path=/; expires=' + expiry.toGMTString();
}

function formSubmit(){

    let name = document.getElementById('name').value;
    let phno = document.getElementById('phno').value;
    let gender = document.getElementById('gender').value;
    let email = document.getElementById('email').value;

    setCookie('name', name, 30);
    setCookie('phno', phno, 30);
    setCookie('gender', gender, 30);
    setCookie('email', email, 30);

    window.alert('Form data saved in cookies');
}

let form = document.getElementById('personInfo');
form.addEventListener('submit', formSubmit);

//4 Redirect to the homepage of google from the console.

document.getElementById('redirect_button').addEventListener('click', function() {
    window.location.assign('https://www.google.com/');
});

//5. Create a div with background color red, create buttons
//5.a to hide the div

let hideDiv = document.getElementById('hide');
function hideFunction(){
    let element = document.getElementById('basic_info');
    element.style.display = 'none';
}
hideDiv.addEventListener('click', hideFunction);
 
//5.b to change the background color of the div

let changeBgButton = document.getElementById('bg_color');
function changeBg(){
    let element = document.getElementById('basic_info');
    element.style.backgroundColor = 'black';
}
changeBgButton.addEventListener('click', changeBg);

//5.c. to show your basic details on the div, the details should hide/show, on the click.

let details = document.getElementById('info');
let details_button = document.getElementById('basic_details');
let isHide = true;
function detailsClick(){
    if(isHide == false) {
        details.style.display = 'block';
        isHide = true;
    }
    else{
        details.style.display = 'none';
        isHide = false; 
    }
}

details_button.addEventListener('click' ,detailsClick);

//7. Consider an array with names of 10 programming languages, make 10 buttons by iterating this array,
// when clicked on each button the name of the programming language should be shown in a corresponding div. 

let languages = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'Php', 'C', 'Swift', 'C++','C#'];

const buttonBox = document.getElementById('buttonBox');
const display = document.getElementById('printProgrammingLanguage');

languages.forEach(function(lang) {
    const button = document.createElement('button');
    button.textContent = lang;
    button.className = 'lang-btn';
    button.style = 'margin: 10px';
    button.addEventListener('click', function(){
        display.textContent = lang;
    });
    buttonBox.appendChild(button);
});

//6. Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and
// show a message that "9 is fully occupied please select another number", when selected any number other than 9 
// it should show a message as "you selected 'particular number' " in a div, on hovering the div it should change
// the background color of the div into a highlighting shade, while the mouse pointer leaves the message area the
// background color should go back to as before (don't use CSS to attain the hovering functionality)


let number = document.getElementById('number');
let divText = document.getElementById('message');
function getOption(){
    let selectedValue = parseInt(number.value);
    if(selectedValue === 9){
        number.value = '10';
        divText.innerText = '9 is fully occupied, please select another number';
    }
    else{
        divText.innerText = `You selected ${selectedValue}`;
    }
}
divText.addEventListener('mouseover', function(){
    divText.style.backgroundColor = 'pink';
});
divText.addEventListener('mouseout', function(){
    divText.style.backgroundColor = 'white';
});
// number.addEventListener('change', getOption())

//8. Create a form with a text field which when submitted, will change the tab title to whatever is entered,
// limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted(it shouldn't refresh).

function changeTabTitle(){
    let newTitle = document.getElementById('tabTitleInput').value;
    if(newTitle.length > 0 && newTitle.length <= 50){
        document.title = newTitle;
    }
    else{
        document.getElementById('errorMessage').innerHTML = 'Provide minimum 1 and maximum 50 characters';
    }
    return false;
}
let formTitle = document.getElementById('tabTitle');
formTitle.addEventListener('submit', changeTabTitle());
