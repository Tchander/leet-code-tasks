// https://leetcode.com/problems/contains-duplicate/

// const nums = [1, 2, 3, 1];
// const nums = [1, 2, 3, 4];
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function containsDuplicate(nums: number[]): boolean {
  const setOfNums: Set<number> = new Set(nums);
  return setOfNums.size !== nums.length;
};

console.log(containsDuplicate(nums));
