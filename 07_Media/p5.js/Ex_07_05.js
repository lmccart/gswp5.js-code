var img;

function preload() {
  img = loadImage('clouds.png');
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  image(img, 0, 0);
  image(img, 0, mouseY * -1);
}