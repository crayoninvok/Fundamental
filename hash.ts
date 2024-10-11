// Map adalah dengan tipe data bebas ada key dan value campuran data dengan set bila ada yang sama akan terhapus


const myMap = new Map()

myMap.set("Dzaky", "001")
myMap.set("Jaki", "001")
myMap.set(true, "004")

console.log(myMap)
console.log(myMap.get("Dzaky"))

console.log(myMap.size);

