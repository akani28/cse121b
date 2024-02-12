/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples')
let templeList = []

/* async displayTemples Function */
const displayTemples = (templeList)=>{
    templeList.forEach((temple) => {
        console.log(temple)
        let article = document.createElement('article')
        let h3 = document.createElement('h3')
        let img = document.createElement('img')
        img.setAttribute('src',temple.imageUrl)
        img.setAttribute('alt', temple.location)
        h3.textContent = temple.templeName

        article.appendChild(h3)
        article.appendChild(img)

        templesElement.appendChild(article)


        
    });

}

/* async getTemples Function using fetch()*/

const getTemples = async ()=>{
    const response =fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    response.then((res)=>{return res.json()})
    .then((data)=>{data.forEach((data)=>templeList.push(data))})
    
    //let result = await response.json()
    //displayTemples(templeList)
    //templeList = result

} 


/* reset Function */
function reset() {
    templesElement.removeChild(article)
    
}

/* filterTemples Function */
function filterTemples(temples){
    //reset()
    const filter = document.querySelector('#filtered').value
    switch(filter){
        case "all":
            displayTemples(temples)
            console.log(templeList[0])
            break
        case "utah":
            const result=temples.filter((temple)=> (temple['location'].includes("Utah")))
            displayTemples(result)
            break
        case "notutah":
            const result2=temples.filter((temple)=> (!temple['location'].includes("Utah")))
            displayTemples(result2)
            break
        
    }

}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', ()=>{filterTemples(templeList)})