// Function Declaration (hoisted) (can call it before it is defined)
// function greet(){
//     console.log("hello from func declaration");
// }

// greet();

// const btn = document.querySelector("#btn");
// const greet = () => {
//     console.log("hello from func expression");
// }

// btn.addEventListener("click", greet);

// const add = (a, b) => {
//     return a + b;
// }

// // implicit run arrow function
// const addtwo = (a,b) => a + b;

// console.log(addtwo(8,5));

// this behavior in Normal Function
// const obj = {
//   name: "Sara",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// obj.greet(); 

// this behavior in arrow Function
// Arrow functions DO NOT have their own this They take this from parent scope
// const obj = {
//   name: "Sara",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// obj.greet(); 

// Event Listener Difference Arrow (BAD here)
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log(this); // window object
// });

// Normal (GOOD)
// btn.addEventListener("click", function () {
//   console.log(this); // button
// });

