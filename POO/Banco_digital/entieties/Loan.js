const Installment = require("./Installment")

module.exports = class Loan{
  
    static #juros = 10

    constructor(valor,installments){
        this.valor = valor
        this.installments = []
        this.data = new Date()
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((valor * Loan.#juros) / installments, i))
          }
    }

    static get verificar_juros(){
        return Loan.#juros
    }

    static set definir_juros(porcentagem){

        let aumento = (Loan.#juros * porcentagem) / 100
        return Loan.#juros += aumento
    }

}