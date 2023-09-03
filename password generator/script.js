// Select all the elements which you need

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// OBJECT NAMED randomFunc IS CREATED

const randomFunc = {
  // lower:key and getRandomLower:function
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// GENERATE AN ELEMENT TO GENERATE A RANDOM PASSWORD 
// AND ON CLICKING THAT BUTTON A FUNCTION IS INVOKED
generateEl.addEventListener('click', () => {
  // Get the length value for the password
  const length = +lengthEl.value;
  // We need to check which all checkboxes are checked
  //  .checked --> returns true if the element is checked 
  //   else returns false if the element is not checked
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  console.log("Length:", length);
  console.log("Has Lower:", hasLower);
  console.log("Has Upper:", hasUpper);
  console.log("Has Number:", hasNumber);
  console.log("Has Symbol:", hasSymbol);


  //STORE THE RESULT/PASSWORD IN resultEl 
  // AND WE CALL THE generatePassword() function with the parameters (hasLower, hasUpper, hasNumbers, hasSymbols,length)
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});


// WE WILL SEE HOW THIS FUNCTION WILL GENERATE THE PASSWORD
function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {
  let generatedPassword = "";

//   let typeCount = hasLower + hasUpper + hasNumber + hasSymbol;

let typeCount = (hasLower ? 1 : 0) + (hasUpper ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSymbol ? 1 : 0);


  console.log("Type Count:", typeCount);

  //TO FILTER OUT ALL THE SETTINGS WHICH WE HAVE GIVEN
  //We need to apply only those settings which are checked

  // An array of objects is created, each representing a character type
  //  (lowercase, uppercase, number, or symbol) along with its corresponding boolean flag. 
  // The array is then filtered to include only the types that have an active flag (value of true).
  const typesArr = [{ lower: hasLower }, { upper: hasUpper }, { number: hasNumber }, { symbol: hasSymbol }].filter((item) =>
    Object.values(item)[0]
  );

  console.log("Types Array:", typesArr);

  if (typeCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typeCount) {
    typesArr.forEach((type) => {
      const keyFromRandomFunc = Object.keys(type)[0];
      generatedPassword += randomFunc[keyFromRandomFunc]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length)

  console.log( finalPassword)

  return finalPassword;
}

// Functions to generate uppercase letters, lowercase letters, random numbers, and symbols
//To generate lowercase numbers should be between 97 and 122 char-code
//Math.random() generates numbers between 0-1
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//TO GENERATE UPPERCASE NUMBERS MUST BE BETWEEN 65 TO 90 CHAR-CODE
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// TO GENERATE NUMBERS YOU HAVE TO BE BETWEEN 48 TO 57 CHAR-CODE
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
