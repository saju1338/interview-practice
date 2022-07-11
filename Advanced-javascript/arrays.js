// In this file we'll add everything about array

//Difference between splice and slice

//Slice:

This method is used to get a new array by selecting a sub-array of a given array.

for example:
var cars=['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
    var new_cars=cars.slice(1, 4);

    console.log(new_cars)//output: Innova, Breeza, Etios

    //Splice

    This method is used to add/remove an item from the given array.

    var cars=[
        'Benz', 'Innova', 'ambassedor', 'BMW', 'Audi', 'Breeza', 'Etios', 'Dzire'];
            cars.splice(2, 1);

    console.log(cars)// output: Benz, Innova, BMW, Audi, Breeza, Etios, Dzire

    i.e from second index it will remove only one cars.

//How to merge two arrays:

var arr1=[1,2,3];
var arr2=[4,5,6];
var newArray= arr1.concat(arr2);

another method: 

with array destructuring:

var newArray= [...arr1,...arr2]
or
arr1.push(...arr2)


//how to add array in the end, beginning and middle position

var simpleArray = [3,4]

//now we want to add elements at the end position
simpleArray.push(5,6) // output: [3, 4, 5, 6] 
console.log(simpleArray) 

//add element in the begining
simpleArray.unshift(1,2)
console.log(simpleArray) // [1, 2, 3, 4, 5, 6]


//how to remove array from last
var removeArray = [1,2,3,4,5]
removeArray.pop()
console.log(removeArray)

//how to remove from the begining
removeArray.shift()
console.log(removeArray)

// remove array from the middle
var removeMiddleArray = [1,2,3,4,5,6,7,8]
removeMiddleArray.splice(2); //this will remove all the elements from the second index.
console.log(removeMiddleArray)

var removeMiddleArray = [1,2,3,4,5,6,7,8]
removeMiddleArray.splice(2,4); //this will remove 4 elements from the second index.
console.log(removeMiddleArray)

/////////////////// find an element in the array

//primitive arrays
var secondArray = [1,2,3,4,5,1,7,8,6]
console.log(secondArray.indexOf(3));
console.log(secondArray.lastIndexOf(1))

//finding elements reference type

var employeeDetails = [
    {id: 1, name: 'saju'},
    {id: 2, name: 'sahil'},
    {id: 3, name: 'sajan'},
    {id: 4, name: 'logan'},
]

var findEmployeeName = employeeDetails.find(function(details){
    return details.name=='saju'
})
console.log(findEmployeeName)


//how to empty an array

var emptyAnArray = [1,2,3,4,8,5,6]
// first method 
emptyAnArray = []
console.log(emptyAnArray)

//second method
var amptyAnArray = [1,2,3,4,4,5,5]
emptyAnArray.length=0
console.log(emptyAnArray)

//third method
var emptyAnArray = [1,2,3,4,5,6,6,7]
emptyAnArray.splice(0, emptyAnArray.length);
console.log(emptyAnArray)


// How sorting works in array

var sortingArray = [12,3,4,6,1]
sortingArray.sort(function(a,b){
    return a-b;
})

console.log(sortingArray)

// how sorting works when we have objects in array

var objSortingArray = [{id:17, name:'saju'}, {id:2, name:'prachi'}, {id:18, name:'rajni'}]
objSortingArray.sort(function(a,b){
    return (a.id > b.id ? 1 : -1) 
})
console.log(objSortingArray)

// how sorting works in string

var objStringSortingArray = [{id:17, name:'saju'}, {id:2, name:'prachi'}, {id:18, name:'rajni'}]
objStringSortingArray.sort(function(a,b){
    return (a.name>b.name ? 1 : a.name < b.name ? -1 : 0)
})
console.log(objStringSortingArray)



// Different arrays quick example

var items = [
    {name: 'book', price:100},
    {name: 'computer', price:1200},
    {name: 'tv', price:1003},
    {name: 'radio', price:1300},
    {name: 'phone', price:10450},
    {name: 'bed', price:10034},
    {name: 'table', price:10530}
]

//filter array

// it filter out the array and return the array which are true

var filterArray = items.filter(function(item){
    return item.price<=1300
})

console.log(filterArray)

//map array

// map created another array from the array, whether we want to create seperate array from one of the properties of the parent array 
var mapArray = items.map(function(item){
    return item.price
})
console.log(mapArray)

//find array

//to find something into an array

var findArray = items.find(function(item){
    return item.name == 'table'
})
console.log(findArray)

// forEach loop into an array

// this is unlike any other method as it does not return anything so doesn't need return statement in this method

var forEachLoopArray = items.forEach(function(forEachItem){
    console.log(forEachItem.name);
})


var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var a = fruits.indexOf("Apple");
  console.log(a)

// Reduce Array

// Reduce method runs a function on each array element to produce a single value.
// for example:
// var number = [1,2,3,4,5,6]
// var number2 = number.reduce(myfunction(),0)
// function myfunction(total, value, index, array){
//    return total + value
//      }

// In the above example in reduce method we are passing 2 arguments, one is callback function and other is the initial value and this initial value is the value of total in myfunction and if we are not passing the initial value then it will automatically take the first element value of the array.

// reduce methoda iterates on every element in the array, the value we are passing in myfunction are the elements of the array.
// index and array are optional.


  // Array Interview Question
// Increament 0ne in last Array
// suppose we have [1,2,3] then output is [1,2,4]
// suppose we have [9,9,9] then output is [1,0,0,0]

var arr = []
function increamentOneInLastArray(arr){
    var hasLengthIncreased = true;
    var length = arr.length;
    for(var i = length-1; i>=0; i--){
        if(!hasLengthIncreased){
            break;
        }

        arr[i] = (arr[i]+1)%10; // this line means 5%10 = 5 and 9%10 = 9, only 10%10 = 0 that means this will return 0 only if the last element is 9
        hasLengthIncreased=false;

        if(arr[i]==0){
            hasLengthIncreased=true
        }
    }

    if(hasLengthIncreased){
        arr.unshift(1)
    }
    
    return arr;
}

console.log('adding array output is ' +increamentOneInLastArray([9,9,9,9]))


//Reverse array and palindrome
var newString = ''
function reverseString(str){

    for(var i=str.length-1; i>=0; i--){
        newString = newString + str[i]
    }
        if (newString == str){
            console.log('string is palindrome')
        }
        else{
            console.log('string is not palindrome')
        }
}

reverseString('racecar')


// Remove duplicate array in the given array

var arrayContainDuplicateElements = [1,2,3,1,2,4,5]
var emptyArray = []

for(var i=0; i<arrayContainDuplicateElements.length; i++){
    if(emptyArray.indexOf(arrayContainDuplicateElements[i])=== -1){
        emptyArray.push(arrayContainDuplicateElements[i])
    }
    console.log('array after removing duplicate array ' +emptyArray)
}

