// A promise is an object representing the
// eventual completion or failure of an asynchrous operation.

// Essentially, a promise is a returned object to which you
// attach callback, instaed of passing callbacks to the function.

// const githubAPIURL = "https://api.github.com/search/users?q=";

// // Fetch API
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Let's inspece each stage

// // fetchResult is a promise type
// const fetchResult = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(fetchResult);

// .then() will wrap return values to a promise if the return value is not promise.
// const response = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (response) => response.json()
// );
// console.log(response);

// // Let's save the fetch data to an object;
// let objectData = {};

// const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     objectData = { ...json };
//     return 10;
//   });

// console.log(objectData);
// console.log("data", data);
// data.then((res) => {
//   console.log("Results ; ", res);
//   console.log(objectData);
// });

// // catch
// const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then(() => {
//     throw new Error("Something failed");
//   })
//   .then((item) => {
//     console.log("Item ");
//     console.log(item);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await
// without async await
// const fetchData = (url) => {
//   console.log("Fetching URL : ", url);
//   const data = fetch(url)
//     .then((response) => response.json())
//     .then((data) => data);
//   return data;
// };

// async function fetchData(url) {
//   const res = await fetch(url);
//   console.log("res : ", res);
//   const data = await res.json();
//   console.log("data : ", data);
//   return data;
// }

// const fetchData = async (url) => {
//   const res = await fetch(url);
//   console.log("res : ", res);
//   const data = await res.json();
//   console.log("data : ", data);
//   return data;
// };

// const fetchURL = "https://jsonplaceholder.typicode.com/todos/1";
// const fetchResult = fetchData(fetchURL);
// console.log("fetchResult : ", fetchResult);
// console.log(fetchResult.then((data) => console.log(data)));


// // Create Promise
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const serverData = {
//       name: "Aung Paing",
//       age: 24,
//     };
//     resolve(serverData);
//   });
//   reject(new Error("something terribly wrong with your code"));
// });

// myPromise
//   .then(
//     (res) => {
//       console.log("enter first then");
//       console.log(res);
//       return res;
//     },
//     (err) => {
//       console.log("Error : ", err);
//     }
//   )
//   .then(
//     (res) => {
//       console.log("enter second then");
//       console.log(res);
//       return res;
//     },
//     (err) => {
//       console.log("Error in second : ", err);
//     }
//   );
