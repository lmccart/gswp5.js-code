var speed = 2.5;
var diameter = 20;
var x;
var y;

function setup() {
  createCanvas(240, 120);
  x = width/2;
  y = height/2;
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);
}