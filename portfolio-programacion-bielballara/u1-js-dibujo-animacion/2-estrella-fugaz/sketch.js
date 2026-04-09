let x1 = 0;
let y1 = 100;
let x2 = 300;
let y2 = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(29, 40, 115);
  
  // círculo amarillo
  fill(255, 242, 0);
  ellipse(x1, y1, 10, 10);
  x1 = x1 + 2;
  
  // círculo blanco
  fill(255, 255, 255);
  ellipse(x2, y2, 8, 8);
  y2 = y2 + 3;
}