// Assignment Code
var generateBtn = document.querySelector("#generate");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
let lowercase = "abcdefghijklmnopqrstuvwyz";
let numbers = "0123456789";
//let special = "!/"£$%^&*()_-=  "
let arrays=[];


function wordlength() {
  let passwordlength = prompt("pleater number between 8 - 128");
  if(passwordlength < 8 || passwordlength > 128 || passwordlength === ""){
    
    alert("password either to short or too high");
    wordlength();
  }else if(isNaN(passwordlength)){
    alert("please enter numbers");
    wordlength();
  }else{
    let foo = parseInt(passwordlength);
    // console.log(foo);
    return foo;
  }
}

function criteria(){

  let capitals = confirm("would you like Uppercase");
        if (capitals== true){
          console.log("you pressed ok");
          arrays.push(uppercase);
          console.log(arrays);
        }else{
        console.log ("you canceled");
        }
      

      let lower = confirm("would you like lowercase");
      if (lower == true){
        console.log("you pressed ok");
        arrays.push(lowercase);
        console.log(arrays);
      }else{
      console.log ("you canceled");
      }

      let numb = confirm("would you like numbers");
      if (numb== true){
        console.log("you pressed ok");
        arrays.push(numbers)
      }else{
      console.log ("you canceled");
      }

      if(arrays.length === 0){
        alert("you must have at least one criteria");
        criteria();
      }

    }

      
  function writePassword(){
   var len = wordlength();
   criteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
