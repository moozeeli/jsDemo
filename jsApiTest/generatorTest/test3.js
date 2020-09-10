// 状态机测试，修改内部状态

function* test(){
  let a = 1;
  let b = 2;
  yield {"plus":a+b};
  yield {"cut":a-b};
  yield {"乘":a*b};
}

console.log([...test()]);

let result = test();
console.log(result.next());
console.log(result.next());
console.log(result.next());