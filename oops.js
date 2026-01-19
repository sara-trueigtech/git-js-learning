// const user = {
//   name: "Sara",
//   age: 21,
//   greet: function () {
//     return "Hello, my name is " + this.name;
//   }
// };
//  console.log(user.name);
//  console.log(user.age);
//  console.log(user.greet());

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, my name is " + this.name;
  }
}

const user1 = new User("Sara", 21);
const user2 = new User("John", 25);


console.log(user1.name);
console.log(user2.name);
console.log(user1.age);
console.log(user2.age);
console.log(user1.greet());
console.log(user2.greet());