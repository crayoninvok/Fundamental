/* Data yang tidak boleh ada yang duplicate ketika ada yang sama akan dihilangkan*/

const fruit:string[] = ["banana", "apple", "jackfruit", "apple"]

const newFruits = new Set(fruit)

newFruits.forEach ((item) => {                                              // Untuk melooping
    console.log(item);
    
})

console.log(newFruits);


const newNum = new Set([1,2,3,4])                           //Bisa untuk angka juga
