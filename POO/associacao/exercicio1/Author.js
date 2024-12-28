class Author{
    constructor(name, account){
        this.name = name
        this.account = account
        this.posts = []
    }

    create_post(post){
        this.posts.push(post)
        return post
    }
}

module.exports = Author