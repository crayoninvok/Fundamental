/* ● Create a function to check if two objects are equal
● Example
○ Input : { a: 2 } & { a: 1 }
○ Output: false */

// interface Input{
//     [key: string]: any

// }
// const obj1: Input = { a: 1, b: 2}
// const obj2:Input = { a: 1, b: 2}

//  function persamaan(obj1: Input, obj2: Input): boolean{
//     if(Object.keys(obj1).length !== Object.keys(obj2).length){
//         return false
//     }
//     for (let key in obj1){
//         if(obj1[key] !== obj2[key]){
//             return false
//         }
//     }

//     return true
//  }

//  console.log(persamaan(obj1,obj2))
  



//=======================================================================================================================================================================
/*● Create a function to find a factorial number using recursion
● Example
    ○ Input : 5
    ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120 */

    // function perkalian(x:number,):any {
    //     let res = 1
    //     for (let i = 2; i <= x; i++ ){
    //         res *= i
    // }
    //         return res

    //  }

    //  const number = 5
    //  const res = perkalian(number)
  

    //  console.log(`${number}! = 5 x 4 x 3 x 2 x 1 = ${res}`)


//Recursive ====================================================


    // function perkalian (x:number):number{
    //     if(x<=1){
    //         return 1
    //     }
    //     return x* perkalian(x-1)
    // }

    // const number = 5 
    // const hasil = (perkalian(number))
    //  console.log (`${number}! = 5 x 4 x 3 x 2 x 1 = ${hasil}`)


// Cara 2 Recursive

// function factorial(n:number):number{
//     console.log(n)
//     return n == 0 ? 1 : n * factorial(n - 1)
// }
// // const factorial2 = (n:number):number => n == ? 1: n * factorial2(n-1)

// console.log(factorial(5))
//========================================================================================================================================================================
/* ● Create a function to get the intersection of two objects
● Example
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 } */

// function hapusSama(obj1:any, obj2:any):any{
//     let result:any = {}

//     for (let hasil in obj2){

//        if(obj1.hasOwnProperty(hasil) && obj2[hasil] === obj1[hasil]){
//         result[hasil] = obj2[hasil]
//        }
//     }
//     return result
// }

// const obj1 = { a: 1, b: 2 }
// const obj2 = { a: 1, c: 3 }

// console.log(hapusSama(obj1, obj2))

/*● Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :

ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ } */


// function merged (arr1:any[], arr2:any):any {                // fungsi merged membungkus arr1[array tipe data bebas] dan arr2[array tipe data bebas] 
//     let result : any []                                     // masukan untuk result dengan tipe data array kosong[]
//     let combined = [...arr1, ...arr2]                       // masukan untuk combined dengan tipe data array dan menggabungkan kedua array

//     for(let i = 0; i < combined.length; i++){               //menggunakan loop untuk menemukan iterasi/kata yang sudah ada makan output di set false
//        let duplicate = false                                //output di set ke false karena untuk menandai
//     }
//         for(let j = 0; j < result.length; j++){
//             if(combined[i].name === combined[j].email && result[i].name === combined[j].email){

//             }

//         }
// }
// Cara 2======
// interface StudentData {
//     name:string
//     email:string
// }

// function mergeArrStudentData(a:StudentData[], b:StudentData[]):StudentData[] {
//     let result:StudentData[] = []
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (JSON.stringify(a[i]) === JSON.stringify(b[j])){
//                 result.push(a[i])
//                 break
//             }
//             if (j === b.length - 1) result.push(a[i])
//         }
//     }
//     for (let i = 0; i < b.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (JSON.stringify(b[i]) === JSON.stringify(a[j])) break
//             if (j === a.length - 1) result.push(b[i])
//         }
//     }
//     return result
// }

// let a:StudentData[] = [{name:'student1',email:'student1@mail.com'}, {name:'student2',email:'student2@mail.com'}, {name:'student3',email:'student3@mail.com'}]
// let b:StudentData[] = [{name:'student2',email:'student2@mail.com'}, {name:'student3',email:'student3@mail.com'}]
// let res:StudentData[] = mergeArrStudentData(a,b)


//Cara 3============================

// const arr1:Student[] = [
//     { name: ‘Student 1’, email : ‘student1@mail.com’ },
//     { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]

// const arr2: Student[] = [
//     { name: ‘Student 1’, email : ‘student1@mail.com’ },
//     { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]


// function mergeArr(arr1:Student[], arr2: Student[]){
//     const result: Student[] = arr1

//     for(let item of arr2){
//         const idx = result.findIndex((val) => item.name && val.email == item.email)
//         if(idx == -1) result.push(item)
//     }

//     return result
// }


//=====================================================================================================================================================================
/* 
    ● Create a function that can accept input as an array of objects and switch all values into property and
    property into value
        ● Example :
            ○ Input : [{ name: ‘David’, age: 20 }]
            ○ Output : [{ David: ‘name’, 20: ‘age’}] */

// function myFunc (input:any){
//     const res: any = {}
//     const obj = input[0]
    
//     for(let key in input[0]){

//         // console.log(typeof(key))

//         res[input[0][key]] = key
//     }
//     return [res]

// }

// console.log(myFunc([{ name : 'David', age: 20 }]))

