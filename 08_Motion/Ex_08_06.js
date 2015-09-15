var startX = 20;     // Initial x-coordinate
var stopX = 160;     // Final x-coordinate
var startY = 30;     // Initial y-coordinate
var stopY = 80;      // Final y-coordinate
var x = startX;    // Current x-coordinate
var y = startY;    // Current y-coordinate
var step = 0.005;  // createCanvas of each step (0.0 to 1.0)
var pct = 0.0;     // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startX) * pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}