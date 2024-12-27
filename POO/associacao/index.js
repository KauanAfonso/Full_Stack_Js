const Address = require("./Adress");
const Person = require("./Person");

const addr = new Address("7 de setembro", 99, "Centro", "Hortolandia", "SP" )
const kauan = new Person('Kauan', addr) //associação entre essas duas classes


console.log(kauan)
console.log(kauan.adress.fullAdress())