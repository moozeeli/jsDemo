let obj = {};
obj[Symbol.iterator] = function* (){
  yield 1;
  yield 2;
  yield 3;
  return 4; // 不会输出
};

console.log("====================================");
console.log(...obj);
console.log("====================================");