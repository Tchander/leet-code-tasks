// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

const maxProfitPrices1 = [7, 1, 5, 3, 6, 4];
const maxProfitPrices2 = [7, 6, 4, 3, 1];

function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;

  let maxProfitPrice = 0;

  let left = 0;
  let right = left + 1;

  while (right != prices.length) {
    const difference = prices[right] - prices[left];
    if (difference > 0) {
      maxProfitPrice = difference > maxProfitPrice ? difference : maxProfitPrice;
      right += 1;
    } else {
      left = right;
      right = left + 1;
    }
  }

  return maxProfitPrice
}

console.log(maxProfit(maxProfitPrices1)); // 5
console.log(maxProfit(maxProfitPrices2)); // 0
