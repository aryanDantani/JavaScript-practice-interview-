// Asynchronous programming is a programming paradigm that allows non-blocking operations,
// enabling the program to continue executing other tasks while waiting for a time-consuming operation (like fetching data from an API or reading a file) to complete.
// In JavaScript, this is essential for creating efficient and responsive applications, especially for web development.

// Key Concepts in Asynchronous Programming:
// Callback Functions: A function passed as an argument to another function to be executed later.
// Promises: Objects that represent a value that might be available now, or in the future, or never.
// Async/Await: A syntactic sugar built on Promises that makes asynchronous code look more like synchronous code.

// 1. Using Callbacks

console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000); // Non-blocking code

console.log("End");

// 2. Using Promises

console.log("Start");

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("End");

// 3. Using Async/Await

console.log("Start");

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData(); // Waits for the promise to resolve
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();

console.log("End");
