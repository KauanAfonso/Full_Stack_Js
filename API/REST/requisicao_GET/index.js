function createContryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    const ContryContinent = country.continents
    const continent = document.createElement('p')
    continent.textContent = "Continent: " + ContryContinent

    card.append(name, flag, continent)
    document.querySelector('#countries').append(card)
}



async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all') //o fetch é usado para requisição 
    const countries = await response.json()

    console.log(countries)
    countries.forEach(createContryCard);
}


getCountries()