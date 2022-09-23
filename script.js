// Assignment Code
var generateBtn = document.querySelector("#generate");
var output = document.getElementById("password")
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "0123456789".split("")
var symbols = "!@#$%&*".split("")
// Write password to the #password input
function writePassword() {
  var prePassword = []
  var postPassword = ""

  var passwordlength = prompt("How long do you want your password?\n8-128")
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Your password needs to be between 8-128, please retry.")
  } else {
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
    if (prePassword.length === 0) {
      alert("Please select at least one.")
    }
    else {
      for (let i = 0; i < passwordlength; i++) {
        var random = Math.floor(Math.random() * prePassword.length)
        postPassword += prePassword[random]
      }
    }
  }
  output.innerHTML = postPassword
  // console.log(postPassword)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
