// author: Maya Kincaid <mlkincai@ucsc.edu>
// Date: Jun 2 2024

function random_int(start, end) {
  return Math.floor(Math.random() * end) + start;
}

let floof_count = 0;


function handle_random_fox() {
  $.ajax({
    type: "GET",
    url: "https://randomfox.ca/floof",
    dataType: "json",
    success: (floof) => {
      const random_size = random_int(15, 50);
      $("#foxes").append(`<img alt="a fox" style="width:${random_size}%; height:auto;" src="${floof.image}"></img>`)
      $("#counter").html(++floof_count);
    },
    error: (womp_womp) => {
      $("#foxes").append(`<p>There was an error! Womp Womp. No floof retrieved :(</p>`)
    }
  })
}
