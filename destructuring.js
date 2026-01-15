const student = {
  name: "Sara Khan",
  cgpa: 9.1,
  branch: "CSE",
  age: 21,
  address: {
    city: "Indore",
    pincode: 452001
  }
};

const { name, branch } = student;//asic Object Destructuring
const { name: userName, age: userAge } = student; //enaming Variables
const { country = "India" } = student; //property maybe missing for that we have default values
const {
  address: { city, pincode }
} = student; //Nested Object Destructuring

document.getElementById("output").textContent =
    userName + " - " + branch;


  const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);  // Red
console.log(second); // Green

const [,, third] = colors;

console.log(third); // Blue

const [a, b = 10] = [5]; //Default Values

// Swapping Values
let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y);

const [f, ...others] = [1, 2, 3, 4];
console.log(f, others);

const arr = [15];

console.log(arr[0]?.name);

