// left 是对象， right 是构造函数
function instance_of(left,right){
    let prototype = left.__proto__;
    while(true){
        if(prototype===null){
            return false;
        }else if(prototype.constructor  === right){
            return true;
        }
        prototype = prototype.__proto__;
    }
}

//test

function Person(){

}

var a = new Person();

console.log( instance_of(a,Person));
console.log( instance_of(a,Object));
console.log( instance_of(a,Array));
console.log( instance_of(a,Function));