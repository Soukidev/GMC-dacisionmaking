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

function getTicketPrice(age) {
    if (age <= 12) {
        return 10; 
    } else if (age >= 13 && age <= 17) {
        return 15; 
    } else {
        return 20; 
    }
}


console.log(getTicketPrice(10)); 
console.log(getTicketPrice(15)); 
console.log(getTicketPrice(30)); 


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


//weather clithing

function weatherClothingAdviser(temperature, isRaining) {
    let clothingRecommendation;

    if (temperature < 10) {
        clothingRecommendation = "It's quite cold. Wear a warm coat, scarf, and gloves.";
    } else if (temperature >= 10 && temperature < 20) {
        clothingRecommendation = "The weather is cool. Wear a jacket or sweater.";
    } else if (temperature >= 20 && temperature < 30) {
        clothingRecommendation = "The weather is mild. Wear a t-shirt and jeans.";
    } else {
        clothingRecommendation = "It's hot outside! Wear light clothing";
    }

    if (isRaining) {
        clothingRecommendation += " Don't forget to carry an umbrella or wear a raincoat.";
    }

    return clothingRecommendation;
}

console.log(weatherClothingAdviser(25, true));  
console.log(weatherClothingAdviser(5, false));  



