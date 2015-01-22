var img;

function setup() {
  createCanvas(480, 120);
  img = loadImage("lunar.jpg");
}

function draw() {
  background(200);
  image(img, 0, 0);
}