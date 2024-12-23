// Exercises:Level 1
// Display the countries array as a table

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.table(countries);

// Display the countries object as a table

const countriesObj = {
    Finland: 'Helsinki',
    Sweden: 'Stockholm',
    Norway: 'Oslo'
}

console.table(countriesObj);

// Use console.group() to group logs

console.group('Countries Array');
console.table(countries);
console.groupEnd();

console.group('Countries Object');
console.table(countriesObj);
console.groupEnd();


// Exercises:Level 2
// 10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10, '10 is not greater than 20');

// Write a warning message using console.warn()

console.warn('This is a warning message');

// Write an error message using console.error()

console.error('This is an error message');


// Exercises:Level 3

// Check the speed difference among the following loops: while, for, for of, forEach


// While loop
const countriesWhile = ['Finland', 'Sweden', 'Norway'];
let iWhile = 0;
console.time('While loop');
while (iWhile < countriesWhile.length) {
    console.log(countriesWhile[iWhile]);
    iWhile++;
}
console.timeEnd('While loop');

// For loop
console.time('For loop');
for (let iFor = 0; iFor < countriesWhile.length; iFor++) {
    console.log(countriesWhile[iFor]);
}
console.timeEnd('For loop');

// For of loop
console.time('For of loop');
for (const country of countriesWhile) {
    console.log(country);
}
console.timeEnd('For of loop');

// forEach loop
console.time('forEach loop');
countriesWhile.forEach(country => console.log(country));
console.timeEnd('forEach loop');
