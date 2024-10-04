//Cara Array 03

const numArr: number[] = [9, 13, 500, 30, 25, 55, 36]
const oddNumber : number[] = numArr.filter((item) => item %2 === 1) .sort((a,b) => a-b)  // untuk memfilter contoh disebelah menentukan odd Number .filter ; 
                                                                                                    //  dimodifikasi dengan item yang dibawah 9 tidak akan masuk output
                                                                                                    //  dan juga disortir .sort agar item dapat mengurut dari terkecil

console.log(oddNumber)
