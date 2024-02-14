// https://leetcode.com/problems/search-in-rotated-sorted-array

const searchInRotatedSortedArrayNums1 = [4, 5, 6, 7, 0, 1, 2];
const searchInRotatedSortedArrayTarget1 = 0;
const searchInRotatedSortedArrayNums2 = [4, 5, 6, 7, 0, 1, 2];
const searchInRotatedSortedArrayTarget2 = 3;
const searchInRotatedSortedArrayNums3 = [1];
const searchInRotatedSortedArrayTarget3 = 0;
const searchInRotatedSortedArrayNums4 = [1, 2, 3, 4, 5, 6];
const searchInRotatedSortedArrayTarget4 = 4;
const searchInRotatedSortedArrayNums5 = [4, 5, 6, 7, 8, 1, 2, 3];
const searchInRotatedSortedArrayTarget5 = 8;

function searchInRotatedSortedArray(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (
      (nums[mid] > nums[right] && target < nums[mid] && target < nums[right])
      || (nums[mid] > nums[right] && target > nums[mid])
      || (nums[mid] < target && target < nums[right])
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(searchInRotatedSortedArray(searchInRotatedSortedArrayNums1, searchInRotatedSortedArrayTarget1)) // 4
console.log(searchInRotatedSortedArray(searchInRotatedSortedArrayNums2, searchInRotatedSortedArrayTarget2)) // -1
console.log(searchInRotatedSortedArray(searchInRotatedSortedArrayNums3, searchInRotatedSortedArrayTarget3)) // -1
console.log(searchInRotatedSortedArray(searchInRotatedSortedArrayNums4, searchInRotatedSortedArrayTarget4)) // 3
console.log(searchInRotatedSortedArray(searchInRotatedSortedArrayNums5, searchInRotatedSortedArrayTarget5)) // 4

/* Best Solution */
// function search(nums: number[], target: number): number {
//   let left = 0;
//   let right = nums.length - 1;
//
//   while (left <= right) {
//     let midIdx = Math.floor((left + right) / 2);
//     if (nums[midIdx] === target) return midIdx;
//
//     if (nums[left] <= nums[midIdx]) {
//       if (nums[left] <= target && target <= nums[midIdx])
//         right = midIdx - 1;
//       else left = midIdx + 1;
//     } else {
//       if (nums[midIdx] <= target && target <= nums[right])
//         left = midIdx + 1;
//       else right = midIdx - 1;
//     }
//   }
//   return -1;
// }
