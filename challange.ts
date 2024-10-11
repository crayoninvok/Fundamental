/* a=1
    b=2
    c=3
    ...
    z=26

    input = "Abcd"
    output = 1 + 2 + 3 + 4
*/

// function tambah(huruf: string, angka: number): number {
//    for(let i=0; i<huruf.length; i++){
//     if
//    }

// }

// function Alphabet (letter: string):number{
//     if(letter === "a" || "A") return 1 {
//         else if(letter === "b" || "B") return 2 {
//             else
//         }
//     }
// }

// function Alphabet(input: string): number {
//     let total = 0;

//     for (let i = 0; i < input.length; i++) {
//         const huruf = huruf[i];

       
    
//     }
// ==========================================================================================================================================
// const myMap = new Map()

// myMap.set("a", 1)
// myMap.set("b", 2)
// myMap.set("c", 3)
// myMap.set("d", 4)
// myMap.set("e", 5)
// myMap.set("f", 6)
// myMap.set("g", 7)
// myMap.set("h", 8)
// myMap.set("i", 9)
// myMap.set("j", 10)
// myMap.set("k", 11)
// myMap.set("l", 12)
// myMap.set("m", 13)
// myMap.set("n", 14)
// myMap.set("o", 15)
// myMap.set("p", 16)
// myMap.set("q", 17)
// myMap.set("r", 18)
// myMap.set("s", 19)
// myMap.set("t", 20)
// myMap.set("u", 21)
// myMap.set("v", 22)
// myMap.set("w", 23)
// myMap.set("x", 24)
// myMap.set("y", 25)
// myMap.set("z", 26)
// myMap.set("?",0)
// myMap.set("@",0)
// myMap.set("!",0)
// myMap.set("#",0)
// myMap.set("$",0)

// function add(kata: string): number{
//     kata = kata.toLowerCase()
//     let hasil = 0
//     for(let i = 0; i <= kata.length; i++){
//         if(myMap.get(kata[i])){
//             hasil += myMap.get(kata[i])
//         }
//     }
//    return hasil
// }

// const input = "JAKARTA"

// console.log(add(input));


function myFunct(str: string){
    const alphaBet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")

    return str.split("")
    .map(item => alphaBet.indexOf(item.toLowerCase()))
    .reduce((a,b) => a + b)
}



console.log(myFunct("Purwadhika"));
