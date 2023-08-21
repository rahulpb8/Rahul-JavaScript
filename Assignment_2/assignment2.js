//1
let arr = ["1","2","3","4","5","6","7"];
console.log(arr);
console.log("\n");
//1.a
arr.splice(5, 1);
console.log(arr);
console.log(`The length of array is : ${arr.length}\n`);

//1.b
arr.forEach(function(item){
    const numberItem = Number(item);
    console.log(`value: ${item} datatype: ${typeof numberItem}`)
});
console.log("\n");

//1.c
//Deleting last 3 values of array
arr.pop();
arr.pop();
arr.pop();

console.log(arr);

// To add value beginning of the array
arr.unshift("one", "two");
console.log(arr);

//1.d
const arr1 = ["1", "2", "3", "4", "5", "6", "7"];
let concatString = "";
sum = 0;

arr1.forEach(function(item){
    concatString = concatString+item;
    sum = sum + Number(item);
});
console.log(`\nConcatinated array is: ${concatString}`);
console.log(`Sum of array items is: ${sum} \n`);

//1.e
arrayFiltered = arr1.filter(function(item){
return item!="3";
});
console.log(arrayFiltered);

//1.f
const arr2 = ["1", "2", "3", "4", "5", "6", "7"];

arr2.forEach(function(item){
    if (item ==3 || item == 6 || item == 7){
        console.log(arr2);
    }
});

//1.g
var arr3 = [1, 2, "3", 4, 5, 6,"7"];
var arr4 = ["1", "2", "3", "4", "5", "6", "7"];

for(var i=0; i<=arr3.length-1;i++){
    let arr3value = arr3[i];
    let arr4Value = arr4[i];

    if(typeof arr3value == typeof arr4Value){
        console.log(`Datatype ${typeof arr3[i]} of first array item ${arr3[i]} equal to the datatype of second array item ${arr4[i]}`)
    }
}
console.log("\n");


//1.h
var arr5 = [0,2,3,7,5,6,8];

for(var i=0; i<=arr5.length-1; i++){
    let result = arr5[i]*i;
    
    if(result>40){
        console.log(`multiplication result of ${arr5[i]}*${i}=${result}.\n`)
    }
}

//1.i
const cars = ["Porsche", "Polo", "GTR", "Lambhorgini", "Supra"];
const bikes = ["Continental GT", "MV Agusto", "Triumph Rocket", "Panigale", "SuperDuke"];
const cars_bike = cars.concat(bikes);
console.log(cars_bike);

//2.
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