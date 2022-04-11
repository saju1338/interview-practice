//Bubbling: that means going upward.
//Event capturing or trickling: that means going down or trickle down

// In event bubbling or capturing we need to pass three arguments or parameter
// 1: event (eg: click, mouseOver, keyUp)
// 2: Callback function
// 3: Which event we want event capturing(true), event bubbling(false) and if we are not passing anything then by default it will pass false.

//Lets go through below exapmle, we are trying to achieve capture event .
//We have taken three div's grandparent > parent > child
// and suppose we clicked on child div, i.e in capturing event it will go from top to bottom so first it will capture grandparent div and print grandparent clicked and then automatically it will capture parent div and print parent clicked and then capture child div and print child clicked. 

// Now suppose we have clicked on parent div, again it will go from top to bottom and first it will print grandparent clicked and then prints parent clicked. 


// Opposite will happen if we pass false instead of true i.e we are calling event bubbling event and it will go from child to parent.




document.querySelector("#grandParent").addEventListener('click', ()=>{
    console.log("grandparent clicked")
},true)
document.querySelector("#parent").addEventListener('click', ()=>{
    console.log("parent clicked")
},true)
document.querySelector("#child").addEventListener('click', ()=>{
    console.log("child clicked")
},true)