//Bintang tangga kanan

const stairKn: number = 5;                  

for (let i = 1; i <= stairKn; i++) {
    const spaces = ' '.repeat(stairKn - i);
    const stairs = '*'.repeat(i);           
    console.log(spaces + stairs);}