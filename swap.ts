/* Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’ */

let swp: string = "The QuiCk BrOwN Fox"
let Capswp: string = " "

for(let i = 0; i<swp.length; i++){
    if(Capswp === swp.toUpperCase())
        Capswp += swp.toLowerCase()
} else {
        Capswp += swp.toUpperCase()
}

console.log(Capswp)
