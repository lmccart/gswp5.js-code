var x = 215;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {            // If it's the left arrow
      x--;
    } 
    else if (keyCode == RIGHT_ARROW) {      // If it's the right arrow
      x++;
    }
  }
  rect(x, 45, 50, 50);
}