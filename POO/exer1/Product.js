class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculeDiscount(discont){

        let calculate = (this.price * discont) / 100
        this.price -= calculate

        console.log(`O preço ficou R$ ${this.price}`)
        
    }
}


const camiseta = new Product("Camisa Polo" , "Uma linda camisa" , 200)
camiseta.addToStock(50)
camiseta.calculeDiscount(45)