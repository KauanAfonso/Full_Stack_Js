module.exports = class Loan{
  
    static #juros = 10

    constructor(valor, data, quantidade_parcelas){
        this.valor = valor
        this.data = data
        this.quantidade_parcelas = quantidade_parcelas

    }

    static get verificar_juros(){
        return Loan.#juros
    }

    static set definir_juros(porcentagem){

        aumento = (Loan.#juros * porcentagem) / 100
        return Loan.#juros += aumento
    }

}