// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// }; //object literal

// const admin = new Object(); //object constructor
// admin.name = "Sara";
// admin.age = 21;

// // let admin = user;
// // admin.name = "sARA";
// document.getElementById("btn").addEventListener("click", () => {
//   // alert( user.hello === undefined );
//   // alert( "adfdcyhsvchjvge" in user );
// //   for (let key in user) {
// //     // keys
// //     alert(key); // name, age, isAdmin
//     // // values for the keys
//     // alert(user[key]); // John, 30, true
//     alert(user.name);
// });

// const user = {
//   name: "Sara",
//   greet: function () {
//     return "Hello " + this.name;
//   },
//   age: 21,
// };

// console.log(user.greet());
// // this refers to the object only in normal functions, not arrow functions.

// console.log(user.name, user.age); //Dot Notation (PREFERRED)
// console.log(user["name"]); //Bracket Notation (WHEN REQUIRED)
// const key = "name";
// console.log(user[key]);

// const student = {
//   name: "Sara Khan",
//   course: "CSE",
//   cgpa: 9.1,
// };

// document.getElementById("info").textContent = student.name + " - " + student.course;

let user = {
  name: "Sara",
  age: 21
};

document.getElementById("age").textContent = user.age;

document.getElementById("update").addEventListener("click", () => {
  user = {
    ...user,
    age: user.age + 1
  };

  document.getElementById("age").textContent = user.age;
});

// user.age = 22; // mutation - This changes the same object reference.

// const updatedUser = {
//   ...user,
//   age: 22
// }; //IMMUTABLE Object Update - Reference changes, React detects updates, Predictable behavior
