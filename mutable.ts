// Fungsi mutable dan Imutable

// let name:string = "Andi"

// let newName = name                   // mengambil variabel name yang diatas

// name = "Budi"                        // berubah setelah dideklarasikan nama yang baru karena immutable

// console.log(name)


// const arr: number[] = [1,2,3]
// const newArr:number[] = arr          

// arr.push(4)                           //mutable (object dan array) dapat diganti

// console.log(arr)


// const arr: number[] = [1,2,3]
// const newArr:number[] = [...arr]         // untuk menkopi value dengan spread operator ... 

// arr.push(4)                             //mutable (object dan array) dapat diganti / dipush 4 maka hasil arr jadi 1234 dan yang newArr telah menjadi value yang baru jadi hasil nya 123 default number awal

// console.log(arr)
// console.log(newArr)

//==========================================================================================================================================================

// const person = {
//     name: "Andi",
//     age: 25,
//     hobi: "tenis"
// }
// const newperson = {...person, hobi: "Ngoding"}           // memakai ... kembali untuk menambah value baru dari misalkan newperson

// newperson.name = "Dzaky"
// console.log(person)
// console.log(newperson)

//==============================================================================================================================================================

//Looping Object

// interface Iperson{
//     name: string,
//     age: number,
//     hobi?: string
// }

// const person: Iperson = {
//     name: "Andi",
//     age: 25,
//     hobi: "tenis"
// }

// for(let key in person){
//     console.log(key)                                                // untuk mendapatkan key nya dalam case diatas key nya adalah name,age dan hobi
//     console.log(person[key as keyof typeof person])                 // memastikan key adalah bagian dari person dan mendapatkan hasil isi dari key tersebut
// }