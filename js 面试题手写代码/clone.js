
// 实现深复制
var obj1 = { name: "kitty", sex: "female", age: 18, favorite: ["football", "sing", "dancing"] };

function clone(obj){
    if(typeof obj === null) return null;
    if(typeof obj !== 'object'){
        return obj;
    }
    let t = new obj .constructor();
    for(let k in obj){
        t[k] = clone(obj[k]);
    }
    return t;
}


var obj2 = clone(obj1);
console.log(obj2)

function deepClone(obj) { 
    if(obj === null) return null; 
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(typeof obj !== 'object') {
        return obj;
    }
    let t = new obj.constructor();
    for(let key in obj) {
        t[key] = deepClone(obj[key]);
    }
    return t;
}
