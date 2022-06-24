// What is the difference between spread and rest operators

both have same syntax, difference between them is that:
spread operator spread out the elements of the iterable: see the below example:

var arr1=[1,2,3];
var arr2=[4,5,6]
var newArr=[7,8,9,...arr1,...arr2]

console.log(newArr)
output is: [7,8,9,1,2,3,4,5,6]

in the above example we can see that spread operator unpacked all the elements of arr1 and arr2.


Rest operator will collect the arguments into an array, see below example:

function display(1,2,3,...arr){
    console.log(...arr)
}

display(1,2,3,4,5,6,67,7,76)

output: [4,5,6,67,7,76]