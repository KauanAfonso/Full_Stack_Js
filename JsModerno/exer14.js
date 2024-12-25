//função para calcular a média simples passando vários valores de uma só vez
const MediaSimples = (...numeros) =>{
  
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {

        soma += numeros[i];
        
    }

    return soma/numeros.length

} 

console.log(MediaSimples(10,5))

//Media ponderada

const MediaPonderada = (...numeros) =>{
      
    let nota = numeros.reduce((cont , {nota ,peso}) => cont + (nota * peso) ,0)
    const soma = numeros.reduce((cont, val) => cont + val.peso, 0)


    return nota/soma
    
}



console.log(MediaPonderada({numero: 9, peso: 3}, {numero: 7, peso: 1}, {numero: 10, peso: 1}))


//Mediana 

const mediana = (...numeros)=>{

 const lista = []

 for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    
    lista.push(numero)
 }
  
 const novaLista = lista.sort((num1 ,num2)=>{num1 - num2})
 const tamanho = novaLista.length
 const meio = Math.floor(tamanho / 2)

if(tamanho % 2 ==0){
    
    const ultimoELemento = novaLista[meio - 1] // o ultimo indice é sempre um a menos que o tamnho total(que o meio)
    const penultimoElmento = novaLista[meio -2] //

    console.log(MediaSimples(ultimoELemento,penultimoElmento))
}else{
    console.log(novaLista[meio])
}


}


mediana(15, 14, 8, 7, 3)
// const moda = (...numeros)=>{
//     let lista = []
//     let acum = 0
//     let MaiorNumRep = 1;
//     let numero = 0;
    
//     for (let i = 0; i < numeros.length; i++) {
//         var numeroI = numeros[i];

//        for (let a = numeros.length -1;  a>=0; a--) {
//         var comparativo = numeros[a];

//         if(numeroI === comparativo){
//             acum++;
//         }
//        }
//        if(MaiorNumRep <acum){
//         MaiorNumRep = acum 
//         numero = numeroI
        
//        }else if(MaiorNumRep == acum){
//         console.log(`O numero ${numero} repetiu mais vezes com ${MaiorNumRep -1} vezes`)
//        }
//        acum = 0;
//     }
//     console.log(`O numero ${numero} repetiu mais vezes com ${MaiorNumRep - 1} vezes`)
// }



// moda(2,2,2,1,1,1,3)