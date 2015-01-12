var angle = 0.0;
var offset = 60;
var scalar = 30;
var speed = 0.05;

function setup() {
  createCanvas(120, 120);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse( x, y, 40, 40);
  angle += speed;
}