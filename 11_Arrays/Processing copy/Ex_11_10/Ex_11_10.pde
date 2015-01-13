JitterBug[] bugs = new JitterBug[33];

function setup() {
  createCanvas(240, 120);
  for (var i = 0; i < bugs.length; i++) {
    var x = random(width);
    var y = random(height);
    int r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

class JitterBug {

  var x;
  var y;
  int diameter;
  var speed = 2.5;

  JitterBug(var tempX, var tempY, int tempDiameter) {
    x = tempX;
    y = tempY;
    diameter = tempDiameter;
  }

  function move() {
    x += random(-speed, speed);
    y += random(-speed, speed);
  }

  function display() {
    ellipse(x, y, diameter, diameter);
  } 

}

