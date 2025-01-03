const Character = require('./Character')

class Magier extends Character{
    constructor(nome, vida, ataque, defesa, magia){
        super(nome,vida,ataque,defesa)
        this.magia = magia
    }

    attack(other_character){
        if(other_character instanceof Character){
            other_character.vida -= (this.ataque + this.magia) - other_character.defesa
        }else{
            return "isn't instance of class"
        }
    }

    heal_characther(other_character){
        if(other_character instanceof Character){
            other_character.vida = other_character.vida + ( 2 * this.magia)
        }else{
             return "isn't instance of class"
        }
    }
}

module.exports = Magier