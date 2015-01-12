function setup() {
  createCanvas(480, 120);
  fill(0, 102);
  smooth();
  noStroke();
}

function draw() {
  ellipse(touchX, touchY, 15, 15);
}