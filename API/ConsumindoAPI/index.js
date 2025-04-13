

/*

ideia -> crie um ink na renderização para air para o endpoint diretor atraves de um link ou button


*/


function renderTransactions(data){
    const div_main = document.createElement('div')

    const label = document.createElement('label')
    label.textContent = "Name: "
    const name_transaction = document.createElement('h4');
    name_transaction.textContent = data.name;

    const input_id = document.createElement('input');
    input_id.setAttribute('type','hidden');
    input_id.value = data.id;
    input_id.id = `transaction ${data.id}`


    const label2 = document.createElement('label')
    label2.textContent = "value: "
    const value_transaction = document.createElement('p');
    value_transaction.textContent = data.value;

    const btn_delete = document.createElement('button')
    btn_delete.textContent = "Excluir";
    btn_delete.id = `Excluir ${data.id}`

    div_main.append(label, input_id, name_transaction,label2, value_transaction,btn_delete)
    document.getElementById('transactions').append(div_main)

    btn_delete.addEventListener('click',()=>delete_transaction(`http://localhost:3000/transaction/${data.id}`))
}


async function getTransactions(url) {
    const response = await fetch(url);
    data = await response.json();
    console.log(data)
    data.forEach(renderTransactions);
}

getTransactions('http://localhost:3000/transaction')


const form = document.getElementById('form')
  
    form.addEventListener('submit',  async(ev)=>{
        ev.preventDefault()

        const data = {
            name:document.getElementById('name').value,
            value:document.getElementById('value').value,
        }

        const response = await fetch('http://localhost:3000/transaction', {
            method:'POST',
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        })

        const responseData = await response.json()
        form.reset()
        getTransactions('http://localhost:3000/transaction')
    
    })


async function delete_transaction(url){
        const response = await fetch(url,{
            method:'DELETE',
            headers:{
                "Content-type": "application/json"
            },
        });

        alert('DELETADO COM SUCESSO')
        getTransactions('http://localhost:3000/transaction')
}