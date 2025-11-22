function bouncer(arr) {
  let newArr = arr.slice(0);
  for(let i = 0; i < newArr.length; i++)
  if(newArr[i] == false || newArr[i] == null || newArr[i] == 0 || newArr[i] == "" || newArr[i] == undefined || Number.isNaN(newArr[i])) {
    newArr.splice(i, 1);
    i--;
  }
  return newArr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));