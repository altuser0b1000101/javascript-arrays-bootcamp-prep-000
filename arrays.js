var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
      var newArray = [...array,element];
      return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array,index){
     return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
var shiftedArray = array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
        var slicedArray = array.slice(1);
        return slicedArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
         var popedArray = array.pop();
         return array;
}

function removeElementFromEndOfArray(array){
         var lastElementSliced = array.slice(0, array.length-1);
         return lastElementSliced;
}


















