const no: number = 15

let o: number = 0
let p: number = 1

for (let i=1; i < n; i++) {
    let nextNumber = o + p
    o = p
    p = nextNumber
}

console.log(p)