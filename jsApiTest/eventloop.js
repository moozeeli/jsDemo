const fs = require("fs");

setImmediate(() => {
  console.log("immediate1");
});

 
fs.readFile("test.text", () => {
  console.log("readFile");
  setTimeout(() => {
    console.log("timeout2");
    
  }, 0);
  setImmediate(() => {
    console.log("immediate2");
  });
});

setTimeout(() => {
  console.log("timeout1");
}, 0);




