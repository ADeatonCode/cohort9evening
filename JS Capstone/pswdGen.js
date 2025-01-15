/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated 
*/

function generatePassword() {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeric = '0123456789';
    const special = '!@#$%^&*()-_=+[{]}\|;:\'",.<>/?';

    let passwordValues = '';
    let password = '';

    // Prompt for password criteria
    const passwordLength = parseInt(prompt('Password length (8-128 characters)?'));
    
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert('Please enter a valid length between 8 and 128.');
        return '';
    }

    const lowercase = confirm('Include lowercase letters?');
    if (lowercase) {
        passwordValues += lower;
    }

    const uppercase = confirm('Include uppercase letters?');
    if (uppercase) {
        passwordValues += upper;
    }

    const numericChar = confirm('Include numeric characters?');
    if (numericChar) {
        passwordValues += numeric;
    }

    const specialChar = confirm('Include special characters?');
    if (specialChar) {
        passwordValues += special;
    }

    if (passwordValues === '') {
        alert('You must select at least one character type.');
        return '';
    }
    console.log(passwordLength, passwordValues);
    // Generate password
    for (let i = 0; i < passwordLength; i++) {
        password += passwordValues.charAt(Math.floor(Math.random() * passwordValues.length));
    }

    console.log(password);
    return password;
}
