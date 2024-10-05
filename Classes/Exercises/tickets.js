function result(data,sortdedCriteria){
    const allTickets = [];
    class Ticket {
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    
    //Gets values
    for(let entries of data){
        let [destinationName,price,status] = entries.split("|");
        price = Number(price);
        const ticketObj = new Ticket(destinationName,price,status);
        allTickets.push(ticketObj);
    }

   const sortedArray =  sortdedCriteria === 'price' ? 
    allTickets.sort((a,b) => a[sortdedCriteria] - b[sortdedCriteria]) :
    allTickets.sort((a,b) => a[sortdedCriteria].localeCompare(b[sortdedCriteria]));

    return sortedArray
    

}
console.log(result(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'destination'))