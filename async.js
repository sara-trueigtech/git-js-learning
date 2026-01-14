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

// creating a promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

// Consuming a Promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const loadData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data loaded success");
    }, 2000);
  });
};

document.querySelector("#load").addEventListener("click", () => {
  document.querySelector("#status").textContent = "Loading...";

  loadData()
    .then((data) => {
      document.querySelector("#status").textContent = data;
    })
    .catch((err) => {
      document.querySelector("#status").textContent = err;
    });
});

function fetchData() {
  return Promise.resolve("raw data");
}

function process(data) {
  return data.toUpperCase();
}

fetchData()
  .then((result) => {
    return process(result);
  })
  .then((final) => {
    console.log(final);
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  }, 1000);
}, 1000);
