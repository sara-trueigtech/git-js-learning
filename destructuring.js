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
  name + " - " + branch;
