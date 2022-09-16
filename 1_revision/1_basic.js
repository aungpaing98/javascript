// // Hello World
// console.log("Hello World");

// // Define a variables
// a = 10;
// var b = 20;
// let c = 30;
// const d = 40;
// console.log(a, b, c, d);

// // Conditional and Loops
// const threshold = 5
// let a = 2;
// if (a>threshold){
//     console.log(`a is greater than ${threshold}`)
// }else{
//     console.log(`a is less than ${threshold}`)
// }

// for (initializer, condition, final-expression){
//     code-block;
// }
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// initialize
// while(condition){
//     code-block;
//     final-expression
// }
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// // function
// function fun_name(args){
//     code-block;
// }
// function sums(a, b) {
//   let ret = a + b;
//   console.log(`sum of ${x} and ${y} are ${ret}`);
//   return ret;
// }

// let x = 10,
//   y = 20;
// sums(x, y);

// // class
// class class_name{
//     class_attribute;
//     constructor(args){
//         object_attribute;
//     }
//     methods
// }
// class Rectangle {
//   PI = 3.14;
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   getArea() {
//     return this.height * this.width;
//   }
// }
// rect1 = new Rectangle(10, 20);
// console.log(rect1.height, rect1.width, rect1.getArea());
// rect1.height = 30;
// console.log(rect1.height, rect1.width, rect1.getArea());
// console.log(rect1);
// console.log(Rectangle);

// // Data types
// // Primitive types
// let active = true; // Boolean
// let height = 178; // Number
// let courseDuration = 1.5; // Number
// let trainer_name = "Aung Paing"; // String
// let trainer_email = 'aungpaing@gmail.com'
// // Objects
// let trainer = {
//   name: "Aung Paing",
//   age: 24,
// };
// console.log(height + courseDuration)
// console.log(trainer_name + trainer_email)


// // Exercise (FizzBuzz)
// For n numbers, output string
// 'Fizz' if i is divisible by 3,
// 'Buzz' if i is divisible by 5.
// 'FizzBuzz' if i is divisible by both 5 and 3.

// for (let i=1; i<21; i++){
//     if (i%15 == 0){
//         console.log('FizzBuzz')
//     }else if (i % 3 == 0){
//         console.log('Fizz')
//     }else if (i % 5 == 0){
//         console.log('Buzz')
//     }else{
//         console.log(i)
//     }
// }

// function fizzbuzz(num_times,
//     first_call = "Fizz",
//     second_call = "Buzz") {
//   for (let i = 1; i < num_times + 1; i++) {
//     let ret = "";
//     if (i % 3 == 0) ret += first_call;
//     if (i % 5 == 0) ret += second_call;
//     console.log(ret ? ret : i);
//   }
// }

// fizzbuzz(100);

// // Homework
// twosum
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to 
// target.

