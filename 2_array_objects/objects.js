// // Create object instance (object literal)
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// console.log(circle.radius);
// circle.draw();

// // Create another instance
// const anotherCircle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// // If we use object literal syntax to create every object,
// // it will be hard to add / modify property and method later.
// // Let's use a factory / constructor method

// const createCircle = (radius) => {
//   return {
//     radius,
//     draw: () => console.log("draw"),
//   };
// };

// const circle1 = createCircle(1);
// console.log(circle1);

// // Note : You cannot use arrow function for building a constructor
// function Circle(radius) {
//   //   console.log(this);
//   this.radius = radius;
//   this.draw = () => console.log("draw");
//   //   return this        // this is not needed for using new
// }

// const circle2 = new Circle(1);
// console.log(circle2);

// // new operator
// // 1. create an empty object
// // 2. bind this to created empty object
// // 3. return that object

// // Constructor
// // let's compare the above two approaches of createing an object
// console.log(circle1.constructor);
// console.log(circle2.constructor);

// It should be no surprise that circle1 construcotr is Object,
// // since it use object literal to create that object.
// // other constructors are
// const num = 1;
// console.log(num.constructor);
// const num1 = new Number(2);
// console.log(num1.constructor);

// const str1 = "hello";
// console.log(str1.constructor);
// const str2 = new String("World");
// console.log(str2.constructor);

// // And since functions are objects,
// // we can also create function with constructor
// const sum = (x, y) => {
//   return x + y;
// };

// const sum1 = new Function("x, y", "return x + y");

// console.log(sum1(10, 20));
// console.log(sum.constructor);
// console.log(sum1.constructor);

// console.log(sum1.call(null, 1, 2));

// // Object are dynamic
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log("Draw : ", this.radius);
//   };
// }

// const circle = new Circle(10);

// // add new property
// // dot notation
// circle.location = { x: 1 };
// // bracket notation
// circle["PI"] = 3.1415;

// // Delete property
// delete circle.location;

// // access key
// for (let key in circle) {
//   if (typeof circle[key] != "function") {
//     console.log(key);
//   }
// }

// const keys = Object.keys(circle);

// // Check for existence of key
// console.log("radius" in circle);
// console.log(circle["radius"]);
// console.log(circle["radiuss"]);

// // Abstraction
// // How to create private variables ( closure )
// function Circle(radius) {
//   // Private variable, unable to access from outside
//   let color = "red";

//   // // make color accessable to the outside
//   // this.getColor = () => {
//   //   return color;
//   // };

//   this.radius = radius;
//   this.draw = () => {
//     console.log(`Draw ${color} circle with radius : ${this.radius}`);
//   };

//   Object.defineProperty(this, "color", {
//     get: function () {
//       return color;
//     },
//     set: function (value) {
//       color = value;
//     },
//   });
// }

// const circle = new Circle(2);
// console.log(circle);
// console.log(circle.color);
// circle.draw();
// // console.log(circle.getColor());
// console.log(circle.color);
// circle.color = "blue";
// console.log(circle.color);
// circle.draw();

// const Circle = (radius) => {
//   console.log(this);
//   this.radius = radius;
//   this.draw = () => {
//     console.log("draw : ", this.radius);
//   };
//   return this;
// };

// const circle = Circle(10);
// console.log(circle.radius);
// circle.draw();
