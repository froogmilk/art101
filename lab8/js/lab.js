// author: Maya Kincaid <mlkincai@ucsc.edu>
// Date: May 4 2024

function addIt(x){
    return (x + 2);
}

//test function
console.log("What is 1 + 2?", addIt(1));
console.log("What is 4 + 2?", addIt(4)); 

var numArray = [1, 2, 3, 4, 5];
console.log("My array", numArray);

var result = numArray.map(addIt);
// should return added numbers to array
console.log("2 added to array:", result);

var subtractResult = numArray.map(function(x){
    return (10 - x);
})

numArray.map(function(x) {
    var results = (10 - x);
    return results;
})

// should return results of the array subtracting from 10
console.log("Subtracting from 10 with the array:", subtractResult);

var mapResults = numArray.map(addIt);
console.log("Results: ", mapResults)

$("#output").html('Original array: ' + numArray);


$("#output2").html('When adding 2 to the array: ' + mapResults);


$("#output3").html('Subtracting from 10 with the array: ' + subtractResult);