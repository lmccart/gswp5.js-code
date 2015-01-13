int num = 60;
int x[] = new int[num];
int y[] = new int[num];

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  // Copy array values from back to front
  for (var i = x.length-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0] = mouseX; // Set the first element
  y[0] = mouseY; // Set the first element
  for (var i = 0; i < x.length; i++) {
    fill(i * 4);
    ellipse(x[i], y[i], 40, 40);
  }
}

