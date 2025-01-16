const User = require("./User")

class App{
 
    static #usuarios = []

    static verificar_user_existente(email){
        return App.#usuarios.filter((user) => user.email === email )
    }

    static criar_usuario(nome_completo, email, conta){
        const usuário_existe = this.verificar_user_existente(email)
        if(usuário_existe){
            return `Usuário já existente`
        }else{
            let usuario = new User(nome_completo, email,conta)
            App.#usuarios.push(usuario)
        }


    }
    
}