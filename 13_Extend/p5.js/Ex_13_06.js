var button;
var input;

function setup() {
  createCanvas(480, 120);
  input = createInput();
  input.position(20, 30);
  button = createButton('submit');
  button.position(160, 30);
  button.mousePressed(drawName);
  
  background(100);
  noStroke();
  text('Enter your name.', 20, 20);
}

function drawName() {
  background(100);
  textSize(30);
  var name = input.value();
  for (var i=0; i<30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}
