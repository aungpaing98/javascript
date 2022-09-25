// let personName = "Aung Paing";

// console.log(personName);
// console.log(personName[0]);

// personName[0] = "Ji";
// personName = "Ji Ji";

// console.log(personName);
// console.log(personName[0]);

// const arr = [1, 2, 3, 4, 5];
// const [a, ...args] = arr;

// console.log(a, args);

// args[0] = 100;
// arr[2] = 300;

// console.log(arr);
// console.log(a, args);

const persons = [
  { age: 20, grade: 1 },
  { age: 12, grade: 2 },
  { age: 24, grade: 4 },
];

const ret = persons.reduce((pre, cur, idx) => {
  return {
    age: pre.age + cur.age,
    grade: pre.grade + cur.grade,
  };
});

console.log(ret);
