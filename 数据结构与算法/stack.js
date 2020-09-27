
function Stack(){
  this.data = [];
  this.top = -1;
  this.length = function(){
    return this.top+1;
  };
  this.pop = function(){
    if(this.top>=0){
      return this.data[this.top--];
    }else{
      return false;
    }
        
  };
  this.push = function(element){
    this.data[this.length()] = element;
    this.top++;
  };
  this.peek = function(){ 
    return this.data[this.top];
  };
  this.clear = function(){
    this.top = -1;
    this.data = [];
  };
}

let s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);


console.log("长度：",s.length());
console.log(s.pop());
console.log("长度：",s.length());
console.log(s.pop());
console.log("长度：",s.length());
console.log(s.pop());
console.log("长度：",s.length());
console.log(s.pop());
console.log("长度：",s.length());
console.log(s.pop());



//回文算法
function isPalindrome(str){
    
}
