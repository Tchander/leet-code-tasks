// https://leetcode.com/problems/valid-anagram/

const s = 'anagram';
const t = 'nagaram';

const a = 'rat';
const b = 'car';

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const arrS: string[] = s.split('');
  const arrT: string[] = t.split('');
  arrS.forEach((el) => {
    const index = arrT.indexOf(el);
    if (index === -1) {
      return false;
    } else {
      arrT.splice(index, 1);
    }
  });
  return arrT.length === 0;
};

console.log(isAnagram(s, t));
console.log(isAnagram(a, b));
