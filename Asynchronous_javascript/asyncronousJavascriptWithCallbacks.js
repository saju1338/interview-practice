// in this file we'll see how javascript behaves asyncronously, like in the case when we are doing some ajax call as when we do ajax call this call will store in the web API and when we are getting the response we execute the function by using the data.

function getRecipe(){
    setTimeout(function(){
        var recipeId = [22,3,5,6,7]
        console.log(recipeId);

        setTimeout(function(id){
            var recipeDetails = {
                recipeName: "Butter Chiken",
                Publisher: "saju"
            }
            console.log('recipee name is ' + recipeDetails.recipeName + ' ' + 'id is ' + id)

            setTimeout(function(pub){
                var newPublisher = {
                    recipeName: "Palak Paneer",
                    author: "sahil"
                }
                console.log("new recipe " + newPublisher.recipeName + ' ' + 'publisher name is ' + pub)
            },1500, recipeDetails.Publisher)
    
        },1000, recipeId[3])

    },1500)
}
getRecipe();


// the above example we can call 'callBack hell' because doing more and more call making it more and more messy and to overcome this we use promises