class Account{
    #saldo
    constructor(user){
        this.user = user
        this.#saldo = 0
        this.depositos_totais = []
        this.empréstimos_totais = []
        this.transferencias_totais = []
    }

    get obter_saldo(){
        return this.#saldo
    }

    depositar_conta(deposito){
            this.#saldo += deposito
            this.depositos_totais.push(deposito)
    }

    emprestimo_conta(emprestimo){
        this.#saldo += emprestimo
        this.empréstimos_totais.push(emprestimo)
    }

    trasnferencias_conta(trasnferencias)
}