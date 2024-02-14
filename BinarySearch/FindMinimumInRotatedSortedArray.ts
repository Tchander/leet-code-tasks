// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMinNums1 = [3, 4, 5, 1, 2];
const findMinNums2 = [4, 5, 6, 7, 0, 1, 2];
const findMinNums3 = [11, 13, 15, 17];
const findMinNums4 = [3, 1, 2];
const findMinNums5 = [4, 5, 1, 2, 3];

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let minNum = nums[0];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[left]) {
      minNum = nums[mid];
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
      minNum = nums[right];
    } else {
      minNum = nums[left];
      right = mid - 1;
    }
  }

  return minNum;
}

console.log(findMin(findMinNums1)); // 1
console.log(findMin(findMinNums2)); // 0
console.log(findMin(findMinNums3)); // 11
console.log(findMin(findMinNums4)); // 1
console.log(findMin(findMinNums5)); // 1

/* Best Solution */
// function findMin(nums: number[]): number {
//   let left = 0;
//   let right = nums.length - 1;
//   while (right > left) {
//     let midIdx = Math.floor((left + right) / 2);
//     if (nums[midIdx] > nums[right]) {
//       left = midIdx + 1;
//     } else {
//       right = midIdx;
//     }
//   }
//   return nums[left];
// }
