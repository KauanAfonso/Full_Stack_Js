const Account = require("./Account")

module.exports = class User{
    constructor(nome_completo, email){
        this.nome_completo = nome_completo
        this.email = email
        this.conta = new Account(this)
    }
}