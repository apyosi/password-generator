// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", initApp);

// Function that order the calls of the other functions
function initApp() {
  let passLength = getPassLengthOptions();
  console.log(`Password Length: ${passLength}`);
  let options = getPassCharOptions(passLength);
  console.log(`User options:`);
}

// Function to prompt user for password length
function getPassLengthOptions() {
  let passLength = 0;
  while (isNaN(passLength) || passLength < 10 || passLength > 64) {
    passLength = parseInt(
      window.prompt(
        "How many character password do you need?\nYou must choose a number between 10-64!"
      )
    );
  }
  return passLength;
}

// Function to confirm the user password characters options
function getPassCharOptions() {
  let options = { upper: false, lower: false, numeric: false, special: false };
  while (
    !options.upper &&
    !options.lower &&
    !options.numeric &&
    !options.special
  ) {
    alert(
      `You need to select at least one charcater type to generate the password:
      1. Upper-case Letters
      2. Lower-case Letters
      3. Numbers
      4. Special Characters
      `
    );
    options.upper = confirm(
      "Do you need Upper-case Letters in your password:\n" +
        upperCasedCharacters.join("")
    );
    options.lower = confirm(
      "Do you need Lower-case Letters in your password:\n" +
        lowerCasedCharacters.join("")
    );
    options.numeric = confirm(
      "Do you need Numbers in your password:\n" + numericCharacters.join("")
    );
    options.special = confirm(
      "Do you need Special Characters in your password:\n" +
        specialCharacters.join("")
    );
  }
  return options;
}
