// author: Maya Kincaid <mlkincai@ucsc.edu>
// Date: May 22 2024

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

// attach click handler to submit button
$("#button").click(function(){
  // get the value in the #input text box, assign to a variables name
  var name = $("#input").val()
  console.log(name);
  // get the house
  var house = sortingHat(name);
  console.log(house);
  // add house to output div
  $("#output").html("<p>The Sorting Hat has sorted you into " + house + "</p>" );
})
