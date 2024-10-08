//Inharitance menggabungkan 2 class dengan method extends

class Product{                                                                 // Parent dari method
    productName = ""
    productPrice = 0

    constructor(name:string, price:number){
        this.productName = name
        this.productPrice = price
    }
}

class Book extends Product{                                                     // extend untuk membungkus dari Product
    title = ""
    author = ""
    constructor(title:string, author:string, price:number){
        super("Buku",price )                                                    // super yang akan mengextend dari Parent = Product
        this.title = title
        this.author = author                                                    
    }
}

const book1 = new Book("Harry Potter", "JK.Rowling", 150000)

console.log(book1)
console.log(book1 instanceof Book)                                                  // untuk mengecek bagian apakah book 1 adalah bagian dari method Book
console.log(book1 instanceof Product)                                              // untuk mengecek bagian apakah book 1 adalah bagian dari method Product
