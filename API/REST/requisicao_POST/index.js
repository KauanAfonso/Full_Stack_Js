// Função responsável por criar e exibir um artigo na página
function createArticleElement(articleData) {
    // Criação do elemento <article>
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    // Criação e configuração do título (h3)
    const title = document.createElement('h3')
    title.classList.add('articleTitle')
    title.textContent = articleData.title

    // Criação e configuração do conteúdo (h4)
    const content = document.createElement('h4')
    content.classList.add('article_content') // Corrigido: antes estava usando title.classList.add
    content.textContent = articleData.content

    // Adiciona o título e o conteúdo ao artigo
    article.append(title, content)

    // Insere o artigo no container principal
    document.querySelector('#articles').append(article)
}

// Função assíncrona que busca os artigos e os renderiza na tela
async function renderArticles(url) {
    try {
        const response = await fetch(url)
        const articles = await response.json()

        // Limpa os artigos antigos antes de renderizar os novos
        document.querySelector('#articles').innerHTML = ''

        // Renderiza cada artigo
        articles.forEach(createArticleElement)
    } catch (error) {
        console.error('Erro ao carregar os artigos:', error)
    }
}

// Inicializa renderizando os artigos da API
renderArticles('http://localhost:3000/articles')


// --- Envio de novos artigos (requisição POST) ---


const form = document.querySelector('form')

// Adiciona o evento de envio do formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault() // Evita o recarregamento da página

   
    const articleData = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        content: document.querySelector('#content').value
    }

    try {
        // Envia os dados para a API via método POST
        const response = await fetch('http://localhost:3000/articles', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(articleData)
        })

        // Aguarda a resposta 
        const savedArticle = await response.json()
        form.reset()

        // Re-renderiza a lista de artigos para incluir o novo
        renderArticles('http://localhost:3000/articles')
    } catch (error) {
        console.error('Erro ao salvar o artigo:', error)
    }
})
