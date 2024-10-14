/* 
    input = [1, 2, 3, 4, 5, 6]
    output = [6, 1, 5, 2, 4, 3]


    input = [11, 21, 22, 5, 30, 4]
    output = [30, 5, 22, 11, 21, 14]
    */
let array = [1,2,3,4,5,6]

    function BS(arr:number[]): number[]{

         arr.sort((a,b) => a-b)                                 // Jika mau sort langsung saja tulis arr.sort
   
        let res: number[] = []                                  // Buat variabel penampung
        
        for(let i = 0; i < arr.length/2; i++){                  // Buat loopingan untuk mengetahui index i dan agar cepat langsung mulai dari tengah maka dibagi 2
            res.push(arr[arr.length -1 -i])                     // Push nilai lenght agar ditaruh didepan[6,...,5,...,3]
            res.push(arr[i])                                    // Push nilai index setelah index yang diatas
        }
        return res
        }
     
    

    console.log(BS([1,2,3,4,5,6])); // ===================================> out (6,1,5,2,4,3)
    