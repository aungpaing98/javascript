// // Khant Ko Ko Zaw
// function twoSum(numArray, target) {
// //   console.log(numArray, target);
//   let a = 0;
//   let firstNumber = numArray[a];
//   let compareIndex = a + 1;
//   let counter = 0;
//   while (firstNumber + numArray[compareIndex] != target) {
//     counter++;
//     compareIndex++;
//     if (counter == numArray.length - (numArray.indexOf(firstNumber) + 1)) {
//       a++;
//       firstNumber = numArray[a];
//       compareIndex = a + 1;
//       counter = 0;
//     }
//     if (
//       1 == numArray.length - (numArray.indexOf(firstNumber) + 1) &&
//       firstNumber + numArray[compareIndex] != target
//     ) {
//       console.log("No data found");
//       return;
//     }
//   }
// }

// ---------------------------------------------------------

// // Nay Aung Lwin
// function twoSum(arrayNum, target) {
//   for (let i = 0; i < arrayNum.length; i++) {
//     if (i != arrayNum.length - 1) {
//       for (let x = i + 1; x < arrayNum.length; x++) {
//         if (arrayNum[i] + arrayNum[x] === target) {
//           console.log([i, x]);
//           return;
//         }
//       }
//      // Very nice of you to consider this case, but this is not necessary
//     } else if (i == arrayNum.length - 1) {
//       console.log("no valid number.");
//     }
//   }
// }

// ---------------------------------------------------------
// Thuzar San
// function twoSum(numArray, target) {
// 	let ret;
// // Not just adjacent element
// 	for (let i = 0; i <= numArray.length; i++) {
// 		if (numArray[i] + numArray[i + 1] == target) {
// 			ret = [i, i + 1];
// 			console.log(ret);
// 		}
// 	}
// 	//return ret
// }

// 0, 2
// 0, 1
// 1, 3
// 0, 4
console.log(twoSum([2, 3, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 10, 4], 6));
console.log(twoSum([3, 1, 2, 6, 3], 6));
