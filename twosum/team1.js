// // Hlaing Htet
// function twoSum(numArray, target) {
//   let ret;
//   for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] + numArray[i + 1] == target) {
//       ret = [i, i + 1];
//     }
//   }
//   if (!ret) {
//     // Please in the mentioned format
//     // [] : array of integer
//     ret = `twoSum is not equal ${target}`;
//   }
//   console.log(ret);
//   return ret;
// }

// ----------------------------------------------------

// // Lin Swan Saung
// const twoSum = function (arr, targetAns) {
//   for (let i = 0; i < arr.length; i++) {
//     // second pointer starts from next index from first pointer
//     for (let x = 1; x < arr.length; x++) {
//       if (arr[i] + arr[x] === targetAns) {
//         return [i, x];
//       }
//     }
//   }
// };

// ----------------------------------------------------

// // Nyi Phyo
// function twoSum(numArray, target) {
//   // Too focus on constraints
//   // Answer might not be adjacent
//   for (
//     let index = 2;
//     numArray.length <= 104 && index <= numArray.length;
//     index++
//   ) {
//     const nextIndex = index + 1;
//     if (nextIndex <= numArray.length && target >= -109 && target <= 109) {
//       const result = numArray[index] + numArray[nextIndex];
//       if (result === target) {
//         // No return value ?
//         console.log("[" + index + ", " + nextIndex + "]");
//       }
//     }
//   }
// }

// -----------------------------------------------------
// // Thant Wai Soe
// function twoSum(numArray, target) {
//   // Answer might not be adjacent
//   for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] + numArray[i + 1] === target) console.log([i, i + 1]);
//   }
// }

// 0, 2
// 0, 1
// 1, 3
// 0, 4
console.log(twoSum([2, 3, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 10, 4], 6));
console.log(twoSum([3, 1, 2, 6, 3], 6));
