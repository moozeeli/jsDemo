// 测试 handler.get() 中的this
function test1(){
    // test what is handler this;
    var testHandlerThis = {
        message:'hello',
        get(target,keyName,receiver){
            return this.message
        }
    }
    return new Proxy({},testHandlerThis)
}
test1().name; //  'hello' 


// 技巧，在 object 上添加 proxy属性作为代理对象
function test2(){
    let handler = {
        get(target,keyName,receiver){
            if(keyName = 'pro'){ // 设置proxy 属性 为 proxy
                return receiver
            }else{
            }
            Reflect.get(target,keyName,receiver)
        }
    }
    let object = {
        name:1,
        age:2
    }
    object.proxy = new Proxy(object,handler);
    return  object;
}
test2();

// proxy实例作为原型对象
function test3(){
    let proxy = new Proxy({
         name:1,
         age:2
        },{
        get(target,keyName){
            return target[keyName]||'none';
        }
    })
    return Object.create(proxy,{
        a:{value:12},
        name:{value:'lion'}
    })
}
let obj3 = test3();
obj3.a; // 12
obj3.name; // "lion"
obj3.aaa; // "none"

// test apply
function test4(){
    let handler = {
        // 代理函数执行
        apply(target,thisBinding,args){
            console.log("apply print",thisBinding,args);
            return target.apply(thisBinding,args);
        }
    }
    function say(str){
        console.log(`you give a ${str}`)
        return str;
    }

    return new Proxy(say,handler);
}
let func4 = test4();
func4();