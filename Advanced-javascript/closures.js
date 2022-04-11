// What are closures

// Inner function has access to the variable and arguments of its outer function, even after the outer function has returned

// let see an example, create a function of calculating the retirement age of the person 

function calRetirementAge(retirementAge){
    var text= 'is saju retirement age'
    return function(birthYear){
        var age = 2020 - birthYear
        console.log((retirementAge - age)  +' ' + text)
    }
}

calRetirementAge(66)(1991)