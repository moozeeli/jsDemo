// 实现下面的功能
// add(1)(2)(3) //6
// add(1,2,3)(4) //10
// add(1)(2)(3)(4)(5) //15

function add(x){
    let result = [...arguments].reduce((pre,item)=>pre+item,0);
    return function(y){
        return result+y;
    }
}

add(1)(2)(3) //6
add(1,2,3)(4) //10
add(1)(2)(3)(4)(5) //15