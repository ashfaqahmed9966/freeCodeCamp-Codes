let inventory = [];

function findProductIndex(productName) {
  const name = productName.toLowerCase();
  return inventory.findIndex(item => item.name === name);
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;

  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity });
    console.log(`${name} added to inventory`);
  }
}


function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
    console.log(`${name} removed from inventory`);
  } else {
    console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
  }
}