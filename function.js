// Function Declaration (hoisted) (can call it before it is defined)
// function greet(){
//     console.log("hello from func declaration");
// }

// greet();

const btn = document.querySelector("#btn");
const greet = () => {
    console.log("hello from func expression");
}

btn.addEventListener("click", greet);

const add = (a, b) => {
    return a + b;
}

// implicit run arrow function
const addtwo = (a,b) => a + b;

console.log(addtwo(8,5));