var quote = "That's one small step for man...";

function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
  textSize(24);
  noStroke();
}

function draw() {
  background(102);
  text(quote, 26, 24, 300, 100);
}