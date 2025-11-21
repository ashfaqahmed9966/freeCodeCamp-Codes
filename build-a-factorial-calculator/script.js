let num = 10;
function factorialCalculator(num) {
  let prod = 1;
  for(let i=num; i > 0; i--) {
    prod = prod * i;
  }
  return prod;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
