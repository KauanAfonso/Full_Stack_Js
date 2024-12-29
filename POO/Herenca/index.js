class Property{
    constructor(area,price){
        this.area = area
        this.price = price
    }

    getPricePerSqaureMete(){
        return this.price / this.area
    }

}

//herdando os atributos da outra classe 
class House extends Property{

}

class Apartment extends Property{
    constructor(number, area,price){
        // this.area = area --isso dará erro
        super(area,price) //setando a propriedade da classe mae
        this.number = number
    }


    getFloor(){
        return this.number.slice(0,-2)
    }
}

const apt = new Apartment("401" , 100, 2000000)
console.log(apt)