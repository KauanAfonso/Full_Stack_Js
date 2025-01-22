const kauan = require("./entieties/App");
const cris = kauan

kauan.criar_usuario("Kauan Afonso", "kauanafon3@gmail.com");
cris.criar_usuario("Crisnelly" , "Crisnelly@123" )

console.log(kauan.verificar_user_existente("kauanafon3@gmail.com"))
console.log(kauan.depositar("kauanafon3@gmail.com", 5000))

kauan.emprestar(200, "kauanafon3@gmail.com" , 2)
kauan.obter_saldo("kauanafon3@gmail.com") //erro 

// kauan.transferir("kauanafon3@gmail.com" , "Crisnelly@123" ,500)