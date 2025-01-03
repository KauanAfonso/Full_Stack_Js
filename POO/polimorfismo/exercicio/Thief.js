const Character = require('./Character')

class Thief extends Character{
    constructor(nome, vida, ataque, defesa){
        super(nome, vida, ataque, defesa)
    }

    attack(other_character){
        if(other_character instanceof Character){
            other_character.vida -= (2 * this.ataque) - other_character.defesa
        }else{
            return "isn't instance of class"
        }
    }
}

module.exports = Thief