function pairElement(str) {
  let resultArr = [];
  for (let x of str) {
    let tempArr = [];
    if (x === "A") {
      tempArr.push("A", "T");
      resultArr.push(tempArr);
    } else if (x === "T") {
      tempArr.push("T", "A");
      resultArr.push(tempArr);
    } else if (x === "C") {
      tempArr.push("C", "G");
      resultArr.push(tempArr);
    } else {
      tempArr.push("G", "C");
      resultArr.push(tempArr);
    }
  }
  return resultArr;
}
