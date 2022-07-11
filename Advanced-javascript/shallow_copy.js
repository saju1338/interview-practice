// What is shallow copy and deep copy in javascript

//Deep Copy:
//suppose we copy one element value into another element. Now we have two elements with same value, so by modifying one element value does not impact the another element.

//for example
/////
var a= 10
var b = a;
var a=20
console.log('value of a ' + a);
console.log('value of b ' + b)


// Deep copy doesn't work in arrays and objects as we are paasing the value by reference there

var a={
    name:'sahil',
    age: 28
}
var b = a;
b.name = 'saju';

console.log('value of a ' + a.name);
console.log('value of b ' + b.name)

// in the above example when we initialize the 'a' Object, we have assigned a memory location to 'a' and when we pass 'b' to 'a' the we are ponting 'b' to the same memory location and both objects now getting their value from the same location. That is why, modifying one abject value will impact the other.


// --------------------------------------------------------------------------------------------

// for doing deep copy in abject we use spread operator
// what is does, it spread out all the values to new object

var a={
    name:'sahil',
    age: 28
}
var b = {...a};
b.name = 'saju';

console.log('value of a ' + a.name);
console.log('value of b ' + b.name)

//output:
//value of a sahil
//value of a saju

//Spread operator does not work in nested structure

var a={
    name:'sahil',
    age: 28,
    friends:{
        name: 'pankaj',
        age: 26
    }
}
var b = {...a};
b.friends.name = 'ashish';

console.log('value of a ' + a.friends.name);
console.log('value of b ' + b.friends.name)

// it updated friends name value in all the objects because nested object now points to the same memory location.

// and to overcome this nested structure we use strigify

var a={
    name:'sahil',
    age: 28,
    friends:{
        name: 'pankaj',
        age: 26
    }
}
var b = JSON.parse(JSON.stringify(a))
b.friends.name = 'ashish';

console.log('value of a ' + a.friends.name);
console.log('value of b ' + b.friends.name)