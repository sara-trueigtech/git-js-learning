// syncronous code
// console.log("Start");
// console.log("Middle");
// console.log("End");

// // ASYNCHRONOUS
// console.log("Start");

// setTimeout(() => {
//   console.log("Middle");
// }, 2000);

// console.log("End");

const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "This appears after 2 seconds";
  }, 2000);
});