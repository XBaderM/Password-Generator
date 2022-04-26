// Assignment Code
var generateBtn = document.querySelector("#generate");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
let lowercase = "abcdefghijklmnopqrstuvwyz";
let numbers = "0123456789";
let special = "\!\"£$%^&*?()_[]"

// function to count wordlength

function wordlength() {
  let passwordlength = prompt("please enter number between 8 - 128");
   if(passwordlength < 8 || passwordlength > 128 || passwordlength === "") {
    alert("password either to short or too high");
    
    wordlength();
  }else if(isNaN(passwordlength)){ // check if letters pressed instead numbers
    alert("please enter numbers"); 
    wordlength();
  }else{
    

    let toInteger = parseInt(passwordlength); // convert string to int
    return toInteger;
}
  
  
}

// criteria function 

function criteria(){

 let arrays = []; // array reset

  let capitals = confirm("would you like Uppercase");
        if (capitals== true){
          arrays.push(uppercase);
        }
      

      let lower = confirm("would you like lowercase");
      if (lower == true){
        arrays.push(lowercase);
        
      }

      let numb = confirm("would you like numbers");
      if (numb== true){

        arrays.push(numbers)
      }

      let spe = confirm("would you like Special characters");
      if (spe == true){
    
        arrays.push(special)
      }

      if(arrays.length === 0){
        alert("you must have at least one criteria");
        criteria(); // if nothing is pushed
      }
      // let text = arrays.toString();
      return arrays;
      

    }

    function generatePassword(arrayLength, numLength){ // take parametrs to convert
      var text ="";
      var toNumb = numLength;
      var toArrs = arrayLength.join(""); // convert to string without commas
      
      for(let i=0;  i < toNumb; i++){

        text += toArrs.charAt(Math.floor(Math.random()*toArrs.length));
        console.log(text);
        

      }
      return text;
      

    }

      
  function writePassword(){
   var len = wordlength();
   var ar = criteria();
   console.log("the returnred array" + ar);
  var password = generatePassword(ar, len);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
