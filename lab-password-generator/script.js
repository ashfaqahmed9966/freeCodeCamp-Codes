function generatePassword(pLength) {
  let passChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = ""
  for(let i =0; i < pLength; i++) {
    let randomIndex = Math.floor(Math.random() * ((passChar.length - 1) - 1) + 1 );
    result += passChar[randomIndex];
  }
  return result;
}
let password = generatePassword(8)
console.log(`Generated password: ${password}`);
