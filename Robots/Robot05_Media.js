var bot1;
var bot2;
var bot3;
var landscape;

var easing = 0.05;
var offset = 0;

// Preload the images
function preload() {
  bot1 = loadImage("robot1.svg");
  bot2 = loadImage("robot2.svg");
  bot3 = loadImage("robot3.svg");
  landscape = loadImage("alpine.png");
}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  // Set the background to the "landscape" image; this image
  // must be the same width and height as the program
  background(landscape);

  // Set the left/right offset and apply easing to make
  // the transition smooth
  var targetOffset = map(mouseY, 0, height, -40, 40);
  offset += (targetOffset - offset) * easing;

  // Draw the left robot
  image(bot1, 85 + offset, 65);

  // Draw the right robot smaller and give it a smaller offset
  var smallerOffset = offset * 0.7;
  image(bot2, 510 + smallerOffset, 140, 78, 248);

  // Draw the smallest robot, give it a smaller offset
  smallerOffset *= -0.5;
  image(bot3, 410 + smallerOffset, 225, 39, 124);
}