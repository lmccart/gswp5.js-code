var gray = [];

function setup() {
  createCanvas(240, 120);
  for (var i = 0; i < width; i++) {
    gray[i] = random(0, 255);
  }
}

function draw() {
  for (var i = 0; i < gray.length; i++) {
    stroke(gray[i]);
    line(i, 0, i, height);
  }
}