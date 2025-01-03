const Magier = require("./Magier")
const Thief = require("./Thief")
const Warrior = require("./Warrior")

let kauan = new Magier("Kauan", 200, 100, 100, 20)
let cris = new Thief('Cris', 400 , 100, 20)
let luna = new Warrior("luna", 500, 500, 50,35,"Defense")

kauan.attack(cris)
kauan.heal_characther(cris)
cris.attack(luna)
console.log(luna.return_life())
