const Rupiah: number = 1000

let numRupiah: string = Rupiah.toString()
let count: number = 0

let res: string = ""

for(let i = numRupiah.length - 1 ; i>=0; i--){
    if(count % 3 == 0 && count > 0) {
        res = "." + res
}

res=numRupiah.charAt(i) + res
count++
}
console.log(`Rp ${res},00`)

//console.log(Rupiah.toLocaleString("id-ID", {style: 'currency', currency: 'IDR'})) // Rp.1000,00 - for const Rupiah
