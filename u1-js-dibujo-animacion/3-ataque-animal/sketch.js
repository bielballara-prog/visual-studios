let bodyX = 200;
let bodyY = 220;
let bodyW = 118;
let faceW = bodyW / 2;

let eyeSize = 12;

let beakSize = 10;
let beakGrowing = true;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(207, 254, 255);
  
  // cuerpo
  fill(240, 209, 36);
  ellipse(bodyX, bodyY, bodyW, 106);
  
  // cara
  ellipse(bodyX, bodyY - 70, faceW, 47);
  
  // ojos
  fill(0);
  ellipse(bodyX - 10, bodyY - 75, eyeSize, eyeSize);
  ellipse(bodyX + 10, bodyY - 75, eyeSize, eyeSize);
  
  // pico (animado)
  fill(255, 140, 0);
  triangle(
    bodyX, bodyY - 65,
    bodyX - beakSize, bodyY - 55,
    bodyX + beakSize, bodyY - 55
  );
  
  // patas
  stroke(255, 140, 0);
  line(bodyX - 10, bodyY + 50, bodyX - 10, bodyY + 70);
  line(bodyX + 10, bodyY + 50, bodyX + 10, bodyY + 70);
  noStroke();
  
  // 🧠 ANIMACIÓN DEL ATAQUE (el pico crece y se encoge)
  if (beakGrowing) {
    beakSize += 0.5;
  } else {
    beakSize -= 0.5;
  }
  
  if (beakSize > 30) {
    beakGrowing = false;
  }
  if (beakSize < 10) {
    beakGrowing = true;
  }
}