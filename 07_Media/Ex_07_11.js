var font;

function preload() {
  font = loadFont("SourceCodePro-Regular.ttf");
}

function setup() {
  createCanvas(480, 120);
  textFont(font);
}

function draw() {
  background(102);
  textSize(28);
  text("one small step for man...", 25, 60);
  textSize(16);
  text("one small step for man...", 27, 90);
}