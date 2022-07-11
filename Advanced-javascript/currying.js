// What is currying

It is technique for transforming a function of multiple arguments into several functions of single argument in sequence.

simple function:

function add(a,b,c){
    return a+b+c
}
add(1,3,6)

currying function

function curryAdd(a){
    return function(b){
        return function(c){
            return  a+b+c
        }
    }
}

curryAdd(1)(3)(5)

another curry function:

function sum(a) {
    return (b, c) => {
        return a + b + c;
    }
}

sum(2)(3,13)

Advantages of currying:

* When we need to use the same call with some of the same parameters a lot i.e it helps to passing the same variable again and again.
* It helps to create higher order function.



// code for returning sum of 5 numbers using currying

function sum(a){
    return function(b){
         return function(c){
             return function(d){
                 return function(e){
                    console.log(a+b+c+d+e) 
    }
    }
    }
    }
}

sum(1)(2)(3)(4)(5)