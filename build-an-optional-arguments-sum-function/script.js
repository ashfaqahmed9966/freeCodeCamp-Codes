function addTogether() {
  const a = arguments[0];
  const b = arguments[1];

  if (typeof a !== "number") return undefined;
  if (arguments.length === 1) {
    return function (c) {
      return typeof c === "number" ? a + c : undefined;
    };
  }
  return typeof b === "number" ? a + b : undefined;
}
