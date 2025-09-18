/**
 *  Leet Code - Ransom Note - Easy - 383
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashMap: {
    [key: string]: number;
  } = {};

  for (const letter of magazine) {
    if (!hashMap[letter]) {
      hashMap[letter] = 0;
    }

    hashMap[letter]++;
  }

  for (const letter of ransomNote) {
    if (!hashMap[letter] || hashMap[letter] <= 0) {
      return false;
    }

    hashMap[letter]--;
  }

  return true;
}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
