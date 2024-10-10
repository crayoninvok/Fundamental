//1. Buat str = "Purwadhika Bandung"
    // n=10

// function endWithDot(str:string, num:number):string{
//     let hasil = ""
//     if(str.length > num){
//         hasil = str.slice(0,num) + "..."
//     } else {
//        hasil = str
//     }
//  return hasil
// }
// console.log(endWithDot("Purwadhika Bandung",10))

//1. Buat str = "Purwadhika Bandung"
    // n=15

// function endWithDot2(str:string, num:number):string{
//     let hasil = ""
//     if(str.length > num){
//         hasil = str.slice(0,num) + "..."
    
//     }else{
//         hasil = str
//     }
//         return hasil
//     }

//     console.log(endWithDot2("Purwadhika Bandung",15));
    

// input = "123456789"
//output = "(123)-456-789"



// function noTelpon(num:string){

//     let res = `(${num.slice(0,3)})`
//     for(let i = 3; i< num.length; i++){
//         if(i %3 === 0){
//             res += "-"
//         }
//         res += num[i]
//     }

//     return res

// }

// const num = "+62812394873"
// const res = (noTelpon(num))
// console.log(res)


/* Huruf vokal
inp = "Purwadhika"
out = 4 */

// function vokal(kata:string, out:number){
//     let word = kata.toLocaleLowerCase()
//     let hasil = 0
//     for (let i = 0; i < kata.length; i++) {
//         if(word[i] == "a" || word[i] == "i" || word[i] == "u" || word[i] == "e" || word[i] == "o"){
//             out ++
//         }
//     }
//     return hasil
// }

// function vokal(kata:string,){
//     const vokal = ['a', 'i', 'u', 'e','o']
//     let res: number = 0

//     for (let i = 0; i < kata.length; i++){
//         if(vokal.includes(kata.charAt(i))){
//             res++
//         }
//     }
//     return res
// }

// console.log(vokal("Purwadhika"));

// class Product {
//   productName = "";
//   productPrice = 0;

//   constructor(name: string, price: number) {
//     this.productName = name;
//     this.productPrice = price;
//   }
//   getName() {
//     return this.productName;
//   }
//   getPrice() {
//     return this.productPrice;
//   }
// }

// class Transaction extends Product {
//   qty = 0;
//   constructor(name: string, price: number, num: number) {
//     super(name, price);
//     this.qty = num;
//   }
//   getQty() {
//     return this.qty;
//   }
//   getTotalPrice() {
//     return this.productPrice * this.qty;
//   }
// }

// let cart: Array<Transaction> = [];

// function addToCart(item: Transaction) {
//   cart.push(item);
//   console.log(`${item.getName()} added to cart. Quantity: ${item.getQty()}`);
// }

// function showTotal(cart: Array<Transaction>) {
//   let total: number = 0;
//   for (let item of cart) {
//     total += item.getTotalPrice();
//   }
//   return total;
// }

// function transactionInfo(cart: Array<Transaction>) {
//   console.log("\n");
//   console.log("======================================================");
//   console.log(`You have made ${cart.length} successful transactions`);
//   console.log(`You purchased : `);
//   let total: number = 0;
//   for (let item of cart) {
//     total += item.getTotalPrice();
//     if (item.getQty() <= 1) {
//       console.log(`${item.getQty()} ${item.getName()} for ${Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.getTotalPrice())}`);
//     } else {
//       console.log(`${item.getQty()} ${item.getName()}s for ${Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.getTotalPrice())}`);
//     }
//   }
//   console.log("======================================================");
//   console.log(`== Your total transaction is ${Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(showTotal(cart))} ==`);
//   console.log("======================================================");
// }

// const product1 = new Product("Laptop", 5000000);
// const product2 = new Product("Bycicles", 2500000);
// const product3 = new Product("Tv", 6000000);
// const product4 = new Product("Smartphone", 10000000);

// const transaction1 = new Transaction(product1.getName(), product1.getPrice(), 2);
// const transaction2 = new Transaction(product2.getName(), product2.getPrice(), 3);
// const transaction3 = new Transaction(product3.getName(), product3.getPrice(), 6);
// const transaction4 = new Transaction(product4.getName(), product4.getPrice(), 1);

// addToCart(transaction1);
// addToCart(transaction2);
// addToCart(transaction3);
// addToCart(transaction4);

// transactionInfo(cart);

//=======================================================================================================================================


// class Product{                                                           // Untuk membuat produk nya apa saja yang akan dimasukan
//     name:string = ""
//     price:number = 0

//     constructor(nama:string, harga:number){                                         
//         this.name = nama
//         this.price = harga
//     }
// }

// const product1 = new Product("Apple", 20000)
// const product2 = new Product("Apple", 30000)
// const product3 = new Product("Apple", 50000)



// class Transaction{
//     #total:number = 0
//     #products: object[] = []

//     addtoCart(product: Product, qty: number){
//         this.#products.push({...product, qty, total: product.price * qty})

//         this.#total += product.price * qty

//     }
    
//     show(){

//         this.#products.push({total: this.#total})

//         console.table(this.#products)
//         // console.table(this.#products)
//         // console.log(`Total Belanja: ${this.#total}`);
        

//     }

//     chechout(money: number){
//         if(money < this.#total){
//             throw new Error("Uang anda tidak mencukupi")
//         }else{
//             console.log(`Cash: ${money}`)
//             console.log(`Return: ${money - this.#total}`)
//             console.log(`Terimakasih!!`)
//         }
//     }

// }

// const transaction1 = new Transaction()
// transaction1.addtoCart(product1,2)
// transaction1.addtoCart(product2,1)
// transaction1.addtoCart(product3,1)

// transaction1.show()
// transaction1.chechout(250000)




// function toLowerCase(s: string): string {
//     return s.toLowerCase()
// };

function plusOne(digits: number[]): number[] {
    for (let i = 0 - 1; i < 0; i++) {
        let sum = digits[i] + 1;
    }
    return []
}

console.log(plusOne([1,2,3]));
