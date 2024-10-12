class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Map();
    this.outOfStock = new Set();
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw Error("Quantity must be greater than zero.");
    }

    if (this.items.size + this.outOfStock.size >= this.capacity) {
      throw Error("The inventory is already full.");
    }

    if (!this.items.has(itemName)) {
      this.items.set(itemName, 0);
    }

    const newQuantity = this.items.get(itemName) + quantity;
    this.items.set(itemName, newQuantity);

    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw Error("Quantity must be greater than zero.");
    }

    if (!this.items.has(itemName)) {
      throw Error(`The item ${itemName} is not available in the inventory.`);
    }

    if (quantity > this.items.get(itemName)) {
      throw Error(`Not enough ${itemName}(s) in stock.`);
    }

    let newQuantity = this.items.get(itemName) - quantity;

    if (newQuantity === 0) {
      this.items.delete(itemName);
      this.outOfStock.add(itemName);
    } else {
      this.items.set(itemName, newQuantity);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw Error("Quantity must be greater than zero.");
    }

    if (this.items.has(itemName)) {
      let newQuantity = this.items.get(itemName) + quantity;
      this.items.set(itemName, newQuantity);
    } else {
      this.items.set(itemName, quantity);
    }

    if (this.outOfStock.has(itemName)) {
      this.outOfStock.delete(itemName);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    const result = [];
    
    result.push("Current Inventory:");
    for (let [itemName, quantity] of this.items) {
      result.push(`${itemName}: ${quantity}`);
    }

    if (this.outOfStock.size > 0) {
      result.push(`Out of Stock: ${[...this.outOfStock].join(", ")}`);
    }

    return result.join("\n");
  }
}

// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.sellItem('Chisel',3));
console.log(manager.getInventorySummary());
