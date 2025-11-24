function destroyer(arr, ...args) {
  return arr.filter((fil) => !args.includes(fil));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
