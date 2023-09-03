//Decide the reward for finishing up my homework
//first, we'll decide based on the time
var timeOfDay = 6
var isMorning = false
var dayofWeek = "Friday"

if (isMorning == false){
    timeOfDay = timeOfDay + 12
} // if this is the afternoon, convert the provided time to military time


if(timeOfDay <= 10){
    console.log ("time for a latte")
}
else if (timeOfDay > 10 && timeOfDay <= 15){
    console.log ("A Hot Chocolate would be great")
}

/*
else if (timeOfDay > 15 && timeOfDay <=18){
    if (timeOfDay % 2 == 0){
        console.log ("I choose ice Cream since the time is even")
    }
    else {
        console.log ("I choose hot chocolate since the time is odd")
    }
}
*/

else if (timeOfDay > 15 && timeOfDay <=18){
    if (timeOfDay % 2 == 0){
        var evenSnacks = ["ice cream","cookies","candy"]
        var evenSnack = evenSnacks[Math.floor(Math.random() * evenSnacks.length)]
        console.log (`I feel like having ${evenSnack} right now`)
    }
    else {
        var oddSnacks = ["hot chocolate","tea","cake"]
        var oddSnack = oddSnacks[Math.floor(Math.random() * oddSnacks.length)]
        console.log (`I feel like having ${oddSnack} right now`)
    }
}


else if (timeOfDay > 18 && timeOfDay < 22){
    if (dayofWeek == "Wednesday"){
        console.log ("Strawberry Ice Cream sounds delightful")
    }
    else {
        console.log ("Vanilla ice cream for Today")
    }
}
else if (timeOfDay > 22){
    console.log ("Sleep is where I'm a Viking")
}
