float x = 60;          // X-coordinate
float y = 400;         // Y-coordinate
int diameter = 45;     // Head diameter
int bodyHeight = 180;  // Body Height
int neckHeight = 40;   // Neck Height

float angle = 0.0;
float easing = 0.04;

void setup() {
  size(360, 480, P3D);
}

void draw() {
  lights();

  int targetX = mouseX;
  x += (targetX - x) * easing;

  int targetY = mouseY;
  y += (targetY - y) * easing;

  float neckY = -1 * (bodyHeight + neckHeight + diameter);

  background(204);

  translate(x, y);  // Move all to (x,y)

  if (mousePressed) {
    angle += 0.1;
  }
  rotateY(angle);

  // Body
  noStroke();
  sphere(33);
  pushMatrix();
  translate(0, -bodyHeight * 0.5);
  fill(153);
  box(90, bodyHeight, 90);
  translate(0, -bodyHeight * 0.33);
  fill(102);
  box(105, 5, 105);
  popMatrix();

  // Neck
  strokeWeight(2);
  stroke(102);
  line(2, -bodyHeight, 2, neckY); 
  line(12, -bodyHeight, 12, neckY); 
  line(22, -bodyHeight, 22, neckY); 

  // Head
  noStroke();
  pushMatrix();
  translate(12, neckY);
  fill(255);
  sphere(diameter);
  translate(0, 0, diameter*0.66);
  fill(204);
  sphere(diameter/2);
  popMatrix();
  
}

