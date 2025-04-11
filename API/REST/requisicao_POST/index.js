

//Função que cria um artigo
function article(articleData){
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const title = document.createElement('h3')
    title.classList.add('articleTitle')
    title.textContent = articleData.title

    const content = document.createElement('h4')
    title.classList.add('article_content')
    content.textContent = articleData.content

    article.append(title,content)
    document.querySelector('#articles').append(article)
}



//Função que renderiza o blog
async function toRenderArticle(url) {
    const response = await fetch(url)
    data = await response.json()

    console.log(data)
    data.forEach(article)
}

toRenderArticle('http://localhost:3000/articles')

//FAZENDO REQUISIÇÂO POST

const form = document.querySelector('form')
form.addEventListener('submit', async (ev) =>{
    ev.preventDefault()

    const articleData = {
        title:document.querySelector('#title').value,
        author: document.querySelector("#author").value,
        content:document.querySelector("#content").value
    }

    const response = await fetch('http://localhost:3000/articles', {
        method:"POST", //definindo que sera post
        headers:{
            'Content-type': 'application/json' //definindo o formato de comunicação
        },
        body: JSON.stringify(articleData) //representa oq vamos mandar 
    }) 

    const savedArticle = await response.json()
    form.reset() //limpar form
    toRenderArticle('http://localhost:3000/articles')
})