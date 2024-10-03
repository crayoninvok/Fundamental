/* Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’ */

const ori = 'The QuiCk BrOwN Fox';
let swap = '';

for (const char of ori) {
   
    if (char === char.toUpperCase()) {
        swap += char.toLowerCase(); 
    } else {
        swap += char.toUpperCase(); 
    }
}

console.log(swap);
