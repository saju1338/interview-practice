//What is reduce function

Where a list of array reduce to one value

for example:

let sum = [2, 3, 6, 8, 10];

let output = sum.reduce((acc, curr) =>{
    return acc + curr
}, 0)

//in the above example we are passing 0 as the initial value and as the second argument.
// As a first argument we are passing accumulator and current.
// accumulator first time takes the initial value and initially our current value is 2 so on first iteration it is returning 0 + 2 i.e 2
// on the second iteration accumulator is the previous value and now the current value is 3 so returning 2 + 3 i.e 5

lets see another example:

find the longest string in array using reduce method:

var arr = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz"];
var longestString= arr.reduce((a,b)=>{
    if(a.length>b.length){
        return a
    }else{
        return b
    }
},'')

console.log(longestString)
