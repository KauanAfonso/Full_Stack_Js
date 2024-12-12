
function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameli.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    ul.appendChild(document.createElement('br'))

    nameli.appendChild(nameInput)
    ul.appendChild(nameli)


    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    ul.appendChild(document.createElement('br'))

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)


    const adressLi = document.createElement('li')
    adressLi.textContent = "Endereço: "
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'endereco'
    adressInput.id = 'addres'
    ul.appendChild(document.createElement('br'))

    adressLi.appendChild(adressInput)
    ul.appendChild(adressLi)


    contactSection.append(h3 , ul)
}


function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    //removendo filhos do elemento, a partir do ultimo elemento
    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}


