//Conditions used to determine if a rider is eligible to go on the ride
var riderHeightInInches = 42;  // Riders must be at least 42 inches to ride the ride
var riderAge = 10;  // Riders must be at least 10 years old to ride the ride

console.log("First Rider, who is", riderHeightInInches, "inches and", riderAge, "years old");
if(riderHeightInInches >= 42){
    console.log("Get on that ride, kiddo!")
}
else{
    console.log("Sorry kiddo. Maybe next year.")
};

//Checks both conditions, which must be true for the rider to ride

riderHeightInInches = 36;
riderAge = 11;

console.log("The safety inspector is here.  be really strict for the next Rider, who is", riderHeightInInches, "inches and", riderAge, "years old");
if(riderHeightInInches >= 42 && riderAge >= 10){
    console.log("Get on that ride, kiddo!")
}
else{
    console.log("Sorry kiddo. Maybe next year.")
};

//Checks both conditions, but allows the rider if either condition is true

riderHeightInInches = 36;
riderAge = 11;

console.log("He's gone.  loosen the restrictions for the next Rider, who is", riderHeightInInches, "inches and", riderAge, "years old");
if(riderHeightInInches >= 42 || riderAge >= 10){
    console.log("Get on that ride, kiddo!")
}
else{
    console.log("Sorry kiddo. Maybe next year.")
};