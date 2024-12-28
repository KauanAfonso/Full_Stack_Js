const Author = require("./Author")
const Comment = require('./Comment')
const Post = require("./Post")

let kauan = new Author("Kauan" , "kauanafon10")
let post_kauan = new Post("Corinthians", "Venceu o jogo" , kauan)

let kauan_comement = new Comment("Crisnelly" , "Uma incrível partida de memphis depay")

post_kauan.add_comment(kauan_comement)
let post1 = kauan.create_post(post_kauan)

console.log(post1)

