const Account = require("./Account")
const Deposit = require("./Deposit")
const Installment = require("./Installment")
const Loan = require("./Loan")
const User = require("./User")

module.exports = class App{

    static #usuarios 
    constructor(){
        App.#usuarios = []
    }


    static verificar_user_existente(email){
        return App.#usuarios.filter((user) => user.email === email )
    }

    static criar_usuario(nome_completo, email, conta){
        const usuário_existe = App.verificar_user_existente(email)
        if(usuário_existe){
            return `Usuário já existente`
        }else{
            let usuario = new User(nome_completo, email,conta)
            App.#usuarios.push(usuario)
        }
    }

    static depositar(email, valor){
        let usuario = App.verificar_user_existente(email)
        if(usuario){
            let depositar = new Deposit(valor)
            usuario.depositar_conta(depositar)
        }

    }

    static transfererir(conta, usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor){
        let usuario1 = App.verificar_user_existente(usuário_que_enviou_transferencia)
        let usuario2 = App.verificar_user_existente(usuário_que_recebeu_transferencia)

        if(usuario1 && usuario2){
            let transferencia = new Transfer(usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor)
            usuario1.Account.trasnferencias_conta(transferencia)
            usuario2.Account.trasnferencias_conta(transferencia)
        }
    }

    static emprestar(valor, email, numero_parcelas){
        const usuario =  App.verificar_user_existente(email)
        if(email){
            let emprestimo = new Loan(valor, parcela.numero_parcelas)
            usuario.Account.emprestimo_conta(emprestimo)
        }
      
    }

    static alterar_taxa_emprestimo(porcentagem){
            Loan.definir_juros = porcentagem
    }
    
}


