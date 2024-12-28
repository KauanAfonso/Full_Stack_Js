class Accoount{
    #password
    #balance
    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email,password){
        if(this.#authenticate){
            return this.#balance
        }else{
            return `dados invalidos`
        }
    }


    #authenticate(email,password){
        return this.email == email && this.#password == password
    }

}

const user = {
    email: "Kauan@123",
    password: "123456"
}

const myAccount = new Accoount(user)
console.log(myAccount.getBalance("Kauan@123" , "123456"))