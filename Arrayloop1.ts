

const newArr:number[] =[10,20,30,40,50,60,70]
const newArr2:number[] = newArr.map((item) => item += 5)        //Untuk looping cara -2 untuk mendapatkan index for.Each
const newArr3:number[]=[]

newArr.forEach((item)=>{
    newArr3.push(item + 5)
})

console.log(newArr2)
console.log(newArr3);


// newArr.forEach((item, index)=> {                // Cara 1 untuk looping di array .forEach // Bisa juga menambahkan index dengan menaruh ,index setelah item
//     console.log(item, index);
    
// })

// newArr.map((item, index)=> {                // Cara 2 untuk looping di array .map // Bisa juga menambahkan index dengan menaruh ,index setelah item
//     console.log(item, index);
    
// })