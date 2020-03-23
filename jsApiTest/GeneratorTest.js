let zhijia = function* () {
     yield '苹果';
     yield '🍔';
     return 'done'
}

let a = zhijia()

console.log(a.next());
console.log(a.next());
console.log(a.next());


function* test() {
     for (let i = 0; true; i++) {
          var rest = yield i;
          if (rest) { // 取得传入的next参数
               i = -1
          }
     }
}

var t = test();
t.next(); // 0
t.next(); // 1
t.next(); // 2
t.next(); // 3
t.next(); // 4
t.next(true); // 0