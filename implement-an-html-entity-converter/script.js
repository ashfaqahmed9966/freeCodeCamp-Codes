function convertHTML(str) {
  let strArr = str.split("");
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i] == "&") {
        strArr[i] = "&amp;";
      } else if (strArr[i] == "<") {
        strArr[i] = "&lt;";
      } else if (strArr[i] == ">") {
        strArr[i] = "&gt;";
      } else if (strArr[i] == '"') {
        strArr[i] = "&quot;";
      } else if (strArr[i] == "'") {
        strArr[i] = "&apos;";
      }
    }

    result += strArr[i];
  }
  return result.trim();
}
