const containerCard = document.getElementById('containerCard')
const search = document.getElementById('search')
window.addEventListener('DOMContentLoaded', callApi)

const GET_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

search.addEventListener('keypress', filter)

function callApi(){

    fetch(GET_URL)
      .then(response => response.json())
      .then(data => {
        createCard(data)
    })

}


function createCard(data) {
    
    data.drinks.forEach(data => {

        const card = document.createElement('div')
        card.classList.add('content')

        const name = document.createElement('h2')
        name.textContent = data.strDrink

        const img = document.createElement('img')
        img.src = data.strDrinkThumb
        img.classList.add('image')

        containerCard.appendChild(card)
        card.appendChild(name)
        card.appendChild(img)
        
    })

}

function filter(event) {

    if (event.key === 'Enter') {

        containerCard.innerHTML = "";
    
        let url = GET_URL + event.target.value
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
          createCard(data)
      })

    }



}