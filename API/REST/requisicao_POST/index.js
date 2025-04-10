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




async function toRenderArticle(url) {
    const response = await fetch(url)
    data = await response.json()

    console.log(data)
    data.forEach(article)
}

toRenderArticle('http://localhost:3000/articles')