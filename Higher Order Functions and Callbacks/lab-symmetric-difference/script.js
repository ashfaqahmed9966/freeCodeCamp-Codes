function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let firstHalf = newArr.filter((dif) => !arr2.includes(dif));
  let secondHalf = newArr.filter((dif) => !arr1.includes(dif));
  return firstHalf.concat(secondHalf);
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"])
);
