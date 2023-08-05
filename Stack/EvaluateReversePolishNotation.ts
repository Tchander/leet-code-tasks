// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const tokens1 = ['2', '1', '+', '3', '*'];
const tokens2 = ['4', '13', '5', '/', '+'];
const tokens3 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
const tokens4 = ['18'];
const tokens5 = ['0', '3', '/'];
const tokens6 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

function evalRPN(tokens: string[]): number {
    const numbers: number[] = [];

    tokens.forEach((token) => {
      if (['-', '+', '*', '/'].includes(token)) {
        const a = numbers.pop();
        const b = numbers.pop();
        if ((a || a === 0) && (b || b ===0)) {
          if (token === '-') {
            numbers.push(b - a);
          } else if (token === '+') {
            numbers.push(b + a);
          } else if (token === '*') {
            numbers.push(b * a);
          } else if (token === '/') {
            numbers.push(Math.floor(b / a | 0));
          }
        }
      } else {
        numbers.push(+token);
      }
    });

    const result = numbers.pop();
    return result ? result : 0;
};

console.log(evalRPN(tokens1)); // 9
console.log(evalRPN(tokens2)); // 6
console.log(evalRPN(tokens3)); // 22
console.log(evalRPN(tokens4)); // 18
console.log(evalRPN(tokens5)); // 0
console.log(evalRPN(tokens6)); // 22


/* Best Solution */
// interface IOperatorSets {
//   [key: string] : (a: number, b: number) => number;
// }
//
// function evalRPN(tokens: string[]): number {
//   const operatorSets: IOperatorSets = {
//     '+': (a: number, b: number) => a + b,
//     '-': (a: number, b: number) => a - b,
//     '*': (a: number, b: number) => a * b,
//     '/': (a: number, b: number) => a / b | 0, // truncate toward zero
//   };
//   const stack: number[]= [];
//   tokens.forEach(r => {
//     if (operatorSets[r] != null) {
//       const b = stack.pop();
//       const a = stack.pop();
//       stack.push(operatorSets[r](a, b));
//     } else {
//       stack.push(Number(r));
//     }
//   });
//   return stack.pop();
// };
