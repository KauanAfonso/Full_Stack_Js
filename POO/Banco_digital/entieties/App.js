const Account = require("./Account")
const Deposit = require("./Deposit")
const Installment = require("./Installment")
const Loan = require("./Loan")
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

    static depositar(email, valor){
        let usuario = this.verificar_user_existente(email)
        if(usuario){
            let depositar = new Deposit(valor)
            usuario.depositar_conta(depositar)
        }

    }

    static transferencia(conta, usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor){
        let usuario = new Account(conta)
        let transferencia = new Transfer(usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor)
        usuario.trasnferencias_conta(transferencia)
    }

    static emprestimo(valor, valor_parcela, numero_parcelas,status){
        let parcela = new Installment(valor_parcela,numero_parcelas,status)
        let emprest = new Loan(valor, parcela.numero_parcelas)
    }

    static alterar_taxa_emprestimo(porcentagem){
            Loan.definir_juros = porcentagem
    }
    
}