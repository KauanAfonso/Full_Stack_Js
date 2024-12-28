class Post{
    constructor(title,content,author){
        this.title = title
        this.content = content
        this.author = author
        this.comement = []

    }


    add_comment(content){
        this.comement.push(content)

    }
}

module.exports = Post