// https://leetcode.com/problems/longest-repeating-character-replacement

const characterReplacementS1 = 'ABAB';
const characterReplacementK1 = 2;
const characterReplacementS2 = 'AABABBA';
const characterReplacementK2 = 1;
const characterReplacementS3 = 'ABAB';
const characterReplacementK3 = 0;
const characterReplacementS4 = 'A';
const characterReplacementK4 = 1;
const characterReplacementS5 = 'ABCDE';
const characterReplacementK5 = 1;

function characterReplacement(s: string, k: number): number {
  const charCount: { [key: string]: number } = {};
  let result = 0;
  let left = 0;
  let dominantChar = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] in charCount) charCount[s[right]]++;
    else charCount[s[right]] = 1;

    dominantChar = Math.max(dominantChar, charCount[s[right]]);

    while ((right - left + 1) - dominantChar > k) {
      charCount[s[left]]--;
      if (charCount[s[left]] === 0) delete charCount[s[left]];
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(characterReplacement(characterReplacementS1, characterReplacementK1)); // 4
console.log(characterReplacement(characterReplacementS2, characterReplacementK2)); // 4
console.log(characterReplacement(characterReplacementS3, characterReplacementK3)); // 1
console.log(characterReplacement(characterReplacementS4, characterReplacementK4)); // 1
console.log(characterReplacement(characterReplacementS5, characterReplacementK5)); // 2
