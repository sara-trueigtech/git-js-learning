// const numbers = [1, 2, 3, 4];
// const mixed = ["Sara", 21, true, { city: "Indore" }];
// const num = new Array(1, 2, 3);

// console.log(numbers[0]);
// console.log(numbers[2]);

// const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// numbers.forEach(n => console.log(n));

const fruits = ["Apple", "Banana", "Mango"];
const list = document.getElementById("list");
const listItems = fruits.map((f) => {
  const li = document.createElement("li");
  li.textContent = f;
  list.appendChild(li);
});

const nums = [10, 15, 20, 25, 80, 70, 86];
const eventList = document.getElementById("evenList");

const evens = nums.filter((n) => n % 2 === 0);

const eventListItems = evens.map((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  eventList.appendChild(li);
});

const users = [
  { id: 1, name: "Sara" },
  { id: 2, name: "Sneha" },
];

const user = users.find((u) => u.id === 2);
console.log(user);
console.log(nums.find(n => n === 15));

const search = document.getElementById("search");
const numInput = document.getElementById("numInput");
const result = document.getElementById("result");

search.addEventListener("click", () => {
  const value = Number(numInput.value);

  const found = nums.find(n => n === value);

  result.textContent =
    found !== undefined ? `Found: ${found}` : "Not found";
});

const arr = [1,2,3,4,5, 10];

const res = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log("reduce result : ", res);