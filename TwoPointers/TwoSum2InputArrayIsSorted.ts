// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/1171682898/

const twoSum2InputArrayIsSorted = [2, 7, 11, 15];
const twoSum2Target = 9;

function twoSum2(numbers: number[], target: number): number[] {
  const numberMap = new Map()
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const difference = target - number
    if (numberMap.has(difference)) return [numberMap.get(difference) + 1, i + 1]
    numberMap.set(number, i)
  }
  return [];
}

console.log(twoSum2(twoSum2InputArrayIsSorted, twoSum2Target)); // [1, 2]
