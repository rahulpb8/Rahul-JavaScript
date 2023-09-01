//1
let arr = ["1","2","3","4","5","6","7"];
console.log(arr);
console.log("\n");
//1.a Remove number "6" from the array and console the length of the array.
arr.splice(5, 1);
console.log(arr);
console.log(`The length of array is : ${arr.length}\n`);

//1.b Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.
arr.forEach(function(item){
    const numberItem = Number(item);
    console.log(`value: ${item} datatype: ${typeof numberItem}`)
});
console.log("\n");

//1.c Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 
//Deleting last 3 values of array
arr.pop();
arr.pop();
arr.pop();

console.log(arr);

// To add value beginning of the array
arr.unshift("one", "two");
console.log(arr);

//1.d Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)
const arr1 = ["1", "2", "3", "4", "5", "6", "7"];
let concatString = "";
sum = 0;

arr1.forEach(function(item){
    concatString = concatString+item;
    sum = sum + Number(item);
});
console.log(`\nConcatinated array is: ${concatString}`);
console.log(`Sum of array items is: ${sum} \n`);

//1.e Filter out item "3" from the array and console the array (use any array method)
arrayFiltered = arr1.filter(function(item){
return item!="3";
});
console.log("Array after filtering item 3");
console.log(arrayFiltered);

//1.f Iterate the array and console the item, when item is either "3", "6" or "7"
const arr2 = ["1", "2", "3", "4", "5", "6", "7"];
console.log(`\nIterating and printing the array when the item is either "3" or "6" or "7"`)
arr2.forEach(function(item){
    if (item ==3 || item == 6 || item == 7){
        console.log(arr2);
    }
});

//1.g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
console.log("\nComparing and console when the datatype matches of two arrays")
let arr3 = [1, 2, "3", 4, 5, 6,"7"];
let arr4 = ["1", "2", "3", "4", "5", "6", "7"];
console.log(arr3,arr4);

for(let i=0; i<=arr3.length-1;i++){
    let arr3value = arr3[i];
    let arr4Value = arr4[i];

    if(typeof arr3value == typeof arr4Value){
        console.log(`Datatype ${typeof arr3[i]} of first array item ${arr3[i]} equal to the datatype of second array item ${arr4[i]}`)
    }
}
console.log("\n");


//1.h [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.
let arr5 = [0,2,3,7,5,6,8];

for(let i=0; i<=arr5.length-1; i++){
    let result = arr5[i]*i;
    
    if(result>40){
        console.log(`multiplication result of ${arr5[i]}*${i}=${result}.\n`)
    }
}

//1.i. Create two arrays with five items each and merge the array into a single array and then console it.
const cars = ["Porsche", "Polo", "GTR", "Lambhorgini", "Supra"];
const bikes = ["Continental GT", "MV Agusto", "Triumph Rocket", "Panigale", "SuperDuke"];
const cars_bike = cars.concat(bikes);
console.log(cars_bike);

//2.    
//    *
//   * *
//  * * *
// * * * *
//* * * * *

​//Console this star pattern

let n=5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        string += " "
    }

    for(let k=0; k<=i-1; k++){
        string += "* "
    }
    string += "\n";
}
console.log(string);
