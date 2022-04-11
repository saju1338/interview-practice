// call bind and apply

// var saju={
//     name: 'saju',
//     age: 28,
//     presentation : function(style, timeOfDay){
//         if(style==='formal'){
//             console.log('Hi everyone formally ' + timeOfDay + '' + 'my name is ' + this.name)
//         }else{
//             console.log('Hi everyone casually ' + timeOfDay + '' + 'my name is ' + this.name)
//         }
//     }
// }

// var logan = {
//     name: 'logan',
//     age: 100
// }

// var loganDetails = saju.presentation.bind(logan, 'formal', 'morning');
// loganDetails();



//Closures

// function sajuDetails(age){
//     var a= 'hello, how are you';
//     return function(name){
//         console.log(a + ' ' + ' my age is ' + age + ' ' + 'my name is ' + name)
//     }
// }

// sajuDetails(28)('saju')


// // objects and prototypes

// var person = function(name, age, qualification){
//     this.name = name,
//     this.age = age,
//     this.qualification = qualification
// }

// var saju = new person('saju', 28, 'btech')
// console.log(saju)

// person.prototype.calAge = function(birthYear){
//     var newAge = 2020 - birthYear
//     console.log('new age of ' + ' ' + this.name + ' is ' + newAge)
// }

// saju.calAge(2000)


// Increament one in the last array

var sajuArray = []
function incraeseLastArray(sajuArray){
    var hasLastValueIncreased = true;
    for(var i= sajuArray.length - 1; i>=0; i--){
       if(!hasLastValueIncreased){
           break;
       }
       sajuArray[i]= (sajuArray[i]+1)%10;
       hasLastValueIncreased= false;
       if(sajuArray[i]==0){
        hasLastValueIncreased= true;
       }
    }
    if(hasLastValueIncreased){
        sajuArray.unshift(1)
    }
    while(sajuArray[0]==0){
        sajuArray.shift()
    }
    return sajuArray;
}
// console.log(incraeseLastArray([1,2,3,4]))
console.log('adding array output is ' +incraeseLastArray([9,9,9,2]))


// var arr = []
// function increamentOneInLastArray(arr){
//     var hasLengthIncreased = true;
//     var length = arr.length;
//     for(var i = length-1; i>=0; i--){
//         if(!hasLengthIncreased){
//             break;
//         }

//         arr[i] = (arr[i]+1)%10; // this line means 5%10 = 5 and 9%10 = 9, only 10%10 = 0 that means this will return 0 only if the last element is 9
//         hasLengthIncreased=false;

//         if(arr[i]==0){
//             hasLengthIncreased=true
//         }
//     }

//     if(hasLengthIncreased){
//         arr.unshift(1)
//     }
//     // while(arr[0]==0){
//     //     arr.shift()
//     // }
//     return arr;
// }

// console.log('adding array output is ' +increamentOneInLastArray([9,9,9,2]))
