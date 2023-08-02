// https://leetcode.com/problems/valid-parentheses/

const s1 = '([)]';
const s2 = '()[]{}';
const s3 = '(}';

function isValid(s: string): boolean {
  const stack: string[] = [];
  const arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
      stack.push(arr[i]);
    } else if (arr[i] === ')') {
      const el = stack.pop();
      if (el !== '(') return false;
    } else if (arr[i] === ']') {
      const el = stack.pop();
      if (el !== '[') return false;
    } else if (arr[i] === '}') {
      const el = stack.pop();
      if (el !== '{') return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));


/* Best solution */
// const brackets: {[key: string]: string} = {
//   ']': '[',
//   '}': '{',
//   ')': '('
// }
//
// function isValid(s: string): boolean {
//   const stack: string[] = []
//   const chars = s.split('')
//
//   for (const char of chars) {
//     if (isClosing(char)) {
//       const opening = stack.pop()
//
//       if (brackets[char] !== opening) { return false }
//     } else { stack.push(char) }
//   }
//
//   return stack.length === 0
// }
//
// function isClosing(s: string): boolean {
//   return brackets.hasOwnProperty(s)
// }
