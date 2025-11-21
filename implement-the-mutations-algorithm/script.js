function mutation(arr) {
  let count = 0;
  for(let char1 of arr[1].toLowerCase()) {
    for(let char2 of arr[0].toLowerCase()) {
      if (char2 === char1) {
        count++;
        break;
      } else {
        continue;
      }
    }
  }
  return count === arr[1].length;
}