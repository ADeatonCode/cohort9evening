console.log();

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'France',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

// 1. Declare an array with more than 5 number of elements.

const computerLanguages = [
    'JavaScript',
    'Python',
    'C++',
    'Java',
    'C#',
    'Go',
    'Ruby',
    'Swift',
    'Kotlin',
    'Rust'
]

// 2.  Find the length of yourDeclare an array array.

const myLength = computerLanguages.length;

// 3.  Get the first item, the middle item and the last item of the array

const firstLanguage = computerLanguages[0];
const middleLanguage = computerLanguages[(computerLanguages.length/2 - 1)];
const lastLanguage = computerLanguages[(computerLanguages.length - 1)];

console.log(`The number of computer languages is ${computerLanguages.length}`);
console.log(`The first language is ${firstLanguage}`);
console.log(`The middle language is ${middleLanguage}`);
console.log(`The last language is ${lastLanguage}`);
console.log('');

// 4.  Declare an array called inventory. Put different data types in the array and find the length of the array.

const inventory = ['laptop',1200,'keyboard',50,'Mouse',15,'headphones',25,'charger',25,'television',150]

console.log(inventory);

const inventoryLength = inventory.length

console.log(`The inventory contains ${inventoryLength} items.`);
console.log();

// 4.  Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

// 5. Print the array using console.log.

console.log(itCompanies);
console.log();

// 6. Print the number of companies in the array.

console.log(`There are ${itCompanies.length} companies in the Array.`);

// 7. Print the first, middle, and last company.

const firstCompany = itCompanies[0];
const middleCompany = itCompanies[parseInt(itCompanies.length/2 - .5)];
const lastCompany = itCompanies[(itCompanies.length - 1)];

console.log(`The first company is ${firstCompany}`);
console.log(`The middle company is ${middleCompany}`);
console.log(`The last company is ${lastCompany}`);
console.log('');

// 8. Print out each company.

for (let i=0; i<itCompanies.length; i++) {
    console.log(`Company ${i+1}: ${itCompanies[i]}`);
}
console.log(' ');
// 9. Change each company name to uppercase one by one and print them out.

for (let i=0; i<itCompanies.length; i++) {
    console.log(`Company ${i+1}: ${itCompanies[i].toUpperCase()}`);
}
console.log(' ');

// 10. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

let allCompanies = "";
for (let i=0; i<itCompanies.length - 2; i++) {
    allCompanies = allCompanies + itCompanies[i]+", ";
}
console.log(`${allCompanies}and ${itCompanies[itCompanies.length-1]} are big IT companies.`);

console.log(' ');

// 11. Check if a certain company exists in the itCompanies array.  If it exist return the company else return the company is not in the array.

const companyToCheck = 'Texas Instruments';

if (itCompanies.includes(companyToCheck)) {
    console.log(`${companyToCheck} is in the array.`);
} else {
    console.log(`${companyToCheck} is not in the array.`);
}
console.log(' ');

// 12. Filter out companies which have more than one 'o' without the filter method.

const filteredArray = [];

// Loop through the array and add to the filteredArray only companies that do not contain two consecutive 'o's.

for (var i = 0; i < itCompanies.length -1; i++) {
    if (!/oo/.test(itCompanies[i])) {
        filteredArray.push(itCompanies[i]);
    }
}
console.log(filteredArray)
console.log(' ');

// 13. Sort the companies in alphabetical order.

itCompanies.sort();

console.log(itCompanies);

// 14. Reverse the array using the reverse method.

itCompanies.reverse();

console.log(itCompanies);
console.log(' ');

// 15. Slice out the first 3 companies from the array

firstThree = itCompanies.slice(0,3);

console.log(firstThree);

//16. Slice out the last 3 companies from the array.

lastThree = itCompanies.slice(-3);

console.log(lastThree);

// 17. Slice out the middle IT company or companies from the array

middleCompanies = itCompanies.slice(parseInt(itCompanies.length/2 - .5), parseInt(itCompanies.length/2 + .5));

console.log(middleCompanies);

// 18. Remove the first IT company from the array

itCompanies.shift();

console.log(itCompanies);

// 19. Remove the middle IT company or companies from the array

itCompanies.splice(parseInt(itCompanies.length/2 - .5), 1);

console.log(itCompanies);

// 20. Remove the last IT company from the array

itCompanies.pop();

console.log(itCompanies);

// 21. Remove all IT companies 

itCompanies.length = 0;

console.log(itCompanies);

