// How to do bubble sort or any other sort

// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 0; i < array.length; i++) {
//         if (array[i] > array[i+1]) {
//           done = false;
//           temp = array[i]
//         array[i]= array[i+1]
//         array[i+1]= temp
//         }
//       }
//     }
  
//     return array;
//   }
  
//   var numbers = [12, 10, 15, 11, 14,2,4,34,16,2, 13, 16];
//   var strings = ['a','k','t','b','c']
//   bubbleSort(numbers);
//   bubbleSort(strings);
//   console.log(numbers, strings);


// --------------------------------------------------------------------------------------------

// How to reverse a string

// function stringReverse(string){
//     var reverseString = '';
//     for(var i=string.length-1; i>=0; i--){
//         reverseString = reverseString + string[i];
//     }
//     return reverseString;
// }
// console.log(stringReverse('hello'))

// --------------------------------------------------------------------------------------------

// How to check if the string is anagram

// the easy method is by sorting the string first by using above first algo

// function bubbleSortForAnagram(string){
//     var splitString = string.split('');
//     var doneSorting = false;
//     while(!doneSorting){
//         doneSorting = true;
//         for(var i=0; i<splitString.length; i++){
//             if(splitString[i]>splitString[i + 1]){
//                 doneSorting = false;
//                 var temp = splitString[i];
//                 splitString[i] = splitString[i+1];
//                 splitString[i+1]= temp;
//             }
//         }
//     }
//     return splitString
// }
// var sortedString = 'saju';
// console.log(bubbleSortForAnagram(sortedString));

// // after sorting is done, now take the two numbers and compare them

// var string1 = bubbleSortForAnagram('saju');
// var string2 = bubbleSortForAnagram('sahil');
//  isAnagram = true;
// for(var i=0; i<string1.length && isAnagram; i++){
//     if(string1.length==string2.length){
//         if(string1[i]==string2[i]){
//             console.log('upto now it matches')
//         }else{
//             console.log('a word differs');
//             isAnagram= false;
//         }

//     }else{
//         console.log('string1 has different amount of letters')
//         isAnagram= false;
//     }
// }

// if(isAnagram){
//     console.log('string is anagram')
// }else{
//     console.log('string is not anagram')
// }



// --------------------------------------------------------------------------------------------

// how to remove duplicacy in array

function removeDuplicateArray(duplicateArray){
    var filteredArray = [];
        for(var i=0; i<duplicateArray.length; i++){
           if(filteredArray.indexOf(duplicateArray[i])===-1){
               filteredArray.push(duplicateArray[i]);
           } 
        }
    return filteredArray;
}
var array= [1,2,2,3,4,3,2,5,3];
console.log(removeDuplicateArray(array))