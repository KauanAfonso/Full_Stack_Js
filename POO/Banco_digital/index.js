const kauan = require("./entieties/App");
const cris = kauan

//CRIANDO USUÁRIOS
kauan.criar_usuario("Kauan Afonso", "kauanafon3@gmail.com");
cris.criar_usuario("Crisnelly" , "Crisnelly@123" )

//DEPOSITANDO
console.log(kauan.depositar("kauanafon3@gmail.com", 5000))
kauan.depositar("kauanafon3@gmail.com", 300)
kauan.obter_saldo("kauanafon3@gmail.com")


//EMPRESTIMOS
kauan.emprestar(200, "kauanafon3@gmail.com" , 2)
kauan.emprestar(1000, "kauanafon3@gmail.com" , 5)
console.log(kauan.verificar_user_existente("kauanafon3@gmail.com").conta.emprestimos_totais[0].installments)



//TRANSFERINDO
console.log(kauan.transferir("kauanafon3@gmail.com" , "Crisnelly@123" ,1000))
kauan.obter_saldo("kauanafon3@gmail.com")
cris.obter_saldo("Crisnelly@123")


//ALTERANDO TAXA
console.log(kauan.alterar_taxa_emprestimo(15))



console.log(kauan.obter_usuarios()) //unico erro
