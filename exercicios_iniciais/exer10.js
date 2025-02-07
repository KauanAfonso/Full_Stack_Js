let palavra = prompt("Digite uma palavra para verificar se ela é um palindromo:")
let palavraInvertida = ''

for (let i = palavra.length -1; i>=0; i--) {
    palavraInvertida+= palavra[i]
}

if(palavra === palavraInvertida){
    alert(`${palavra} é um palindromo`)
}else{
    alert(`${palavra} não é um palindromo, veja: ${palavraInvertida}`)
}


/*

outra forma de resolver com menos codgio !!!!!!!!!!!!!!!

let palavra = prompt("Digite uma palavra para verificar se ela é um palíndromo:");

let palavraInvertida = palavra.split('').reverse().join('');

if (palavra === palavraInvertida) {
  alert(`${palavra} é um palíndromo`);
} else {
  alert(`${palavra} não é um palíndromo, veja: ${palavraInvertida}`);
}

*/
