// Assignment code here
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "$", "^", "*", "/", "?"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var options = []
  var length = prompt("Enter password at minimum 8 characters and maximum 128 characters");
  if (length < 8 || length > 128) {
    alert("Minimum of 8 characters and maximum of 128 characters");
    generatePassword();
    return;
  }
  var wantsUppercase = confirm("Do you want uppercase characters?");
  var wantsLowercase = confirm("Do you want lowercase characters?");
  var wantsNumber = confirm("Do you want number characters?");
  var wantsSpecial = confirm("Do you want special characters?");
  if (!wantsUppercase && !wantsLowercase && !wantsNumber && !wantsSpecial) {
    alert("Must contain one of the following: lowercase, uppercase, numeric, and/or special characters.");
    generatePassword();
    return;
  }
  if (wantsUppercase) {
    options = options.concat(uppercase);
  }
  if (wantsLowercase) {
    options = options.concat(lowercase);
  }
  if (wantsNumber) {
    options = options.concat(number);
  }
  if (wantsSpecial) {
    options = options.concat(special);
  }
  var password = ""
  for (var i = 0; i < length; i++) {
    password += options[Math.floor(Math.random() * options.length)];
  }
  return password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
