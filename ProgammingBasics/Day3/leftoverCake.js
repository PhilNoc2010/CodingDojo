function howMuchLeftoverCake (numberOfPieces, numberOfPeople){
    //This function will assume that each person will eat one piece of cake
    var leftovers = numberOfPieces - numberOfPeople

    console.log(`there will be ${leftovers} pieces of cake left.`)

    if (leftovers >= 5){
        return("Hold Another Party!")
    }
    else if (leftovers >= 3) {
        return("You have leftovers to share")
    }
    else if (leftovers == 2 || leftovers == 1){
        return ("You have some Leftovers")
    }
    else {
        return ("No Leftovers for you!")
    }
}

console.log(howMuchLeftoverCake(12,6))

console.log(howMuchLeftoverCake(12,8))

console.log(howMuchLeftoverCake(12,11))

console.log(howMuchLeftoverCake(12,12))