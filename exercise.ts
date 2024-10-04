//1. Example 1 segitiga angka 1-5 segitiga siku siku

    function triangle(height: number){
            for(let i = 1; i<= height; i++){        //i naik dari 1  2  3  4  5 sampai height/5
                let res: string = ""
                for(let j = 1; j <= i; j++){
                    res += `${j} `
                }
                console.log(res)
            }
                
    }

    triangle(5)

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
