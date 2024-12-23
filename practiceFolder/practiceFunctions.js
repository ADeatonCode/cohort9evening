const readlineSync = require('readline-sync');


function cIn(prompt) {
    // Use readline-sync to read input while showing it
    const input = readlineSync.question(prompt, {
        hideEchoBack: false, // Shows the input while
        // defaultPrompt: " ", // Uncomment for default no show prompt
    });
    return input;
}

function myName(name) {
    console.log(`Hello, ${name}!`);
}

var name = cIn(name);

myName(name);

