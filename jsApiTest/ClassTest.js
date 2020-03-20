class Person{
    constructor(age){
        this.age = age;
    }
    test(){
        console.log("age",this.age);
        
    }
}

class Man extends Person{
    constructor(age,name){
        super(age);
        this.name =name;
    }
    sayName(){
        console.log('name is',this.name);
        
    }
}


var litong = new Man(28,'litong')
litong.sayName();
litong.test()