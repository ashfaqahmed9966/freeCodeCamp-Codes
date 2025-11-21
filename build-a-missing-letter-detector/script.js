function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let index = alpha.indexOf(str[0]);
  for(let i = 0; i < str.length; i++) {
   if(str[i] === alpha[index]) {
     index++
   } else {
     return alpha[index]
   }
  }
}

console.log(fearNotLetter("abdf"));