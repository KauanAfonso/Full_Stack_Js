function noromalSum(a,b){
    return a + b
}

console.log(`Soma normal: ${noromalSum(2,2)}`)

//arrow function

const arrowSum = (a,b) =>{
    return a + b
}

console.log(`Arrow function: ${arrowSum(2,2)}`)

const subtract = (a,b) => a -b

console.log(`Subtração: ${subtract(5,2)}`);

const double = n => `O dobro de ${n} é ${n*2}`;

console.log(double(21));

let lista = ["Sao Paulo" , "Sumare" , "portugal" , "Campinas" , "Suecia"];

const palavraComS = lista.filter(item => item[0] === "S")

console.log(palavraComS)
