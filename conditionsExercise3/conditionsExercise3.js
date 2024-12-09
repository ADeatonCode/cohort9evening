const readLineSync = require('../inputModule/inputRoutine'); // Adjust the path as needed

// Months and number of Days.

const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 }, 
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31   
 }];

 
console.clear();
console.log();

console.log("Welcome to the Month and Year Calculator!");
console.log("");

let userMonth = "";
// Continue asking for user input until the user enters "none" for month.
do {
    console.log("");

    // Read user input for month and year
    let userMonth = readLineSync('Enter a month (or "none" to quit): ');
    if (userMonth === "none") {
        break;
    } else {
    
        let userYear = parseInt(readLineSync('Enter a year: '));

        // Check if the year is a leap year
        const isLeapYear = (userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0;
        console.log('Leapyear: ', isLeapYear);

        // Check if the month is valid
        const validMonth = months.find(month => month.name.toLowerCase() === userMonth.toLowerCase());  // Case-insensitive check
        console.log('Valid Month:', !!validMonth); // Convert to boolean
        // If month and year are valid, display the number of days
        if (validMonth) {
            let monthDays;
            if (userMonth === 'February' && isLeapYear) {
                monthDays = 29;
            } else {
                monthDays = validMonth.days;  // Access days from month object
            }      
                console.log(`${validMonth.name} has ${monthDays} days.`)
            } else if (!validMonth && userMonth !== 'none' || userMonth !== 'None') { 
                console.log(`Month can not be ${userMonth}`);
                console.log("Invalid month. Please enter a valid month or 'none' to quit.");
        } 
    }   
} while (userMonth !== 'none' || userMonth !== 'None');

console.log("Goodbye!");


