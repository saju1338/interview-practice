// What is array destructuring:

// Array destructuring makes it easier to extract data from an array. see the example below:

old method for extraction:

var personDetails= ["saju", "Mehta", 30, "siwan"]
now suppose we want to extract data from above array:

personDetails[0], personDetails[1], personDetails[2], personDetails[3]


With Array Destructuring:

let [name, lastName, age, city] = ["saju", "Mehta", 30, "siwan"]

console.log(name)// saju


Object Destructuring: 

let ({name, lastName})= {name:"Sahil", lastName: "Mehta"}

console.log(name)// Sahil