var arr = [1, [[2, 3], 4], [5, 6]];

// 不用generator
function flat2(arr){
  let temp = [];
  for(var i = 0; i < arr.length;i++){
    let item = arr[i];
    if(Array.isArray(item)){
      temp.push(...flat2(item));
    }else{
      temp.push(item);
    }
  }
  return temp;
}

for (var f of flat2(arr)){
  console.log(f);
}
console.log("====================================");
console.log();
console.log("====================================");

// 用generator

var flat = function* (arr) {
  
  for(let i=0;i<arr.length;i++) {
    let item = arr[i];
    if (typeof item !== "number") {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)){
  console.log(f);
}