/*  1. 
    nums input = [3,2,3]
    output = 3 */

    // function cariAngkaSama(arr: number[]):number{
    //     let res = 0
    //     let count = 0
    //     for(let i=0 ; i<arr.length ; i++){

    //     if(count == 0){
    //         res = arr[i]
    //     }
    //     if(arr[i] == res){
    //         count += 1
    //     } else{
    //         count -= 1
    //     }
        
    // }
    // return res


    // }

    // const array1 = [3,2,3,2,3]
    // const array2 = [2,2,1,1,1,2,2]
    // const result1 = (cariAngkaSama(array1))
    // const result2 = (cariAngkaSama(array2))

    // console.log(result1)
    // console.log(result2)
    

/* 2.
Input s = "III"
Output = 3 
Mencari hasil dari romawi III adalah angka 3 */

// function RomawiToAngka(romawi: string): number{
//     let res = 0

//     for(let i = 0 ; i < romawi.length ; i++){
//         let hasilIni = 0
//         if (romawi[i] == 'I') {
//             hasilIni = 1
//         } else if (romawi[i] == 'V') {
//             hasilIni = 5
//         } else if (romawi[i] == 'X') {
//             hasilIni = 10
//         } else if (romawi[i] == 'L') {
//             hasilIni = 50
//         } else if (romawi[i] == 'C') {
//             hasilIni = 100
//         } else if (romawi[i] == 'D') {
//             hasilIni = 500
//         } else if (romawi[i] == 'M') {
//             hasilIni = 1000
//         }

//             let nilaiSetelah = 0

//             if(romawi[i + 1] == "I") {
//                 nilaiSetelah = 1
//             } else if (romawi[i + 1] == "V") {
//                 nilaiSetelah = 5
//             } else if (romawi[i + 1] == 'X') {
//                 nilaiSetelah = 10
//             } else if (romawi[i + 1] == 'L') {
//                 nilaiSetelah = 50
//             } else if (romawi[i + 1] == 'C') {
//                 nilaiSetelah = 100
//             } else if (romawi[i + 1] == 'D') {
//                 nilaiSetelah = 500
//             } else if (romawi[i + 1] == 'M') {
//                 nilaiSetelah = 1000
//         }

//         if(nilaiSetelah > hasilIni){
//             res -= hasilIni
//         } else {
//             res += hasilIni
//         }
            
//      }

//      return res
// }

// const RomawiInput1 = "VI"
// const RomawiInput2 = "LVII"
// const RomawiInput3 = "MCMXCIV"
// const result1 = (RomawiToAngka(RomawiInput1))
// const result2 = (RomawiToAngka(RomawiInput2))
// const result3 = (RomawiToAngka(RomawiInput3))

// console.log(result1);
// console.log(result2);
// console.log(result3);

/* 2. Cara Lain */


/* 3.
Membuat input: 5 dengan segitiga array
    dan  output Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]*/


    // function pascal(n:number) {
    //     const res: any[] = []
    //     for(let i=0; i<n; i++){
    //         const arr = []

    //         for(let j=0; j<=i; j++){
    //             if(j == 0 || j == i) {
    //                 arr.push(1)
    //             } else {
    //                 arr.push(res[i-1][j-1] + res[i-1][j])
    //             }

    //         }
    //         res.push(arr)
            
    //     }
    //     return res

    // }

    // console.log(pascal(5));




/* 4. 
    input harga = = [7,1,5,3,6,4]
    output = 5
    input dengan array number dan output dengan number*/

    // Membuat profit dengan input harga [7,1,5,3,6,4], cara membandingkan index array ke 1 

    // function cariHargaTertinggi(hargaArray: number[]): number {
    //     let hargaMinim = hargaArray[0]
    //     let profitTerbaik = 0 
    
    //     for (let i = 1; i < hargaArray.length; i++) {
    //         if (hargaArray[i] < hargaMinim) {
    //             hargaMinim = hargaArray[i]

    //         } else {
    //             const profit = hargaArray[i] - hargaMinim
    //             if (profit > profitTerbaik) {
    //                 profitTerbaik = profit 
    //             }
    //         }
    //     }
    
    //     return profitTerbaik
    // }
    
    // const price1 = [7,1,5,3,6,4]
    // const price2 =  [7,6,4,3,1]
    // const result1 = (cariHargaTertinggi(price1))
    // const result2 = (cariHargaTertinggi(price2))

    // console.log(result1)
    // console.log(result2)
    
    /* 1 */

    // function majorityElement(nums: number[]): number  {
    //     let res = 0
    //     for (let i = 0; i < nums.length; i++) {
    //         let count = 0;
    
            
    //         for (let j = 1; j < nums.length; j++) {
    //             if (nums[j] === nums[i]) {
    //                 res = count++;
    //             }
    //         }
    
          
    //         if (count > nums.length - count) {
    //             res = nums[i];
    //         }
    //     }
    
    //     return res;
    // }

    // console.log(majorityElement([3,2,3]))

    // function profitMax(arr:number[]){
    //     const min = Math.min(...arr)
    //     const idxMin = arr.indexOf(min)
    //     const newArr = arr.splice(idxMin)
    //     const max = Math.max(...newArr)

    //     return  max - min
    // }

    // console.log(profitMax([7,1,5,3,6,4]))
    

/* 5. Cara Lain Mathmax
*/

// function profitMaxLoop(arr: number[]) {
//     const res = []
//     for(let i = arr.length - 1; i > 0; i-- ) {
//         for(let j = i - 1; j >= 0; j-- ) {
//             res.push(arr[i] - arr[j])
//         }
//     }
//     return Math.max(...res)
// }

// console.log(profitMaxLoop([2,9,7,1,5,3,6,4]))

    