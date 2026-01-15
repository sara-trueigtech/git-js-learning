let user = {
  name: "John",
  age: 30,
  isAdmin: true,
}; //object literal

const admin = new Object(); //object constructor
admin.name = "Sara";
admin.age = 21;


// let admin = user;
// admin.name = "sARA";
document.getElementById("btn").addEventListener("click", () => {
  // alert( user.hello === undefined );
  // alert( "adfdcyhsvchjvge" in user );
//   for (let key in user) {
//     // keys
//     alert(key); // name, age, isAdmin
    // // values for the keys
    // alert(user[key]); // John, 30, true
    alert(user.name);
});
