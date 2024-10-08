// Object Oriented

                                        // Cara pertama dengan : interface , Bisa diturunkan dan ada properti baru tinggal di merge
// interface Icar {
//     brand:string
//     model:string
//     price?:number                       // ? untuk opsional boleh ada boleh tidak
// }                                       // jangan lupa koma di setiap akhir kata  

                                        // Cara kedua dengan : type 
 
type Car = {
    brand:string,
    model:string,
    price?:number
}

const car: Car = {                     // untuk memasukan properti
    brand: "BMW",                       // ada key: brand , value: "BMW"
    model: "M135i xDrive",
    price: 800000000
}

interface Iuser{
    name: string
    hobby?: string
    address?:{
        street: string
        country: string
    }
    greeting(input:string):void         //tidak me return (void)
}


const user:Iuser = {      
    name: "Dzaky",                           //properti // jika ingin mendapatkan index nya tinggal mencari dengan kata kunci (conlog(user.name)) key nya adalah name
    greeting() {                            // function
        console.log("Hello")
    }
}

user.address ={
    street:"Cijerah",
    country: "England"
}
    // console.log(user.name)                          // cara pertama dengan .(titik)
    // console.log(user["name"])                       // cara kedua dengan ["key"]

user.hobby = "Ngoding"


    // delete user.hobby                            // Untuk menghapus data dalam user yaitu data hobby

console.log(user)

// console.log(user.address?.street)               // optional chaining ? apakah atau checking sebelum menuju item selanjutnya
console.log(Object.keys(user))                      // Untuk mendapatkan kumpulan (keys) yang berada dalam user dalam tipe data array
