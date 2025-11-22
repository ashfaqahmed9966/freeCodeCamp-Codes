function getAverage(arr) {
  let sum = 0;
  for(let x of arr) {
    sum += x;
  }
  return sum/arr.length;
}

function getGrade(score) {
  if(score == 100) {
    return "A+";
  } else if(score < 100 && score >= 90) {
    return "A";
  } else if(score < 90 && score >= 80) {
    return "B";
  } else if(score < 80 && score >= 70) {
    return "C";
  } else if(score < 70 && score >= 60) {
    return "D";
  } else if (score < 60 && score >= 0) {
    return "F"
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}



function studentMsg(arr, score) {
  let average = getAverage(arr);
  let grade = getGrade(score);
  let result = hasPassingGrade(score);
  if(result) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(hasPassingGrade());
let grade = console.log(getGrade(50));
