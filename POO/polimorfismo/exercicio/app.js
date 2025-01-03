const Magier = require("./Magier")
const Thief = require("./Thief")

let kauan = new Magier("Kauan", 200, 100, 100, 20)
let cris = new Thief('Cris', 400 , 100, 20)

kauan.attack(cris)
console.log(cris.return_life())
kauan.heal_characther(cris)
console.log(cris.return_life())