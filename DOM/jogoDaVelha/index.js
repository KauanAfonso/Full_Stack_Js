
const btn = document.getElementById('btn')
var jogador1 = document.getElementById('Jogador1')
var jogador2 = document.getElementById('Jogador2')

var indicadorDeJogadas = document.getElementById('indicadorDeJogadas')

const posicao1 = document.getElementById("posicao 1")
const posicao2 = document.getElementById("posicao 2")
const posicao3 = document.getElementById("posicao 3")
const posicao4 = document.getElementById("posicao 4")
const posicao5 = document.getElementById("posicao 5")
const posicao6 = document.getElementById("posicao 6")
const posicao7 = document.getElementById("posicao 7")
const posicao8 = document.getElementById("posicao 8")
const posicao9 = document.getElementById("posicao 9")


function limparDados(){
    posicao1.textContent = "."
    posicao2.textContent = "."
    posicao3.textContent = "." 
    posicao4.textContent = "."
    posicao5.textContent = "."
    posicao6.textContent = "."
    posicao7.textContent = "." 
    posicao8.textContent = "." 
    posicao9.textContent = "."
    
    jogador1.value = ""
    jogador2.value = ""

    indicadorDeJogadas.textContent =``;
}



const div = document.getElementById('divBtn')
const btnRecomecar = document.createElement('button')
btnRecomecar.innerText = "Recomeçar o jogo"

div.appendChild(btnRecomecar)

btnRecomecar.addEventListener('click' , function(){
    limparDados()
})





function ganhador() {
    if (
        (posicao1.textContent === "O" && posicao2.textContent === "O" && posicao3.textContent === "O") ||
        (posicao1.textContent === "O" && posicao4.textContent === "O" && posicao7.textContent === "O") ||
        (posicao1.textContent === "O" && posicao5.textContent === "O" && posicao9.textContent === "O") ||
        (posicao2.textContent === "O" && posicao5.textContent === "O" && posicao8.textContent === "O") ||
        (posicao3.textContent === "O" && posicao6.textContent === "O" && posicao9.textContent === "O") ||
        (posicao3.textContent === "O" && posicao5.textContent === "O" && posicao7.textContent === "O") ||
        (posicao4.textContent === "O" && posicao5.textContent === "O" && posicao6.textContent === "O") ||
        (posicao7.textContent === "O" && posicao8.textContent === "O" && posicao9.textContent === "O")
    ) {
        indicadorDeJogadas.textContent =`${jogador1.value} ganhou`;
       
    } else if(
        (posicao1.textContent === "X" && posicao2.textContent === "X" && posicao3.textContent === "X") ||
        (posicao1.textContent === "X" && posicao4.textContent === "X" && posicao7.textContent === "X") ||
        (posicao1.textContent === "X" && posicao5.textContent === "X" && posicao9.textContent === "X") ||
        (posicao2.textContent === "X" && posicao5.textContent === "X" && posicao8.textContent === "X") ||
        (posicao3.textContent === "X" && posicao6.textContent === "X" && posicao9.textContent === "X") ||
        (posicao3.textContent === "X" && posicao5.textContent === "X" && posicao7.textContent === "X") ||
        (posicao4.textContent === "X" && posicao5.textContent === "X" && posicao6.textContent === "X") ||
        (posicao7.textContent === "X" && posicao8.textContent === "X" && posicao9.textContent === "X")
    ){
        indicadorDeJogadas.textContent =`${jogador2.value} ganhou`;
     

    }
}



let jogada = true;

btn.addEventListener('click' , function(){

indicadorDeJogadas.textContent = `Vez de ${jogador1.value}`;
    
function fazerJogada(posicao) {
    
    if (posicao.textContent === ".") {
        if (jogada) {
            posicao.textContent = "O";
        } else {
            posicao.textContent = "X";
        }

        jogada = !jogada;
        indicadorDeJogadas.textContent = `Vez de ${!jogada ? jogador2.value : jogador1.value}`;

        ganhador();
    }
}

posicao1.addEventListener('click', function () {
    fazerJogada(posicao1);
});

posicao2.addEventListener('click', function () {
    fazerJogada(posicao2);
});

posicao3.addEventListener('click', function () {
    fazerJogada(posicao3);
});

posicao4.addEventListener('click', function () {
    fazerJogada(posicao4);
});
posicao5.addEventListener('click', function () {
    fazerJogada(posicao5);
});
posicao6.addEventListener('click', function () {
    fazerJogada(posicao6);
});
posicao7.addEventListener('click', function () {
    fazerJogada(posicao7);
});
posicao8.addEventListener('click', function () {
    fazerJogada(posicao8);
});
posicao9.addEventListener('click', function () {
    fazerJogada(posicao9);
});

})







>>>>>>> baec299 (Envios de exercícios)
