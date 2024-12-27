class Person{
    constructor(name,street,number,neighborhood,city,state){
        this.name = name
        this.adress = new Address(street,number,neighborhood,city,state) 
    }
}

module.exports = Person