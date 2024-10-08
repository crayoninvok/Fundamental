// //1.
    
// function minMax (arr:number[]){

//     const lowest: number = Math.min(...arr)
//     const highest: number = Math.max(...arr)
//     const average: number = arr.reduce((a,b) => a+b) / arr.length
    
//     return{
//         lowest:lowest,
//         highest:highest,
//         average:average
//     }
// }

// console.log(minMax([12,5,23,18,4,45,32]))


//2.

// function StrArr (arr:string[]): string{
//     const lastWord = arr.pop;
//     return arr.join(",") + ', and' + lastWord;
  
// }
 
// let buah:string[]=["apple", "banana", "cherry"," date"]
// let buatString:string = StrArr (buah)

// console.log(StrArr,buatString)


// // //3.
// function secSmall (arr:number[]){
//     arr.sort((a,b) => a-b)           // function sorting
//     const newArr = arr.filter((item) => arr[0])
//     return  newArr[0]
// }

// console.log(secSmall([5,3,1,7,2,6,1,1,1]))



// 4. Menambahkan [1,2,3] + [3,2,1]

// function plus (arr1:number[], arr2:number[]){
//     for(let i=0; i<arr1.length; i++){
//         return (
//     }
    
// }

// const arr1 : number [] = [1,2,3]
// const arr2 : number [] = [3,2,1]

// console.log(arr1,arr2)

// 5.

// function elmenTambahan (arr:number[], elmenBaru:number): number[]{
//     if(arr.includes(elmenBaru) ==  false) {
//         arr.push(elmenBaru)
//     }
//     return arr
// }

// let arr = [1,2,3,4]
// console.log(elmenTambahan(arr,1))
// console.log(elmenTambahan(arr,7))


// Contoh Tambahan

// Input = "Pig latin is cool"  
// Output = "igPay atinLay oolCay"                  setiap huruf pertama dipindahkan kebelakang ditambahkan ay

// var kata : string = "Pig latin is cool"
// let kataArray : string[] = kata.split(" ")

// function myFunc (input:string){
//     return input .split(` `) .map((item) => item.slice(1) + item.charAt(0) + "ay") .join(" ")
// }

// console.log(myFunc("Pig latin is cool"))


// function KataPertama(arr1:string[], array2:string[], array3:string[], array4:string[]){

// }




