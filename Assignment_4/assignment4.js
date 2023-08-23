//1.a
  
function displayScreenHeight(){
    var userScreenHeight = window.innerHeight;
    var height = document.getElementById('height');
    height.innerText = "User screen height: "+userScreenHeight+"px";
}
window.addEventListener("DOMContentLoaded", displayScreenHeight);

//1.b

function displayHostName(){
    var hostName = window.location.hostname;
    console.log(hostName);
}
displayHostName();

//1.c

function checkProtocol(){
    if(window.location.protocol !== 'https:'){
        window.alert("WARNING: This page is not secured")
    }
}
window.addEventListener("load", checkProtocol)

//1.d

function timeoutAlert(){
    setTimeout(function(){
        window.alert("This alert is after 10 seconds")},10000);
}
window.addEventListener("load", timeoutAlert);

//2

function storeDetails(){
    const personalDetails = {name :'Rahul', Age : 22, gender : 'Male'};
    var user;
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

//3

var today = new Date();
var expiry = new Date(today.getTime()+ 30 * 24 * 3600 * 1000);

function setCookie(name, value){
    document.cookie = name + "=" + (value || "") + "; path=/; expires=" + expiry.toGMTString();
}

function formSubmit(){

    var name = document.getElementById("name").value;
    var phno = document.getElementById("phno").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;

    setCookie("name", name, 30);
    setCookie("phno", phno, 30);
    setCookie("gender", gender, 30);
    setCookie("email", email, 30);

    window.alert("Form data saved in cookies");
}

var form = document.getElementById("personInfo");
form.addEventListener("submit", formSubmit);

//4

document.getElementById("redirect_button").addEventListener("click", function() {
    window.location.assign('https://www.google.com/');
});

//5.a

function hideFunction(){
    var element = document.getElementById("basic_info");
    element.style.display = "none";
}
 
//5.b

function changeBg(){
    var element = document.getElementById("basic_info");
    element.style.backgroundColor = "black";
}

//5.c
 
 // function detailsClick(){
 //     var elem = document.getElementsByClassName('info');
 //     elem.forEach(function (detail){
 //         detail.style.display === 'none' ? 'block' : 'none';
 //     });
 
 // }


//7

var languages = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'Php', 'C', 'Swift', 'C++','C#'];

const buttonBox = document.getElementById('buttonBox');
const display = document.getElementById('printProgrammingLanguage');

languages.forEach(function(lang) {
    const button = document.createElement('button');
    button.textContent = lang;
    button.className = "lang-btn";
    button.style = "margin: 10px";
    button.addEventListener("click", function(){
        display.textContent = lang;
    });
    buttonBox.appendChild(button);
});

//6

var number = document.getElementById('number');
var divText = document.getElementById('message');
function getOption(){
    var selectedValue = parseInt(number.value);
    if(selectedValue === 9){
        number.value = '10';
        divText.innerText = '9 is fully occuppied, please select another number';
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

//8

function changeTabTitle(){
    var newTitle = document.getElementById('tabTitleInput').value;
    if(newTitle.length > 0 && newTitle.length <= 50){
        document.title = newTitle;
    }
    else{
        document.getElementById("errorMessage").innerHTML = 'Provide minimum 1 and maximum 50 characters';
    }
    return false;
}
var formTitle = document.getElementById('tabTitle');
formTitle.addEventListener('submit', changeTabTitle())


//9
function keyPress(event) {
if(event.ctrlKey && event.key == 'Enter'){
    window.alert("Pressed ctrl+enter");
}

}
document.addEventListener("keydown", keyPress);