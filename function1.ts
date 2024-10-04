//1.Function Reverse Declaration

function reverseStr(input:string){
    return input.split("") .reverse() .join("")    // Nilai kembali dari function (mengembalikan nilai baru atau hasil) contoh: hasil dari string

}

console.log(reverseStr("Hello Worrld"))    // "Hello Wordl" adalah input sekaligus output yang akan dikeluarkan dengan fungsi pada {}
console.log(reverseStr("Bandung"))

//2.Function Expresion 

const sum = function(a:number, b: number, c:number){
    return a + b + c                                      // abc adalah angka yang harus dimasukan di console log  , variabel hanya dapat dipakai didalam nya saja tidak bisa di pakai dari luar
}                                                         // argumen adalah 10,5,4 dan parameter adalah abc

console.log(sum(10,5,4))

//3. Function Parameter dan Argunem default, jika mau default masukan parameter dengan x:number = 0/ jika dengan angka lain akan menjadi penambahan dengan parameter

const sun = function(a:number = 0, b: number = 0, c:number = 0, ...others:number[]){        // others/rest parameter adalah untuk menambahkan parameter hasilnya akan sama dengan argumen
    console.log(others)
    return a / b * c 

}
console.log(sun(10,5,4,3,4,2))

//4. FuncReduce untuk menambahkan parameter other, const sum0ther=other.reduce((a,b)=> a+b)  ,  harus dengan function other
//                  return a+b+sum0ther