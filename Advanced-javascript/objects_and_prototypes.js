// How to use one object or its properties multiple time by using constructors and prototyes

// create one object or you call it parent object

var sajuDetails = {
    firstName: "Saju",
    lastName: "Mehta",
    birthYear: 1991
}
// console.log(sajuDetails)

// now suppose we want to use same properties for new objects, so instead of creating new object with the same properties we can call the above object. 

var personDetails = function(name, lastName, year){
    this.firstName = name;
    this.lastName = lastName;
    this.birthYear = year;
    // this.calAge = function(){
    //     console.log(3333 - this.birthYear);
    // }
}
var sajuDetails = new personDetails('sanju', 'sharma', 2020)

// new keyword create empty object and also taking care of this property as previously this property refers to the global object but with the help of new keyword, this keywords now refers to the empty object. 
console.log(sajuDetails)

// create another person detail object with same properties

var prachiDetail = new personDetails('prachi','diwan', 2222);
console.log(prachiDetail);

// now create one function in personDetails object for calAge and try to access that functions through new objects we have created above 

// sajuDetails.calAge();
// prachiDetail.calAge();

// there is one more way to writing that calAge function by using prototype

personDetails.prototype.calAge= function(){
    console.log(3333 - this.birthYear)
}

sajuDetails.calAge();
prachiDetail.calAge();