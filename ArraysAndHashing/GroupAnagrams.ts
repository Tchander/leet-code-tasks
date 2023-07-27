// https://leetcode.com/problems/group-anagrams/description/

const strs = ['eat','tea','tan','ate','nat','bat'];
const strs1 = [''];
const strs2 = ['a'];

function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const hash: { [key: string]: string[] } = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');
    if (sortedStr in hash) {
      hash[sortedStr].push(strs[i]);
    } else {
      hash[sortedStr] = [strs[i]];
    }
  }

  for (let key in hash) {
    result.push(hash[key]);
  }

  return result;
};

console.log(groupAnagrams(strs));
console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));


/* Best solution */
// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map<string, string[]>();
//   const getKey = (s: string) => s.split("").sort().join("");
//
//   strs.forEach((s) => {
//     const k = getKey(s);
//     map.set(k, [...(map.get(k) || []), s]);
//   });
//
//   return [...map.values()];
// }
