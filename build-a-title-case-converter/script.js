function titleCase(str) {
  let temp = "";
  let result = "";
  for(let x of str.split(" ")) {
    result += x[0].toUpperCase() + x.slice(1).toLowerCase() + " ";
  }
  return result.trimEnd();
}

console.log(titleCase("I like to code"));