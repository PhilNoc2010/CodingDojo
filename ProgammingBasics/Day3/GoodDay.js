// A function to generate a greeting to a provided name
// This has the ability to customize the greeting by a provided time of day, but if none is provided, it will use a default value
//

function greeting (name, time = "day"){
    if (name == "Dooku" || name == "Count Dooku"){
        return "I'm coming for you Count Dooku!"
    }
    else {
        return `Good ${time} ${name}`
    }

}
console.log(greeting("Mordecai"))

console.log(greeting("Charlie Brown", "afternoon"))

console.log(greeting("James Bond", "evening"))

console.log(greeting("Dooku", "morning"))