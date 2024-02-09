// https://leetcode.com/problems/daily-temperatures/

const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
const temperatures2 = [30, 40, 50, 60];
const temperatures3 = [30, 60, 90];


// Time Limit Exceeded
function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  function findAmount(currentIndex: number, index: number) {
    if (index === temperatures.length) {
      result[currentIndex] = 0;
    } else if (temperatures[currentIndex] < temperatures[index]) {
      result[currentIndex] = index - currentIndex;
    } else {
      findAmount(currentIndex, index + 1);
    }
  }

  temperatures.forEach((temperature, index) => {
    findAmount(index, index + 1);
  });

  return result;
};

console.log(dailyTemperatures(temperatures1)); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures(temperatures2)); // [1,1,1,0]
console.log(dailyTemperatures(temperatures3)); // [1,1,0]

/* With Stack Solution */

// function dailyTemperatures(temperatures: number[]): number[] {
//   const t = temperatures;
//   const answer = new Array(t.length).fill(0);
//   const stack: number[] = [];
//   if (t.length <= 1) return answer;
//   for (let i = 0; i < t.length; i++) {
//     while (t[stack[stack.length - 1]] < t[i]) {
//       const top = stack.pop();
//       answer[top] = i - top;
//     }
//     stack.push(i);
//   }
//   return answer;
// };
