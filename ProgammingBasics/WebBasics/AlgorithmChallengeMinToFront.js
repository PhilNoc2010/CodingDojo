//var arr = [45,56,8,93,23]


function minToFront(arr){
    var minValue = 255
    var minValueIndex = 0

    //Find the smallest value in the array
    for (var i = 0; i < arr.length;i++){
        if (arr[i] < minValue){
            minValue = arr[i]
            minValueIndex = i
        }
    }

    //console.log (`Min Value is ${minValue} at index ${minValueIndex}`)

    //shift values to the left of the smallest value one position to the right

    for (var j = minValueIndex;j>0;j--){
        arr[j] = arr[j-1]
    }
    arr[0] = minValue

    return arr
}

output = minToFront([45,56,8,93,23])

console.log (`Final array is ${output}`)