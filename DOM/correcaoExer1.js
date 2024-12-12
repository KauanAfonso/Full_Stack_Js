
function addPlayer() {
    const posicao = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmacao = confirm("Escalar " + name + " como " + posicao + "?")

    if(confirmacao){
        const teamList = document.getElementById('timeList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = posicao + " : " + name + "(" + number + ")"
        teamList.appendChild(playerItem)

        //Depois de enviar o formulario , deixar ele em branco
        document.getElementById('postion').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}


function removePlayer(){
    const number = document.getElementById('numberRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmacao = confirm('Remover o jogador ' + playerToRemove.innerText + "?")

    if(confirmacao){
       playerToRemove.remove()
        document.getElementById('numbeRemove').value = ''
    }

}