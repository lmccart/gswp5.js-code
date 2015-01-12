function setup() {
  createCanvas(120, 120);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(40, 30, 160, 20);
}