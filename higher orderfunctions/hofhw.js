const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'England']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.

// forEach: forEach is used to iterate over an array. It does not return anything, instead it executes a provided function once for each element in the array.

// map: Creates a new array by transforming each element of the original array.

// filter: filter creates a new array with all elements that pass the test implemented by the provided function.

// reduce: reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

function printElement(element) {
    console.log(element);
}

// forEach example

countries.forEach(printElement);

// map example  

const uppercaseCountries = countries.map(country => country.toUpperCase());
console.log(uppercaseCountries);

// filter example

const countriesWithFiveLetters = countries.filter(country => country.length === 5);
console.log(countriesWithFiveLetters);

// reduce example

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNumbers);

// reduce example with an object

const totalPrice = products.reduce((accumulator, currentValue) => {
    if (currentValue.price !== '') {
        accumulator += currentValue.price;
    }
    return accumulator;
}, 0);

console.log(totalPrice);

// reduce example with an array of objects

const productNames = products.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.product);
    return accumulator;
}, []);

console.log(productNames);

// reduce example with an array of objects and a condition

const filteredProducts = products.reduce((accumulator, currentValue) => {
    if (currentValue.price !== '' && currentValue.price < 5) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(filteredProducts);

// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// Use forEach to console.log each number in the numbers array.

countries.forEach(printElement);
console.log();
names.forEach(printElement);
console.log();
numbers.forEach(printElement);
console.log();

/* 
Use map to create a new array by changing each country to uppercase in the countries array.
Use map to create an array of countries length from countries array.
Use map to create a new array by changing each number to square in the numbers array
Use map to change to each name to uppercase in the names array
Use map to map the products array to its corresponding prices.
*/

function uc(element) {
    return element.toUpperCase();
}

const uppercaseCountriesMap = countries.map(uc);

console.log(uppercaseCountriesMap);

const countryLengthMap = countries.map(country => country.length);

console.log(countryLengthMap);

const squaredNumbersMap = numbers.map(num => num * num);

console.log(squaredNumbersMap);

const uppercaseNamesMap = names.map(uc);

console.log(uppercaseNamesMap);

const productPricesMap = products.map(product => product.price);

console.log(productPricesMap);

/*
Use map to create an array of countries length from countries array.
Use map to create a new array by changing each number to square in the numbers array
Use map to change to each name to uppercase in the names array
Use map to map the products array to its corresponding prices.
ter out country start with 'E';
Use filter to filter out only prices with values.
*/

const countryLengthFilter = countries.map(country => country.length).filter(length => length >= 5);

console.log(countryLengthFilter);

const squaredNumbersFilter = numbers.map(num => num * num).filter(num => num % 2 === 0);

console.log(squaredNumbersFilter);

const uppercaseNamesFilter = names.map(uc).filter(name => name.startsWith('E'));

console.log(uppercaseNamesFilter);

const productPricesFilter = products.map(product => product.price).filter(price => price > 0);

console.log(productPricesFilter);

/*
Use filter to filter out country starting with 'E';
Use filter to filter out only prices with values.
*/

const filteredCountries = countries.filter(country => country.startsWith('E'));

console.log(filteredCountries);

const filteredProductsPrice = products.filter(product => product.price > 0);

console.log(filteredProductsPrice);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}

console.log(getStringLists(countries));

console.log(getStringLists(names));

console.log(getStringLists(numbers));

console.log(getStringLists(products));

/*
Use reduce to sum all the numbers in the numbers array.
Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
*/

const sumOfNumbersReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumOfNumbersReduce);

const countryListReduce = countries.reduce((accumulator, currentValue) => accumulator + `${currentValue}, `, '').slice(0, -2);

console.log(`${countryListReduce} are North European countries.`);

// Explain the difference between some and every

// some: some checks if at least one element in the array passes the test implemented by the provided function. It returns a boolean.

// every: every checks if all the elements in the array pass the test implemented by the provided function.  It returns a boolean as well.

/*
Use some to check if some names' length greater than seven in names array
Use every to check if all the countries contain the word land
*/

const someNamesLongerThanSeven = names.some(name => name.length > 7);

console.log(someNamesLongerThanSeven);

const allCountriesContainLand = countries.every(country => country.includes('land'));

console.log(allCountriesContainLand);

// Explain the difference between find and findIndex.

// find: find returns the value of the first element in the array that satisfies the provided testing function. It returns undefined if no element is found.

// findIndex: findIndex returns the index of the first element in the array that satisfies the provided testing function. It returns -1 if no element is found.

/*
Use find to find the first country containing only six letters in the countries array
Use findIndex to find the position of the first country containing only six letters in the countries array
Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/

const firstCountryWithSixLetters = countries.find(country => country.length === 6);

console.log(firstCountryWithSixLetters);

const firstCountryWithSixLettersIndex = countries.findIndex(country => country.length === 6);

console.log(firstCountryWithSixLettersIndex);

const norwayIndex = countries.findIndex(country => country === 'Norway');

console.log(norwayIndex);

const russiaIndex = countries.findIndex(country => country === 'Russia');

console.log(russiaIndex);


