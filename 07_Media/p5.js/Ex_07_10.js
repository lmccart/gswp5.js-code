function setup() {
  createCanvas(480, 120);
  textFont('Source Code Pro');
  noStroke();
}

function draw() {
  background(102);
  textSize(28);
  text("Houston, Tranquility Base here.", 25, 60);
  textSize(16);
  text("The Eagle has landed.", 27, 90);
}

function mousePressed() {
  devicePixelScaling(false);
  redraw();
  save();
}