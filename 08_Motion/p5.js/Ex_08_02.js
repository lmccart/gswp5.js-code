function setup() {
  frameRate(30); // Thirty frames each second
  //frameRate(12); // Twelve frames each second
  //frameRate(2); // Two frames each second
  //frameRate(0.5); // One frame every two seconds
}

function draw() {
  var fr = frameRate();
  print(fr);
}