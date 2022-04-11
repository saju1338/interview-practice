// what is call, bind and apply function do, lets start with an example

var saju = {
    name: 'saju',
    age: 29,
    presentation: function(style, timeofDay){
        if(style==='formal'){
            console.log('hello everyone good' + timeofDay + '' + ' my name is ' + this.name + '' + ' my age is ' + this.age + '.')
        }else if(style==='friendly'){
            console.log('namaste dosto good' + timeofDay + '' + ' my name is ' + this.name + '' + ' my age is ' + this.age + '.')
        }
    }
};
saju.presentation('formal', 'morning');  //hello everyone goodmorning my name is saju my age is 29.

// now suppose we have another object with name and age like below

var logan = {
    name: 'wolverine',
    age: 100
}

// we want to use the above presentation method for logan object as well

saju.presentation.call(logan, 'friendly', 'afternoon')  //namaste everyone goodafternoon my name is wolverine my age is 100.

// in the presentation function will replace 'this' with the 'logan' object, that is why we are passing logan in the first argument.



// Now we need to see how apply function work, apply is same as callback function, the only difference is that in apply function we need to pass the arguments as array like below:

// saju.presentation.apply(logan, ['friendly', 'afternoon'])

//but in the presentation method case, the apply function will not work because aur presentation function is not accepting arguments as an array.



// now see how bind function works

var loganData = saju.presentation.bind(logan, 'formal', 'afternoon') 
loganData();  //hello everyone goodafternoon my name is wolverine my age is 100.

// or 

var loganData = saju.presentation.bind(logan, 'formal') 
loganData('morning');  //hello everyone goodmorning my name is wolverine my age is 100.

//binds allows us to preset the arguments so we don't have to do that again and again

// basic difference between call and bind is that call sets the 'this' keyword and executes the function immediately, while in bind, it creates a copy of that function and set the 'this' keyword.
