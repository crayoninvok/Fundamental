// Penggunaan this.

const user = {
    firstname: "Frengky",
    lastname: "Sihombing",
    greet(){
        console.log(`Hello ${this.firstname}`)          // Penggunaan this adalah untuk pemanggilan isi key dari firstname mengacu kepada objek
    }
}

user.greet()

// Penggunaan berbagai macam method Object.xxxx / Object Built in Method

console.log(Object.entries(user))                        // untuk memasukan kedalam array dan array entries
console.log(user.hasOwnProperty("firstname"))           // untuk mengecek properti yang ada di first name tipe output bolean true or false
console.log(Object.values(user))                        //  untuk mnegecek data isi dari keys yang ada pada case diatas contoh: user output array
console.log(Object.isFrozen(user))                      // untuk mengecek apakah data user frozen atau tidak output bolean true or false
        
