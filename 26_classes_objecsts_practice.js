class User{
    constructor(name , email){
        this.name = name
        this.email = email
        console.log(`You name is` , name)
        console.log(`email is ` , email)
    }

    viweSite(){
        console.log("Showing Site Content!")
    }
}

let user1 = new User("Ali", "alizaidshaikh9975@gmail.com")

user1.viweSite()