/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Angel Nieto Cevallos",
    photo:'images/foto1.jpg',
    favoriteFoods:["arepa", "hamburguer", "encebollado"],
    hobbies:["play soccer", "coding", "eat", "study javaScript"],
    placesLived:[]
}

/* Populate Profile Object with placesLive objects */
myProfile["placesLived"].push({
    place:"Guayaquil, Sauces",
    length:"10 years"
})
myProfile.placesLived.push({
    place:"Duran, El Recreo",
    length:"9 years"
})
myProfile["placesLived"].push({
    place:"Guayaquil, Suburbio",
    length:"11 years"
})


/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name
/* Photo with attributes */
document.querySelector("#photo").setAttribute('src', myProfile.photo)
document.querySelector("#photo").setAttribute("alt", myProfile.name)
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li")
    li.textContent = food
    document.getElementById("favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach((hobbie)=>{
    let li = document.createElement("li")
    li.textContent = hobbie
    document.querySelector("#hobbies").appendChild(li)
})


/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived)=>{
    let dt = document.createElement("dt")
    let dd = document.createElement("dd")
    dt.textContent = placeLived.place
    dd.textContent = placeLived.length
    document.querySelector("#places-lived").appendChild(dt)
    document.querySelector("#places-lived").appendChild(dd)
    


})


