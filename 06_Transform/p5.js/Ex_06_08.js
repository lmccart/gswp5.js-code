function setup() {
  createCanvas(120, 120);
}

function draw() {
  translate(mouseX, mouseY);
  scale(mouseX / 60.0);
  rect(-15, -15, 30, 30);
}