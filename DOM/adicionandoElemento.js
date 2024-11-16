<<<<<<< HEAD



function addInput(){
    const ul = document.getElementById('inputs')

    const newLi= document.createElement('li')
    newLi.innerText= "Kauan"

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = "input"

    newLi.appendChild(newInput)
    ul.appendChild(newLi)

    


}


// o innerhtml é usado pra adicionar elementos html e o innertext
// conteudo de texto


//appendChild define o filho o pai dos elementos


document.addEventListener('DOMContentLoaded', function() {
    
    let lista = [
        {nome: 'Melancia' , preco: 200, cidade: "Hortolandia"}, //lista de produtos
        {nome: "Melao" , preco: 400, cidade: "Campinas"},
        {nome: "Pera" , preco: 10, cidade: "Campinas"},
        {nome: "manga" , preco: 25, cidade: "Campinas"},
        {nome: "morango" , preco: 27, cidade: "São paulo"}
    ]
    
    for (let i = 0; i < lista.length; i++) {//for para percorrer a lista
    
       
       //obtendo a tag do html     
        const main = document.getElementById('main')
        //adicionando a ele o conteudo divs dinamicamente com base na lista de objetos;
        main.innerHTML += ` <div class='content'><div class='nome'>Aqui sera o nome ${lista[i].nome} :</div><div class='preco'>preco: ${lista[i].preco} </div><div class='cidade'>cidade: ${lista[i].cidade}</div></div><br>`
        
        
        }
  
});

=======



function addInput(){
    const ul = document.getElementById('inputs')

    const newLi= document.createElement('li')
    newLi.innerText= "Kauan"

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = "input"

    newLi.appendChild(newInput)
    ul.appendChild(newLi)

    


}


// o innerhtml é usado pra adicionar elementos html e o innertext
// conteudo de texto


//appendChild define o filho o pai dos elementos


document.addEventListener('DOMContentLoaded', function() {
    
    let lista = [
        {nome: 'Melancia' , preco: 200, cidade: "Hortolandia"}, //lista de produtos
        {nome: "Melao" , preco: 400, cidade: "Campinas"},
        {nome: "Pera" , preco: 10, cidade: "Campinas"},
        {nome: "manga" , preco: 25, cidade: "Campinas"},
        {nome: "morango" , preco: 27, cidade: "São paulo"}
    ]
    
    for (let i = 0; i < lista.length; i++) {//for para percorrer a lista
    
       
       //obtendo a tag do html     
        const main = document.getElementById('main')
        //adicionando a ele o conteudo divs dinamicamente com base na lista de objetos;
        main.innerHTML += ` <div class='content'><div class='nome'>Aqui sera o nome ${lista[i].nome} :</div><div class='preco'>preco: ${lista[i].preco} </div><div class='cidade'>cidade: ${lista[i].cidade}</div></div><br>`
        
        
        }
  
});

>>>>>>> baec299 (Envios de exercícios)
