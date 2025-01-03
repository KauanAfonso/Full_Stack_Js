class Wallet {
    #amount
    constructor(){
        this.#amount = 100.99 * 100 //10099 - formatando com inteiro
    }

    get amount(){
        return this.#amount / 100
    }
}