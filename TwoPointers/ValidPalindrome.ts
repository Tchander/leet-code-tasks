// https://leetcode.com/problems/valid-palindrome/description/

const validPalindrome1 = 'A man, a plan, a canal: Panama';
const validPalindrome2 = 'race a car';
const validPalindrome3 = ' ';

function isPalindrome(s: string): boolean {
  const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome(validPalindrome1)); // true
console.log(isPalindrome(validPalindrome2)); // false
console.log(isPalindrome(validPalindrome3)); // true
