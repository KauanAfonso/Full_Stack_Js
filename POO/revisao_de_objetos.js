// const book = {
//     title: "Eragon", //propriedade
//     pages: 468,
//     published:true,
//     inStock:20,
//     tags:["Fantasy", "adventure", "Medieval"],
//     author:{
//         name:"Chistopher Paolini"
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     },
//     save: function() {
//         //salva no bd
//     }
// }


function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    
    }

    this.save = function (){

    }
}


const author = {name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]


const eragon = new Book("Eragon", 468,tags, author)
console.log(eragon)

const eldest = new Book("eldest" , 202,tags,author )
console.log(eldest)