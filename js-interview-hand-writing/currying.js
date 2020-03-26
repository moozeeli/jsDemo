// 实现
// add(1)(2)(3) //6
// add(1,2,3)(4) //10
// add(1)(2)(3)(4)(5) //15

function add(){
    let result = 0;
    let buf =  [];
    Array.prototype.forEach.call(arguments,value => {
        buf.push(value);
    });
    function temp(){
        Array.prototype.forEach.call(arguments,value => {
            buf.push(value);
        });
        return temp;
    }
    temp.toString = function(){
        return buf.reduce((prev,val)=>prev+val,0); 
    }

    return temp()
}

add(1)(2)(3)