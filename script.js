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

document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent clicked");
});

document.querySelector("#child").addEventListener("click", (e) => 
{
    console.log("child clicked");
    e.stopPropagation();
});
