// Membuat Segitiga angka ke Kanan

// function segitiga(tinggi: number){
//     let num = 1 
//     for (let i=1; i<= tinggi; i++){                    // Loop pertama : Mengatur iterasi untuk setiap baris, maksudnya adalah akan menentukan berapa baris yang akan dicetak kebawah 1,2,3,4,5 dst
//         let res: string = ''                           // Untuk mendeklarasikan variabel res yang bertipe string dengan inisialisasi string kosong untuk dicetak 

//         for(let j=1; j<=i; j++){                       // Loop Kedua/dalam : Untuk mengatur atau menambahkan angka/string yang berada pada kolom baris tsb
//             res += (num < 10 ?'0' : '') + num + ' '   // 
//             num++
//         }
        
//         console.log(res.trim())
//     }
// }

// segitiga(5)


/* Formula Body Mass Weight
    Lebih kecil dari 18 = less weight
    ○ < 18.5 return “less weight”
    ○ 18.5 - 24.9 return “ideal”
    ○ 25.0 - 29.9 return “overweight”
    ○ 30.0 - 39.9 return “very overweight”
    ○ > 39.9 return “obesity” 
*/

// function BeratIdeal (weight: number, height: number){
//     const HasilHitung : number = weight / ((height/100 **2))

//     if(HasilHitung < 18.5){
//         return "Less Weight"
//     } else if (HasilHitung < 25 ){
//         return "Ideal"
//     } else if (HasilHitung < 30 ){
//         return "Overweight"
//     } else if (HasilHitung < 39.9){
//         return "Very Overweight"
//     } else if ( HasilHitung >= 40){
//         return "Obesity"

//     } 
// }

// console.log(BeratIdeal(89,169))

//=====================================================================================================================================================================
/*Create a program to create transaction
● Product Class
    ○ Properties
        ■ Name
        ■ Price
● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty

○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data
class */

class Product {
    productType = ""
    price = 0

    constructor(jenis: string, harga: number){
        this.productType = jenis
        this.price = harga
    }
    
}

class Transaction extends Product {
    productAvail = 0
    productName = ""
      
    constructor(jenis:string, namaproduk: string, harga: number, stok:number){
        super(jenis, harga)
        this.productAvail = stok
        this.productName = namaproduk
    }
}

const prodak1 = new Transaction("Minuman", "Mizone", 5000, 5)
const prodak2 = new Transaction("Rokok", "Marlboro", 47000, 3)
const prodak3 = new Transaction("Snack", "Taro", 5000, 4)


const arrTransaction = [prodak1,prodak2,prodak3]
console.log(arrTransaction) // Belom Beres

//============================================================================================================================================================

/*● Create a function to check if two objects are equal
● Example
    ○ Input : { a: 2 } & { a: 1 }
    ○ Output: false
● Example
    ○ Input : { a: “Hello” } & { a: 1 }
    ○ Output: false
● Example
    ○ Input : { a: 1 } & { a: 1 }
    ○ Output: true */

// function persamaan(obj1: any, obj2: any): boolean {
//                                                                                                             // Memeriksa apakah kedua objek adalah referensi yang sama
//     if (obj1 === obj2)                                                      
//         return true;                                                                                     
  
//                                                                                                             // Memeriksa apakah keduanya adalah objek dan bukan null
//     if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
//       return false;
//     }
  
//                                                                                                             // Mendapatkan semua kunci dari kedua objek
//     const arr1: string[] = Object.keys(obj1);
//     const arr2: string[] = Object.keys(obj2);
  
//     // Memeriksa apakah jumlah kuncinya sama
//     if (arr1.length !== arr2.length) return false;
  
//                                                                                                             // Memeriksa setiap pasangan kunci-nilai secara rekursif
//     for (const key of arr1) {
//       if (!arr2.includes(key) || !persamaan(obj1[key], obj2[key])) {
//         return false;
//       }
//     }
  
//                                                                                                             // Jika semua kunci dan nilainya sama, kembalikan true
//     return true;
//   }
  
 
//   const obj1 = { a: 2 };
//   const obj2 = { a: 1 };
//   console.log(persamaan(obj1, obj2)); 

  //========================================================================================================================================================================================================

  /*● Create a function to get the intersection of two objects
● Example
    ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
    ○ Output: { a: 1 } */


//   function getIntersection(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any } {
//     const intersection: { [key: string]: any } = {};                                                                                 // Objek untuk menyimpan irisan

//                                                                                                                                     // Mengambil pasangan kunci-nilai dari obj1
//     for (const key in obj1) {
//                                                                                                                                     // Memeriksa apakah kunci ada di obj2 dan nilai mereka sama
//         if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
//             intersection[key] = obj1[key];                                                                                          // Menambahkan kunci dan nilainya ke objek irisan
//         }
//     }

//     return intersection;                                                                                                               // Mengembalikan objek irisan
// }

// // Contoh penggunaan
// const objA = { a: 1, b: 2 };
// const objB = { a: 1, c: 3 };
// console.log(getIntersection(objA, objB)); 


//============================================================================================================================================================================================================
/*
    ● Create a function to find a factorial number using recursion
    ● Example
        ○ Input : 5
        ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120 */



// function factorial(n: number): number {
//     let result = 1;                                                             // Inisialisasi hasil dengan 1

   
//     for (let i = 2; i <= n; i++) {                                               // Mengalikan semua angka dari 1 hingga n
//         result *= i;                                                               // Mengalikan result dengan i
//     }

//     return result;                                                                  // Mengembalikan hasil faktorial
// }

// // Contoh penggunaan
// const number = 5;
// const result = factorial(number);
// console.log(`${number}! = ${result}`); // Output: 5! = 120