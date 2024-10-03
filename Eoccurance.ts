// string = "Hello World" ; Pencarian string = "ell" menjadi "Ho world"

const words: string = "Hello world"
const searchW: string = "ell"
const ress:string = words.replace(searchW,"")

console.log(ress)