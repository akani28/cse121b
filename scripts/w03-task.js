/* LESSON 3 - Programming Tasks */
document.querySelector('#addNumbers').addEventListener('click',addNumbers)


/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value)
    let number2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(number1, number2)

}


/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2){

    return subtract1 - subtract2;
}

const subtractNumbers = function(){
    let subtract1 = Number(document.querySelector('#subtract1').value)
    let subtract2 = Number(document.querySelector('#subtract2').value)

    document.querySelector('#difference').value = subtract(subtract1, subtract2)

}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2)=>{
    return factor1*factor2;
}
const multiplyNumbers = ()=>{
    let factor1 = Number(document.querySelector('#factor1').value)
    let factor2 = Number(document.querySelector('#factor2').value)

    document.querySelector('#product').value = multiply(factor1, factor2)
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor)=>{
    let quotient = dividend/divisor
    return quotient
}

const divideNumbers = function(){
    let dividend = Number(document.querySelector('#dividend').value)
    let divisor = Number(document.querySelector('#divisor').value)

    document.querySelector('#quotient').value = divide(dividend, divisor)
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
