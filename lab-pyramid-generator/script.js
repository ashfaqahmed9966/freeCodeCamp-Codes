function pyramid(char, rows, inverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {

    let level = inverted ? rows - 1 - i : i;
    let numChars = 1 + 2 * level;
    let numSpaces = rows - 1 - level;
    let row = " ".repeat(numSpaces) + char.repeat(numChars);

    result += row + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, 1));