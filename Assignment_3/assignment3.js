/*eslint linebreak-style: ["error", "unix"]*/

//1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
//console each item by using switch statement.
//var arr1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];

let result=arr1.map(function(item){
    switch (arr1.indexOf(item)){
        case arr1.indexOf(item):
            console.log(item);
            break;
        case 'default':
            console.log(item);
            break;
    }
});
console.log("\n");

//2. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
let myArray = [1, 2, 3, 4, 5, 6];
function deleteIndex(array){
    function deleteValues(){
        array.splice(5, 1);
        array.splice(2, 1);
        console.log(array);
    };
    return deleteValues
}
const newMyArray = deleteIndex(myArray);
newMyArray();

console.log('\n');
//3. Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
class ArrayValues {
    constructor(arrInput) {
        this.array = arrInput;
    }
}
const myArray3 = [1, 2, 3, 4, 5, 6];
const myArr = new ArrayValues(myArray3)

console.log(myArr.array);

console.log('\n');
// 4. Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finnally console the output.
function arrayFunction(arr, value){
    if(!arr.includes(value)){
        arr.push(value);
    }
    else{
        arr.splice(arr.indexOf(value), 1);
    }
    console.log(arr)
}
const myArray4 = ['suresh', 'ramesh', 34, 'kannur'];
arrayFunction(myArray4, "suru");

console.log('\n');
//5. Create a self-invoking function to console you name.
(function(){
    console.log("Rahul");
}());

console.log('\n');
//6. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
const obj = {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' };
let myArray2 = Object.keys(obj);
let reverseMyArray2 = myArray2.reverse();
console.log(reverseMyArray2);

console.log('\n');

// 7. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different 
// every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )
let obj1 = { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
const indexOfObject = obj1.data.findIndex(function(object){
    return object.id ==='24';
});

obj1.data.splice(indexOfObject, 1);
console.log(obj1);

console.log('\n');
//8. Given var string = "Javascript is the King of the web."
//a Get the length of the string.
let string = "Javascript is the King of the web"
console.log(`Length of the string is: ${string.length}\n`);

//b  Print the 8th character of the string without using any function
let character = string[7];
console.log(character+"\n");

//c Execute the above code from browser console.

//d Get the position of the word "King" in string.
console.log("Position of the word King in string is "+string.search("King")+"\n");

//e Replace "King" with "Emperor".
let replacedString = string.replace("King", "Emperor");
console.log(replacedString+'\n');

//f Insert the string "new” before the word "King".
let newString = string.replace("King", "new King");
console.log(newString+'\n');

//g Get the words in string as an array.
let arr2 = string.split(' ');
console.log(arr2);
console.log('\n');

//h Extract and print the words "is the King" from string.
let subString = string.substring(11, 22);
console.log(subString+'\n');

//i Get the count of occurrences of the strings "the" and "of" in string.
let theCount = string.match(/the/g).length;
let ofCount = string.match(/of/g).length;
console.log("the: "+theCount+", of: "+ofCount+'\n');

//j pad string with "*" and set the total length of the string as 30, displayed at right side.
let padText = string.padStart(40, "*");
console.log(padText+'\n');
