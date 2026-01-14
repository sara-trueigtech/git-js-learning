// syncronous code
console.log("Start");
console.log("Middle");
console.log("End");

// ASYNCHRONOUS
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 2000);

console.log("End");
