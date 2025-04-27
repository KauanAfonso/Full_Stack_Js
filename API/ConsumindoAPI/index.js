// Renderiza uma transação individual na tela
function renderTransaction(transaction) {
    const card = document.createElement('div');
    card.classList = "card";

    const name = document.createElement('h4');
    name.textContent = `Nome da transação: ${transaction.name}`;


    const hiddenId = document.createElement('input');
    hiddenId.type = 'hidden';
    hiddenId.value = transaction.id;
    hiddenId.id = `transaction-${transaction.id}`;

    const type = document.createElement('h5');
    type.textContent = `Tipo: ${transaction.type_t}`;

    const value = document.createElement('p');
    value.textContent = `Valor: R$ ${transaction.value}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList = "btn btn-danger";
    deleteBtn.id = `delete-${transaction.id}`;

    const updateBtn = document.createElement('button');
    updateBtn.setAttribute('data-bs-toggle', 'modal');
    updateBtn.setAttribute('data-bs-target', '#staticBackdrop');
    updateBtn.classList = "btn btn-dark";
    updateBtn.textContent = "Atualizar";

    // Adiciona os elementos ao card
    card.append(hiddenId, name, type, value, updateBtn, deleteBtn);
    document.getElementById('transactions').append(card);


    const url = `http://localhost:3000/transaction/${transaction.id}`;

    // Adiciona os eventos
    deleteBtn.addEventListener('click', () => handleDelete(url));
    updateBtn.addEventListener('click', () => openUpdateForm(url, transaction));
}

// Busca e renderiza todas as transações
async function fetchAndRenderTransactions(url) {
    try {
        const response = await fetch(url);
        const transactions = await response.json();

        document.getElementById('transactions').innerHTML = ''; // limpa antes
        transactions.forEach(renderTransaction);
    } catch (error) {
        console.error('Erro ao buscar transações:', error);
    }


    return total
}   
async function renderTotal() {
    const getTotalFunction = await getTotal()
    document.getElementById('total_value').textContent = `R$ ${getTotalFunction.toFixed(2)}`
   

}

// Calcula o total de entradas e saídas
async function calculateTotal() {
    try {
        const response = await fetch('http://localhost:3000/transaction');
        const transactions = await response.json();

        const total = transactions.reduce((acc, transaction) => {
            const value = parseFloat(transaction.value);
            return transaction.type_t === "Entry" ? acc + value : acc - value;
        }, 0);


        return total;
    } catch (error) {
        console.error('Erro ao calcular o total:', error);
        return 0;
    }
}

// Exibe o total calculado
async function renderTotal() {
    const total = await calculateTotal();
    document.getElementById('total_value').textContent = `R$ ${total.toFixed(2)}`;
}

// Envia nova transação ao servidor
document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const newTransaction = {
        name: document.getElementById('name').value,
        value: document.getElementById('value').value,
        type_t: document.getElementById('entry_exit').value
    };

    try {
        const response = await fetch('http://localhost:3000/transaction', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify(newTransaction)

        });

        await response.json();
        document.getElementById('form').reset();
        location.reload(); // ou você pode chamar fetchAndRenderTransactions() e renderTotal() de novo

    } catch (error) {
        console.error('Erro ao criar transação:', error);
    }
});

// Atualiza transação existente
async function updateTransaction(url) {
    const updatedData = {
        name: document.getElementById('name_update').value,
        value: document.getElementById('value_update').value,
        type_t: document.getElementById('entry_exit_update').value
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        await response.json();
        location.reload(); // ou atualizar a lista manualmente

    } catch (error) {
        console.error('Erro ao atualizar transação:', error);
    }
}

// Preenche o formulário de atualização com os dados atuais
function openUpdateForm(url, transaction) {
    const form = document.getElementById('form_update');
    form.action = url;

    document.getElementById('name_update').value = transaction.name;
    document.getElementById('value_update').value = transaction.value;
    document.getElementById('entry_exit').value = transaction.type_t;

    form.onsubmit = (event) => {
        event.preventDefault();
        updateTransaction(url);
    };
}

// Deleta uma transação
async function handleDelete(url) {
    try {
        await fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        });

        alert('Deletado com sucesso!');
        location.reload(); // ou atualizar a lista manualmente

    } catch (error) {
        console.error('Erro ao deletar transação:', error);
    }
}

// Inicializa o carregamento da aplicação
fetchAndRenderTransactions('http://localhost:3000/transaction');
renderTotal();
