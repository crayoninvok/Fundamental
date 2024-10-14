/* 
    input = "Hello World"
    output = [13, 2]

    input = "B4ndung"
    output = [5, 1] */


    // function typeInCount(str: string):number[]{
    //     let res = [0,0]
    //     for(let i = 0; i<str.length; i++){
    //        const char = str[i]
           
    //        if(char >= 'a' && char <= `z`){
    //         res[0]++
    //        } else if (char >= `A` && char <= `Z`) {
    //         res[1]++
    //        }
    //     }


    //     return res
    // }

    // const result1 = typeInCount("Hello Purwadhika") // ====================> output [13,2]
    // const result2 = typeInCount("B4ndung")          // ====================> output [5,1]

    // console.log(result1);
    // console.log(result2);


    // function typeInCount(str: string): number[] {
    //     let res = [0, 0]                                                   // Masukan variabel penampung kosong
    
    //     for (let i = 0; i < str.length; i++) {                             // Buat looping untuk mengecek tiap indeks
    //         const char = str[i]                                           // Buat variabel penampung untuk indeks string
    
           
    //         if (char === char.toLowerCase() && char !== ' ') {             // Perumpamaan Jika ditemukan huruf kecil maka akan ditambahkan ke variabel koson indeks ke 0
    //             res[0]++                                                  // Ini untuk menambahkan nya ke indeks 0 = [0]++
    //         } 
     
    //         else if (char === char.toUpperCase() && char !== ' ') {       // Perumpamaan Jika ditemukan huruf kapital maka akan ditambahkan ke variabel koson indeks ke 0       
    //             res[1]++                                                   // Ini untuk menambahkan nya ke indeks 1 = [1]++
    //         }
    //     }
    
    //     return res
    // }
    //   const result1 = typeInCount("Hello Purwadhika")     // Output: [13, 2]
    // const result2 = typeInCount("B4ndung")               // Output: [5, 1]
    
    // console.log(result1)
    // console.log(result2)

    function myFunc(str:string){
        const letter =  str.replace(/[\s/0-9]/g, "")
        const lower = letter.replace(/[\s/A-Z]/g, "")

        return [lower.length, letter.length - lower.length]
    }

    const result1 = myFunc("Hello Purwadhika")     // Output: [13, 2]
    const result2 = myFunc("B4ndung")               // Output: [5, 1]
    
    console.log(result1)
     console.log(result2)




    

