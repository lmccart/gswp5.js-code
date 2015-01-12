var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
  createCanvas(480, 120);
  stroke(0, 102);
}

function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  var weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py);
  py = y;
  px = x;
}