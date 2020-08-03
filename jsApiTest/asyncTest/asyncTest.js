

async function add(num){
    const a =1;
    return num +1; // 自动包装成promise
}

add(2) // 的值是promise,所以可以调用then();
console.log(add(2));

add(2).then(num=>{
    console.log('async return then: '+num);
})




//对业务函数进行封装
function settime(row) {
    return new Promise(resolve =>
      setTimeout(() => {
        //业务函数处理，注意业务函数也要处理成同步格式，否则会造成异步阻塞
        console.log(row);
        //核心需要返回promise格式的数据，不要返回错误。错误请自行处理业务函数逻辑，否则并发停止
        resolve();
      }, 1000)
    );
  }
  //async/await函数语法糖处理，利用for循环模拟并发10个的情况
  async function bingfa() {
    for (var i = 0; i < 10; i++) {
      //业务函数调用
      await settime(i);
    }
  }
  
bingfa();