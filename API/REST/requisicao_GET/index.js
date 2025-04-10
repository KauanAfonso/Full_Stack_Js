
//Fução para criar um card de pais
function createContryCard(country){
    const card = document.createElement('div') //div mae
    card.classList.add('country') //add a classe contry

    //Para cada elemento visivel pegar ele na api, criar 
    //elmento html 
    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    const ContryContinent = country.continents
    const continent = document.createElement('p')
    continent.textContent = "Continent: " + ContryContinent

    //renderizando
    card.append(name, flag, continent)
    document.querySelector('#countries').append(card)
}


//Essa função  async está pegando os dados da api
//retornando em json e por cada um dos elements chamando o createContryCard
async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all') //o fetch é usado para requisição 
    const countries = await response.json()

    console.log(countries)
    countries.forEach(createContryCard);
}


getCountries()