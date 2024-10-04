/* Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’ */

const ori = 'The QuiCk BrOwN Fox'
let swap:string = ''

for (let i=0; i<=ori.length; i++) {
   
    if (ori.charAt(i) === ori.charAt(i).toUpperCase()) {
        swap += ori.charAt(i).toLowerCase()
    } else {
        swap += ori.charAt(i).toLowerCase() 
    }
}

console.log(swap)