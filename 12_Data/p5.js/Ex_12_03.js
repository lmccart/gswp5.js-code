var cities;

function preload() {
  cities = loadTable("cities.csv", "header");
}

function setup() {
  createCanvas(480, 120);
  strokeWeight(0.1);
  stroke(255);
}

function draw() {
  background(0);
  var xoffset = map(mouseX, 0, width, -width*3, -width);
  translate(xoffset, -300);
  scale(10);
  for (var i = 0; i < cities.getRowCount(); i++) {
    var latitude = cities.getNum(i, "lat");
    var longitude = cities.getNum(i, "lng");
    setXY(latitude, longitude);
  }
}

function setXY(lat, lng) {
  var x = map(lng, -180, 180, 0, width);
  var y = map(lat, 90, -90, 0, height); 
  ellipse(x, y, 1, 1);
}