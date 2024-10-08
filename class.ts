// Class untuk membuat objek yang sama

class User {
    firstName =""
    lastName = ""                                                  // # private
                                                   
    static word = "Hello Word"                                      // untuk melakukan pemanggilan secara langsung di console log

    constructor(first: string, last: string = ""){               // constructor adalah function bawaan untuk isi dari user1 = new User (xxxxxxx) , ="" untuk default atau misalkan koosong
        this.firstName = first                                  // untuk memanggil firstName // properti
        this.lastName = last                                   // untuk memanggil lastName // jika ingin private ditambah # didepan properti contoh this.#lastName
    }

    greet(){
        console.log(`Hello ${this.firstName}`)
    }

    // getlastName() {                                             // untuk mengakali mendapatkan lastName jangan lupa #
    //     return this.#lastName
    // }

}

const user1 = new User("Frengky", "Sihombing")
const user2 = new User("John", "Schedelic")
const user3 = new User("Dzaky", "Ferreira")

console.log(user1)
console.log(user2)
console.log(user3)

console.log(User.word)

// user1.greet()
// user2.greet()
// user3.greet()

// const now = new Date()
// now.getDate


//========================================================================================================================================================================
//Enscaptulation untuk

