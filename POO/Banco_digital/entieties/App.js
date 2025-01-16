const Account = require("./Account")
const Deposit = require("./Deposit")
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
            return App.#usuarios.push(usuario)
        }
    }

    static depositar(conta, data, valor){
        let usuario = new Account(conta)
        let depositar = new Deposit(valor,data)
        usuario.depositar_conta(depositar)
    }

    static transferencia(conta, usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor,data){
        let usuario = new Account(conta)
        let transferencia = new Transfer(usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor,data)
        usuario.trasnferencias_conta(transferencia)
    }
    
}