var[] gray;

function setup() {
  createCanvas(240, 120);
  gray = new var[width];
  for (var i = 0; i < gray.length; i++) {
    gray[i] = random(0, 255);
  }
}

function draw() {
  for (var i = 0; i < gray.length; i++) {
    stroke(gray[i]);
    line(i, 0, i, height);
  }
}

