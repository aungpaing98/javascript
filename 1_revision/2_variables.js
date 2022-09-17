// // Variables are containers for storing data (data values)

// // Variable declaration
// var firstValue;
// let SecondValue;

// // Variable Initialization
// var firstValue = 10;
// var secondValue = 10;

// // Difference between var, let and const
// // The var keyword is used in all JavaScript code from 1995 to 2015.
// // The let and const keywords were added to JavaScript in 2015.
// // Old browser only support var.

// const neverChangeValue = 'Love';
// const PI = 3.14;

// Variable re-declare
// var firstNumber = 3;
// var secondNumber = 6;
// var firstNumber = 9;

// let firstNumber = 3;
// let secondNumber = 6;
// firstNumber = 9;

// // Variable hoisting ( Always declare your variables at the top)
// console.log(myName);
// console.log("Hello World")
// var myName;

// // Operators
// // Arithmetic Operators (+, -, *, /, %, ++, --)
// let firstNumber = 0;
// let secondNumber = 10;
// let thirdNumber = firstNumber + secondNumber;
// thirdNumber++;

// console.log(firstNumber, secondNumber, thirdNumber)

// // Assignment Operators ( =, +=, -=, *=, /=, %=, **=)
// let firstNumber = 10;
// let secondNumber = 20;
// secondNumber += firstNumber;

// // String operators
// let firstName = 'Aung ';
// let lastName = 'Paing';
// let fullName = firstName + lastName;
// console.log(fullName)

// // Logical Operators
// &&
// ||
// !

// // Type operators
// typeof
// instanceof

// // Bitwise Operators
// &, |, ~, ^, <<, >>, >>>
// let a = 5       // 0101
// let b = 1       // 0001
// let c;
// c = a & b;      // 0001
// console.log(a,b,c)
// c = a >> b;     //0010
// console.log(a,b,c)

// let firstName = 'Aung'
// let secondValue = 10
// console.log(firstName + secondValue)
// console.log(10 + 20 + ' Aung ' + 30)

// Limits
// Number type is a double-precision 64-bit binary format IEEE 754 value.
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// let a = 1.7976931348623157e+308
let somethingOutOfRange = 9007199254740991;
console.log(typeof somethingOutOfRange);
// console.log(somethingOutOfRange + 1);
// console.log(somethingOutOfRange + 2);
// console.log(somethingOutOfRange + 4);
// console.log(somethingOutOfRange + 10);

// const x = BigInt(Number.MAX_SAFE_INTEGER)
// console.log(x)
// console.log(x + 1n)
// console.log(x + 2n)
// console.log(x + 3n)


// Exercise
// Given radius, find the area of the circle.
const PI = 3.1415
let radius = 2

let area;
area = PI * (radius**2)
console.log("Area of the circle with radius", radius + " are " + area)