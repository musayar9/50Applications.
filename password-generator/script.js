const resultEl = document.getElementById('result');
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText

    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    console.log("textAresSelect", textarea.select());
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password Copied to Clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    console.log("length: " + length);
    const hasLower = lowercaseEl.checked
    console.log("hasLower: " + hasLower);
    const hasUpper = uppercaseEl.checked
    console.log("hasUpper: " + hasUpper);
    const hasNumber = numbersEl.checked
    console.log("hasNumber: " + hasNumber);
    const hasSymbol = symbolsEl.checked
    console.log("hasSymbol: " + hasSymbol);

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})


function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    console.log(typesCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    console.log("typesArr: " + typesArr);

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            console.log("funcName: " + funcName);

            generatedPassword += randomFunc[funcName]();

            console.log(generatedPassword);
        })

       
    }
    const finalPassword = generatedPassword.slice(0, length)
    console.log("final password", finalPassword);

    return finalPassword
}




function getRandomLower() {
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}

function getRandomNumber() {
    console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}


function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    console.log(symbols.length);
    return symbols[Math.floor(Math.random()) * symbols.length]
}