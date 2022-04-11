//saju
// let l= 2;
// l=4;
// console.log(l)

// const c=6;
// c=9;
// console.log(c)

// //####difference between function declaration and function expression

// console.log(declaration());
// console.log(a());

// function declaration(){
//    console.log("function is declared")
// }

// var a= function(){
//    console.log("function is expressed");
// }


// // What is closure in javascript

// // #### Whenever we see a function inside another function, the inner function has access to all the variables of outer function eg

// //function outer(temp){
// //    var x=10;
// //    
// //    function inner(y){
// //        console.log( x+y+(++temp))
// //    }
// //    inner(12)
// //}
// //outer(15)

// // #### hoisting in javascript

// //* The global a is set to 1
// //* b() is called
// //* function a() {} is hoisted and creates a local variable a that masks the global a
// //* The local a is set to 10 (overwriting the function a)
// //* The global a (still 1) is alerted


// // #### Factory Pattern

// $(document).ready(function(){
// var personPatter= function(name, age, city){
    
//     var person={};
//     person.name=name;
//     person.age=age;
//     person.city=city
    
//     person.printPerson= function(){
//         console.log(this.name + ", " + this.age + ", " + this.city)
//     }
//     return person;
// }    

// var person1= personPatter('saju', 23, 'gurgaon');
// var person2= personPatter('sahil', 25, 'siwan');
    
//     person1.printPerson();
//     person2.printPerson();
    
// })

// // ************  Arror Function  **************

// function circleArea1(r){
//     var pi = 3.14;
//     return pi*(r*r);
// }
// console.log("Area of circle is " + circleArea1(3))
// // output is : Area of circle is 28.26

// let circleArea2 = r => {
//     const pi = 3.14  //we use const here instead of var because pi value will be same  so if we try to use different value for pi it will throws error.
//     return pi*(r*r);
// }
// console.log("Area of second circle is " + circleArea2(12));
// // output is : Area of second circle is 452.16

//  //let simplified more to the arrow function
//  let circleArea3 = r => 3.14*(r*r);
//  console.log("Area of circle 3 is " + circleArea3(16));

//  //Now suppose if we want to pass more than one argument
//  let rectangleArea = (l , b) => {
//      return 2*l*b
//  }

//  console.log("Area of rectangle is " + rectangleArea(3,4))
// //  output is : Area of circle 3 is 803.84

// // ******  What are template literals *********

// // suppose we want to print our age

// let sajuAge = 28
// // normal way to print age is
// console.log('saju will be ' + sajuAge + 'from next month')

// // with template literals
// console.log(`saju will be ${sajuAge} from next month`)
// console.log(`saju will be ${sajuAge} 
// from next month`)































