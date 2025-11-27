function steamrollArray(arr) {
  function flatten(input) {
    let result = [];
    for (let item of input) {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item));
      } else {
        result.push(item);
      }
    }
    return result;
  }

  return flatten(arr);
}

console.log(steamrollArray([[1], [], [2, [3]]]));
// [1, 2, 3]
