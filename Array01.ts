//Cara Array 01

const arr:number[] =  [1, 2, 3, 4, 5] // arr number untuk angka
const arr2:string[] = new Array("A","B","C","D") // arr string untuk huruf
const arr3:(number|string)[] = ["A","B","C","1"] // number|string untuk gabungan angka dan huruf

console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(arr2[2]) // untuk mengambil data pada array baris arr2 + [2] adalah huruf ke 2 dihitung dari 0 (index)
console.log(arr2.length) // panjang dari array 


//menambahkan value dibelakang
// arr3.push("E")


//menambahkan value didepan
// arr3.unshift("O")

//menghapus value terakhir
// arr.pop()

//menghapus value pertama
// arr.shift()

//menghapus suatu index dari keberapa misalkan dari tengah dan mau berapa
// arr.splice()

console.log(arr3)