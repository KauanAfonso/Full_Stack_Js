import { Character } from "./Character";

class Warrior extends Character{
    constructor(nome, vida, ataque, defesa, escudo, posicao){
        super(nome, vida, ataque, defesa)

        this.escudo = escudo
        this.posicao = "Defense"
    }

    change_position(){
        if(this.posicao == "Attack"){
            this.defesa += this.escudo
            return this.posicao = "Defense"

        }else{
            this.defesa -= this.escudo
             return this.posicao = "Attack"
        }
    }

    attack(other_character){
        if(other_character instanceof Character && this.posicao == "Attack"){
            other_character.vida -= this.ataque - other_character.defesa
        }else{
            return "isn't instance of class or position incorrect"
        }
    }

}