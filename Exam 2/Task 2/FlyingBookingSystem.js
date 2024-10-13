class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    let hasSameFligth = this.flights.find(
      (a) => a.flightNumber === flightNumber
    )
      ? true
      : false;

    if (hasSameFligth) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }

    this.flights.push({ flightNumber, destination, departureTime, price });
    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }

  bookFlight(passengerName, flightNumber) {
    let hasFlight = this.flights.find((a) => a.flightNumber === flightNumber)
      ? true
      : false;
    const fligth = this.flights.find((a) => a.flightNumber === flightNumber);
    const price = fligth.price;
    if (!hasFlight) {
      return `Flight ${flightNumber} is not available for booking.`;
    }

    this.bookings.push({ passengerName, flightNumber, price });
    this.bookingsCount++;

    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    let isHasBookingPasanger = this.bookings.find(
      (a) => a.passengerName === passengerName
    )
      ? true
      : false;

    if (!isHasBookingPasanger) {
      throw Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    }

    const index = this.bookings.findIndex(
      (a) => a.passengerName === passengerName
    );
    this.bookings.splice(index, 1);

    this.bookingsCount--;

    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }

  showBookings(criteria) {
    if (this.bookings.length === 0) {
      throw Error("No bookings have been made yet.");
    }

    let result = [];

    if (criteria === "all") {
      result.push(`All bookings(${this.bookingsCount}):`);
      this.bookings.forEach(({ passengerName, flightNumber }) => {
        result.push(`${passengerName} booked for flight ${flightNumber}.`);
      });
      return result.join("\n");
    } else if (criteria === "cheap") {
      const filteredArr = this.bookings.filter((a) => a.price <= 100);

      if (filteredArr.length === 0) {
        return "No cheap bookings found.";
      }
      filteredArr.forEach((obj) => {
        result.push(
          `${obj.passengerName} booked for flight ${obj.flightNumber}.`
        );
      });
      return result.join("\n");
    } else if (criteria === "expensive") {
      const filteredArr = this.bookings.filter((a) => a.price > 100);

      if (filteredArr.length === 0) {
        return "No expensive bookings found.";
      }
      result.push("Expensive bookings:");

      filteredArr.forEach((obj) => {
        result.push(
          `${obj.passengerName} booked for flight ${obj.flightNumber}.`
        );
      });
      return result.join("\n");
    }
  }
}

//Add Item works

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.addFlight("BB203", "Sofia", "10:30 AM", 90));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.bookFlight("Radko", "BB203"));
console.log(system.showBookings("cheap"));
