var img;

function preload() {
  img = loadImage("network.svg");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  image(img, 0, 0);
  image(img, mouseX, 0);
}