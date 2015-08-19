function setup() {
  createCanvas(480, 120);
  textFont('Source Code Pro');
  textSize(24);
  noStroke();
}

function draw() {
  background(102);
  text('The Eagle has landed.', 26, 24, 300, 100);
}

function mousePressed() {
  save();
}