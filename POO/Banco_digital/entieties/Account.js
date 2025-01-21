module.exports = class Account{
    #saldo
    constructor(user){
        this.user = user
        this.#saldo = 0
        this.depositos_totais = []
        this.emprestimos_totais = []
        this.transferencias_totais = []
    }

    get obter_saldo(){
        return this.#saldo
    }

    depositar_conta(deposito){
            this.#saldo += deposito.valor
            this.depositos_totais.push(deposito)
            console.log(this.depositos_totais)
            
    }



    emprestimo_conta(emprestimo){
        this.#saldo += emprestimo
        this.emprestimos_totais.push(emprestimo)
        console.log(this.emprestimos_totais)
    }

    trasnferencias_conta(trasnferencias){
        if(trasnferencias.usuario_que_recebeu === this.user){
            this.#saldo += trasnferencias.valor
        }else{
            this.#saldo -= trasnferencias.valor
        }

        this.transferencias_totais.push(trasnferencias)
        console.log(this.transferencias_totais)
    }
}