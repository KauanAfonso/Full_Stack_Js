class Character{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome 
        this.vida = vida 
        this.ataque = ataque
        this.defesa = defesa
    }

    attack(other_character){
        if(other_character instanceof Character){
            other_character.vida -= this.ataque - other_character.defesa
        }else{
            return "isn't instance of class"
        }
    }

    return_life(){
        return this.vida
    }
}

module.exports = Character


