// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password == undefined){
    return;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var pswLength = prompt("How long you want your password? (8~128)");
  // change of data type
  if(pswLength != null) {
    var pswLengthNum = Number(pswLength);
    if(!isNaN(pswLengthNum) && pswLengthNum >= 8 && pswLengthNum <= 128) {
      var lowerCase = confirm("Do you want lowercase in your password?");
        var upperCase = confirm("Do you want uppercase in your password?");
          var numeric = confirm("Do you want number in your password?");
            var speChar = confirm("Do you want special character in your password?");
    } else {
      alert("Please enter a valid password length.");
    }

    var char = 
    // return value to password
    return randomPassword;//TODO:declare and add value to the variable
  }
  return;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


