var angle = 0.0;

function setup() {
  createCanvas(120, 120);
}

function draw() {
  rotate(angle);
  translate(mouseX, mouseY);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}