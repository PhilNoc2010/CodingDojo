/* A local fitness coach and a mechanical engineer are building an IoT device that
pops out a piece of candy every time a runner reaches 2 miles on a treadmill
but stops giving candy out at mile 6.
You're tasked with building the loop functionality to know when to give a piece of candy and when to stop.
*/

for (var i = 0; i <= 6; i += 2){
    // Every two miles, provide motivational candy for the runner
    // the loop will increment by two each time it runs
    if (i > 0){
        //no candy is provided at the start of the run.
        //this condition check ensures no candy is provided until after two miles have been run
        console.log (i, "Miles ran, so here's a piece of candy")
    }
    else {
        console.log( "Have a good run today")
    }
}
//The loop stops after 6 miles, because no additional candy will be issued beyond that distance
console.log("Thank you for running", i, "miles, but no additional candy is available.")

//another version of the loop, this time incrementing every one mile.  The tracking will start after 1 mile has been completed
for (var j = 1; j <= 6; j++){
    if (j % 2 == 0){
        console.log (j, "Miles ran, so here's a piece of candy")
    }
    else {
        console.log (j, "miles run.  Keep up the good work")
    }
}
//The loop stops after 6 miles, because no additional candy will be issued beyond that distance
console.log("Thank you for running", j, "miles, but no additional candy is available.")


//another version of the loop, also incrementing every one mile.  This incorporates a speed requirement in order to get the candy
for (var k = 1; k <= 6; k++){
    var runnerSpeed = (Math.random() + 5).toFixed(2); //Sets the runner's speed to a random number between 5 & 6 to test the logic

    if (k % 2 == 0){
        if (runnerSpeed >= 5.5){
            console.log (k, "Miles ran, so here's a piece of candy. Your speed was", runnerSpeed, "MPH.")
        }
        else {
            console.log (k, "miles ran, but there was insufficient speed to get the candy. Your speed was", runnerSpeed, "MPH.")
        }
    }
    else {
        console.log (k, "miles run.  Keep up the good work")
    }
}

//The loop stops after 6 miles, because no additional candy will be issued beyond that distance
console.log("Thank you for running", k, "miles, but no additional candy is available.")
