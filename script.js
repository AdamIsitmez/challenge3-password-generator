
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordCriteria = {
  length: 0,
  lower: false,
  upper: false,
  numbers: false,
  special: false
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Creates password according to what criterias were selected. Cycles through the specified criteria randomly.
function generatePassword() {
  var password = "";
  getPasswordCriteria();
  var generators = createGeneratorArr();
  for (var i = 0; i < passwordCriteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * generators.length);
    console.log(generators[randomIndex]);
    var char = generators[randomIndex]();
    password += char;
  }
  return password;
}

//check that the input is between a specified range
function checkValidInput(input, a, b) {
  if (isNaN(input)) {
    alert("Invalid input. Please enter a number between " + a + " to " + b + ".");
  }
  else if ((input < a) || (input > b)) {
    alert("Invalid input. Please enter a number between " + a + " to " + b + ".");
  }
  else {
    return true;
  }
}
//A function to get the necessary inputs from the user which includes validation.
function getPasswordCriteria() {
  var validInput = false;
  var validCriteria = false;

  while (!validInput) {
    passwordCriteria.length = parseInt(prompt("What would you like the length of the password to be? (Must be between 8-128"));
    validInput = checkValidInput(passwordCriteria.length, 8, 128);
  }
  while (!validCriteria) {
    alert("You will now be prompted for some criterias that you would like to include in your password. Simply press 'OK' to include it or 'cancel' if not.\nPress OK to continue");
    passwordCriteria.lower = confirm("Would you like to inlcude lowercase letters?");
    passwordCriteria.upper = confirm("would you like to include uppercase letters?");
    passwordCriteria.numbers = confirm("would you like to include numbers?");
    passwordCriteria.special = confirm("would you like to include special characters?");

    if (!(Object.values(passwordCriteria).includes(true))) {
      alert("Please choose at least 1 criteria to include in your password.");
    }
    else {
      validCriteria = true;
    }
  }
}

//random character generators. One function for each type of character (lowercase,uppercase, numeric and special)
function generateRandomLower() {
  var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  index = Math.floor(Math.random() * lowerCasedCharacters.length);
  char = lowerCasedCharacters[index];
  return char;
}

function generateRandomUpper() {
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  index = Math.floor(Math.random() * upperCasedCharacters.length);
  char = upperCasedCharacters[index];
  return char;
}

function generateRandomNumber() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  index = Math.floor(Math.random() * numericCharacters.length);
  char = numericCharacters[index];
  return char;
}

function generateRandomSpecial() {
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  index = Math.floor(Math.random() * specialCharacters.length);
  char = specialCharacters[index];
  return char;
}

//creates an array of generator functions according to what criteria selection was made by the user.
function createGeneratorArr() {
  var arr = []
  if (passwordCriteria.lower) {
    arr.push(generateRandomLower);
  }
  if (passwordCriteria.upper) {
    arr.push(generateRandomUpper);

  }
  if (passwordCriteria.numbers) {
    arr.push(generateRandomNumber);

  }
  if (passwordCriteria.special) {
    arr.push(generateRandomSpecial);

  }
  return arr;
}






