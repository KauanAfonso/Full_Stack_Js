
let nomeDoCarro1 = prompt("Digite o nome do carro:")
let velocidadeDoCarro1 = parseFloat(prompt("Digite a velocidade do Carro?"))


let nomeDoCarro2 = prompt("Digite o nome do carro:")
let velocidadeDoCarro2 = parseFloat(prompt("Digite a velocidade do Carro?"))


if(velocidadeDoCarro1 > velocidadeDoCarro2){
    alert("O carro 1 está mais rapido.")
}else if(velocidadeDoCarro2 > velocidadeDoCarro1){
    alert("O carro 2 está mais rapido")
}else{
    alert("a velocidade é igual")
}


const verificacao = velocidadeDoCarro1 > velocidadeDoCarro2 ? console.log("True") : console.log("False")