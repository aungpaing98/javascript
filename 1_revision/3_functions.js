// const arr = [2, 4, 6];

// const anotherArr = arr;

// console.log(arr)
// console.log(anotherArr)
// arr[0] = 100
// console.log(arr)
// console.log(anotherArr)

// // Define a function ( declarative )
// function sums(a, b){
//     return a + b
// }

// // Call a function
// console.log(sums(10, 20))

// // Define a function (expressive)
// const diff = function (a, b) {
//   return a - b;
// };

// console.log(diff(10, 2));

// // Exercise
// // Write both  declarative and expressive function for finding the absolute differnet between two input values
// function diff(a, b){
//     return Math.abs(a-b)
// }
// console.log(diff(10, 20))
// console.log(diff(20, 2))

// // pass by references && pass by values
// function changeValue(a) {
//   a = 20;
// }

// function changeArray(arrayObj) {
//   arrayObj[0] = 10;
// }

// let a = 10;
// console.log(a)
// changeValue(a)
// console.log(a)

// let initialValue = 10;
// let anotherValue = initialValue;

// console.log(initialValue);
// console.log(anotherValue);
// initialValue = 100;
// console.log(initialValue);
// console.log(anotherValue);

// let initialArr = [1, 2, 3];
// let anotherArr = initialArr;

// console.log(initialArr);
// console.log(anotherArr);
// initialArr[0] = 100;
// console.log(initialArr);
// console.log(anotherArr);

// let newArray = [1, 2, 3];
// console.log(newArray)
// changeArray(newArray)
// console.log(newArray)

// Exercise
// Follow the above steps.

// // Pass function as arguments
// const timeTaken = function (func) {
//   const startTime = Date.now();
//   func();
//   let durations = Date.now() - startTime;
//   console.log("Time taken by the function is : ", durations / 1000);
// };

// const sums = function (a = 10, b = 20) {
//   return a + b;
// };

// const addNumbers = function (limit = 1000000000) {
//   let ret = 0;
//   for (let i = 0; i < limit; i++) {
//     ret += i;
//   }
//   return ret;
// };

// timeTaken(addNumbers);

// // Exercise
// // Write a way to log function name before executing that function
// const logFuncName = function (func) {
//   console.log(`Function Name  : ${func.name}`);
//   func();
// };

// const greeting = function () {
//   console.log("Hello World");
// };

// const sum = function (a = 10, b = 20) {
//   console.log(a + b);
// };

// logFuncName(greeting);
// logFuncName(sum, 10, 20);

// // Recursive function
// const factorial = function (n) {
//   return n < 2 ? 1 : n * factorial(n - 1);
// };

// console.log(factorial(4));

// const factorial = function (n) {
//   //   if (n == 1) {
//   //     return 1;
//   //   }
//   //   return n * factorial(n - 1);
//   return n == 1 ? 1 : n * factorial(n - 1);
// };

// console.log(factorial(4));

// // Recursive function ( Dynamic programming )
// // A functional that call itself
// // A base case, terminal case
// // recursive condition
// const fractional = function frac(n){
//     if (n<2){return 1}
//     return n * frac(n-1)
// }
// console.log(fractional(10))

// //Exercise
// // Write a recursive function to print out the even number below input number
// const evenNumber = function (n) {
//   if (n == 1) {
//     return;
//   }
//   if (n % 2 == 0) {
//     console.log(n);
//   }
//   evenNumber(n - 1);
// };

// evenNumber(12)

// // Function Scope

// const PI = 3.1415;

// function getCircleArea(radius) {
//   console.log("PI values : ", PI);
//   let area = PI * radius ** 2;

//   function getDoubleArea() {
//     let doubleArea = area * 2;
//     return doubleArea;
//   }

//   // console.log(doubleArea);
//   console.log(getDoubleArea());
//   return area;
// }

// // console.log(area)
// console.log(getCircleArea(2));

// // Nested Function and Closure
// const sumThree = function(x){
//     return x + 3;
// }
// const sumFive = function(x){
//     return x + 5;
// }
// const sumTen = function(x){
//     return x + 10;
// }

// const sumNumber = function(x){
//     function sums(y){
//         return x + y
//     }
//     return sums
// }

// const sumThree = sumNumber(3)
// console.log(sumThree(5))

// const sumFive = sumNumber(5)
// console.log(sumFive(5))

// // Arrow Function
// const sumThree = (x) => {
//   return x + 3;
// };
// const sumFive = (x) => x + 5;

// const sumEight = (x) => {
//   console.log("This is sum Eight function");
//   return x + 8;
// };

// console.log(sumThree(6));
// console.log(sumFive(6));
// console.log(sumEight(6));

// const getObj = (name, age) => ({ name:name, age:age });
// const getObj = (name, age) => ({ name, age });
// const getObj = (name, age) => ({ [name]: name, [age]: age });

console.log(getObj("Aung Paing", 25));
