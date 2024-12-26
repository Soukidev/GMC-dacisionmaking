function isLeapYear(year) {
    if (
        year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    )
        console.log(" Input year:", year, "is a Leap Year");
    else
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
}

let inputYear = 2020;
isLeapYear(inputYear);
inputYear = 2024;
isLeapYear(inputYear);

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





