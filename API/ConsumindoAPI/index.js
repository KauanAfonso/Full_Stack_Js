

/*

ideia -> crie um ink na renderização para air para o endpoint diretor atraves de um link ou button


*/


function renderTransactions(data){
    const div_main = document.createElement('div')
    div_main.classList = "card";

    const name_transaction = document.createElement('h4');
    name_transaction.textContent = `Nome da transação: ${data.name}`;

    const input_id = document.createElement('input');
    input_id.setAttribute('type','hidden');
    input_id.value = data.id;
    input_id.id = `transaction ${data.id}`



    const value_transaction = document.createElement('p');
    value_transaction.textContent = `Value: ${data.value}`;

    const btn_delete = document.createElement('button')
    btn_delete.textContent = "Excluir";
    btn_delete.classList ="btn btn-danger";
    btn_delete.id = `Excluir ${data.id}`


    const btn_update = document.createElement('button')
    btn_update.setAttribute('data-bs-toggle', 'modal')
    btn_update.setAttribute
    ('data-bs-target', '#staticBackdrop')
    btn_update.classList = "btn btn-dark"
    btn_update.textContent = "Update"

    div_main.append(input_id, name_transaction, value_transaction,btn_update ,btn_delete)
    document.getElementById('transactions').append(div_main)
    
    const url = `http://localhost:3000/transaction/${data.id}`

    btn_delete.addEventListener('click',()=> delete_transaction(url) )
    btn_update.addEventListener('click',()=> form_uptade(url,data) )  

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
        location.reload() 
        getTransactions('http://localhost:3000/transaction')
    
    })


async function update_transaction(url) {

    const info = {
        name:document.getElementById('name_update').value,
        value:document.getElementById('value_update').value,
    }

    const response = await fetch(url,{
        method:'PUT',
        headers:{
            "Content-type":'Application/json'
        },
        body:JSON.stringify(info)
    })



    const response_data = await response.json()
    console.log(response_data)
}

const form_uptade = (url, info) =>{
    let form = document.getElementById('form_update')
    form.action = url
   
    document.getElementById('name_update').value = info.name,
    document.getElementById('value_update').value = info.value,
    
    
    form.addEventListener('submit', (ev)=>{
        ev.preventDefault()
        update_transaction(url)
        location.reload()
    })
    
}

async function delete_transaction(url){
        const response = await fetch(url,{
            method:'DELETE',
            headers:{
                "Content-type": "Application/json"
            },
        });

        alert('DELETADO COM SUCESSO')
        location.reload()       
}
