// // Define a function
// function sums(a, b){
//     return a + b
// }

// // Call a function
// console.log(sums(10, 20))

// // pass by references && pass by values
// function changeValue(a){
//     a = 20
// }

// function changeArray(arrayObj){
//     arrayObj[0] = 10
// }

// let a = 10;
// console.log(a)
// changeValue(a)
// console.log(a)

// let newArray = [1, 2, 3];
// console.log(newArray)
// changeArray(newArray)
// console.log(newArray)

// // Pass function as arguments
// const timeTaken = function (func) {
//   const startTime = Date.now();
//   func();
//   let durations = Date.now() - startTime;
//   console.log("Time taken by the function is : ", durations/1000);
// };

// const sums = function (a, b) {
//   return a + b;
// };

// const addNumbers = function(limit = 1000000000){
//     let ret = 0;
//     for (let i=0; i<limit; i++){
//         ret += i
//     }
//     return ret
// }

// timeTaken(addNumbers)

// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// console.log(fac(10));

// // Function Scope
// const PI = 3.1415;

// function getCircleArea(radius) {
//   let parameter = 2 * PI * radius;

//   function getParameter() {
//     console.log(`Inside Inside Function : `, parameter);
//   }
//   getParameter()
//   return PI * radius ** 2;
// }

// console.log(parameter)
// console.log(getCircleArea(10));

// // Recursive function ( Dynamic programming )
// // A functional that call itself
// // A base case, terminal case
// // recursive condition
// const fractional = function frac(n){
//     if (n<2){return 1}
//     return n * frac(n-1)
// }
// console.log(fractional(10))


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