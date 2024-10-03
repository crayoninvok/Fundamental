const X: number = 5

let Y: number = 0

let desc:string = ""
for( let i=1; i <= X; i++){
    Y += i
    if (i == 1) {
        desc += "1"
    } else {
        desc += ` +%{i}`
    }
}
    console.log(Y)
    console.log(` ${desc} = ${Y}`)



