function recieveTickets(arrayOfTickets, sortCriteria) {
    const returnArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = Number(price);
            this.status = status;
        }
    }

    for (const line of arrayOfTickets) {
        const [destination, price, status] = line.split('|');
        returnArr.push(new Ticket(destination, price, status));
    }

    const sortingMap = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status),
    };

    return returnArr.sort(sortingMap[sortCriteria]);
}

console.log(recieveTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));