const kauan = require("./entieties/App");
const cris = kauan

kauan.criar_usuario("Kauan Afonso", "kauanafon3@gmail.com");
cris.criar_usuario("Crisnelly" , "Crisnelly@123" )

console.log(kauan.verificar_user_existente("kauanafon3@gmail.com"))
console.log(kauan.depositar("kauanafon3@gmail.com", 5000))

