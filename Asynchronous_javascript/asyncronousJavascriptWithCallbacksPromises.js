// In this file we will show, how can we do the same function which we have already done in asyncronousJavascriptWithCallbacks with promise.

var getIds = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([22,3,5,6,7])
    },1500)
});

var getRecipe = function(recipeId){
    return new Promise(function(resolve, reject){
        setTimeout(function(ID){
            var recipeDetails = {
                recipeName: "Butter Chiken",
                Publisher: "saju"
            }
            resolve('recipee name is ' + recipeDetails.recipeName + ' ' + 'id is ' + recipeId)
        }, 1000, recipeId)
    })
}

getIds
.then(function(id){
    console.log(id);
    return getRecipe(id[2])
})
.then(function(recipe){
    console.log(recipe)
})

// Above example is of promises
// In promises we pass two state (resolve and reject). If our function is successfull then it goes to the resolve state else in the rejected state.
// in the resolved and rejected functions we are getting the response either from the server side or the function response.
// after getting the response in the resolved or the rejected state we tell promises what we need to do next, then come the .then method and in this method we are passing the resolved and reject response as an argument.
// if we are getting rejected instead of resolved i.e our promises fail and the response of the rejected state will go in the catch method which we execute after the .then.