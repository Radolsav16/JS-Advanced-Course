class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = {};
  }

  addBikes(bikes) {
    const addedBrands = [];
    bikes.forEach((element) => {
      let [brand, quantity, price] = element.split("-");
      price = Number(price);
      quantity = Number(quantity);
      if (this.availableBikes[brand]) {
        this.availableBikes[brand].quantity += quantity;
        if (this.availableBikes[brand].price < price) {
          this.availableBikes[brand].price = price;
        }
      } else {
        this.availableBikes[brand] = { quantity, price };
        addedBrands.push(brand);
      }
    });

    return `Successfully added ${addedBrands.join(", ")}`;
  }

  rentBikes(selectedBikes) {
    //
    let totalCost = 0;
    let islowQuantity = false;
    selectedBikes.forEach((el) => {
      let [brand, quantity] = el.split("-");
      quantity = Number(quantity);
      if (
        !this.availableBikes[brand] ||
        this.availableBikes[brand].quantity < quantity
      ) {
        islowQuantity = true;
        return;
      }

      let price = this.availableBikes[brand].price;
      this.availableBikes[brand].quantity -= quantity;
      price *= quantity;
      totalCost += price;
    });

    if (islowQuantity) {
      return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
    } else {
      return `Enjoy your ride! You must pay the following amount $${totalCost.toFixed(
        2
      )}.`;
    }
  }

  returnBikes(returnedBikes) {
    //
    let isPresent = true;
    returnedBikes.forEach((el) => {
      let [brand, quantity] = el.split("-");
      quantity = Number(quantity);

      if (!this.availableBikes[brand]) {
        isPresent = false;
      } else {
        this.availableBikes[brand].quantity += quantity;
      }
    });

    if (isPresent) {
      return "Thank you for returning!";
    } else {
      return "Some of the returned bikes are not from our selection.";
    }
  }

  revision() {
    const result = [];

    result.push("Available bikes:");

    Object.entries(this.availableBikes)
      .sort((a, b) => a[1].price - b[1].price)
      .forEach((arr) => {
        result.push(
          `${arr[0]} quantity:${arr[1].quantity} price:$${arr[1].price.toFixed(
            2
          )}`
        );
      });
    result.push(
      `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
    );

    return result.join("\n");
  }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(
  rentalService.addBikes([
    "Mountain Bike-5-150",
    "City Bike-10-100",
    "Electric Bike-3-200",
    "Electric Bike-8-400",
  ])
);
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());
