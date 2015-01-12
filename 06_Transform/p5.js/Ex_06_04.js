function setup() {
  createCanvas(120, 120);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(-80, -10, 160, 20);
}