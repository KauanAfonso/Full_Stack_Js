export class Character{
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


let kauan = new Character("Kauan", 200, 100, 100)
let cris = new Character('Cris', 400 , 100, 20)

kauan.attack(cris)
console.log(cris.return_life())