function HashTable(){
  this.table = new Array(137);
    
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put =put;
  this.get = get;
  this.show = show;
}

// 散列函数,传入字符串,计算hash值，也就是key值；
function simpleHash(data){
  var total = 0;
  for(let i = 0;i<data.length;i++){
    total += data.charCodeAt(i);
  }
  return total % this.table.length; // 这个hash值是纯数字的
}

// 给total乘以一个质数
function betterHash(data){
  var h = 31;
  var total = 0;
  for(let i = 0;i<data.length;i++){
    total += h*total + data.charCodeAt(i); //这里乘以质数
  }
  // 这一句不太明白
  if(total<0){
    total = this.table.length-1; // 放到数组尾部;
  }
  return total % this.table.length; // 这个hash值是纯数字的
}

// 插入
function put(data){
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

// 取出
function get(key){
  return this.table[key];
}
// 辅助方法，显示数据
function show(){
  var n =0;
  for(let i=0;i<this.table.length;i++){
    if(this.table[i] !== undefined){
      console.log(`key is ${i} -> value is ${this.table[i]}`);
    }
  }
}

// 测试

let ht = new HashTable();
ht.put("china");
ht.put("Japan");
ht.put("America");
ht.put("nicha");
ht.put("24521");
ht.put("34527");
ht.put("976754");
ht.put("764483");

ht.show();