const countries = require ('./countries.js');

const webTechs = require ('./web_techs.js');

console.log('Countries:', countries);

console.log('Web Technologies:', webTechs);

let text = `I love teaching and empowering people.  I teach HTML, CSS, JS, REACT, Python.`

console.log('Text:', text);

const words = text.replace(/[.,]/g, '').split(' ');

console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
}
console.log(webTechs);

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA exists');
} else {
    countries.push('Ethiopia');
}

console.log(countries);

console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)