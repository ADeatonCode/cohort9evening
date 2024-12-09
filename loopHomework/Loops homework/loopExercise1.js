const readlineSync = require('readline-sync');


function cIn(prompt) {
    // Use readline-sync to read input while showing it
    const input = readlineSync.question(prompt, {
        hideEchoBack: false, // Shows the input while
        // defaultPrompt: " ", // Uncomment for default no show prompt
    });
    return input;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;   
}

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (var i=0; i<=10; i++) {
    console.log(`for ${i}`);
}
i=0
while (i <= 10)  {
    console.log(`while ${i}`);
    i++;
}

for (var i=10; i>=0; i--) {
    console.log(`for ${i}`);
}
i=10;
while (i >= 0) {
    console.log(`while ${i}`);
    i--;
}

n = cIn("Enter a value for n: ");

for (var i=0; i <= n; i++) {
    console.log(`for ${i}`);
}

i=0;
while (i <= n) {
    console.log(`while <= ${n}, ${i}`);
    i++;
}

const char="#"

for (var i=0; i<7; i++) {
    console.log(char.repeat(i+1));
}

for (var i=0; i<10; i++) {
    console.log(`${i} X ${i} = ${i*i}`);
}

console.log(" i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  // Calculate powers and format for consistent spacing
  const iSquared = i * i;
  const iCubed = i * i * i;

  // Determine the maximum width for each column
  const maxWidth1 = Math.max(String(n).length, 1);
  const maxWidth2 = Math.max(String(iSquared).length, 1);
  const maxWidth3 = Math.max(String(iCubed).length, 1);

  // Format the output with padding
  console.log(`${i.toString().padStart(maxWidth1)}\t${iSquared.toString().padStart(maxWidth2)}\t${iCubed.toString().padStart(maxWidth3)}`);
}

console.log("Even numbers from 0 to 100")
for (i=0; i<=100; i++) {
    if (i/2 === parseInt(i/2) ) {
        console.log(i);
    }
}

console.log("Odd numbers from 0 to 100")

for (i=1; i<=100; i++) {
    if (i/2 !== parseInt(i/2) ) {
        console.log(i);
    }
}

console.log("Prime numbers from 1 to 100")

for (i=1; i<=100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

console.log("Sum of all numbers from 0 to 100");

let sum = 0;

for (i=0; i<=100; i++) {
    sum += i;
}

console.log(sum);

console.log("Sum of all even numbers from 0 to 100.");

sum = 0;

for (i=0; i<=100; i++) {
    if (i/2 === parseInt(i/2) ) {
        sum += i;
    }
}

console.log(sum);

console.log("Sum of all odd numbers from 0 to 100.");

sum = 0;

for (i=1; i<=100; i++) {
    if (i/2 !== parseInt(i/2) ) {
        sum += i;
    }
}

console.log(sum);

console.log("Sum of all even numbers from 0 to 100.");

var sum1 = 0;
var sum2 = 0;

for (i=0; i<=100; i++) {
    if (i/2 === parseInt(i/2) ) {
        sum1 += i;
    } else {
        sum2 += i;
    }
}

console.log("sum of all even/Odd: " + sum1 + ", " + sum2);

rndArray = [];
for (i=0; i<5; i++) {
    rndArray.push(Math.floor(Math.random() * 100));
}

console.log("Random array: " + rndArray);

rndArray = [];
for (i=0; i<5; i++) {
    rndNum = Math.floor(Math.random() * 100);
    if (rndArray.indexOf(rndNum) === -1) {
        rndArray.push(rndNum);
    } else {
        i--
    }

}

console.log("Random array: " + rndArray);

rndId="";
for (i=0; i<6; i++) {
    charNum = Math.floor(Math.random() * 95 + 32);
    rndId = rndId + String.fromCharCode(charNum);
}

console.log("Random ID: " + rndId);