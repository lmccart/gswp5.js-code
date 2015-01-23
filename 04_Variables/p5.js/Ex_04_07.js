function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  for (var i = 20; i < 400; i += 8) {
    line(i, 40, i + 60, 80);
  }
}