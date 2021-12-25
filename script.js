// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //initial pop up
  var initialPopUp = window.prompt("Thank you for using Password Generator! How many characters would you like to include? Please choose between 8-128.");
  //if/else statement to control character length
  if (initialPopUp == null) {
    return window.alert("Thanks again! Have a great day.");
  } else if (initialPopUp < 8 || initialPopUp > 128) {
    return window.alert("Please enter a number between 8 and 128. Try again!");
  } else {
    return window.alert("It's working!")
  }
  

  console.log(initialPopUp);

  //var includeLowerCase = window.alert("Would you like to include lower case characters?")
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

