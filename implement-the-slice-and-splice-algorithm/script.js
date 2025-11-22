// function frankenSplice(arr1, arr2, index) {
//   let sliced = arr2.slice(0);
//   for(let x of arr1) {
//     sliced.splice(index, 0, x);
//     index++;
//   }
//   return sliced;
// }

function frankenSplice(arr1, arr2, index) {
  let result = arr2.slice();
  
  result.splice(index, 0, ...arr1);

  return result;
}