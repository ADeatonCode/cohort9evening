// Exercises: Level 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, y) { 
    if (a === 0) { throw new Error("a cannot be 0 in a linear equation when solving for x.");
    } 

    // Solving for x: ax + by + c = 0 => x = (-by - c) / a 
    const x = (-b * y - c) / a; 
return x;
}

// Quadratic equation is calculated as follows: ax**2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) { 
    const discriminant = b * b - 4 * a * c; 
    if (discriminant > 0) { 
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a); 
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a); 
        return [`Root 1: ${root1}`, `Root 2: ${root2}`]; 
    } else if (discriminant === 0) { 
        const root = -b / (2 * a); 
        return [`Single Root: ${root}`];
    } else { 
        return ['No real roots'];
    }
}

console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)) // {-2}
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const books = [ "Bible", "Math", "CookBook", "Spanish", "C++ for Dummies", "Dictionary", "We were Soldiers"];

printArray(books);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;
    console.log(formattedDateTime);
}

showDateTime()
// 08/01/2020 04:08

// Declare a function name swapValues. This function swaps value of x to y.
let x=3, y=4;
function swapValues(x, y) { 
    let temp = x; 
    x = y; 
    y = temp; 
    return [x, y];
}
[x, y] = swapValues(x, y); // x => 4, y=>3
console.log(x,y); //
x=4, y=5;
[x, y] = swapValues(x, y); // x = 5, y = 4
console.log(x,y); //

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) { 
    let reversedArr = []; 
    for (let i = arr.length - 1; i >= 0; i--) { 
        reversedArr.push(arr[i]);
    } return reversedArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalized array.

function capitalizeArray(arr) { 
    let capitalizedArr = []; 
    for (let i = 0; i < arr.length; i++) { 
        if (typeof arr[i] ==='string') {
            capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        } else {
            capitalizedArr.push(arr[i]);
        }
    } return capitalizedArr;
}

console.log(capitalizeArray(["able", "baker", "charlie", "david", "edward"]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(array, item) {
    array.push(item);
    return array;
}

console.log(addItem(["able", "baker", "charlie", "david", "edward"], "fred"));
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(array, index) {
    array.splice(index, 1);
    return array;
}

console.log(removeItem(["able", "baker", "charlie", "david", "edward"], 2));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(maxNumber) {
    let sum = 0;
    for (let i = 0; i <= maxNumber; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(10)); // -> 55

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(maxNumber) {
    let sum = 0;
    for (let i = 1; i <= maxNumber; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(sumOfOdds(10)); // -> 25

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(maxNumber) {
    let sum = 0;
    for (let i = 0; i <= maxNumber; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(sumOfEven(10)); // -> 30

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(maxNumber) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return `The number of odds are ${oddCount}.\nThe number of evens are ${evenCount}.`;
}
console.log(evensAndOdds(100));
// The number of odds are 50.
// The number of evens are 51.

// Write a function which takes any number of arguments and return the sum of the arguments

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // -> 6
console.log(sum(1, 2, 3, 4)); // -> 10

// Write a function which generates a randomUserIp.

function generateRandomUserIp() { 
    const getRandomByte = () => Math.floor(Math.random() * 256);
    const ip = `${getRandomByte()}.${getRandomByte()}.${getRandomByte()}.${getRandomByte()}`; 
    return ip;
}

console.log(generateRandomUserIp()); // -> 192.168.3.11

// Write a function which generates a randomMacAddress

function generateRandomMacAddress() {
    const getRandomByte = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const mac = `${getRandomByte()}:${getRandomByte()}:${getRandomByte()}:${getRandomByte()}:${getRandomByte()}:${getRandomByte()}`;
    return mac;
}

console.log(generateRandomMacAddress()); // -> 82:52:7f:f6:d9:44

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function returns the hexadecimal number.

function randomHexaNumberGenerator() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let id = '';
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 7; i++) {
        id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return id;

}
console.log(userIdGenerator());
// 41XTDbE