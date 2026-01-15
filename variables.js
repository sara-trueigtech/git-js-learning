var name = "Sara";
document.getElementById("output").textContent = name;

if (true) {
  var x = 10;
}

console.log(x);

console.log(score); // undefined
var score = 100;

// if (true) {
//   let age = 21;
// }

// console.log(age); // Error

// let x = 10;
// let x = 20; // Error

// console.log(a); // Error
// let a = 5;

let number = 0;

document.getElementById("btn").addEventListener("click", () => {
  number++;
  document.getElementById("num").textContent = number;
});

// cannot reassign but mutation is allowed. same reference but internal data is changed.
const user = {
  name: "Sara",
  age: 21
};

user.age = 22; // allowed

const nums = [1, 2, 3];
nums.push(4); // allowed

try {
  document.getElementById("msg").textContent = value;
  let value = 100;
} catch (err) {
  document.getElementById("msg").textContent = err.message;
}

const obj = { value: 1 };

document.getElementById("change").addEventListener("click", () => {
  obj.value = 2;
  document.getElementById("out").textContent = obj.value;
});

