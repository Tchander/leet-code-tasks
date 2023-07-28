// https://leetcode.com/problems/product-of-array-except-self/

const nums3: number[] = [1, 2, 3, 4];
const nums4: number[] = [-1, 1, 0, -3, 3];
const nums5: number[] = [-1, 0, 0, -3, 3, 6];

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  const firstIndexOfZero = nums.findIndex((num) => num === 0);
  if (firstIndexOfZero !== -1) {
    const lastIndexOfZero = nums.lastIndexOf(0);
    if (firstIndexOfZero !== lastIndexOfZero) {
      for (let i = 0; i < nums.length; i++) {
        result[i] = 0;
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (i !== firstIndexOfZero) {
          result[i] = 0;
        } else {
          let initialValue = 1;
          nums.forEach((num, index) => {
            if (i !== index) {
              initialValue *= num;
            }
          })
          result[i] = initialValue;
        }
      }
    }
  } else {
    const productOfAllArray = nums.reduce(
      (accumulator, currentValue) => accumulator * currentValue, 1
    );
    nums.forEach((num, index) => {
      result[index] = productOfAllArray / num;
    })
  }

  return result;
};

console.log(productExceptSelf(nums3));
console.log(productExceptSelf(nums4));
console.log(productExceptSelf(nums5));

/* Best Solution */
/*
  The idea is to initialize an array of the size nums.length
  and filled with 1s. After that, go over the array from the start
  until the end and set each element as the product of the previous elements.

  Then, iterate one more time from the end until the start and update each element
  of the resulted array with the product of the elements which go after it.
*/
// function productExceptSelf(nums: number[]): number[] {
//   // No division operator
//   // Time complexity: O(n)
//   // Space complexity: O(1)
//
//   let product = 1;
//   let result = new Array(nums.length);
//
//   // Modify from start to end
//   for (let i = 0; i < nums.length; i += 1) {
//     result[i] = product;
//     product *= nums[i];
//   }
//
//   // Modify from end to start
//   product = 1;
//   for (let i = nums.length - 1; i >= 0; i -= 1) {
//     result[i] *= product;
//     product *= nums[i];
//   }
//
//   return result;
// };
