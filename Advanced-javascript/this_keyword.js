what is this?

'this' refers to the object which is executing current function .

If the function is part of the object we call that function a method,
so, if the function is a method in an object, then 'this' refers to the object. 
But if the function is the regular function, then 'this' will refer to the global object . 
 

let see and example below:

const person = {
    name: 'saju',
        sajuDetails(){
            console.log(this)
        }
}

person.sajuDetails();

output: {
    name: 'saju', sajuDetails: f
}

because in the above example, sajuDetails is the method, so this will refer to the abject itself. 



Now suppose we have regular function like below:

function regularFunction(){
    console.log(this)
}

regularFunction()

output: window{}


// let us see another example

var person = {
    name: 'saju',
    friends: ['pankaj', 'sonu', 'ashish'],
    sajuDetails(){
        this.friends.forEach(function(friendsArgument){
            console.log(this.name, friendsArgument)
        })
    }
} 
person.sajuDetails()

the above function will print 
undefined, pankaj
undefined, sonu 
undefined, ashish

but suppose we want to console this.name as well, then it will return undefined, because we are calling 'this' in a callback function, so here function is just a regular function, not a method and for regular function, 'this' will refer to global object. 

so for printing name as well, we need to pass 'this' reference as an argument like below:

var person = {
    name: 'saju',
    friends: ['pankaj', 'sonu', 'ashish'],
    sajuDetails(){
        this.friends.forEach(function(friendsArgument){
            console.log(this.name, friendsArgument)
        }, this)
    }
} 
person.sajuDetails()

the above function will print 
saju, pankaj
saju, sonu 
saju, ashish