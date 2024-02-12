// https://leetcode.com/problems/binary-search

const binarySearch1 = [-1, 0, 3, 5, 9, 12];
const binarySearchTarget1 = 9;
const binarySearch2 = [-1, 0, 3, 5, 9, 12];
const binarySearchTarget2 = 2;



function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return its index
    } else if (nums[mid] < target) {
      left = mid + 1; // If the target is in the right half
    } else {
      right = mid - 1; // If the target is in the left half
    }
  }

  return -1; // Target not found
}

console.log(search(binarySearch1, binarySearchTarget1)); // 9
console.log(search(binarySearch2, binarySearchTarget2)); // -1
