/* conditionals */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let age = 0;
console.log(" ");
readline.question('Please enter your age: ', input => {
    age = parseInt(input);
    console.log("");
    if (age >= 18) {
        console.log('You are old enough to vote.');
    } else {
        console.log('You are not old enough to vote.');   
    }    
    readline.close();
});


//readline.question('Please enter something: ', input => {
//    console.log(`You entered: ${input}`);
//    readline.close();
//});
