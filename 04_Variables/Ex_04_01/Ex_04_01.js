var y = 60;
var d = 80;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  ellipse(75, y, d, d);   // Left
  ellipse(175, y, d, d);  // Middle
  ellipse(275, y, d, d);  // Right
}