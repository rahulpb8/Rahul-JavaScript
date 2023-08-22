//1.
var arr1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];

var result=arr1.map(function(item){
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

//2
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
//3
class ArrayValues {
    constructor(arrInput) {
        this.array = arrInput;
    }
}
const myArray3 = [1, 2, 3, 4, 5, 6];
const myArr = new ArrayValues(myArray3)

console.log(myArr.array);

console.log('\n');
//4
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
//5
(function(){
    console.log("Rahul");
}());

console.log('\n');
//6
const obj = {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' };
let myArray2 = Object.keys(obj);
let reverseMyArray2 = myArray2.reverse();
console.log(reverseMyArray2);

console.log('\n');

//7
var obj1 = { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
const indexOfObject = obj1.data.findIndex(function(object){
    return object.id ==='24';
});

obj1.data.splice(indexOfObject, 1);
console.log(obj1);

console.log('\n');
//8
//a
var string = "Javascript is the King of the web"
console.log(`Length of the string is: ${string.length}\n`);

//b
var character = string[7];
console.log(character+"\n");

//c

//d
console.log("Position of the word King in string is "+string.search("King")+"\n");

//e
var replacedString = string.replace("King", "Emperor");
console.log(replacedString+'\n');

//f
var newString = string.replace("King", "new King");
console.log(newString+'\n');

//g
var arr2 = string.split(' ');
console.log(arr2);
console.log('\n');

//h
var subString = string.substring(11, 22);
console.log(subString+'\n');

//i
let theCount = string.match(/the/g).length;
let ofCount = string.match(/of/g).length;
console.log("the: "+theCount+", of: "+ofCount+'\n');

//j
let padText = string.padStart(40, "*");
console.log(padText+'\n');