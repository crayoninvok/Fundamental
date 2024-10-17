// const tryPromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         const succes = true
//         if(succes){
//             resolve(`Task 2 Succes`)
//         } else {
//             reject(`Task 2 Error`)
//         }
//     },3000)
// })

// const myFunc = async () => {
//     console.log(`Task 1 Succes`)
    
//    await tryPromise
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
//         .finally(() => console.log(`finally done`))

//  console.log(`Task 3 Succes`);
 
// }

// myFunc()

// const tryCatch = async() => {
//     try {
//         console.log(`Task 1 Succes`)
//         const res = await tryPromise
//         console.log(res)
//         console.log(`Task 3 Succes`)
        
//     } catch (err){
//         console.log(err);
        
//     }
// }

// // tryCatch()

// const getData = async () => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         if (!response.ok) throw `failed to fetch`
//         const users = await response.json()
//         console.log(users);
//     } catch (err){
//         console.log(err);
        
//     }
// }

// getData()




    
    