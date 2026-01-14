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

// const btn = document.querySelector("#btn");
// const text = document.querySelector("#text");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     text.textContent = "This appears after 2 seconds";
//   }, 2000);
// });

// // creating a promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed");
//   } else {
//     reject("Task failed");
//   }
// });

// // Consuming a Promise
// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const loadData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data loaded success");
//     }, 2000);
//   });
// };

// document.querySelector("#load").addEventListener("click", () => {
//   document.querySelector("#status").textContent = "Loading...";

//   loadData()
//     .then((data) => {
//       document.querySelector("#status").textContent = data;
//     })
//     .catch((err) => {
//       document.querySelector("#status").textContent = err;
//     });
// });

// function fetchData() {
//   return Promise.resolve("raw data");
// }

// function process(data) {
//   return data.toUpperCase();
// }

// fetchData()
//   .then((result) => {
//     return process(result);
//   })
//   .then((final) => {
//     console.log(final);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("Done");
//     }, 1000);
//   }, 1000);
// }, 1000);

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Data received"), 2000);
//   });
// }

// async function getData() {
//   const result = await fetchData();
//   console.log(result);
// }

// getData();

// async / await
const fetchMessage = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello from async/await");
    }, 2000);
  });
};

document.querySelector("#btnfetch").addEventListener("click", async () => {
  document.querySelector("#output").textContent = "Loading...";

  const message = await fetchMessage();
  document.querySelector("#output").textContent = message;
});

// try / catch (ERROR HANDLING)
const fakeApi = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Server error"), 2000);
  });
};

document.querySelector("#loadt").addEventListener("click", async () => {
  try {
    const data = await fakeApi();
    document.querySelector("#msg").textContent = data;
  } catch (error) {
    document.querySelector("#msg").textContent = error;
  }
});

// API CALLS
document.querySelector("#api").addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const list = document.querySelector("#list");
    list.innerHTML = "";

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });
  } catch (error) {
    console.log("API error", error);
  }
});

