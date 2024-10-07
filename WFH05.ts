/*Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3 */


// function sumNumbers(mixedArray: (string | number | null | boolean | undefined)[]): number {
//     let totalSum = 0; // Inisialisasi jumlah

//     for (const item of mixedArray) {
//                                                                                          // Cek jika item adalah angka (termasuk nol)
//         if (typeof item === 'number' && !isNaN(item)) {
//             totalSum += item;                                                               // Tambahkan langsung ke total
//         } else if (typeof item === 'string') {
//                                                                                             // Coba konversi string menjadi angka
//             const parsedNumber = parseFloat(item);
//             if (!isNaN(parsedNumber)) {
//                 totalSum += parsedNumber;                                                    // Tambahkan hasil konversi ke total
//             }
//         }
//                                                                                             // Abaikan nilai null, boolean, dan undefined
//     }

//     return totalSum;                                                                              // Kembalikan jumlah total
// }

//                                                                                                     // Contoh penggunaan
// const mixedArray = ["3", 1, "string", null, false, undefined, 2];
// const result = sumNumbers(mixedArray);
// console.log(result); 


//====================================================================================================================================================================================================


/*Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6] */

// function insertIntegers(maxSize: number, ...integers: number[]): number[] {
//     const resultArray: number[] = [];                                                   // Inisialisasi array hasil

//     for (const integer of integers) {
//         if (resultArray.length < maxSize) {
//             resultArray.push(integer);                                                  // Tambahkan integer ke array
//         } else {
//             break;                                                                      // Hentikan jika sudah mencapai ukuran maksimum
//         }
//     }

//     return resultArray;                                                                  // Kembalikan array hasil
// }

//                                                                                         // Contoh penggunaan
// const maxSize = 5;
// const result = insertIntegers(maxSize, 5, 10, 24, 3, 6, 7, 8);
// console.log(result); // Output: [5, 10, 24, 3, 6]

//=================================================================================================================================================================================================


/* Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] */

// function combineArrays(arr1: number[], arr2: number[]): number[] {
//     return [...arr1,... arr2]                                                                 // Menggunakan spread operator untuk menggabungkan array ...arr1 titik 3 berfungsi untuk menggabungkan nya
// }

//                                                                                                 
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const combinedArray = combineArrays(arr1, arr2)
// console.log(combinedArray)                                                                   


//=================================================================================================================================================================================================

/*Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]*/

// function findDuplicate(arr:number[]):number[]{
//     const angkaDuplikat = arr.filter((item, index) => arr.indexOf(item) !== index)     // Menggunakan metode filter untuk membuat array baru dengan memfilter dari index ke berapa dan besaran item yang dimasukan lalu membuang yang duplikat dengan operator
//     return Array.from(new Set(angkaDuplikat)).sort((a,b) => a-b)                        // Menghapus duplikat dari array dan mengonversinya kembali menjadi array
// }

// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5]
// const sortedDuplikat = findDuplicate(arr)

// console.log(sortedDuplikat)


//=================================================================================================================================================================================================
/* Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]*/

function findDiff(arr1: number[], arr2: number[]): number[] {
                                                                            // Mencari elemen di arr1 yang tidak ada di arr2
    const uniqueToArr1 = arr1.filter(item => !arr2.includes(item));
                                                                             // Mencari elemen di arr2 yang tidak ada di arr1
    const uniqueToArr2 = arr2.filter(item => !arr1.includes(item));
                                                                             // Menggabungkan hasil dari kedua array
    return [...uniqueToArr1, ...uniqueToArr2];
}

// Contoh penggunaan
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const differences = findDiff(arr1, arr2);
console.log(differences); 
