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
      if (totalPrice <= this.initialBudget) {
        if (!this.supplyStock[name]) {
          this.supplyStock[name] = quantity;
          this.initialBudget -= totalPrice;
          result.push(`Successfully stocked ${quantity} ${name}`);
        } else {
          this.supplyStock[name] += quantity;
          this.initialBudget -= totalPrice;
        }
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

    let result = [];

    if (!this.roomAvailability[roomType]) {
      this.roomAvailability[roomType] = [];
      this.typeCount += 1;
      for (let el of neededSupplies) {
        let [name, quantity] = el.split(" ");
        quantity = Number(quantity);
        this.roomAvailability[roomType].push({
          supplyName: name,
          quantity,
          pricePerNight,
        });
      }

      result.push(
        `Great idea! Now with the ${roomType}, we have ${this.typeCount} types of rooms available, any other ideas?`
      );
    } else {
      result.push(
        `The ${roomType} is already available in our hotel, try something different.`
      );
    }

    return result.join("\n");
  }

  showAvailableRooms() {
    let keys = Object.keys(this.roomAvailability);

    if (keys.length === 0) {
      return `Our rooms are not ready yet, please come back later...`;
    }

    let result = [];

    keys.forEach((key) => {
      let arr = this.roomAvailability[key];
      let pricePerNight = arr[0].pricePerNight;

      result.push(`${key} - $ ${pricePerNight}`);
    });

    return result.join("\n");
  }

  bookRoom(roomType) {
    if (typeof roomType !== "string") {
      throw Error("Should be string");
    }

    if (!this.roomAvailability[roomType]) {
      return `There is no ${roomType} available, would you like to book another room?`;
    } else {
      let suplies = this.roomAvailability[roomType];
      let result = "";

      suplies.forEach((suply) => {
        if (!this.supplyStock[suply.supplyName]) {
          result = `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
        } else {
          result = `Your booking for ${roomType} has been confirmed! The price is $${suply.pricePerNight} per night.`;
        }
      });

      return result;
    }
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
