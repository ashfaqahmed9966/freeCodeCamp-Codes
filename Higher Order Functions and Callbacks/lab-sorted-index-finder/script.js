function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let index = arr.findIndex((ind) => ind >= num);
  if (index != -1) {
    return index;
  } else {
    return arr.length;
  }
}

console.log(getIndexToIns([3, 10, 5], 11));
