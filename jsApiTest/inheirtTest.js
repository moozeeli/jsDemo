function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(){
    return this.name;
}

let p = new Person('hello',12)
console.log(p);

let result = Object.getPrototypeOf(p);

Object.
             

console.log('result',result);
