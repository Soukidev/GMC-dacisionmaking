function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; 
    } else {
        return false;
    }
}

console.log(isLeapYear(2021)); 
console.log(isLeapYear(2024)); 


// Ticket Pricing 

var age = 25;  
var ticketPrice;

if (age <= 12) {
  ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
  ticketPrice = 15; 
} else if (age >= 18) {
  ticketPrice = 20; 
}

console.log("Ticket Price: $" + ticketPrice);

// Ticket Pricing 2

var ages = [5, 14, 25, 10, 17]; 
var ticketPrices = [];

for (var i = 0; i < ages.length; i++) {
    var age = ages[i];
    var ticketPrice;

    if (age <= 12) {
        ticketPrice = 10; 
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15; 
    } else if (age >= 18) {
        ticketPrice = 20; 
    }

    ticketPrices.push(`Age: ${age}, Ticket Price: $${ticketPrice}`);
}





