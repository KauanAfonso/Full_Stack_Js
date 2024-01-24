let posicaoInput = 0; // Declare a variável no escopo global
let nomeJogadorInput = 0;
let numeroCamisa = 0;

function escalarJogador() {
    let section = document.getElementById('section');
   let ul = document.createElement('ul');
   let li = document.createElement('li');

    posicaoInput = document.createElement('input');
   let label = document.createElement('label');
    label.innerHTML = '<label>Digite a posição do jogador :</label>';
    posicaoInput.type = 'text';
    posicaoInput.id = 'idPosicao';
    li.appendChild(label);
    li.appendChild(posicaoInput);
    li.appendChild(document.createElement('br'));

    nomeJogadorInput = document.createElement('input');
   let label2 = document.createElement('label');
    label2.innerHTML = '<label>Digite o nome do jogador: </label>';
    nomeJogadorInput.id = 'idNome';
    nomeJogadorInput.type = 'text';
    li.appendChild(label2);
    li.appendChild(nomeJogadorInput);
    li.appendChild(document.createElement('br'));

    numeroCamisa = document.createElement('input');
   let label3 = document.createElement('label');
    label3.innerHTML = '<label>Digite o número do jogador: </label>';
    numeroCamisa.id = 'numero';
    numeroCamisa.type = 'number';
    li.appendChild(label3);
    li.appendChild(numeroCamisa);
    li.appendChild(document.createElement('br'));

    section.appendChild(ul);
    ul.appendChild(li);
   

    btn = document.createElement('button');
    btn.onclick = adicionarItem
    btn.innerText = 'Escalar';
    
    section.appendChild(btn);

    function adicionarItem () {
       let verificacao = confirm('Deseja confirmar essa escalação?');

        if (verificacao) {
           let newUl = document.createElement('ul');
           newUl.id = 'novaUl'
           let posicaoLi = document.createElement('li');
           let nomeLi = document.createElement('li');
           let numeroLi = document.createElement('li');

           let idPosicao = document.getElementById('idPosicao').value; // Acesse o valor do input usando a variável 
           let textoPosicao = document.createTextNode(idPosicao);

           let idNome = document.getElementById('idNome').value
           let textNome = document.createTextNode(idNome)

           let idNumero = document.getElementById('numero').value
           let textNumero = document.createTextNode(idNumero)

            posicaoLi.append(textoPosicao)
            nomeLi.appendChild(textNome)
            numeroLi.appendChild(textNumero)
            console.log(idPosicao)

            newUl.append(posicaoLi, nomeLi, numeroLi)
            section.append(newUl);

        
        }
    };

}



function removerJogador() {
    const section = document.getElementById('section')
    const btnRemove = document.createElement('button')
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Digite o numero do jogador'
    btnRemove.innerHTML = 'Remover Jogador'
    btnRemove.onclick = removerItem
    
    section.append(btnRemove , input)

    function removerItem(){
        const confirm = 'Deseja remover esse jogador?'

        if(confirm){
            const posicao  = document.getElementById('idPosicao').value
            const nome = document.getElementById('idNome').value
            const numero = document.getElementById('numero').value
            
            if(numero == input){
                const newUl = document.getElementById('novaUl')
                console.log(newUl)
                newUl.removeChild(posicao , nome, numero)
                section.removeChild(newUl)
                
            }
        }
    }

}


escalarJogador();
removerJogdor();