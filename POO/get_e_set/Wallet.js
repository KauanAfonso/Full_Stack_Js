class Wallet {
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100 //10099 - formatando com inteiro
    }

    get amount(){
        return this.#amount / 100
    }

    set username(newUsername){
        this.#username = newUsername
    }

    get username(){
        return this.#username
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount)