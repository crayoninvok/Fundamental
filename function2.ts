//1. Nested function / Function yang didalamnya ada function lain

function getMassage (firstName:string){
    function sayHello () {
        return "Hello " + firstName
    }


    function welcomeMassage(){
        return "Welcome to Purwadhika"
    }

    return sayHello () + " " + welcomeMassage()

}

// console.log(getMassage("DAVID"))


//2. Closure function / Function untuk me return function 

function greeting (name:string){
    const defaultmassage: string = "Hello "
    return function(){
    return defaultmassage + name
    }

}

// const greetingDavid = greeting("David")
// console.log(greetingDavid())


// Currying

function multiplier (factor:number){
    return function (num:number){
        return factor * num
    }
}

const mul3 = multiplier(3)           // sistem dengan cara kerja f(a,b,c) = f(a)f(b)f(c)
const mul4 = multiplier(5)

// console.log(mul3(5))
// console.log(mul4(4))
// console.log(mul3(2))


//3.Recursive adlaah function yang membuat pemanggilan dili sendiri

function countDown (fromNumber: number){                // console log ditaruh di atas untuk menjalankan
    // console.log (fromNumber)                            // mengcoundown angka dari 10 output console log hingga sampai diatas (>) 0 /1

    let nextNumber: number = fromNumber - 1
    if(nextNumber > 0){
        countDown(nextNumber)
    }
}

countDown(10)

//4. Arrow Function function untuk memudah kan membuat function

const square = (a:number, b:number) => a*b
console.log(square(4,2))

// Perbedaan arrow function dengan function biasa adalah ada limitation fitur

//5. Predefined function