const nome = 'Kauan afonso da silva'
let letras = "abcdefghijklmnopqrstuvwxyz"
let espacos = "";

totalLetras = 0
totalDePalvras = 0


for (let l = 0; l < letras.length; l++) {
    for (let i = 0; i < nome.length; i++) {

        if (nome.toLowerCase()[i] == letras.toLowerCase()[l]) {
            totalLetras++
        }

    }
}

console.log(`Esse nome tem: ${totalLetras} letras`)



for (let i = 0; i < nome.length; i++) {
    if (nome[i] == " ") {
        totalDePalvras += 1
    }
}

if (totalDePalvras==0) {
    totalDePalvras = 1;
}else {
    totalDePalvras += 1
}

console.log(`Essa nome tem ${totalDePalvras}  palavras`)


const notas = [];
let soma = 0;


notas.push(5);
notas.push(8);
notas.push(10);
notas.push(9);
notas.push(4);

console.log(notas)

for(let i = 0; i < notas.length ; i++){
    (soma += notas[i]) 
}

soma = soma / notas.length

console.log(`Sua média é de: ${soma}`)
