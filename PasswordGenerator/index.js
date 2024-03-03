const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const passwordDisplay = document.getElementById('passwordDisplay');

 const includeUppercaseElement = document.getElementById('includeUpperCase'); 
 const includeNumbersElement = document.getElementById('includeNumbers');
 const includeSymbolsElement = document.getElementById('includeSymbols');
 const form =document.getElementById('PasswordGeneratorForm'); 

 const UPPERCASE_CHAR_CODES = arrayLowToHigh(65,90);

 const LOWERCASE_CHAR_CODES = arrayLowToHigh(97,122);
 const NUMBERS_CHAR_CODES = arrayLowToHigh(48,57);
 const SYMBOL_CHAR_CODES = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)  
).concat(
  arrayLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input',syncCharacterAmount);
characterAmountRange.addEventListener('input',syncCharacterAmount);



form.addEventListener('submit', e=>{
  e.preventDefault();
  const charAmount = characterAmountNumber.value;
  const includeUppercase =includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(charAmount,includeUppercase,includeNumbers,includeSymbols);
   passwordDisplay.innerText = password;
});

function generatePassword(charAmount,includeUppercase,includeNumbers,includeSymbols){
  let charCodes = LOWERCASE_CHAR_CODES;
  if(includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);
  if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  
  let passwordCharacters =[];
  for(let i=0 ; i< charAmount; i++ ){
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
   return passwordCharacters.join('')
}
 
function arrayLowToHigh(low,high){
   let array=[];  
  for(let i=low; i<=high ;i++){
      array.push(i);
    }
    return array;
}

function syncCharacterAmount(e){
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
