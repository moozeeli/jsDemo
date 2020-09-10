// yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
function* test(){
  yield console.log(1);
  let a = yield+1;
  return a+2;
}

let a = test();



console.log(a.next(1));
console.log("====================================");
console.log(a.next(2));
console.log("====================================");
console.log(a.next(3));