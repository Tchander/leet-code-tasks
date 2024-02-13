// https://leetcode.com/problems/koko-eating-bananas

const piles1 = [3, 6, 7, 11];
const pilesHours1 = 8;
const piles2 = [30, 11, 23, 4, 20];
const pilesHours2 = 5;
const piles3 = [30, 11, 23, 4, 20];
const pilesHours3 = 6;

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canEatAll(piles, h, mid)) {
      // Koko can finish eating with the current speed, try smaller speeds
      right = mid - 1;
    } else {
      // Koko cannot finish eating with the current speed, try larger speeds
      left = mid + 1;
    }
  }

  return left;
}

function canEatAll(piles: number[], h: number, k: number) {
  let hours = 0;
  for (const pile of piles) {
    hours += Math.ceil(pile / k);
  }
  return hours <= h;
}

console.log(minEatingSpeed(piles1, pilesHours1)); // 4
console.log(minEatingSpeed(piles2, pilesHours2)); // 30
console.log(minEatingSpeed(piles3, pilesHours3)); // 23
