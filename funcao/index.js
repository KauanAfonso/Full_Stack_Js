const funcaoAlfabeto = (num) =>{
    listaAlfabetos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    novaLista = listaAlfabetos.slice(0,num)

    console.log(novaLista)
}


funcaoAlfabeto(7)

for (let i = 0; i < 20; i++) {
    console.log("*".repeat(i))    
}

for (let i = 0; i < 5; i++) {
    let lista = ''
    for (let j = 0; j <i; j++) {
        lista+= "*"
        
console.log(lista)
       
    }
    
    
}
