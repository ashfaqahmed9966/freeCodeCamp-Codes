// function whatIsInAName(collection, source) {
//   let result = [];
//   for(let obj of collection) {
//     for(let key in obj) {
//       if(typeof key !== null && typeof key === "object") {
//         for(let inKey of key) {
//           if(source.hasOwnProperty(inKey)) {
//             if(obj[inKey] === source[inKey]) {
//             result.push(obj);
//             }
//           }
//         }
//       } else if(source.hasOwnProperty(key)) {
//         if(obj[key] === source[key]) {
//           result.push(obj);
//         }
//       }
//     }
//   }
//   return result;
// };

function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    return Object.keys(source).every((key) => obj[key] === source[key]);
  });
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
