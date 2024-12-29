class Accoount{
    #password //preparando para encapsular
    #balance
    constructor(user){
        this.email = user.email
        this.#password = user.password //encapsular passando o #
        this.#balance = 0
    }

    getBalance(email,password){ //metodo para verificar se email e senha bate com os originais
        if(this.#authenticate){
            return this.#balance
        }else{
            return `dados invalidos`
        }
    }


    #authenticate(email,password){ //metodo de verificacao
        return this.email == email && this.#password == password
    }

}

const user = {
    email: "Kauan@123",
    password: "123456"
}

const myAccount = new Accoount(user)
console.log(myAccount.getBalance("Kauan@123" , "123456"))