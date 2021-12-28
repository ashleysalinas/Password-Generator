// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];
var numericCharacters =["0","1","2","3","4","5","6","7","8","9"];
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.setAttribute("type","text");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  alert("Wait! We need to set some criteria first.");
  var charLength = prompt("Please choose a character length between 8 and 128 characters","8");
// Conditional statement to check if length matches criteria
  if (charLength == null || charLength < 8 || charLength > 128) {
    return alert("Sorry, your password length doesn't meet our criteria. Try again!");
  } else {
  }
   //Condtional statement to check if numbers should be included 
   var numbersPrompt = prompt("Would you like to include numbers in your password? Please type 'yes' or 'no'.", "yes");
   function includingNumbers() {
   if (numbersPrompt === "yes") {
      includeNumbers = true
   } else if (lnumbersPrompt === "no") {
      includeNumbers = false
    } else {
       alert("Please state either 'yes' or 'no'.")
       } 
     }
 //Condtional statement to check if lowercase characters should be included 
  var lowercasePrompt = prompt("Great! Would you like to include lowercase letters? Please type 'yes' or 'no'.", "yes");
  function includingLowercase() {
  if (lowercasePrompt === "yes") {
     includeLowerCase = true
  } else if (lowercasePrompt === "no") {
     includeLowerCase = false
   } else {
      alert("Please state either 'yes' or 'no'.")
      } 
    }
  //Condtional statement to check if uppercase characters should be included 
  var uppercasePrompt = prompt("Ok, would you like to include uppercase letters? Again, please type 'yes' or 'no'.", "yes");
  function includingUpperCase() {
    if (uppercasePrompt === "yes") {
       includeUpperCase = true
    } else if (uppercasePrompt === "no") {
       includeUpperCase = false
    } else {
     alert("Please state either 'yes' or 'no'.")
    }
  }
  //Condtional statement to check if special characters should be included 
  var specCharPrompt = prompt("Ok, last question (I promise): would you like to include special characters? Please type 'yes' or 'no'","yes")
  function includingSpecChar() {
    if (specCharPrompt === "yes") {
      var finalAlert = alert("Thank you! Generating your unique password now.")
      includeSpecChar = true
    } else if (specCharPrompt === "no"){
      includeSpecChar = false
    }
    else {
      return alert("Remember to only use 'yes' or 'no'!")
    }
  };
  var possibleChar = [];
  var result = [];
  var options = {
    charLength,
    specialCharacters,
    numericCharacters,
    lowerCasedCharacters,
    upperCasedCharacters
  };
  if (includeNumbers = true) {
    possibleChar = possibleChar.concat(numericCharacters);
  }
  if (includeLowerCase = true) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
  }
  if (includeUpperCase = true) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
  }
  if (includeSpecChar = true) {
    possibleChar = possibleChar.concat(specialCharacters);
  }
 
  for (i = 0; i < charLength; i++) {
    result.push(possibleChar[Math.floor(Math.random() * possibleChar.length)]);
  }
  return result.join('')
}