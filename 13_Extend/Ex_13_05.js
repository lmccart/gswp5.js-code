var slider;

function setup() {
  createCanvas(480, 120);
  slider = createSlider(0, 255, 100);
  slider.position(20, 20);
}

function draw() {
  var gray = slider.value();
  background(gray);
}