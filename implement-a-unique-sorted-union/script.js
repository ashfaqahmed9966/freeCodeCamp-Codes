function uniteUnique(a, b, ...restArgs) {
  let resultArr = [];
  let array = [a, b, ...restArgs];
  for(let arg of array) {
    for(let num of arg) {
      if(!resultArr.includes(num)) {
        resultArr.push(num);
      }
    }
  }
  return resultArr;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]));
