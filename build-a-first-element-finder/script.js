function findElement(arr, func) {
  for(let x of arr) {
    if(func(x)) {
      return x;
    }
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
