// https://leetcode.com/problems/container-with-most-water/

const containerWithMostWater1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const containerWithMostWater2 = [1, 1];

function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const hLeft = height[left];
    const hRight = height[right];
    const hMin = Math.min(hLeft, hRight);
    const width = right - left;

    // Calculate the area and update maxArea if needed
    maxArea = Math.max(maxArea, hMin * width);

    // Move pointers towards each other
    if (hLeft < hRight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea(containerWithMostWater1)); // 49
console.log(maxArea(containerWithMostWater2)); // 1
