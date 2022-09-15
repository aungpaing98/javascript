function twoSum(nums, target) {
  // Hash Table
  // Create a hash table
  const hashTable = new Map();
  let diff;
  let currentNumber;
  const numsLength = nums.length;
  // Iterate for each element
  for (let i = 0; i < numsLength; i++) {
    currentNumber = nums[i];
    // Get complement
    diff = target - currentNumber;
    // Look up at hash table
    if (hashTable.get(diff) != undefined) {
      return [i, hashTable.get(diff)];
    }
    // Add Element to hash table
    hashTable.set(currentNumber, i);
  }
}

// // Greedy Search
//   let leftNumber;
//   let rightNumber;
//   let sumNumber;
//   const numsLength = nums.length;
//   let ret = [];

//   for (let i = 0; i < numsLength; i++) {
//     for (let j = i + 1; j < numsLength; j++) {
//       leftNumber = nums[i];
//       rightNumber = nums[j];
//       sumNumber = leftNumber + rightNumber;

//       if (sumNumber == target) {
//         ret = [i, j];
//       }
//     }
//   }
//   return ret;
// 0, 2
// 0, 1
// 1, 3
// 0, 4
console.log(twoSum([2, 3, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 10, 4], 6));
console.log(twoSum([3, 1, 2, 6, 3], 6));
