class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName;
        this.flights = []; 
         /*
           agency [
            { flightNumber - 1;,'Sofia','12.00,20 leva}
    ]
        */
         
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight (flightNumber, destination, departureTime, price){
        let hasSameFligth = this.flights.find((a)=>a.flightNumber === flightNumber) ? true : false;

        if(!hasSameFligth){
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({flightNumber,destination,departureTime,price});
        return `Flight ${flightNumber} to ${destination} has been added to the system.`



    }

    bookFlight (passengerName, flightNumber){
        let hasFlight= this.flights.find((a)=>a.flightNumber === flightNumber) ? true : false;

        if(!hasFlight){
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({passengerName,flightNumber});
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking (passengerName, flightNumber){
        let isHasBookingPasanger = this.bookings.find((a)=>a.passengerName === passengerName) ? true: false;

        if(!isHasBookingPasanger){
           throw Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }

        const index = this.bookings.findIndex((a)=>a.passengerName === passengerName);
        this.bookings.splice(index,1);

        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;

    }

    showBookings(criteria){


        if(this.bookings.length === 0){
            throw Error('No bookings have been made yet.');
        }

        const result = [];

        if(criteria === 'all'){
            result.push(`All bookings(${this.bookings.length}):`);
            this.bookings.forEach(({passengerName,flightNumber})=>{
                result.push(`${passengerName} booked for flight ${flightNumber}.`);
            })
        }else if(criteria === 'cheap'){
           const allFlyitsWithCheapCriteria = this.flights.filter((a)=>a.price <= 100);
           allFlyitsWithCheapCriteria.forEach((flight)=>{
            let isHasBooking = this.bookings.find((a)=> a.flightNumber === flight.flightNumber) ? true: false;
            if(!isHasBooking){
                
            }
           })
        }else if (criteria === 'expensive'){

        }
    }

}
