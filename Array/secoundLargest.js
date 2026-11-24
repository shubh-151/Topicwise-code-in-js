

function secoundLargest(arr) {
    if (arr.length < 2) {
        return null
    }
    let firstLarge = -Infinity
    let secounLarge = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLarge) {
            secounLarge = firstLarge
            firstLarge = arr[i]
        }
        else if (secounLarge < arr[i] && arr[i] != firstLarge) {
            secounLarge = arr[i]
        }
    }
    // return(firstLarge)
    return (secounLarge)
}

var arr = [9, 10, 56, 56]
// let arr = []
// let arr = [-22, -77, -5, -11]

let result = secoundLargest(arr)
console.log(result)



//  corner cases 

//  --> what if array is empty
//  --> Array has negative numbers 
//  --> Array has dublicate
