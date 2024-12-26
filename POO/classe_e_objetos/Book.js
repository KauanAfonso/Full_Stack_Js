class Book{
    constructor(title){
        this.title = title
        this.published = false
    }

    publish(){
        this.published = true
    }


}

const eragon = new Book("Eragon")
eragon.published()

console.log(eragon)
console.log(eragon instanceof Array)