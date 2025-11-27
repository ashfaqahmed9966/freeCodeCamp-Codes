function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);

  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  return range.reduce((multiple, num) => lcm(multiple, num));
}

console.log(smallestCommons([1, 5]));
