function findLongestWordLength(string) {
  let words = string.trim().split(/\s+/);
  let countL = 0;
  for(let w of words) {
    let countC = 0;
    for(let char of w) {
      countC++;
    }
    if (countC > countL) {
      countL = countC;
    }
  }
  return countL;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
