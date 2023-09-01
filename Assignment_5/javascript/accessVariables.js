//3 Create a private variable and console it by accessing it.

class MyClass {
    #privateVariable = "Private variable value";
    getValue(){
        return this.#privateVariable;
    }
    setValue(value) {
        this.#privateVariable = value;
    }
}
let obj = new MyClass();
console.log(obj.getValue());
obj.setValue("Value changed");
console.log(obj.getValue());


//4 Create a static variable and console it by accessing it.

class MyClass2 {
    static staticVariable = 'I am Rahul';
}
console.log(MyClass2.staticVariable);
