// Problem 1: ageToAbilities
// Write a function, ageToAbilities that takes a person's age and returns a message of their abilities according to the table below:

// ┌──────────┬────────────────────────────────────┐
// │ age      │ message                            │
// ├──────────┼────────────────────────────────────┤
// │ under 16 │ 'You can't drive.'                 │
// │ 16 to 17 │ 'You can drive but not vote.'      │
// │ 18 to 24 │ 'You can vote but not rent a car.' │
// │ 25 plus  │ 'You can do pretty much anything.' │
// └──────────┴────────────────────────────────────┘
// Examples

// ageToAbilities(10) => 'You can't drive.'
// ageToAbilities(25) => 'You can do pretty much anything.'

function ageToAbilities(age) {
    if (age < 16) return 'You can\'t drive.';
    else if (age >= 16 && age <= 17) return 'You can drive but not vote.';
    else if (age >= 18 && age <= 24) return 'You can vote but not rent a car.';
    else return 'You can do pretty much anything.';
}
console.log(ageToAbilities(10));
console.log(ageToAbilities(22));
console.log(ageToAbilities(25));


// Problem 2: oddIndices
// Write a function, oddIndices, that takes in an array of numbers and returns only the ones that are located at odd indices (indices is plural of index). Recall that the index of the first value in an array (or string) is 0.

// Examples

// oddIndices([0, 2, 4, 6, 8, 10]) => [2, 6, 10]
// oddIndices([1]) => []
// oddIndices([100, 101, 102]) => [101]

function oddIndices(indices) {
    const oddIndicesArray = [];
    for (let i = 1; i < indices.length; i += 2) {
        oddIndicesArray.push(indices[i]);
    }
    return oddIndicesArray;
}
console.log(oddIndices([0, 2, 4, 6, 8, 10]));
console.log(oddIndices([1]));
console.log(oddIndices([100, 101, 102]));


// Problem 3: numOddValues
// Write a function, numOddValues, that takes in an array of numbers and returns the quantity of odd values in that array.

// Examples

// numOddValues([0, 1, 2, 3]) => 2
// numOddValues([5, 5, 5, 5]) => 4
// numOddValues([]) => 0


function numOddValues(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2!== 0) {
            count++;
        }
    }
    return count;
}
console.log(numOddValues([0, 1, 2, 3]));
console.log(numOddValues([5, 5, 5, 5]));
console.log(numOddValues([]));

// Problem 4: averageStringLength
// Write a function, averageStringLength, that takes in an array of strings and returns the average length of the strings. An average is calculated by first summing X values, then dividing the sum by X.

// Examples

// averageStringLength(['oh', 'hello']) => 3.5
// averageStringLength([]) => 0
// averageStringLength(['a', 'pleasant', 'string']) => 5


function averageStringLength(strings) {
    let totalLength = 0;
    for (let i = 0; i < strings.length; i++) {
        totalLength += strings[i].length;
    }
    if (strings.length === 0) return 0;
    return totalLength / strings.length;
}
console.log(averageStringLength(['oh', 'hello']));
console.log(averageStringLength([]));
console.log(averageStringLength(['a', 'pleasant', 'string']));


// Problem 5: firstPunctuationIndex
// Write a function, firstPunctuationIndex, that returns the index of the first appearance of a period, question mark, or exclamation mark in the given string. If none are found, return -1.

// Examples

// firstPunctuationIndex('wow! goodness me.') => 3
// firstPunctuationIndex('I love taking tests?') => 19
// firstPunctuationIndex('...hello?') => 0
// firstPunctuationIndex('alright alright alright') => -1


function firstPunctuationIndex(str) {
    const punctuationMarks = ['.', '?', '!'];
    for (let i = 0; i < str.length; i++) {
        if (punctuationMarks.includes(str[i])) {
            return i;
        }
    }
    return -1;
}

console.log(firstPunctuationIndex('I love taking tests?'));
console.log(firstPunctuationIndex('...hello?'));
console.log(firstPunctuationIndex('alright alright alright'));
console.log(firstPunctuationIndex('wow! goodness me.'));

// Problem 6: getPlace
// Write a function, getPlace, that takes in two parameters, a sorted list of high scores (highest first, loweset last) and a new score. The function should return a human readable string indicating which place the new score fits into the given list of high scores.

// Note 1: You are not required to insert score into the highScores array

// Note 2: We will assume that the new score is not already in the high scores array so that we don't have to handle ties

// Examples

// getPlace([60, 30, 10], 90)     => '1st place'
// getPlace([60, 30, 10], 50)     => '2nd place'
// getPlace([60, 30, 10], 15)     => '3rd place'
// getPlace([500, 300, 200], 100) => '4th place'


function getPlace(scores, newScore) {
    let place = 4;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < newScore) {
            place--;
        }
    }
    return `${place}st place`;
}
console.log(getPlace([60, 30, 10], 90));
console.log(getPlace([60, 30, 10], 50));
console.log(getPlace([60, 30, 10], 15));
console.log(getPlace([500, 300, 200], 100));

// Problem 7: addToObj
// Write a function, addToObj, that takes in three parameters, a person object, a key, and a value,. The function should change or add the key and value to the object.

// Note 1: You are should not be returning anything from this function, the changes in the object should be saved.

// Note 2: If not given a string in place of the key, return the string 'Function must be called with a valid key.'

// Examples

// let obj = {
//     user: 'teacher',
//     birthday: 'January 1st',
//     favoriteColor: 'yellow'
// }

// addToObj(obj, 'homeState', 'tennessee') => object would add the key 'homeState' and have the value of 'tennessee'
// addToObj(obj, 'parentsNames', {mother: 'Janine', father: 'Robert'}) => object would add the key 'parentsNames' and have the value of a nested object
// addToObj(obj, 'user', 'student')     => object would redefine the key 'user' to have the value 'student'
// addToObj(obj, true, 'student')     => 'Function must be called with a valid key.'


function addToObj(obj, key, value) {
    if (typeof key ==='string') {
        obj[key] = value;
    } else {
        return 'Function must be called with a valid key.';
    }
}
let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
};
addToObj(obj, 'homeState', 'tennessee');
addToObj(obj, 'parentsNames', {mother: 'Janine', father: 'Robert'});
addToObj(obj, 'user','student');
addToObj(obj, true, 'student');
console.log(obj);


// Stretch Problem: duplicateElements
// Write a function called duplicateElements that takes an array of numbers as input and returns a new array containing only numbers from the input array that repeat at least once and should not be repeated in the result.

// Examples

const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

// uniqueElements(inputArray) => [2, 4, 6]

function duplicateElements(arr) {
    const frequencyMap = {};
    const duplicates = [];

    // Count the frequency of each number
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Identify and store duplicates
    for (const num in frequencyMap) {
        if (frequencyMap[num] > 1 && !duplicates.includes(Number(num))) {
        duplicates.push(Number(num));
        }
    }

    return duplicates;
}


console.log(duplicateElements(inputArray)); 