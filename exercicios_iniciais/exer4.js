let nomePersonagem = prompt("Digite o nome do personagem:");
let poderDeAtaque = parseFloat(prompt("Digite o poder de ataque:"))
let nomePersonagem2 = prompt("Digite o nome do outro personagem:")
let quantidadePontosDeVida = parseFloat(prompt('Digite a quantidade de pontos de vida:'))
let poderDeDefesa = parseFloat(prompt("Digite o poder de defesa:"));
let possuiEscudo = prompt("Possui escudo? S/N");
let dano = 0;


if( poderDeAtaque > poderDeDefesa && possuiEscudo == "N" || possuiEscudo == "n"){
    dano = poderDeAtaque - poderDeDefesa
}else if(poderDeAtaque > poderDeDefesa && possuiEscudo == "S" || possuiEscudo == "s"){
    dano = (poderDeAtaque - poderDeDefesa) / 2;
}else{
    dano = 0;
}

let vidaTotal = quantidadePontosDeVida - dano;

    console.log(
        `nome do personagem ${nomePersonagem}
        /n poder de ataque: ${poderDeAtaque}
        /n nome do outro personagem: ${nomePersonagem2}
        /n quantidade de pontos de vida: ${quantidadePontosDeVida}
        /n poder de defesa: ${poderDeDefesa}
        /n possui escudo : ${possuiEscudo}
        /n seu dano é de ${dano}
        /n sua vida total agora é ${vidaTotal}`
    )

