function largestNumber(arr){
    let largest = -Infinity
    for(let i=0; i<arr.length; i++){
        if (arr[i]>largest)
            largest = arr[i]
    }
    return largest
}

let arr  = [7,8,9,-2,-6,-178,35]

let result = largestNumber(arr)
console.log(result)