// // Htoo Say Wah
// function twoSum(numArray, target) {
//   let inputArray = numArray;
//   let targetNum = target;
//   const tempOut = [];
//   for (let i = 0; i < numArray.length; i++) {
//     for (let j = 0; j < numArray.length; j++) {
//       let temp = inputArray[i] + inputArray[j];
//       if (temp == target) {
//         tempOut.push(i);
//         tempOut.push(j);
//       }
//     }
//   }
//   let ret = [...new Set(tempOut)];
//   return ret;
// }

// // Review
// Case 3 error :
//  - Same Element
//  - Exactly one solution

//--------------------------------------
// // Min Min ? Min Naing
// function twoSum(numArr, target) {
//   let result = [];
//   let noResult = true;

//   for (let i = 0; i < numArr.length; i++) {
//     // same Element cannot be used
//     for (let j = 0; j < numArr.length; j++) {
//       // Same value can be used.
//       // Eg. [3, 3], target=6, answer=[0, 1]
//       if (numArr[i] + numArr[j] == target && numArr[i] !== numArr[j]) {
//         let pair = [i, j];
//         result.push(pair);
//         noResult = false;
//       }
//     }
//   }

//   // I love it you tried to use tarnary operator.
//   let answer = noResult ? "No Result" : result;
//   //   console.log(answer);
//   return answer;
// }

//---------------------------------------
// // Phone Myat Thu
// function twoSum(numArray, target) {
//   let ret = [];
//   // We can use two pointers
//   for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] + numArray[i + 1] === target) {
//         // answer is not always adjuscant
//       ret.push(i, i + 1);
//     }
//   }
//   return ret;
// }

//--------------------------------------
// // Wunna Aung
// function twoSum(numArray, target) {
//   let ret = [];
//   for (let i = 0; i <= numArray.length; i++) {
//     for (let j = i + 1; j <= numArray.length - 1; j++) {
//       if (numArray[i] + numArray[j] === target) {
//         ret.push(i, j);
//       }
//     }
//   }
//   return ret;
// }


// 0, 2
// 0, 1
// 1, 3
// 0, 4
console.log(twoSum([2, 3, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 10, 4], 6));
console.log(twoSum([3, 1, 2, 6, 3], 6));
