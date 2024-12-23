// Declare a function fullName and it print out your full name.
function fullName1() {
    console.log("Alan Curtis Deaton");
}

fullName1();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName) {
    fullname=`${firstName} ${lastName}`;
    return `${firstName} ${lastName}`;
}

console.log(fullName2("Alan", "Deaton"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle
function areaOfRectangle(width, height) {
    return width * height;
}

console.log(areaOfRectangle(5, 3));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 3));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

console.log(volumeOfRectPrism(5, 3, 2));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log(areaOfCircle(5));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(circle) {
    return 2 * Math.PI * circle;
}

console.log(circumOfCircle(5));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume) {
    return mass / volume;
}

console.log(density(5, 3));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return distance / time;
}

console.log(speed(5, 3));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
    return mass * gravity;
}

console.log(weight(5, 9.81));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
    return (oC * 9/5) + 32;
}

console.log(convertCelsiusToFahrenheit(25));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(weight, height) {
    return weight / (height * height);
}

console.log(bmi(104, 1.75)); // Normal weight

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}

console.log(checkSeason(6)); // Output: Summer

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a,b,c) { 
    return Math.max(a,b,c);
}

console.log(findMax(0 ,10, 5));

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0