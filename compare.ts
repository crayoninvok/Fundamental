// const arr = [1, 2, 3]
// const arr2 = [1, 2, 3]

// console.log(arr == arr2)            //output = false karena setiap objek tidak bisa dibandingkan harus menggunakan ... atau copy jika ingin disamakan dengan refrensi yang sama / harus =arr
// console.log(typeof arr)
                                
// const obj1 = {name: "Andi"}         // sama juga tidak bisa dibandingkan
// const obj2 = {name: "Andi"}

// console.log(obj1 == obj2)

// objek yang non primitif bisa dibandingkan untuk null bisa dibandingkan

//======================================================================================================================================================

//Merged Object

// const target = {a:1, b:2}
// const source = {b:4, c:5}
// const final = Object.assign(target, source)

// Object.assign(target, {d:10})

// console.log(target)
// console.log(final)
// console.log(final == target)

// const n = [1,2,3]
// n[2] = 10
// n[4] = 5
// n[20] = 20                      // index ke 20 adalah 20

// console.log(n.length)           // panjang index = index + 1 out = 21
// console.log(n)


// const num: any = {a: 1, b:2 ,c:3}

// num["d"] = 4

// console.log(num["d"])
