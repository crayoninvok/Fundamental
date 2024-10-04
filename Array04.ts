const numArr: number[] = [9, 13, 500, 30, 25, 55, 36]
const oddNumber : number[] = numArr.filter((item) => item %2 === 1) .sort((a,b) => a-b)

console.log(oddNumber.find((item)=> item == 13)) // untuk mencari dalam array
console.log(oddNumber.findIndex((item)=> item == 9)) // untuk mencari dalam array dengan output index ke berapa
console.log(oddNumber.includes(9)) // untuk mencari dalam array dengan output true or false

console.log(oddNumber)