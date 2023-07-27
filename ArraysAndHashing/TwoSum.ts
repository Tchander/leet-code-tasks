// https://leetcode.com/problems/two-sum/

// const numbers: number[] = [2, 7, 11, 15];
// const target: number = 9;

// const numbers: number[] = [3, 2, 4];
// const target: number = 6;

const numbers: number[] = [3, 3];
const target: number = 6;


function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) break;
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        result.push(i);
        result.push(j);
        break
      }
    }
    if (result.length) break;
  }

  return result;
};

console.log(twoSum(numbers, target));

/* Best solution */

// function twoSum(numbers: number[], target: number): number[] {
//   const numberMap = new Map()
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i]
//     const difference = target - number
//     if (numberMap.has(difference)) return [numberMap.get(difference), i]
//     numberMap.set(number, i)
//   }
// };
