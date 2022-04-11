// What are premitives and what are objects and the difference

// primitive:
// Number
// String
// Boolean
// undefined
// null

// and everything apart from these five are objects

// how they behave, let see an example

//premitives
var a= 24;
var b = a;
a = 46

console.log('a value is ' + a) // 46
console.log('b value is ' + b) // 24

// each of var holds their own copy of data they do not refer anything that is why value is different

//objects

var obj1 = {
    name: 'saju',
    age: 28
}
var obj2 = obj1;
obj1.name= 'sahil'

console.log('obj1 value is ' +obj1.name); // sahil
console.log('obj2 value is ' +obj2.name); // sahil

// here obj1 and obj2 both holds a reference, that points to the memory


// let see an example of a function where we pass both premitive and function and see how they behave
var age= 27;
var obj = {
    name: 'sajan',
    city: 'siwan'
}

function change(a, b){
    a= 50;
    b.city= 'kaithal';
};
change(age, obj);

console.log('age of saju is ' +age); // 27
console.log('city of saju is ' +obj.city)  // kaithal




