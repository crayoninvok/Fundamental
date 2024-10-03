const kataOri = 'An apple a day keeps the doctor away';
let kataUbah = '';


for (const char of kataOri) {

    if (char.toLowerCase() === 'a') {
        kataUbah += '*'; 
    } else {
        kataUbah += char; 
    }
}

console.log(kataUbah);
