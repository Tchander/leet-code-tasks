// https://leetcode.com/problems/top-k-frequent-elements/

const nums1: number[] = [1, 1, 1, 2, 2, 3];
const k1: number = 2;

const nums2: number[] = [1];
const k2: number = 1;

function topKFrequent(nums: number[], k: number): number[] {
  const result: number[] = [];
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  const sortedHashAsArray = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    result.push(+sortedHashAsArray[i][0]);
  }

  return result;
};

console.log(topKFrequent(nums1, k1));
console.log(topKFrequent(nums2, k2));


/* Best solution */
// function topKFrequent(nums: number[], k: number): number[] {
//   const freq: { [key: number]: number } = {};
//   for (const n of nums) {
//     if (freq[n] === undefined) freq[n] = 0;
//     freq[n] += 1;
//   }
//   return Object.entries(freq)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map(v => Number(v[0]));
// };
