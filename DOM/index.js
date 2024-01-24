function show(){
    //obtendo um elemento
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    //obtendo varios elementos
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    //varios elementos especificos
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)

    //obter exatamento os elementos 
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    //obter os elementos pelo name
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    //obter um unico elemento com query
    const firstContact = document.querySelector("#contact-list > li > label")
}