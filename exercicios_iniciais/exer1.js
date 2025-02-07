
let nome = window.prompt("Digite seu nome:");
let sobrenome = window.prompt('Digite seu sobrenome:')
let campoEstudo = window.prompt("Digite seu campo de Estudo");
let anoNAscimento = parseFloat(prompt("Digite o seu ano de nascimento:"));

let data = new Date();

anoAtual = data.getFullYear();

console.log(anoAtual)

let idade = anoAtual - anoNAscimento

console.log(`Seu nome é: ${nome} ${sobrenome} e sua area de estudo é ${campoEstudo} e sua idade é ${idade}`)