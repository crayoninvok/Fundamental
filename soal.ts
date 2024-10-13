/* Input = Indonesia dengan Bahrain sedang bermain bola namun yang menang sudah pasti bahrain
 Output = Bahrain lah yang akan menang*/

// function logicWasit(scoreIndonesia: number, scoreBahrain:number, totalTime:number): string {

//     totalTime =+ 90 + 6

//     if( scoreIndonesia < scoreBahrain){
//          return`Prit, Match Usai Indonesia vs Bahrain, Bahrain menang dengan Skor: ${scoreIndonesia} - ${scoreBahrain} on Totaltime ${totalTime += 3}`
//     } else if ( scoreIndonesia > scoreBahrain){ 
//          return`Prit, Match Usai Indonesia vs Bahrain, Indonesia menang dengan Skor: ${scoreIndonesia} - ${scoreBahrain} on Totaltime ${totalTime}`
//     }else {
//          return `Prit ,Match Usai Indonesia vs Bahrain dengan Skor: ${scoreIndonesia} - ${scoreBahrain} imbang dengan menit akhir ${totalTime += 3}`
//     }

// }

// const scoreIndonesia = 3
// const scoreBahrain = 1

// const res = (logicWasit(scoreIndonesia, scoreBahrain, 90 ))

// console.log(res);

    

// 

 function logicWasit(scoreIndonesia: number, scoreBahrain:number): string {

     var totalTime:number = 90 + 6
 
     if( scoreIndonesia < scoreBahrain){
          return`Prit, Match Usai Indonesia vs Bahrain, Bahrain menang dengan Skor: ${scoreIndonesia} - ${scoreBahrain} on Totaltime ${totalTime += 3}`
     } else if ( scoreIndonesia > scoreBahrain){ 
          return`Prit, Match Usai Indonesia vs Bahrain, Indonesia menang dengan Skor: ${scoreIndonesia} - ${scoreBahrain} on Totaltime ${totalTime}`
     }else  {
          return `Prit ,Match Usai Indonesia vs Bahrain dengan Skor: ${scoreIndonesia} - ${scoreBahrain} imbang dengan menit akhir ${totalTime += 3}`
     }
 
 }
 
 const scoreIndonesia = 2
 const scoreBahrain = 2
 
 const res = (logicWasit(scoreIndonesia, scoreBahrain))     
 
 console.log(res);                      
 

 /* Apakah output dari function yang ada di atas ?  

 A. "Prit ,Match Usai Indonesia vs Bahrain dengan Skor: 2 - 2 imbang dengan menit akhir 99"
 B. Syntax Error
 C. 2 2 96
 D. Semua jawaban salah

 Jawaban = B.Syntax Error, karena void tidak mengembalikan value apapun, jika ingin tidak error ganti return dengan string.

     */
 
 



