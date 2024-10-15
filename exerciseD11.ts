// const obj:{[x:string] : any} = {
//     name : "andy",
//     age : 21,
//     country: "Indonesia"
// }

// console.log(obj);

/*1. Cara 1

     Input: AB
     Output: 28

     Kenapa? karena 28 adalah urutan ke 28 dalam bentuk excel */

    //  function alpabetToAngka(alpabet:string): number{
    //     let result = 0
    //     for(let i = 0; i <alpabet.length; i++){
    //         const letterAlpabet = alpabet.charCodeAt(i) - 64
    //         result = result*26 + letterAlpabet
    //     }
    //     return result
    //  }

    //  console.log(alpabetToAngka("AB"))

// 1. Cara 2

    // function myFunc (str: string): number {
    //     return str.split("").reduce((a, b) => a * 26 + parseInt(b,36) -9,0)
    // }
    // console.log(myFunc("AA"))
    


//1. Cara 3

// function alpabetPlus(kata: string): number {
//     let result = 0;
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

 
//     for (let i = 0; i < kata.length; i++) {
       
//         const charIndex = alphabet.indexOf(kata[i]) +1 
//         result = result * 26 + charIndex
//     }

//     return result
// }

// console.log(alpabetPlus("AA"))


     /*2  Cara 1
        input = [2,2,1]
        Output = 1

        Mencari nilai yang tidak sama pada array dan menampilkan nya di output */

        // function diffOne(nums: number[]): number {
        //     let res = 0
        //     for(let i = 0; i<= nums.length; i++){
        //         res ^= nums[i]
        //     }
                
        //     return res
        // }

        // const arr1 = [2,2,1]
        // const arr2 = [4,1,2,1,2]
        // const arr3 = [1]

        // const result1 = (diffOne(arr1))
        // const result2 = (diffOne(arr2))
        // const result3 = (diffOne(arr3))

        // console.log(result1);
        // console.log(result2);
        // console.log(result3);

    //2. Cara 2

    // function single(arr:number[]){
    //     return arr
    //     .filter((item, idx, num) => num
    //     .filter(val => val == item).length == 1)            // val merupakan value
    // }
    //     const arr = [4,1,2,1,2,3,2]


    //     console.log(single(arr));

        

    /* 3 
        anagram
        input s = "anagram" and t = "nagram"
        output = true
        
        Mencari dari sebuah kata jika kata tersebut lenght dan ada kata yang sama maka dapat disebut anagram hasil output true */

        // function isTrue(s: string, t:string): boolean{
        //     let arr1 = (s.toLowerCase().split("").sort().join(""))
        //     let arr2 = (t.toLowerCase().split("").sort().join(""))

        //     return arr1 === arr2
        // }

        // const kataS1 = "anagram"
        // const kataT1 = "nagaram"
        // const result1 = (isTrue(kataS1,kataT1))
        // console.log(result1);
 
        

        // const kataS2 = "rat"
        // const kataT2 = "car"
        // const result2 = (isTrue(kataS2,kataT2))
        // console.log(result2);
        
/* Ledder to output
    input n =2 
    output = 2
    explenation ada 2 cara untuk menaik ke 2 yaitu dengan
        1. 1 + 1 = 2
        2. atau langsung 2

    input n = 3 
    output = 3
    explenation ada 3 cara untuk menaik ke 3 yaitu dengan

        1. 1 + 1 + 1 =3
        2. 1 + 2 = 3
        3. 2 + 1 = 3 */

// function ledderPlus(nums: number): number {
//     let res = 1
//     let x = 1
//     let y = 1

//     for(let i = 2; i<= nums; i++){
//         let nextNumber = x + y
//         res = nextNumber

//         x = y
//         y = nextNumber
    
//     }
//     return res
// }

// const num1 = 2
// const nums2 = 3
// const nums3= 4

// console.log(ledderPlus(num1));
// console.log(ledderPlus(nums2));
// console.log(ledderPlus(nums3));


