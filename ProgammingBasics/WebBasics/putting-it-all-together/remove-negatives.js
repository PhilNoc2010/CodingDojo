// Debug the following code that removes negative values from an array

// var keyword is not required with function arguments
function removeNegatives(arr) {
    for(var i=0; i<=arr.length; i++) {
        //changed =< to <=
        if(arr[i] <= 0) {
            //corrected index variable
            //arr[i] = arr.pop();
            //the splice method will remove items within an array.
            arr.splice(i,1)
            //i--;  This is not required, since iteration will be handled by the for loop
        }
    }
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);