// https://leetcode.com/problems/longest-substring-without-repeating-characters

const substring1 = 'abcabcbb';
const substring2 = 'bbbbb';
const substring3 = 'pwwkew';
const substring4 = 'au';

function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();
  let result = 0;
  let left = 0;

  for (let right = 0; right< s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    charSet.add(s[right])
    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(lengthOfLongestSubstring(substring1)); // 3
console.log(lengthOfLongestSubstring(substring2)); // 1
console.log(lengthOfLongestSubstring(substring3)); // 3
console.log(lengthOfLongestSubstring(substring4)); // 2
