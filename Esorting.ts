let num11 = 42;
let num22 = 27;
let num33 = 18;

if (num11 > num22) {
    const n: number = num11
    num11 = num22
}
if(num22 > num33){
    const n: number = num22
    num22 = num33
}
if (num11 > num22) {
    const n: number = num11
    num11 = num22
}

console.log(num11, num22, num33)