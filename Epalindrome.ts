const PAL: string = "kasur rusak" 

    let reverseCheck: string =""

 for(let i = PAL.length -1; i>= 0; i--){
    reverseCheck += PAL[i]
 }

  // console.log(PAL == reverseCheck ? "Palindrome" : "Not Palindrome");
    //console.log(reverseCheck) 

    if(reverseCheck.toUpperCase() === PAL.toUpperCase()) {
      console.log(`${PAL} is a Palindrome`)
    }
      else {
         console.log (`${PAL} is not a Palindrome`)
      }
    
