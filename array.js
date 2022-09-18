// // Array can contain different data types as element.
// // Array shape is resizable
// // Array is zero-index
// // Array copy is shadow copy

// // Create array [Array Literal]
// const arr = ["Aung Paing", 24, 178.5, true];

// // Access Array
// console.log(arr[0], arr[100]);

// // Modify Array
// arr[2] = "178";
// console.log(arr);

// // Create with constructor
const newArr = Array("Aung Paing", 24, 178.5, true);
// console.log(newArr);
// console.log(newArr.length)

// // Create array from string
// const names = "Aung Paing, LTE";
// const nameArr = names.split(", ");
// console.log(nameArr);

// const nameStr = nameArr.join(" - ");
// console.log(nameStr);

// // Attribute and Methods of array
const arr = ["Aung Paing", 24, 178.5, true];
// console.log(arr.length);

// let arrLength = 0;
// let currentElement = arr[arrLength];
// while (currentElement != undefined) {
//   arrLength++;
//   currentElement = arr[arrLength];
// }
// console.log(arrLength);

// // Index of // Include
// console.log(arr.indexOf(24));
// console.log(arr.includes(178));

// // Push Pop
// arr.push("Jogging", "something");
// arr.pop()
// const hobby = arr.pop();
// console.log(arr);
// console.log(hobby);
// console.log(someThing);
// console.log(anotherThing);

// Shift
// const removeItem = arr.shift()
// console.log(arr)

// arr.unshift("Jogging");
// console.log(arr);

// // Splice to remove many elements
// const removedItems = arr.splice(-2);
// console.log(arr);
// console.log(removedItems);

// // Remove first 2 item
// const removeItems = arr.splice(0, 2);
// console.log(arr);
// const age = arr.splice(arr.indexOf(24), 1);
// console.log(arr);

// // Replace element
// arr.splice(1, 2, 30, 150, 24);
// console.log(arr);

// // Exercise
// // Replace ['AA', 20, 170] to ['CC', 40, 170]
// const test = ["JJ", 24, 178, "AA", 20, 170, "BB", 30, 180];
// const replaceElements = ["CC", 40, 170];
// test.splice(test.indexOf("AA"), 3, ...replaceElements);
// console.log(test);
// function replaceEle(arr, originEle, newEle) {
//   arr.splice(arr.indexOf(originEle[0]), originEle.length, ...newEle);
// }

// const originArr = ["AA", "BB", "CC"]
// console.log(originArr)
// replaceEle(originArr, ["BB", "CC"], ["DD"]);
// console.log(originArr)

// // concat array
// const anotherArr = ["JJ", 23, 183, true];
// const concatArr = arr.concat(anotherArr);

// // Iterate an array
// for (let item of arr) {
//   console.log(item);
// }

// arr.forEach((item, idx, arr) => {
//   console.log(item);
// });

// console.log(arr);
// console.log(anotherArr);
// console.log(concatArr);

// Copy array (shadow copying)

// // Spread Method
// let arrCopy = [...arr];
// // let arrCopy = [arr[0], arr[1], arr[2], arr[3]]

// // Array from method
// let arrCopy = Array.from(arr)

// // Slice method
// let arrCopy = arr.slice()

// arr[0] = "JJ";
// console.log(arr);
// console.log(arrCopy);

// // Demostration of shadow copy
// const shoppingArr = ["Apple", { ingrediants: ["Salt", "Pepper"] }];
// const copyArr = [...shoppingArr];
// // const copyArr = [shoppingArr[0], shoppingArr[1]]

// shoppingArr[0] = "PineApple";
// shoppingArr[1].ingrediants = ["Chilli"];
// // shoppingArr[1] = { ingrediants: ["Chilli"] };

// console.log(shoppingArr);
// console.log(copyArr);

// // Copy (deep copy)
// const deepCopyArr = JSON.parse(JSON.stringify(shoppingArr))

// shoppingArr[0] = "PineApple";
// shoppingArr[1].ingrediants = ["Chilli"];

// console.log(shoppingArr);
// console.log(deepCopyArr)

// Exercise
// Create a shadow copy and deep copy of an array and see the difference.

// // Dangerous aspect of array

// Variable Array Length
// const fruits = ["Banana", "Apple"];
// console.log(fruits.length);

// fruits[2] = "PineApple";
// console.log(fruits);
// console.log(fruits.length);

// fruits[10] = "Strawberry";
// console.log(fruits);
// console.log(fruits.length);

// // fruits.forEach((item) => {
// //   console.log(item);
// // });

// console.log(fruits[4]);

// fruits.length = 100;
// console.log(fruits);

// for (const item in shoppingArr) {
//   console.log(item);
// }

// for (const item of shoppingArr) {
//   console.log(item);
// }

// // Fill
// const tempGirls = Array(5).fill("girl", 0);
// tempGirls.fill("boy", 2);
// console.log(tempGirls);

// // every
const ageArr = [10, 20, 30, 12, 40];
// const greaterThanFive = ageArr.every((item, idx, arr) => {
//   console.log(item, idx);
//   return item > 20;
// });

// console.log(greaterThanFive);

// // Filter
// // Filter will return a new array
// const ageGreater20 = ageArr.filter((item, idx, arr) => {
//   return item > 20;
// });

// ageGreater20[0] = 100;
// console.log(ageArr);
// console.log(ageGreater20);

// // Mini search program

// const fruits = ["Apple", "Banana", "PineApple"];
// const findFruit = (arr, query) => {
//   return arr.filter((ele) => {
//     return ele.toLowerCase().includes(query.toLowerCase());
//   });
// };
// console.log(findFruit(fruits, "app"));

// Exercise
// What is the algorithm used for above method? Greedy Search
// Write above program again without using return

// Dicussion
// Can we make a copy with filter?
// Is the copy deep copy or shadow copy?

// Map
// const numbers = [1, 2, 3, 4];
// let double = numbers.map((num, idx, arr) => {
//   return num ** 2;
// });

// Combine filter and map
// let doubleEven = numbers
//   .filter((num, idx, arr) => {
//     return num % 2 == 0;
//   })
//   .map((num, idx, arr) => {
//     return num ** 2;
//   });

// console.log(doubleEven);
// console.log(numbers);
// console.log(double);

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// [key] is used to create object
// Object destructure
// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// Exercise
// const initialArr = Array(100).fill(0);
// let modifiedArr = initialArr.map((item, idx, arr) => idx);
// initialArr.forEach((item, idx, arr) => {
//   initialArr[idx] = idx;
// });

// let filterArr = initialArr.filter((item, idx, arr) => {
//   return item % 2 == 0 && item % 8 != 0;
// });

// let ret = filterArr.map((item, idx, arr) => {
//   return item ** 2;
// });

// console.log(ret);

// // Custom Implementation of the map function
// console.log(newArr);
// newArr.__proto__.customForEach = (func) => {
//   for (let i = 0; i < newArr.length; i++) {
//     newArr[i] = func(newArr[i], i, newArr);
//   }
// };

// newArr.customForEach((item, idx, arr) => {
//   return item + 1;
// });
// console.log(newArr);

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
let ret = numArr.reduce((pre, cur, idx, arr) => {
  return pre + cur;
});

console.log(numArr);
console.log(ret);
