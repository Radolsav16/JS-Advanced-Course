class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {}; 
        this.supplyStock = {}; 
    }

    restockSupplies(supplies) {
        let result = [];
        for (let supplyInfo of supplies) {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supplyInfo.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (this.initialBudget >= supplyTotalPrice) {
                this.initialBudget -= supplyTotalPrice;
                if (!this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] = 0;
                }
                this.supplyStock[supplyName] += supplyQuantity;
                result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                result.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        }
        return result.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        } else {
            this.roomAvailability[roomType] = {
                neededSupplies: neededSupplies.map(supply => {
                    const [name, quantity] = supply.split(' ');
                    return { name, quantity: Number(quantity) };
                }),
                pricePerNight: pricePerNight
            };
            return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
        }
    }

    showAvailableRooms() {
        const roomTypes = Object.keys(this.roomAvailability);
        if (roomTypes.length === 0) {
            return "Our rooms are not ready yet, please come back later...";
        }
        return roomTypes.map(roomType => `${roomType} - $${this.roomAvailability[roomType].pricePerNight}`).join('\n');
    }

    bookRoom(roomType) {
        if (!this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        let neededSupplies = this.roomAvailability[roomType].neededSupplies;
        for (let supply of neededSupplies) {
            if (!this.supplyStock[supply.name] || this.supplyStock[supply.name] < supply.quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        let pricePerNight = this.roomAvailability[roomType].pricePerNight;
        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }
}
