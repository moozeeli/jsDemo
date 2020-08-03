var fn = ()=>console.log(this);

// 直接调用fn
fn() // window
// 使用call 嗲用 fu
var obj = {};
fn.call(obj); // 还是打印 window, 所以不能用call修改里面的this


var obj2 = {
    foo:function(){
        fn(); 
    }
}
obj2.foo(); // 打印 window

var obj3 = {
    name:'obj3',
    foo:function(){
        let fn = ()=>console.log(this);
        fn();
        
    }
}
obj3.foo() // fn() 打印的 this 是 obj3



var obj4 = {
    name:'obj3',
    foo:function(){
        let fn = ()=>console.log(this);
        return fn;
    }
}
obj4.foo()() // fn() 打印的 this 是 obj3
/*
 箭头函数的this 在声明的时候就已经确定了，
 所以即使return 出来，在全局环境调用，它里面的this也还是 声明时候绑定的this。
 */


//  箭头函数有arguments吗？
var obj5 = {
    name:'obj3',
    foo:function(){
        'use strict';
        
        let fn = ()=>{
            'use strict';
            console.log(arguments);
            console.log(this);
        }
        return fn;
    }
}
obj5.foo('foo的参数')('fn 的参数') 
// fn() 打印的 this 是 obj3, arguments的值是 foo的arguments
/* 
    说明箭头函数没有 arguments
 */



let fn = ()=>{
    console.log(arguments); // error undefined
}
fn();