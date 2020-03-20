let zhijia = function*(){
     yield '苹果';
     yield '🍔';
     return 'done'
}

let a = zhijia()

console.log(a.next());
console.log(a.next());
console.log(a.next());