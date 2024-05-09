// author: Maya Kincaid <mlkincai@ucsc.edu>
// Date: May 8 2024

$("output").html("Look what it can do!")

//add button to challenge, problems, reflection and results section
$(".minor-section").append ("<button class= 'buttonC' id='button-pressed'>Press me! :D</button>");

//add a click listener to all buttons and toggle special effects
$(".buttonC").click(function(){
    //now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
})