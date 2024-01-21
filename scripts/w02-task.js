/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Angel Nieto'
let currentYear
let profilePicture = 'images/foto1.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
const imageElement = docuement.getElementById('image')

/* Step 4 - Adding Content */
nameElement.innerHTML = (`<strong>${fullname}</strong>`)
currentYear = document.textContent("2024")
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullname}`)


/* Step 5 - Array */






