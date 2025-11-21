function repeatStringNumTimes(str, t) {
  let result = "";
  for(let i =1; i<= t; i++) {
    result = result + str;
  }
  return result;
}

console.log(repeatStringNumTimes("*", 3));
