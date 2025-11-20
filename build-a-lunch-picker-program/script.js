const lunches = [];

function addLunchToEnd(lunches, str) {
  lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
};

function addLunchToStart(lunches, str) {
  lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
};

function removeLastLunch(lunches) {
  if (lunches == "") {
    return console.log("No lunches to remove.");
  } else {
    let popped = lunches.pop();
    console.log(`${popped} removed from the end of the lunch menu.`);
  return lunches
  }
};

function removeFirstLunch(lunches) {
  if (lunches.length == 0) {
    return console.log("No lunches to remove.");
  } else {
    let shift = lunches.shift();
    console.log(`${shift} removed from the start of the lunch menu.`)
    return lunches;
  }
};

function getRandomLunch(lunches) {
  if (lunches.length != 0) {
    let lastInd = lunches.length - 1;
    let randomInd = Math.floor(Math.random() * (lastInd + 1));
    return console.log("Randomly selected lunch: " + lunches[randomInd]);
  } else {
    return console.log("No lunches available.");
  }
};

function showLunchMenu(lunches) {
  if(lunches.length == 0) {
    return console.log("The menu is empty.");
  } else {
    let splitJ = lunches.join(", ");

    return console.log("Menu items: " + splitJ);
  }
};