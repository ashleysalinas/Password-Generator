// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Initial prompt for choosing character length
  var initialPopUp = window.prompt("Thank you for using the Password Generator! How many characters would you like to include? Please choose between 8-128");
  if (initialPopUp == null || initialPopUp.some(lowercaseAlphabet)){
    return window.alert("Please choose a number. Try again!");
  } else if (initialPopUp < 8 || initialPopUp > 128) {
    return window.alert("Please choose a number between 8 and 128.");
  }
  console.log(initialPopUp)
  console.log(typeof initialPopUp)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
