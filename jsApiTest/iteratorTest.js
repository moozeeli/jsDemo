let it = mackIterator(["a","b"]);
it.next();
// it.next();
// it.next();
function mackIterator(arr){
  let nextIndex=0;
  return {
    next: function(){
      return {
        value:arr[nextIndex],
        done:nextIndex++>=arr.length
      };
    }
  };
}



// 2

let it2 = mackIterator2(["aaa","bbb"]);

function mackIterator2(arr){ 
  let nextIndex = 0;
  return {
    next: function(){
      return {
        value:arr[nextIndex],
        done:nextIndex++>=arr.length
      };
    }
  };
}

it2.next();


// 3 
let it3 = mackIterator3([1,2,3,4]);

it3.next();
function mackIterator3(arr){
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex>=arr.length?
        {
          done:true
        }:{
          vaue:arr[nextIndex++]
        };
    }
  };
}



// 遍历器 模拟无限数据

let it4 = mackIterator4([1,3,4]);

it4.next();

function mackIterator4(){
  let i = 0;
  return {
    next:function(){
      return i++;
    }
  };
}
// create a  iterable Obj

let obj ={
  [Symbol.iterator]: function(){
    let i=0;
    return {
      next(){
        return i<=10?
          { value:i++ }:
          { done:true };
      }
    };
  }
};

for (const item of obj) {
  console.log("for of ",item);
}


// 用class 实现遍历器生成函数
class rangeIterator {
  constructor(start,end){
    this.value=start;
    this.end = end;
  }
  [Symbol.iterator](){
    return this;
  }
  next(){
    if(this.value<=this.end){
      return {
        value:this.value++,
      };
    }else{
      return {
        done:true,
      };
    }
  }
}

let arr =new rangeIterator(1,9);
for(let i of arr){
  console.log(i);
}



