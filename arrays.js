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
const list  = document.getElementById("list");
const listItems = fruits.map((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    list.appendChild(li);
});
