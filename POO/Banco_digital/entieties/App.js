const Account = require("./Account");
const Deposit = require("./Deposit");
const Loan = require("./Loan");
const User = require("./User");
const Transfer = require("./Transfer")

module.exports = class APP {
    static #usuarios = [];

    static verificar_user_existente(email) {
        return APP.#usuarios.find((user) => user.email === email);
    }

    static criar_usuario(nome_completo, email) {
        const usuario_existe = APP.verificar_user_existente(email);
        if (usuario_existe) {
            return `Usuário já existente`;
        } else {
            const conta = new Account(email);
            const usuario = new User(nome_completo, email, conta);
            APP.#usuarios.push(usuario);
            return `Usuário criado com sucesso`;
        }
    }

    static depositar(email, valor) {
        const usuario = APP.verificar_user_existente(email);
        if (usuario) {
            const deposito = new Deposit(valor);
            usuario.conta.depositar_conta(deposito);
            return `Depósito de ${valor} realizado com sucesso`;
        }
        return `Usuário não encontrado`;
    }

    static obter_saldo(email){
        const usuario = APP.verificar_user_existente(email);
        if(usuario){
            console.log(usuario.conta.obter_saldo())
        }

    }

    static transferir(usuario_envia, usuario_recebe, valor) {
        const remetente = APP.verificar_user_existente(usuario_envia);
        const destinatario = APP.verificar_user_existente(usuario_recebe);

        if (remetente && destinatario) {
            const nova_transferencia = new Transfer(usuario_envia, usuario_recebe, valor)
            remetente.conta.trasnferencias_conta(nova_transferencia);
            destinatario.conta.depositar_conta(nova_transferencia);
            return `Transferência de ${valor} realizada com sucesso`;
        }
        return `Usuários não encontrados`;
    }

    static emprestar(valor, email, numero_parcelas) {
        const usuario = APP.verificar_user_existente(email);
        if (usuario) {
            const emprestimo = new Loan(valor, numero_parcelas);
            usuario.conta.emprestimo_conta(emprestimo);
            return `Empréstimo de ${valor} realizado com sucesso`;
        }
        return `Usuário não encontrado`;
    }

    static alterar_taxa_emprestimo(porcentagem) {
        Loan.definir_juros(porcentagem);
        return `Taxa de empréstimo alterada para ${porcentagem}%`;
    }

    static obter_usuarios(){
        console.log(APP.#usuarios)
    }
};
