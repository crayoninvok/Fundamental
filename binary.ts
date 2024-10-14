function binarySearch(arr:number[],r:number,l:number,x:number){
    if(r >= l){

        let mid = l + Math.floor((r-l) /2)
        
        if(arr[mid] == x)
            return mid

        if(arr[mid] > x){
            return binarySearch(arr, l, mid - l, x)
        }

        return binarySearch(arr, mid + l , r, x)
    }

    return -1
}

let arr = [2,3,4,10,40]
let x = 40

console.log(binarySearch(arr,0,arr.length-1,x));

