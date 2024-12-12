
console.log('ola')

const btnCadastro = document.getElementById('addNewTech');
const section = document.getElementById('section')

btnCadastro.addEventListener('click' , function(even){
    even.preventDefault()

    const label = document.createElement('label')
    label.innerText = 'Digite a nova tecnologia:'
    const novaTecnologia = document.createElement('input')
    label.for = novaTecnologia
    novaTecnologia.type = 'text'
    novaTecnologia.id = 'inputNovaTec'

    const label2 = document.createElement('label')
    label2.innerText = 'Qual sua experiencia com essa tecnlogia: '

    const radio1 = document.createElement('input')
    radio1.name = 'radio'
    radio1.type = 'radio'
    radio1.value = '0-2 anos'
    labelToRadio = document.createElement('label')
    labelToRadio.innerText = '0-2 anos'

    const radio2 = document.createElement('input')
    radio2.type = 'radio'
    radio2.name = 'radio'
    radio2.value = '3-4 anos'
    labelToRadio2 = document.createElement('label')
    labelToRadio2.innerText = '3-4 anos'

    const radio3 = document.createElement('input')
    radio3.type = 'radio'
    radio3.name = 'radio'
    radio3.value = '3-4 anos'
    labelToRadio3 = document.createElement('label')
    labelToRadio3.innerText = '5+ anos'


    btnEnviar = document.createElement('button')
    btnEnviar.innerText = 'Enviar'

    section.appendChild(label)
    section.appendChild(novaTecnologia)
    section.appendChild(document.createElement('br'))
    section.appendChild(label2)
    section.appendChild(document.createElement('br'))
    section.appendChild(document.createElement('br'))  
    section.appendChild(radio1)
    section.appendChild(labelToRadio) 
    section.appendChild(document.createElement('br'))
    section.appendChild(radio2)
    section.appendChild(labelToRadio2) 
    section.appendChild(document.createElement('br'))
    section.appendChild(radio3)
    section.appendChild(labelToRadio3) 
    section.appendChild(document.createElement('br'))
    section.appendChild(btnEnviar)

    btnCadastro.style.display = 'none'



    btnEnviar.addEventListener('click' , function(event){
        event.preventDefault()
        
        const name = document.getElementById('name').value
        const novaTechValor = document.getElementById('inputNovaTec').value
        const div = document.getElementById('div')
        const RemoverLista = document.createElement('button')
        let experiencia = ''
        const itemMarcado = document.querySelectorAll('input[name="radio"]:checked').forEach(function(elemento){
            return experiencia += elemento.value
        })

        console.log(experiencia)
    
        RemoverLista.innerText = 'Remover da lista'

        const lista = document.createElement('ul')
        const li = document.createElement('li')

        //legendas
        const labelName = document.createElement('label')
        labelName.innerText = " Nome: "

        const labelTech = document.createElement('label')
        labelTech.innerText = " Tecnologia: "

        const labelExpe = document.createElement('label')
        labelExpe.innerText = " Experiência: "


        div.appendChild(lista)
        lista.appendChild(li)
        li.appendChild(labelName)
        li.appendChild(document.createTextNode(name))
        li.appendChild(document.createElement('br'))
        li.appendChild(labelTech)
        li.appendChild(document.createTextNode(novaTechValor))
        li.appendChild(document.createElement('br'))
        li.appendChild(labelExpe)
        li.appendChild(document.createTextNode(experiencia))
        li.appendChild(document.createElement('br'))
        li.appendChild(RemoverLista)


        document.getElementById('name').value = ""
        document.getElementById('inputNovaTec').value = ""
        document.querySelectorAll('input[name="radio"]:checked').forEach(function(elemento){
            return elemento.checked = false
        })

        RemoverLista.addEventListener('click' , function(){
            const liDoCadastro = document.querySelector('li')
            liDoCadastro.remove()
        })
    })

   
})

pToCadastro = document.getElementById('btnCadastro')
btnEnviarCadastro = document.createElement('button')
btnEnviarCadastro.innerText = 'Enviar cadastro'

pToCadastro.appendChild(document.createElement('br'))
pToCadastro.appendChild(btnEnviarCadastro)


btnEnviarCadastro.addEventListener('click' , function(){

    const usuarios = document.querySelectorAll('li')
    let lista = ''
    const array = []

    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i])
    }
  
  

   


})



