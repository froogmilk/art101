// author: Maya Kincaid <mlkincai@ucsc.edu>
// Date: Jun 6 2024

function handle_random_fact() {
  $.ajax({
    type: "GET",
    url: "https://uselessfacts.jsph.pl/api/v2/facts/random",
    dataType: "json",
    success: (fact) => { 
      $("#fact").html(`<div>${fact.text}</div>`);
    },
    error: (womp_womp) => {
      $("#fact").html(`<p>There was an error! Womp Womp.</p>`)
    }
  })
}

