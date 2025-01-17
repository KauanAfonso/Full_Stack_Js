module.exports = class Installment{
    constructor(valor_parcela, numero_parcelas){
        this.valor_parcela = valor_parcela
        this.numero_parcelas = numero_parcelas
        this.status = 'pendente'
    }
}