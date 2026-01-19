// objects and classes
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

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return "Hello, my name is " + this.name;
//   }
// }

// const user1 = new User("Sara", 21);
// const user2 = new User("John", 25);


// console.log(user1.name);
// console.log(user2.name);
// console.log(user1.age);
// console.log(user2.age);
// console.log(user1.greet());
// console.log(user2.greet());

// encapsulation
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   updateAge(newAge) {
//     if (newAge > 0) {
//       this.age = newAge;
//     }
//   }
// }

// const u = new User("sara", 21);
// console.log(u.name);
// console.log(u.age);

// u.updateAge(25);
// console.log("updated age", u.age);

// inheritance
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return "Hello " + this.name;
//   }
// }

// class Admin extends User {
//   constructor(name, role) {
//     super(name);
//     this.role = role;
//   }

//   getRole() {
//     return this.role;
//   }
// }

// const admin = new Admin("Sara", "Developer");
// const user = new User("Sara", "Developer");
// console.log(admin.greet());    // inherited
// console.log(admin.getRole());   // own method

// polymorphism
// class User {
//   greet() {
//     return "Hello User";
//   }
// }

// class Admin extends User {
//   greet() {
//     return "Hello Admin";
//   }
// }

// const u = new User();
// const a = new Admin();

// console.log(u.greet());
// console.log(a.greet()); 

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, I am " + this.name + " " + this.age;
  }
}

class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  greet() {
    return "Hello, I am admin " + this.name + " " + this.age;
  }
}

const output = document.getElementById("output");

document.getElementById("createUser").addEventListener("click", () => {
  const user = new User("Sara", 21);
  output.textContent = user.greet();
});

document.getElementById("createAdmin").addEventListener("click", () => {
  const admin = new Admin("Sara", 25, "Developer");
  output.textContent = admin.greet();
});
