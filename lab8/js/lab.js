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

var results = numArray.map(addIt);
// should return added numbers to array
console.log("Test of added numbers to array:", results);

numArray.map(function(x) {
    var results = (10 - x);
    return results;
})

