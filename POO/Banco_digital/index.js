const kauan = require("./entieties/App");

// Chamada correta de um método estático
kauan.criar_usuario("Kauan Afonso", "kauanafon3@gmail.com");
console.log(kauan.verificar_user_existente("kauanafon3@gmail.com"))

console.log(kauan.depositar("kauanafon3@gmail.com", 5000))


//Os emprestimos