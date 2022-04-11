// function loadImagesInSequence(images) {
//   if (!images.length) {
//     return;
//   }

//   var img = new Image(),
//     url = images.shift();

//   img.onload = function() {
//     loadImagesInSequence(images);
//   };
//   img.src = url;
//   console.log(url);
//   // window.open(url);
// }

// loadImagesInSequence([
//   "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
//   "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
//   "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
// ]);

// // whenever an image is loaded, the load event is fired. When that happens, we execute the loadImagesInSequence() again. We won't load the same image twice, as Array.shift() removed from the array we simply passed through.
// // Recursion adds clarity and reduces the time needed to write and debug code.

// function loadImages(imagesArgument){
//     var newImage = [];
//     imageCounter= 0;
//     if(!imagesArgument.length){
//         return;
//     }

//     for(var i=0; i<imagesArgument.length; i++){
//         imageCounter++;
//         newImage.push(imagesArgument[i]);
//         console.log('url of image ' + imageCounter + ' is :' + newImage);
//         newImage.shift();
//         // window.open(newImage);
//         // newImage=[];
//     }
// }

// // console.log(loadImages(['https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png']))


// // function loadImages(imagesArgument){
   
// //     if(!imagesArgument.length){
// //         return;
// //     }
// //         imagesArgument.forEach((el,i)=>console.log('url of the ' + parseInt(i+1) + ' ' + el ))
    
// // }

// // console.log(loadImages(['https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png']))



// function loadImagesInSequence(images) {
//   if (!images.length) {
//     return;
//   }

//   var img = new Image(),
//     url = images.shift();

//   img.onload = function() {
//     loadImagesInSequence(images);
//   };
//   img.src = url;
//   console.log(url);
//   // window.open(url);
// }



// function loadImage(images) {
//   return new Promise((resolve, reject) => {
//   let img = new Image();
//   url = images.shift();
//   img.addEventListener('load', e => resolve(img));
//   img.addEventListener('error', () => {
//   reject(new Error(`Failed to load image's URL: ${url}`));
//   });
//   img.src = url;

//   });
//   }
  
//   // load the image, and append it to the element id="image-holder"
//   Promise.all(loadImage(['http://thecatapi.com/api/images/get?format=src&type=jpg&size=small','https://homepages.cae.wisc.edu/~ece533/images/arctichare.png']))
//   .then(url => console.log(url))
//   .catch(error => console.error(error));




// function loadImages(imagesArgument){
//   var newImage = [];
//   imageCounter= 0;
//   if(!imagesArgument.length){
//       return;
//   }

//   for(var i=0; i<imagesArgument.length; i++){
//       imageCounter++;
//       newImage.push(imagesArgument[i]);
//       console.log('url of image ' + imageCounter + ' is :' + newImage);
//       newImage.shift();
//       // window.open(newImage);
//       // newImage=[];
//   }
// }



// function loadImage(url) {
//   var newImage = [];
//   for(var i=0; i<url.length; i++){
//     newImage.push(url[i]);
//         return new Promise((resolve, reject) => {

//       //  let img = new Image();

//       // newImage.addEventListener('load', e => resolve(newImage));

//       // newImage.addEventListener('error', () => {

//       //    reject(new Error(`Failed to load image's URL: ${url[i]}`));

//       //  });

//       //  img.src = url[i];

//         console.log(newImage)

//      });

//   }

// }

 

// loadImage(['http://thecatapi.com/api/images/get?format=src&type=jpg&size=small','http://thecatapi.com/api/images/get?format=src&type=jpg&size=small'])

//  .then(img =>console.log("img.src"))

//  .catch(error => console.error(error));




 var newImage = new Promise(function(resolve,reject){
  newImage= [];
  const urlArray= ['https://homepages.cae.wisc.edu/~ece533/images/airplane.png','https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'];
  for(var i=0; i<urlArray.length; i++){
    newImage.push(urlArray[i]);

  }
  if(newImage){
      resolve(newImage)
  }else{
      reject('failed')
  }
})

newImage.then(function(message){
  message.forEach((el)=>window.open(el))
}).catch(function(message){
  console.log('this message is in ' +message)
})