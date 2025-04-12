

function renderTransactions(data){
    const div_main = document.createElement('div')

    const label = document.createElement('label')
    label.textContent = "Name: "
    const name_transaction = document.createElement('h4');
    name_transaction.textContent = data.name;

    const label2 = document.createElement('label')
    label2.textContent = "value: "
    const value_transaction = document.createElement('p');
    value_transaction.textContent = data.value;

    div_main.append(label, name_transaction,label2, value_transaction)
    document.getElementById('transactions').append(div_main)
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
        getTransactions('http://localhost:3000/transaction')
    
    })

