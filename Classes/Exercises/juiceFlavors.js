function solve(input) {
  const products = {};
  const keepOrder = new Map();
  for (let str of input) {
    let [product, quantity] = str.split(" => ");
    quantity = Number(quantity);

    if (products.hasOwnProperty(product)) {
      products[product].allquantity += quantity;
    } else {
      products[product] = { allquantity: quantity, bottles: 0 };
    }

    if (products[product].allquantity >= 1000) {
      while (products[product].allquantity >= 1000) {
        products[product].allquantity -= 1000;
        products[product].bottles++;
      }
      keepOrder.set(product, products[product].bottles);
    }
  }

  for (const key of keepOrder) {
    console.log(`${key[0]} => ${key[1]}`);
  }
}
// solve(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
//     );
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
