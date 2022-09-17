## Javascript Revision Exercises

### Function Declaration and Expression

---

Write in both declarative and expressive way of function for finding the absolute different between two input values.

```javascript
// Function API will be as
diff(10, 20); // 10
diff(20, 10); // 10
diff(200, 150); // 50
```

<details>
<summary>click me </summary>

```javascript
function diff(a, b) {
  return Math.abs(a - b);
}

const diff = function (a, b) {
  return Math.abs(a - b);
};
```

</details>
<br />
<br />

### Pass by Reference and pass by value in Javascript

---

Create an integer and a array, and see their difference by assign to another variable and change the value.

<details>
<summary>click me
</summary>

```javascript
let initialValue = 10;
let anotherValue = initialValue;

console.log(initialValue);
console.log(anotherValue);
initialValue = 100;
console.log(initialValue);
console.log(anotherValue);

let initialArr = [1, 2, 3];
let anotherArr = initialArr;

console.log(initialArr);
console.log(anotherArr);
initialArr[0] = 100;
console.log(initialArr);
console.log(anotherArr);
```

</details>
<br />
<br />

### Pass function as an argument

---

Write a way to log function name before executing that function,
Note: you can get funciton name by `function.name`

```javascript
// Function API will be as
const greeting = function(){
    console.log('hello')
}

logFuncName(greeting)   // Function Name : greeting
```

<details>
<summary>click me</summary>

```javascript
const logFuncName = function (func) {
  console.log(`Function Name  : ${func.name}`);
  func();
};
```

</details>
<br />
<br />

### Recursive Function

---

Write a recursive function to print out the even numbers below input number

```javascript
// Function API will be as
evenNumber(12);

outputs:
12
10
8
6
4
2
```

<details>
<summary>Click me</summary>

```javascript
const evenNumber = function (n) {
  if (n == 1) {
    return;
  }
  if (n % 2 == 0) {
    console.log(n);
  }
  evenNumber(n - 1);
};

evenNumber(12);
```

</details>
<br />
<br />
<br />

## Arrays

### Create array from string

---

Given String

```javascript
const arrStr = "React Course-First Batch-20";
```
create array from `arrStr`

<details>
<summary>click me</summary>

```javascript
const arrStr = "React Course-First Batch-20";
let retArr = arrStr.split("-");
console.log(retArr);
```

</details>
<br />
<br />

### Modify array with Splice

---

Given Array

```javascript
const arr = ["JJ", 24, 178, "AA", 20, 170, "BB", 30, 180];
```

replace `['AA', 20, 170]` with `['CC', 40, 170]`

<details>
<summary>click me</summary>

```javascript
const test = ["JJ", 24, 178, "AA", 20, 170, "BB", 30, 180];
const replaceElements = ["CC", 40, 170];
test.splice(test.indexOf("AA"), 3, ...replaceElements);
console.log(test);
function replaceEle(arr, originEle, newEle) {
  arr.splice(arr.indexOf(originEle[0]), originEle.length, ...newEle);
}

const originArr = ["AA", "BB", "CC"];
console.log(originArr);
replaceEle(originArr, ["BB", "CC"], ["DD"]);
console.log(originArr);
```

</details>
<br />
<br />

### Manipulate array with array methods

---

Creat a array range from 0 to 100
Filter out odd numbers and multiplicative of 8
Get the two power of the result.

<details>
<summary>click me</summary>

```javascript
const initialArr = Array(100).fill(0);
let modifiedArr = initialArr.map((item, idx, arr) => idx);
initialArr.forEach((item, idx, arr) => {
  initialArr[idx] = idx;
});

let filterArr = initialArr.filter((item, idx, arr) => {
  return item % 2 == 0 && item % 8 != 0;
});

let ret = filterArr.map((item, idx, arr) => {
  return item ** 2;
});

console.log(ret);
```

</details>
<br />
<br />
