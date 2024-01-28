/* LESSON 3 - Programming Tasks */
document.querySelector('#addNumbers').addEventListener('click',addNumbers )
/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value)
    let number2 = Number(docuement.querySelector('#add2').value)
    let resultSum = add(number1, number2)
    docuement.querySelector('#sum').value = resultSum
    
    console.log(resultSum)

}


/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
