const Installment = require("./Installment")

module.exports = class Loan{
  
    static #juros = 10

    constructor(valor){
        this.valor = valor
        this.installments = []
        this.data = new Date()
        for (let i = 1; i <= this.installments; i++) {
            this.installments.push(new Installment((value * Loan.#juros) / installments, i))
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