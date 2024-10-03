/*Tulis kode yang menunjukkan 1 jika inputnya berupa string, 2 jika inputnya berupa angka, dan 3 untuk data lainnya
jenis.*/

let input: any

input = "!";  

let result: number

if (typeof input === 'string') {
    result = 1; // Input is a string
} else if (typeof input === 'number') {
    result = 2; // Input is a number
} else {
    result = 3; // Input is of another type
}

console.log(result)