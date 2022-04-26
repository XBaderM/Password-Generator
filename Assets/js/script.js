// Assignment Code
var generateBtn = document.querySelector("#generate");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
let lowercase = "abcdefghijklmnopqrstuvwyz";
let numbers = "0123456789";
let special = '!"£$%^&*?()_[]';

// function to count wordlength

function wordlength() {
  let passwordlength = prompt("please enter number between 8 - 128");
  if (passwordlength < 8 || passwordlength > 128 || passwordlength === "") {
    alert("password either to short or too high");

    wordlength();
  } else if (isNaN(passwordlength)) {
    // check if letters pressed instead numbers
    alert("please enter numbers");
    wordlength();
  } else {
    let toInteger = parseInt(passwordlength); // convert string to int
    return toInteger;
  }
}

// criteria function

function selection() {
  let arrays = []; // array reset

  let toUpp = confirm("would you like Uppercase characters");
  if (toUpp == true) {
    arrays.push(uppercase); //push selected confirms to array
  }

  let toLower = confirm("would you like lowercase characters");
  if (toLower == true) {
    arrays.push(lowercase); //push selected confirms to array
  }

  let toNumbrs = confirm("would you like numbers");
  if (toNumbrs == true) {
    arrays.push(numbers); //push selected confirms to array
  }

  let toSpec = confirm("would you like special characters");
  if (toSpec == true) {
    arrays.push(special); //push selected confirms to array
  }

  if (arrays.length === 0) {
    // check if array has elemnts or not
    alert("you must have at least one criteria");
    selection(); // if nothing is pushed
  }
  return arrays;
}

function generatePassword(arrayLength, numLength) {
  // take parametrs to convert
  var text = "";
  var toNumb = numLength;
  var toArrs = arrayLength.join(""); // convert to string without commas

  for (let i = 0; i < toNumb; i++) {
    text += toArrs.charAt(Math.floor(Math.random() * toArrs.length));
    console.log(text);
  }
  return text;
}

function writePassword() {
  var noWords = wordlength();
  var orderList = selection();
  var password = generatePassword(orderList, noWords);
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = "";

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
