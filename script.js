// return first matching element
// document.querySelector("#title");
// document.querySelector(".text");
// document.querySelector("button");

// // returns a array like list of all the matched elements
// document.querySelectorAll("p").forEach((p) => {
//   console.log(p);
// });

// // events and event listener
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   alert("button clicked!");
// });

// const input = document.querySelector(".input");

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// event propogation
// Event Flow Order
// Capturing phase (top → target)
// Target phase
// Bubbling phase (target → top)

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked");
// });

// document.querySelector("#child").addEventListener("click", (e) => 
// {
//     console.log("child clicked");
//     e.stopPropagation();
// });

// DOM manipulation
const heading = document.querySelector("#heading");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    heading.textContent = "hello world";
})

const box = document.querySelector("#box");
const htmlBtn = document.querySelector("#htmlBtn");

htmlBtn.addEventListener("click", () => {
  box.innerHTML = "<h2>Bold Text</h2><p>This is paragraph</p>";
});

// Inline styles
const para = document.querySelector("#para");
const styleBtn = document.querySelector("#styleBtn");

styleBtn.addEventListener("click", ()=> {
    para.style.color = "red";
    para.style.backgroundColor = "yellow";
})


//classList => JS only adds/removes class and CSS handles styling
const text = document.querySelector("#text");
const classBtn = document.querySelector("#classBtn");

classBtn.addEventListener("click", () => {
    text.classList.toggle("active");
})

// element.classList.add("active");
// element.classList.remove("active");
// element.classList.toggle("active");
// element.classList.contains("active"); // true/false

const img = document.querySelector("#photo");

imgBtn.addEventListener("click", () => {
  img.setAttribute("src", "cat.jpg");
  img.setAttribute("alt", "Cute cat");
});

const list = document.querySelector("#list");
const add = document.querySelector("#add");

add.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "new item";

    list.appendChild(li);
})