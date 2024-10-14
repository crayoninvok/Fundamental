/* 
    input = "helloWorld"
    output = ["hello", World]

    input = "johnDoeMiller"
    output = ["john", "Doe", "Miller"]
*/

// function upperSplit(kata:string): string[]{
//     let res:string[] = []
//     let Word: string = ""

//     for(let i = 0; i< kata.length; i++){
//         if(kata[i] === kata[i].toUpperCase()){
//            res.push(Word)
            
//         } 
//             Word += kata[i]
        
//     }
//     res.push(Word)

// return res
// }

// console.log(upperSplit("johnDoeMiller"))


// function bar(str: string):string[] {
//     return str                                          //Buat retrun output dari str
//     .split("")                                          // Split agar kata menjadi array
//     .map((i) => i.replace(/[A-Z]/, ` ${i}`))            // Map buat array baru dengan looping map(replace kata jika ada Huruf kapital dengan spasi )
//     .join("")                                           // Join adalah gabungkan kata array menjadi string kembali agar dapat spasi didepan
//     .trim()                                             // Trim adalah untuk memberi spasi didepan/dibelakang 
//     .split(" ")                                         // Lalu buat kembali kata menjadi Array

// }                                                       // Finish
// const str: string = "helloWorld";                   
// const strRes: string = "johnDoeMiller";

// console.log(bar(strRes));

