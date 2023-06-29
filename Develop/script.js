// Function to generate a random password
function generatePassword(length,lowercase, uppercase, numbers, specials) {
  //defining variables
  var lowercaseletters = "abcdefghijklmnñopqrstuvwxyz";
  var uppercaseletters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  //default values
  var characters = " ";
  var password = " ";
  
  //building the string
  if (lowercase) {
    characters += lowercaseletters;
  }

  if (uppercase) {
    characters += uppercaseletters;
  }

  if (numbers) {
    characters += numerals;
  }

  if (specials) {
    characters += special;
  }

  if (characters === "") {
    alert("Please select at least one category.");
    return '';
  }

  for (var i = 0; i < length; i++) {
    var randomPass = characters.charAt(Math.floor(Math.random() * characters.length));
    password += randomPass;
  }

  return password;
}

// Function to specify the lenght and ask the user what type of characters it wants to use

function generate() {
  var min = 8;
  var max = 128;

  var length = prompt("Password length (between " + min + " and " + max + "):");

  // Checking if the length input is not null and not an empty string, 
  //this part was added becaus originally the prompt would go away and alert nothing 
  //if i just hit enter

  if (length !== null && length.trim() !== "") {
  //turning the input of the user into whole numbers
    //length = parseInt(length);

  // Checking if the length input is a number
    if (!isNaN(length)) {
      // Checking if the length is within the desired range
      if (length >= min && length <= max) {
        var lowercase = confirm("Allow lowercase?");
        var uppercase = confirm("Allow uppercase?");
        var numbers = confirm("Use numbers?");
        var specials = confirm("Use special characters?");
        // calling the generatePassword function and storaging the new password in the mtml element

        var password = generatePassword(length, lowercase, uppercase, numbers, specials);
        var newPassword = document.getElementById("password");
        newPassword.value = password;
        console.log(password);
      } 

      else {
        alert("Please enter a number between " + min + " and " + max + ".");
      }
    } 

    else {
      alert("Invalid input. Please enter a number.");
    }
  } 
  else {
    alert("Input cannot be empty. Please enter a valid password length.");
  }
}
  

// Calling the function with the click event on the button element
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generate);




