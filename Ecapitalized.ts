//Buat kata = "hello world" menjadi "Hello World"

const kata: string = "hello world"

let rez: string = ""

// for(let i=0; i< kata.length; i++) {
//     if(i==0 || kata.charAt(i-1) == " ") {
//         rez += kata.charAt(i).toUpperCase()
//     } else { 
//         rez += kata.charAt(i).toLowerCase()
//     }
// }

// console.log(rez)

let isCapital: boolean = true

for(let i=0; i< kata.length; i++) {
    if(isCapital) {
        rez += kata.charAt(i).toUpperCase()
        isCapital = false
    } else { 
        rez += kata.charAt(i).toLowerCase()
    }

    if (kata.charAt(i) == " "){
        isCapital = true
    }
}

console.log(rez)