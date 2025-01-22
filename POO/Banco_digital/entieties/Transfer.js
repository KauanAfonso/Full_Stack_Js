const User = require("./User");

module.exports = class Transfer{
    constructor(usuário_que_enviou_transferencia, usuário_que_recebeu_transferencia,valor){
        this.usuário_que_enviou_transferencia = usuário_que_enviou_transferencia
        this.usuário_que_recebeu_transferencia = usuário_que_recebeu_transferencia
        this.valor = valor
        this.data = new Date()
    }
}