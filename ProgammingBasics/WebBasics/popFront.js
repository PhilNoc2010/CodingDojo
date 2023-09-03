function popFront(arr){
    var frontValue = arr[0]
    for (var i = 0; i < arr.length;i++){
        //console.log(`first value is ${arr[i]}, second is ${arr[i+1]}`)
        arr[i] = arr[i+1]
    }

    return arr.pop()
}

console.log(`array front value is ${popFront([42,56,89,12])}`)
console.log(`remaining array is ${arr}`)