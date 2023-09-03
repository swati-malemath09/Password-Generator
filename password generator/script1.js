const resultEl=document.getElementById('result');
const lengthEl=document.getElementById('length');
const uppercaseEl=document.getElementById('uppercase');
const lowercaseEl=document.getElementById('lowercase');
const numbersEl=document.getElementById('numbers');
const symbolsEl=document.getElementById('symbols');
const generateEl=document.getElementById('generate');
const clipboardEl=document.getElementById('clipboard');

const randomFunc={
    lower:getRandomLowercase,
    upper:getRandomUppercase,
    number:getRandomNumbers,
    symbols:getRandomSymbols
};

generateEl.addEventListener('click',()=>{
    const length= +lengthEl.ariaValueMax;
    const hasLower=lowercaseEl.ariaChecked;
    const hasUpper=uppercaseEl.ariaChecked;
    const hasNumber=numbersEl.ariaChecked;
    const hasSymbol=symbolsEl.ariaChecked;

    resultEl.innerText=generatePassword(hasLower,hasUpper,hasNumbers,hasSymbols,length);
})

function generatePassword(hasLower,hasUpper,hasNumbers, hasSymbols, length)
{
    let generatedPaasword="";

    let typeCount=(hasLower? 1:0)+(hasUpper? 1:0)+ (hasNumbers? 1:0)+(hasSymbols? 1:0)
}



function getRandomLowercase()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUppercase()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}


function getRandomNumbers()
{
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbols()
{
    const symbols="!@#$%^&*()_+-=.,";
    return symbols[Math.floor(Math.random()*symbols.length)]
}

