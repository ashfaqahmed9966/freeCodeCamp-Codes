
// function maskEmail(email) {
//   let sliced = email.slice(1, email.indexOf("@") -1);
//   email = email.replace(sliced, "*".repeat(email.indexOf("@" - 2)));
//   return email;
// };

// let email;
// email = "apple.pie@example.com"
// console.log(maskEmail(email));

// console.log("*".repeat(3));
// console.log(email.indexOf("@"));
// let index = email.indexOf("@") -1;
// console.log(index)

function maskEmail(email) {
  let index = email.indexOf("@") -1;
  let sliced = email.slice(1, index);
  let hash = "*".repeat(index - 1);
  let newEmail = email.replace(sliced, hash);
  return newEmail;
}

let email;
email = "ashfaq@gmail.com"
console.log(maskEmail(email));
