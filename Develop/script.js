// Assignment code here
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()\"\%'+,-./:;<=>?[\\]_`{|}~";


let generatePassword = function() {
  //determine password character requirements
  let selectLowercase = window.confirm("Select OK if your password requires lowercase letters");
  let selectUppercase = window.confirm("Select OK if your password requires uppercase letters");
  let selectNumbers = window.confirm("Select OK if your password requires numbers");
  let selectSpecial = window.confirm("Select OK if your password requires special characters");
  //alert if no requirement is selected
  if (!selectLowercase && !selectUppercase && !selectNumbers && !selectSpecial === false) {
    window.alert("Please select at least one password requirment");
  }
  else if (selectLowercase && selectUppercase && selectNumbers && selectSpecial) {
    choice = lowercase.concat(uppercase, numbers, special)
  }
  }

  //determine password length requirement
  let passLength = window.prompt("Enter password length requirement: 8-128 characters");
  //alert if value is not between 8 and 128
  if (passLength < 8 || passLength > 128) {
    window.alert("Length must be between 8 and 128 characters");
  }
  

//Select lowercase, uppercase, numbers, and/or special characters based on user input-STILL WORKING ON
  if (selectLowercase === true) {
   choice = Math.floor(Math.random() * lowercase.length);
  }

  if (selectUppercase === true) {
    choice = Math.floor(Math.random() * uppercase.length);
  }

  if (selectNumbers === true) {
   choice = Math.floor(Math.random() * numbers.length);
  }

  if (selectSpecial === true) {
    choice = Math.floor(Math.random() * special.length);
  }

  //Incorporates user password length choice-STILL WORKING ON 
  for (let i = 0; i < passLength; i++) {
    let result = choice[Math.floor(Math.random() * choice.length)];
    return result
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword()