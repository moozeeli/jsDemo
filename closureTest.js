function CreatePersonInfoManager(person){
  function showName(){
    console.log(person.name);
  }
  function changeName(newName){
    person.name = newName;
  }
  return {
    showName,
    changeName
  }
}

let person1 = {name:'jack',age:20};
let personInfoManager = CreatePersonInfoManager(person1);
personInfoManager.showName();
personInfoManager.changeName('wang');
personInfoManager.showName();
console.log(person1); 



//  这是一道面试题
window.name = 'windowName'
let person = {
  name:'jack',
  sayName(){
    console.log(this.name);
  },
  returnSayName(){
    return this.sayName;
  }
}
person.sayName(); //  1 打印什么？
person.returnSayName()(); //  2 打印什么？
let sayName3 = person.sayName;
sayName3(); // 3 打印什么？
