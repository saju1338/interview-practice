// What is Debouncing ?

// suppose you have button for purchasing items and when we click on the button, we are confirming that we want to purchase the item by calling the API. what if, we click this button multiple times, then we are calling the API multiple times.

// Lets take another example, suppose we fire an event on mouseOver and as soon as we are moving the mouse, we are firing the event. But we want to fire the event only when the mouse stops moving.

// So for the above things won't happen, we use debounce.

// In debounce function, we are just calling the setInterval function and before calling it, we are clearing it's interval and why we are clearing the interval, because suppose we set the interval after 2 sec and we are keep pressing the purchase button and if we won't clear, it will fire the event after 2 seconds. We are using clear interval, that means it won't fire the event untill we won't stop pressing.

let counter=0;
getData=()=>{
    console.log("fetching data.." + counter++)
}


const doSomeMagic= function(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            getData()
        },300)
    }
}


const betterFunction= doSomeMagic(getData,300)

// What is throttling

// In throttling, when user click on the button, events get fires, but we also set the delay in throttle, say 10 seconds. That means it delay the click event by 10 seconds .

// That means in throttling, when we continuously click the button, we fire the event, that means for the 10 seconds it doesn't matter, how many times you clicked the button, you fire the event on the first click.