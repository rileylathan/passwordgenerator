
var symbolCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];

var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

var upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

const fullPassword = symbolCharacters.concat(numberCharacters, lowerCaseLetters, upperCaseLetters);


function generatePassword() { 
  // Checks if password is between 8-128 characters.
var passwordLength = prompt("Enter length of password.")
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be between 8-128 characters."));

// Check if Symbols are included in the password.
var containsymbolCharacters = confirm("Click OK to confirm special characters in your password.")
console.log(containsymbolCharacters);

// Check if Numbers are included in the password.
var containnumberCharacters = confirm("Click OK to confirm numeric characters in your password.")
console.log(containnumberCharacters);

// Check if lower case letters are included in the password.
var containlowerCaseCharacters = confirm("Click OK to confirm lower cased characters in your password.")
console.log(containlowerCaseCharacters);

// Check if upper case letters are included in the password.
var containupperCaseCharacters = confirm("Click OK to confirm upper cased characters in your password.")
console.log(containupperCaseCharacters);

for (var i = 0; i < passwordLength; i++){
const password = fullPassword[Math.floor(Math.random() * fullPassword.length)];
}
return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
