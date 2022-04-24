// Assignment Code
var generateBtn = document.querySelector("#generate");


// console.log(length);
// console.log(passwordlength);
// function generatePassword(){

//   function askQuestion() {
//     var choice1 = prompt("a question").toLowerCase;
//     if (choice1 === option) {
//          alert("Something");
//     } else {
//          alert("that's not possible");
//          //go back to the original prompt
//          askQuestion();
//     }
// }

 

// }

// // Write password to the #password input
function writePassword() {
  let passwordlength = prompt("pleater number between 8 - 128");
  if(passwordlength < 8 || passwordlength > 128 || passwordlength === ""){
    
    alert("password either to short or too high");
  }else if(isNaN(passwordlength)){
    alert("please enter numbers");
  }else{
    let foo = parseInt(passwordlength);
    // console.log(foo);
    return foo;
  }
}

// function criteria(){
// //  let capital = prompt("would you like to include capital yes or no")
// //  if(capital === "yes"){
// //    console.log(capital)
// //  }

//       // let capitals = confirm("would you like capitals");
//       // if (capitals== true){
//       //   console.log("you pressed ok");
//       // }else{
//       // console.log ("you canceled");
//       // }

//       // let lowerCase = confirm("would you like lowercase");
//       // if (lowerCase == true){
//       //   console.log("you pressed ok");
//       // }else{
//       // console.log ("you canceled");
//       // }

//       // let specials = confirm("would you like special characters");
//       // if (specials == true){
//       //   console.log("you pressed ok");
//       // }else{
//       // console.log ("you canceled");
//       // }

//       // let numbers = confirm("would you like numbers");
//       // if (numbers== true){
//       //   console.log("you pressed ok");
//       // }else{
//       // console.log ("you canceled");
//       // }
// }

// criteria();
writePassword();

function generatePassword(){
  
}
// var len = writePassword();
// console.log(len);

  // function check(numbers){
  //   console.log(numbers)
  // }
  // var length = writePassword();

  // var password = check(length)

  // // let length = writePassword();
  // // console.log(length);
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
