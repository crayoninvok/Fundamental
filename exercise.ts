//1. Example 1 segitiga angka 1-5 segitiga siku siku

    // function triangle(height: number){
    //         for(let i = 1; i<= height; i++){        //i naik dari 1  2  3  4  5 sampai height/5
    //             let res: string = ""
    //             for(let j = 1; j <= i; j++){
    //                 res += `${j} `
    //             }
    //             console.log(res)
    //         }
                
    // }

    // triangle(5)

//2.Example 2 memakai return

// function triangle(height: number){
//     for(let i = 1; i<= height; i++){        //i naik dari 1  2  3  4  5 sampai height/5
//         let res: string = ""
//         for(let j = 1; j <= i; j++){
//             res += `${j} `
//         }
//         if (i !== height) res += '\n'
//         result += res
//     }
     
//     return Result
// }

// console.log(triangle(5))


//3. Exercise 3 Fizz Buzz

// function loopTimes(n:number) {
//     let res:string = '';
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             res += 'FizzBuff '
//         }else if (i % 3 === 0) {
//             res += 'Fizz '
//         }else if (i % 5 === 0) {
//             res += 'Buzz '
//         }else{
//             res += `${i} `
//         }
//     }
//     console.log(res);
// }
// loopTimes(16)


    // Contoh lain
    // function FizzBuzz(n:number){
    //     const res: (string | number)[]=[]
    //     for (let i = 1; i <= n; i++){
    //         if (i % 3 === 0 && i % 5 === 0){
    //             res.push("FizzBuzz")
    //         } else if ( i % 3 == 0){
    //             res.push("Fizz")
    //         } else if (i % 5 == 0){
    //             res.pusg("Buzz")
    //         } else {

    //         }
    //     }
    // }


//4. Exercise 2 Triangle angka

// function triangle (height:number){
//     let result: string = ""
//     let counter: number = 0
//     for(let i =1; i<=height; i++){
//         let res:string = ""
//         for(let j=1; j<=i; j++){
//             counter++
//             if(counter < 10){
//                 res+= `0${counter}`
//             }else{
//                 res += `${counter}`
//             }
//         }
//         if (i !== height) res+= `\n`
//         result += res
//     }
// return result
// }

// console.log(triangle(4))


// 5. Exercise 4 Array menghilangkan angka tetapi hanya menggunakan ganjinl genap

// function Event (arr:number[]){
//     return arr.filter((item) => item 2% == 0)
// }
// console.log (Eventt(1,2,3,4,5,6,7,8,))


// const numArr:number[] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const Genap: number[] = numArr.filter((item) => item %2 === 0) .sort((a,b) => a-b)

// console.log(Genap)


// //6. Exercise 6 Mengubah string menjadi kata Array memakai function split

// function split (str:string){
//     return str.split(" ")
// }
// console.log(split("Hello World"))

//6. Exercise 3 Body Mass Index 

// function canculateBMI (weight: number, height: number){
//     const score:number = weight / (height / 100 **2)
//         if(score < 18.5) {
//             return "less weight"
//         } else if(score < 24.9){
//             return "Ideal"
//         } else if (score < 29.9){
//             return "Overweight"
//         } else if (score < 39.9){
//             return "Very overweight"
//         } else{
//             return "Obesity"
//         }
// }

// console.log(canculateBMI(30,120))