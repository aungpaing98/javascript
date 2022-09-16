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
const newArr = new Array("Aung Paing", 24, 178.5, true);
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
// const someThing = arr.push("jogging");
// const anotherThing = arr.push("basketball");
// const hobby = arr.pop();
// console.log(arr);
// console.log(hobby);
// console.log(someThing);
// console.log(anotherThing);

// // Shift
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

// // Iterate an array
// for (let item of arr) {
//   console.log(item);
// }

// arr.forEach((item, idx, arr) => {
//   console.log(item);
// });

// // concat array
// const anotherArr = ["JJ", 23, 183, true];
// const concatArr = arr.concat(anotherArr);

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
const shoppingArr = ["Apple", { ingrediants: ["Salt", "Pepper"] }];
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
//   return item > 20;
// });

// console.log(greaterThanFive);

// // Filter
// const ageGreater20 = ageArr.filter((item, idx, arr) => {
//   return item > 20;
// });

// ageGreater20[0] = 100;
// console.log(ageArr);
// console.log(ageGreater20);

// Mini search program

// const fruits = ["Apple", "Banana", "PineApple"];

// const findFruit = (arr, query) => {
//   return arr.filter((ele) => {
//     return ele.toLowerCase().includes(query.toLowerCase());
//   });
// };

// console.log(findFruit(fruits, "app"));

// Map
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

// [key] is used to create object
// Object destructure
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

console.log(filteredNumbers);
// console.log(filteredNumbers.byteLength);
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
