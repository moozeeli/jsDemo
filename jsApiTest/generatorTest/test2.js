function* test(){
  for(let i=0;true;i++){
    let reset = yield i;
    if(reset) i = -1;
  }
}

let b  = test();

console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next(true));
console.log(b.next());
console.log(b.next());
console.log(b.next());