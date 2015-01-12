var bot1;
var bot2;

function setup() {
  createCanvas(720, 480);
  bot1 = new Robot("robot1.svg", 90, 80);
  bot2 = new Robot("robot2.svg", 440, 30);
}

function draw() {
  background(204);

  // Update and display first robot
  bot1.update();
  bot1.display();

  // Update and display second robot
  bot2.update();
  bot2.display();
}

function Robot(imgPath, tempX, tempY) {  
  // Set initial values for properties
  this.xpos = tempX;
  this.ypos = tempY;
  this.angle = random(0, TWO_PI);
  this.botImage = loadImage(imgPath);
  this.yoffset = 0.0;

  // Update the properties
  this.update = function() {
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }

  // Draw the robot to the screen
  this.display = function() {
    image(this.botImage, this.xpos, this.ypos + this.yoffset);
  }
}