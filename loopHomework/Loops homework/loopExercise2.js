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

randomId = "";
function randomIdGenerator(size) {
    var randId = "";
    for (let i = 0; i < size; i++) {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 95) + 32);
        randId = randId + randomChar;
    }
    
    return randId;
}

function capitalize(str) {  // This function makes a string lowercase and then capitalizes the first letter.
    capStr = str.toLowerCase();
    return capStr.charAt(0).toUpperCase() + capStr.slice(1);
}

function findInString(mainStr, searchStr) {
    // Use the indexOf() method to find the first occurrence of the search string in the main string
    const index = mainStr.indexOf(searchStr);
    
    // If the search string is not found, return -1
    if (index === -1) {
        return -1;
    }
    
    // If the search string is found, return its position
    return index;
}
console.clear();
size = cIn(`Enter the length of the Random ID: `);
console.log('--------------------------------------------------------');
randomId = randomIdGenerator(size);
console.log(`random ID: ${randomId}`);
console.log();
hexValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let hexNum = ""
for (var i = 0; i < 6; i++) {
    randomHex = Math.floor(Math.random() * 16);
    hexNum = hexNum + hexValues[randomHex];

}

console.log(`Hexadecimal Number: #${hexNum}`);
console.log();

colorR=Math.floor(Math.random() * 255);
colorG=Math.floor(Math.random() * 255);
colorB=Math.floor(Math.random() * 255);

console.log(`RGB Color: (${colorR}, ${colorG}, ${colorB})`);
console.log();

const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"];

console.log (`countries: ${countries}`);
console.log();

countryLength = [];
for (i=0; i<countries.length; i++) {
    countryLength[i] = countries[i].length;
}

console.log (`Countries and their lengths: ${JSON.stringify(countries.map((country, index) => ({ country, length: countryLength[index] })))}`);
console.log();

const countryCode = ["ALB","BOL","CAN","DEN","ETH","FIN","GER","HUN","IRE","ICE","JAP","KEN"];

const countrySpecs = [];

for (i=0; i<countries.length; i++) {
    countrySpecs.push([capitalize(countries[i]), countryCode[i], countryLength[i]]);
}

console.log (`Country Specs: ${countrySpecs}`);
console.log();

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0) {
    console.log (`Countries with 'land' in their names: ${countriesWithLand.map(country => country)}`);
    console.log(countriesWithLand.length);
} else {
    console.log (`All these countries are without land `);
    console.log(countriesWithLand.length);
}
console.log();

    // In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let countriesWithIa = countries.filter(country => country.toLowerCase().endsWith('ia'));

if(countriesWithIa.length > 0) {
    console.log (`Countries with 'land' in their names: ${countriesWithIa.map(country => country)}`);
    console.log(countriesWithIa.length);
} else {
    console.log(`There are no countries ending in 'ia'`);
    console.log(countriesWithIa.length);
}
console.log()

// Using the above countries array, find the country containing the biggest number of characters.

let maxCharLength = 0;
let longestCountry = '';

for(let i = 0; i < countries.length; i++) {
    if(countries[i].length > maxCharLength) {
        maxCharLength = countries[i].length;
        longestCountry = countries[i];
    }
}

console.log(`The country with the biggest number of characters is: ${longestCountry}`);
console.log(maxCharLength);
console.log();

// Using the above countries array, find the country containing only 5 characters.

let countriesWithFiveChars = countries.filter(country => country.length === 5);

console.log(`Countries with only 5 characters: ${countriesWithFiveChars.map(country => country)}`);
console.log(countriesWithFiveChars.length);
console.log();

// Find the longest word in the webTechs array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let longestWord = '';

for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWord.length) {
        longestWord = webTechs[i];
    }
}

console.log(`The longest word in the webTechs array is: ${longestWord}`);
console.log(longestWord.length);
console.log();

// Use the webTechs array to create the following array of arrays:

const webTechLength = [];

for (let i = 0; i < webTechs.length; i++) {
    webTechLength.push([webTechs[i], webTechs[i].length]);
}

console.log(webTechLength);
console.log();

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

var mernAcr = "";

mernAcr = mernStack.map(word => word[0]).join('');

console.log(mernStack, mernAcr);

webTech2 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (var i=0;i<webTech2.length;i++) {
    console.log(webTech2[i]);
}
console.log();

const fruit = ['banana', 'orange', 'mango', 'lemon'];

// reverse the order using loop without using a reverse method.

let reversedFruit = [];

for (let i=fruit.length-1; i>=0; i--) {
    reversedFruit.push(fruit[i]);
}   

console.log(reversedFruit);
console.log();

// Print all the elements of array as shown below in upper case.

const fullStack = [
    ['HTML','CSS','js','React'],
    ['Node','Express','MongoDB']
] 

for (let i=0; i<fullStack.length; i++) {
    for (let j=0; j<fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase());
    }
}

console.log();