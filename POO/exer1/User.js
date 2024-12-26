class User{
    constructor(fulname, email, password){
        this.fulname = fulname
        this.email = email
        this.password = password
    }

    login(email, password){

        if(email == this.email && password == this.password){
            console.log("Login correto")
        }else{
            console.log("Login incorreto")
        }

    }
}

const kauan = new User("Kauan afonso" , "kauan@123", "123")
kauan.login("kauan@123" , "123")