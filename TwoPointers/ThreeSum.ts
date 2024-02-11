// https://leetcode.com/problems/3sum/

const threeSumNums1 = [-1, 0, 1, 2, -1, -4];
const threeSumNums2 = [0, 1, 1];
const threeSumNums3 = [0, 0, 0];
const threeSumNums4 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const threeSumNums5 = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
const threeSumNums6 = [0, 0, 0, 0];

function threeSum(nums: number[]): number[][] {
  const result = [];

  // Sort the array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum(threeSumNums1)); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(threeSumNums2)); // []
console.log(threeSum(threeSumNums3)); // [[0,0,0]]
console.log(threeSum(threeSumNums4)); // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
console.log(threeSum(threeSumNums5)); // [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]
console.log(threeSum(threeSumNums6)); // [[0,0,0]]
