// test();

// function test(){
//     console.log([]=={});// false
//     console.log(""=={});//false
//     console.log([]=="");//true
//     console.log([]==="");//false
// }

**********************************************************************************************************
2:

function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Ayush';
    let age = 21;
  }
  
  sayHi();

//   Answer — undefined and ReferenceError

//   Explanation — Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.

**********************************************************************************************************

3.

function getAge() {
    'use strict';
    age = 21;
    console.log(age);
  }
  
  getAge();

//   Answer — ReferenceError
// Explanation —With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.

**********************************************************************************************************
4.

+true;
!'Ayush';

// Answer — 1 and false
// Explanation —The unary plus tries to convert an operand to a number. true is 1, and false is 0.
// The string 'Ayush' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

**********************************************************************************************************

5.

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// Answer: 0,2,2

// number++ is a postfix unary operator which first return the value then increase the number i.e return 0 and then increament, i.e now the number is 0.

// Second console is the prefix unary operator which first increase the number and then return the value, i.e now the number is 2

// Third console simply return the number i.e 2

**********************************************************************************************************

6.

function sum(a, b) {
    return a + b;
  }
  
  sum(1, '2');

//   Answer — "12"

//   In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".

**********************************************************************************************************

7.

String.prototype.giveAyushPizza = () => {
    return 'Just give Ayush pizza already!';
  };
  
  const name = 'Ayush';
  
  name.giveAyushPizza();

//   Answer — "Just give Ayush pizza already!"

  //in the above example we have added a function to string prototype now this function is accessible to all the strings because we use prototype method for inheritence purpose so when we are accessing
//   name.giveAyushPizza(), giveAyushPizza() will be accessible to the name because name is a String.

**********************************************************************************************************

8.

for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }

//   Answer: 1,2,4

//   because continue statement skips an iteration if it returns true

**********************************************************************************************************

9.

function sayHi() {
    return (() => 0)();
  }
  
  console.log(typeof sayHi());

//   Answer — "number"

// Explanation —The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".

**********************************************************************************************************

10.

console.log(typeof typeof 1);

// Answer —"string"
// Explanation —typeof 1 returns "number". And typeof "number" returns "string".

**********************************************************************************************************

11.

!!null;
!!'';
!!1;

// Answer — false false true
// Explanation —null is falsy. !null returns true. !true returns false.
// "" is falsy. !"" returns true. !true returns false.
// 1 is truthy. !1 returns false. !false returns true.

**********************************************************************************************************

12.

[...'Ayush'];

// Answer — ["A", "y", "u", "s", "h"]
// Explanation —A string is an iterable. The spread operator maps every character of an iterable to one element.

**********************************************************************************************************

13.

console.log(1 == '1');
console.log(false == '0');
console.log(true == '1');
console.log('1' == '01');
console.log(10 == 5 + 5);

// Answer — true true true false true.
// Explanation —'1' == '01' as we are comparing two strings here they are different but all other equal.

**********************************************************************************************************

14.

console.log('1' - - '1'); 
console.log('1' + - '1'); 

// Answer —
// 1. 2
// 2. “1–1”
// Explanation —
// 1. With type coercion string is converted to number and are treated as 1 - -1 = 2.
// 2.+ operator is used for concatenation of strings in javascript, so it is evaluated as '1' + '-1' = 1-1.

**********************************************************************************************************

15.

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

// Answer — { a: "three", b: "two"}"
// Explanation —If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

**********************************************************************************************************

16.

let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// Answer — Hello
// Explanation — In JavaScript, all objects interact by reference when setting them equal to each other.
// First, a variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them.

**********************************************************************************************************

17.

let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);

// Answer — true false false

// Explanation —new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
// When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.
// However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.

**********************************************************************************************************

18.

function getAge(...args) {
    console.log(typeof args);
  }
  
  getAge(21);

//   Answer — "object"
// Explanation —The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object".

**********************************************************************************************************

19.

function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 });

//   Answer — Hmm.. You don't have an age I guess

// Explanation —When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.
// The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
// This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.

**********************************************************************************************************

20.
function xyz(){
  let a =0;
  if(true){
      console.log(a);
      let b= 9;
      console.log(b)
  }
  console.log(a,b)
}
xyz()

//0
//9
//ReferenceError: b is not defined

**********************************************************************************************************
21.
const item=['jacket', 'shirt'];
item.length=0;
console.log(item[0])

output= undefined;

