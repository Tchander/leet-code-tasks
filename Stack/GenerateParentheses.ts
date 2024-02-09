// https://leetcode.com/problems/generate-parentheses/ - NOT SOLVED

const n1 = 1;
const n2 = 3;

function generateParenthesis(n: number): string[] {
  let output: string[] = [];

  function generate(arr: string[] = [], left = 0, right = 0) {
    if (arr.length === 2 * n) {
      output.push(arr.join(''));
      return;
    }
    if (left < n) {
      arr.push('(');
      generate(arr, left + 1, right);
      arr.pop();
    }
    if (right < left) {
      arr.push(')');
      generate(arr, left, right + 1);
      arr.pop();
    }
  }

  generate();
  return output;
};

console.log(generateParenthesis(n1)); // ["()"]
console.log(generateParenthesis(n2)); // ["((()))","(()())","(())()","()(())","()()()"]
