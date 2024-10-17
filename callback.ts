//contoh pertama

// function calculator (a:number, b:number){
//     return a+b
// }

// function displayer(something: any){
//     console.log(something);
    
// }

// const res = calculator (5,10)

// displayer(res)  //=============================== Membuat console log dalam function bisa langsung keluar output jika dipanggil


// contoh kedua

// function calculator (a:number, b:number){
//     displayer(a+b)
// }

// function displayer(something: any){
//     console.log(something);
    
// }

// calculator(5,10)


// function calculator (a:number , b:number, callback:(x:any) => void = displayer){ //=================Callback function adl sebuah function yang dikirim sebagai argumen ke function lain callbacknya adalah multiplier dan
//     callback(a + b)                                                              // displayer
// }

// function displayer (something:any){
//     console.log(something);
    
// }

// function multiplier2(num: number){
//     console.log(num *2);
    
// }

// calculator(10,5,multiplier2)