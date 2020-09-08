function msResolve(ms){
  return new Promise((resolve,reject)=>{
    console.log("开始执行");
    console.log("。。。。");
    setTimeout(resolve, ms,"done");
  }); 
}  

// msResolve(2000).then(_=>console.log(_));

// resolve 传入promise

var p1 = new Promise((resolve,reject)=>{
  console.log("p1 执行");
    
  setTimeout(resolve,2000,"done");
});

var p2 = new Promise((resolve,reject)=>{
  console.log("p2 执行");
    
  resolve(p1); // resolve 传入 promise， p1的状态会影响p2
});

// p2.then(_=>{console.log(_)})

// ******************** catch error ********************
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
  
someAsyncThing().then(function() {
  console.log("everything is great");
});
  
setTimeout(() => { console.log(123); }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123


process.on("unhandleRejection",function(err, p){
  throw err;
});