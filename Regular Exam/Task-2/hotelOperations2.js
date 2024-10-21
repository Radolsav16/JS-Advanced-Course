class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
    this.typeCount = 0;
  }

  restockSupplies(supplies) {
    if (!Array.isArray(supplies)) {
      throw Error("should be array!");
    }

    let result = [];
    for (let el of supplies) {
      let [name, quantity, totalPrice] = el.split(" ");
      quantity = Number(quantity);
      totalPrice = Number(totalPrice);

      if (this.initialBudget >= totalPrice) {
        this.initialBudget -= totalPrice;
        if (!this.supplyStock[name]) {
          this.supplyStock[name] = 0;
        }
        this.supplyStock[name] += quantity;
        result.push(`Successfully stocked ${quantity} ${name}`);
      } else {
        result.push(
          `There was not enough money to restock ${quantity} ${name}`
        );
      }
    }

    return result.join("\n");
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (typeof roomType !== "string") {
      throw Error("Should be string!");
    }

    if (!Array.isArray(neededSupplies)) {
      throw Error("Should be array!");
    }

    if (typeof pricePerNight !== "number") {
      throw Error("Should be num!");
    }

    if (this.roomAvailability[roomType]) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    } else {
      this.roomAvailability[roomType] = {
        neededSupplies: neededSupplies.map((supply) => {
          const [name, quantity] = supply.split(" ");
          return { name, quantity: Number(quantity) };
        }),
        pricePerNight: pricePerNight,
      };
      return `Great idea! Now with the ${roomType}, we have ${
        Object.keys(this.roomAvailability).length
      } types of rooms available, any other ideas?`;
    }
  }

  showAvailableRooms() {
    const roomTypes = Object.keys(this.roomAvailability);
    if (roomTypes.length === 0) {
      return "Our rooms are not ready yet, please come back later...";
    }
    return roomTypes
      .map(
        (roomType) =>
          `${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`
      )
      .join("\n");
  }

  bookRoom(roomType) {
    if (!this.roomAvailability[roomType]) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    let neededSupplies = this.roomAvailability[roomType].neededSupplies;
    for (let supply of neededSupplies) {
      if (
        !this.supplyStock[supply.name] ||
        this.supplyStock[supply.name] < supply.quantity
      ) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }

    let pricePerNight = this.roomAvailability[roomType].pricePerNight;
    return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
  }
}

let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
);

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
