// Assignment code here
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()\"\%'+,-./:;<=>?[\\]_`{|}~";
let choices = ""


let generatePassword = function() {
  //determine password length requirement
  let passLength = window.prompt("Enter password length requirement: 8-128 characters");
  //alert if value is not between 8 and 128 and restarts the process with return
  if (passLength < 8 || passLength > 128) {
    window.alert("Length must be between 8 and 128 characters");
    return
  } 
  else {
  //determine password character requirements
  let selectLowercase = window.confirm("Select OK if your password requires lowercase letters");
  let selectUppercase = window.confirm("Select OK if your password requires uppercase letters");
  let selectNumbers = window.confirm("Select OK if your password requires numbers");
  let selectSpecial = window.confirm("Select OK if your password requires special characters");
  //alert if no requirement is selected and restarts the process 
  if (!selectLowercase && !selectUppercase && !selectNumbers && !selectSpecial) {
    window.alert("Please select at least one password requirment");
    return
  }
  // all four requirements selected
  else if (selectLowercase && selectUppercase && selectNumbers && selectSpecial) {
    selected = lowercase.concat(uppercase, numbers, special);
  }
  //3 requirements selected
  else if (selectLowercase && selectUppercase &&selectNumbers) {
    selected = lowercase.concat(uppercase, numbers);
  } 
  else if (selectUppercase && selectNumbers && selectSpecial) {
    selected = uppercase.concat(numbers,special);
  }  
  else if (selectLowercase && selectNumbers && selectSpecial) {
    selected = lowercase.concat(numbers,special);
  }
  else if (selectLowercase && selectUppercase && selectSpecial) {
    selected = lowercase.concat(uppercase,special);
  }
  //2 requirements selected
  else if (selectLowercase && selectUppercase) {
    selected = lowercase.concat(uppercase);
  }
  else if (selectLowercase && selectNumbers) {
    selected = lowercase.concat(numbers);
  }
  else if (selectLowercase && selectSpecial) {
    selected = lowercase.concat(special);
  }
  else if (selectUppercase && selectNumbers) {
    selected = uppercase.concat(numbers);
  }
  else if (selectUppercase && selectSpecial) {
    selected = uppercase.concat(special)
  }
  else if (selectNumbers && selectSpecial) {
    selected = numbers.concat(special);
  }
  //1 requirement selected
  else if (selectLowercase) {
    selected = lowercase;
  }
  else if (selectUppercase) {
    selected = uppercase;
  }
  else if (selectNumbers) {
    selected = numbers;
  }
  else if (selectSpecial) {
    selected = special;
  }
}

//array placeholder 
  let password = []; 

//random selection
  for (var i = 0; i < passLength; i++) {
    let selection = selected[Math.floor(Math.random() * selected.length)];
    password.push(selection)
  }  

  //converts the array to a string 
  let ps = password.join("")
  return ps
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var ps = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = ps;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword()