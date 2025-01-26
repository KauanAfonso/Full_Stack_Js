module.exports = class Account{
    #saldo
    constructor(user){
        this.dono = user
        this.#saldo = 0
        this.depositos_totais = []
        this.emprestimos_totais = []
        this.transferencias_totais = []
    }

    obter_saldo(){
        return this.#saldo
    }

    depositar_conta(deposito){
            this.#saldo += deposito.valor
            this.depositos_totais.push(deposito)
            console.log(this.depositos_totais)
            
    }


    emprestimo_conta(emprestimo){
        this.#saldo += emprestimo.valor
        this.emprestimos_totais.push(emprestimo)
        console.log(this.emprestimos_totais)
    }

    trasnferencias_conta(trasnferencias){
        if(trasnferencias.usuário_que_recebeu_transferencia.email === this.dono.email){
            this.#saldo += trasnferencias.valor
            this.transferencias_totais.push(trasnferencias)
        }else{
            this.#saldo -= trasnferencias.valor
            this.transferencias_totais.push(trasnferencias)
        }

        
        console.log(this.transferencias_totais)
    }
}