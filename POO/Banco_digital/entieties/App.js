const User = require("./User")

class App{
 
    static #usuarios = []


    static criar_usuario(nome_completo, email, conta){
        const usuário_existe = App.#usuarios.filter((user) => user.email === email )
        if(usuário_existe){
            return `Usuário já existente`
        }else{
            let usuario = new User(nome_completo, email,conta)
            App.#usuarios.push(usuario)
        }


    }
    
}