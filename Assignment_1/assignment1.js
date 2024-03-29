/*eslint linebreak-style: ["error", "unix"]*/
//1. Create variables with different data types available in JS and print their data types along with each variable name in the console.
let myName = 'Rahul';
console.log(myName);
console.log('myName', typeof myName);

let mobileNumber = 1234567890;
console.log(mobileNumber);
console.log('mobileNumber', typeof mobileNumber);

let myHeight = 168.8;
console.log(myHeight);
console.log('myHeight', typeof myHeight);

let trueOrFalse = false;
console.log(trueOrFalse);
console.log('trueOrFalse', typeof trueOrFalse);

let cars = ['Polo', 'Civic', 'Swift', 'seltos'];
console.log(cars);
console.log('cars', typeof cars);

let undefinedVariable;
console.log(undefinedVariable);
console.log('undefinedVariable', typeof undefinedVariable);

let nullValue = null;
console.log(nullValue);
console.log('nullValue', typeof nullValue);

console.log(myName+ ' ' +mobileNumber+ ' '+myHeight+' '+trueOrFalse+' '+ cars +' '+undefinedVariable+' '+nullValue);

//2. Create a concatenated string with the above variables using template literals and without template literals. (separate each variable by space in the string)

console.log(`${myName} ${mobileNumber} ${myHeight} ${trueOrFalse} ${cars} ${undefinedVariable} ${nullValue}`);

//3. Write a JS program to show an alert message on the loading of the website.

window.alert('This is a alert message');
