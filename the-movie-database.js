

const favMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };

const printMovie = function(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes.");
    console.log("Stars: " + movie.stars);
  };
  printMovie(favMovie);
