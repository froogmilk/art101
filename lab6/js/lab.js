// Author: Maya Kinacid <mlkincai@ucsc.edu>
// Date: 28 April

// define variables 
myTransport = ["Fiat 500", " bus", " walking", " rides from friends." ];

// create an object for main ride 
myMainRide = {
  make: "Fiat",
  model: "Fiat 500",
  color: "Green",
  year: 2016,

  //method
  age: function(){
    return 2024 - this.year;
  }
}

//output 
document.writeln("Kinds of Transport I use: ", myTransport, "</b>");

//object to document 
document.writeln("My Main Ride: <pre>", 
JSON.stringify(myMainRide, null, '\t'), "</pre>");
