// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
// Write password to the #password input
function writePassword() {
  var password = generatePassword = function();
  var passwordText = document.querySelector("#password");
  var Capitalletters = confirm ("Would you like to add capital letters?")
  var SpecialCharacters = confirm ("Would you like to add special characters?")
 
  if (Capitalletters = true) {
    
} 
if (SpecialCharacters = true) {
    
} 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
