// Assignment Code
var generateBtn = document.querySelector("#generate");
//pulls password ID into JS
var output = document.getElementById("password")
//defines our criteria and splits the string so it can be manipulated later on
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "0123456789".split("")
var symbols = "!@#$%&*".split("")
// Write password to the #password input
function writePassword() {
  //adds pre and post passowrd variables
  var prePassword = []
  var postPassword = ""
//asks user how long they want their password to be
  var passwordlength = prompt("How long do you want your password?\n8-128")
  //gives error message if length requirements aren't met
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Your password needs to be between 8-128, please retry.")
  } else {
    //asks user what criteria they would like for their password
    if (confirm("Would you like to add capital letters?")) {
      prePassword = prePassword.concat(uppercase)
    }
    if (confirm("Would you like to add lowercase letters?")) {
      prePassword = prePassword.concat(lowercase)
    }
    if (confirm("Would you like to add numbers?")) {
      prePassword = prePassword.concat(numbers)
    }
    if (confirm("Would you like to add symbols?")) {
      prePassword = prePassword.concat(symbols)
    }
    //gives error message if none are selected
    if (prePassword.length === 0) {
      alert("Please select at least one.")
    }
    else {
      // for loop that randomizes our variables and keeps it within the required criteria
      for (let i = 0; i < passwordlength; i++) {
        var random = Math.floor(Math.random() * prePassword.length)
        postPassword += prePassword[random]
      }
    }
  }
  //outputs post password to our box in HTML
  output.innerHTML = postPassword
  // console.log(postPassword)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
