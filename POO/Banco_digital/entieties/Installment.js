module.exports = class Installment{
    constructor(valor_total, numero_parcelas){
        this.valor_total = valor_total 
        this.numero_parcelas = numero_parcelas
        this.valor_parcela = valor_total / numero_parcelas
        this.status = 'pendente'
    }
}