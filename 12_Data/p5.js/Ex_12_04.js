var film;

function preload() { 
  film = loadJSON("film.json");
}

function setup() {
  var title = film.title;
  var dir = film.director;
  var year = film.year;
  var rating = film.rating;
  print(title + " by " + dir + ", " + year + ". Rating: " + rating);
}