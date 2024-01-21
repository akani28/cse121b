/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Angel Nieto'
let currentYear = '2024'
let profilePicture = 'images/foto1.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
const imageElement = document.getElementById('image')

/* Step 4 - Adding Content */
nameElement.innerHTML = (`<strong>${fullname}</strong>`)
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullname}`)


/* Step 5 - Array */
const foods =["encebollado", "arroz con menestra", "empanadas", "hamburguer"]
foods.push("ceviche de pollo")
const foods1 = ["salad", "pastas", "Morocho", "papi pollo", "arepas"]
foodElement.innerHTML = foods
foodElement.innerHTML += `<br>${foods1}`
foods.shift()
foodElement.innerHTML += `<br>${foods1}`
foods.pop()
foodElement.innerHTML += `<br>${foods1}`






