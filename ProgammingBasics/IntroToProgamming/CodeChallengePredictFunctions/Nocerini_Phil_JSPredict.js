function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();

// Since this function doesn't take any input parameters, this will output "I was born in 1980"

function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);

// This code should return the result "I was born in 1980" or whatever year is provided as input when the function is called

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);

/* This code will state the following
Summing Numbers!
num1 is: 10
num2 is: 30
30
*/
