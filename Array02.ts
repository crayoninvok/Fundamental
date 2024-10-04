// Cara Array 02

// const arr:number[] =  [1, 2, 3, 4, 5] 
// const arr2:string[] = new Array("A","B","C","D") 
// const arr3:(number|string)[] = ["Dzaky"] 

// arr3.splice(1,2, "O")

// console.log(arr3)

//------------------------------------------------------------------------

// menyorting angka
const numArr: number[] = [9, 1, 5, 3]

numArr.sort((a,b) => a - b)
                                 // Menyorting angka ascening dari kecil-besar untuk dari besar ke rendah rubah b-a (hanya unruk string)
                                // Bisa juga langsung dengan numArr.sort() akan tetapi agak mengacau kalau puluhan dan ratusan
                                // numArr.sort() - bisa untuk alphabet
                                //numArr.sort().reverse() - untuk reverse Z-A
console.log(numArr);



