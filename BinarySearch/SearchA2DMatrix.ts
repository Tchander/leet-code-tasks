// https://leetcode.com/problems/search-a-2d-matrix

const searchMatrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const searchMatrixTarget1 = 3;
const searchMatrix2 =[[1 ,3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const searchMatrixTarget2 = 13;

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (matrix[mid][0] > target) {
      right = mid - 1;
    } else if (matrix[mid][matrix[mid].length - 1] < target) {
      left = mid + 1;
    } else {
      return search(matrix[mid], target);
    }
  }

  return false;
}

function search(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(searchMatrix(searchMatrix1, searchMatrixTarget1)); // true
console.log(searchMatrix(searchMatrix2, searchMatrixTarget2)); // false


/* Another best solution */
// function searchMatrix(matrix: number[][], target: number): boolean {
//   let l = 0; let r = matrix.length - 1;
//
//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);
//     const first = matrix[mid][0];
//     const last = matrix[mid][matrix[mid].length - 1];
//     if (target === first || target === last) return true;
//     if (target > first && target < last) return binarySearch(matrix[mid], target);
//     if (target < first) r = mid - 1;
//     else l = mid + 1;
//   }
//   return false;
// }
//
// function binarySearch(nums: number[], target: number): boolean {
//   let l = 0;
//   let r = nums.length - 1;
//
//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);
//     if (nums[mid] === target) return true;
//     if (nums[mid] < target) l = mid + 1;
//     else r = mid - 1;
//   }
//
//   return false;
// }
