function setup() {
  createCanvas(480, 120);
  loadImage('lunar.jpg', drawImage);
  noLoop();
}

function draw() {
  background(200);
}

function drawImage(img) {
  image(img, 0, 0);
}