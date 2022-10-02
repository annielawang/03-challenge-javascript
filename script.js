// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password == undefined){
    return;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;//Make password display in textarea on webpage
}

//Add logic for selecting password criteria
function generatePassword() {
  var pswLength = prompt("How long you want your password? (Length:8-128)");
  if(pswLength != null) {
    //Change data type to number
    var pswLengthNum = Number(pswLength);
    //Add prompt and confirm for selecting password criteria
    if(!isNaN(pswLengthNum) && pswLengthNum >= 8 && pswLengthNum <= 128) {
      var lowerCase = confirm("Do you want lowercase in your password?");
      var upperCase = confirm("Do you want uppercase in your password?");
      var numeric = confirm("Do you want number in your password?");
      var speChar = confirm("Do you want special character in your password?");
      if(!lowerCase && !upperCase && !numeric && !speChar) {
        alert("Please select at lease one character type.")
      }
      return gen(pswLengthNum, lowerCase, upperCase, numeric, speChar);
    } else {
      alert("Please enter a valid password length (8-128).");
    }
  }
  return;
}

//Generate password based the criteria selected
function gen(lengthFlag, lowerCaseFlag, upperCaseFlag, numericFlag, speCharFlag) {
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var speChars = "!@#$%^&*()";

  var chars = "";
  var password = "";
  if(lowerCaseFlag) {
    chars += "abcdefghijklmnopqrstuvwxyz";
    password += randomPicOne(lowerCaseChars);
  } 

  if(upperCaseFlag){
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password += randomPicOne(upperCaseChars);
  }

  if(numericFlag){
    chars += "0123456789";
    password += randomPicOne(numericChars);
  }

  if(speCharFlag){
    chars += "!@#$%^&*()";
    password += randomPicOne(speChars);
  }

  var leftCharsTotal = lengthFlag - password.length;
  
  for (var i = 0; i < leftCharsTotal; i++) {
    password += randomPicOne(chars);
  }

  return password;
}

//Pick a random number using functions
function randomPicOne(charSet) {
  var randomNumber = Math.floor(Math.random() * charSet.length);
  return charSet.substring(randomNumber, randomNumber + 1);
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


