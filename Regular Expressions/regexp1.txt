// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const incomes = text.match(/\d+(?:\.\d+)? euro/g);
const totalAnnualIncome = incomes.reduce((sum, income) => sum + parseFloat(income), 0);

console.log(totalAnnualIncome);

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const points = ['-12', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = points.map(Number).sort((a, b) => b - a);
const distance = sortedPoints[0] - sortedPoints[sortedPoints.length - 1];

console.log(sortedPoints);
console.log(distance);

// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

// Write a pattern which identify if a string is a valid JavaScript variable


function is_valid_variable(variable_name) {
  const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return regex.test(variable_name);
}

console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));


// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True