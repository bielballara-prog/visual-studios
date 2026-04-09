let answer;
let lastChange = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(16);
}

function draw() {
  background(200);
  
  // bola negra
  fill(0);
  ellipse(200, 200, 375, 375);
  
  // triángulo azul
  fill(60, 0, 255);
  triangle(200, 104, 280, 280, 120, 280);
  
  // ⏱ cambiar respuesta cada 60 frames (~1 segundo)
  if (frameCount - lastChange > 60) {
    answer = floor(random(1, 6));
    lastChange = frameCount;
  }
  
  // respuestas
  if (answer === 1) {
    fill(255);
    text("SÍ 👍", 200, 210);
    
  } else if (answer === 2) {
    fill(255, 255, 0);
    text("NO ❌", 200, 210);
    
  } else if (answer === 3) {
    fill(0, 255, 0);
    text("TAL VEZ 🤔", 200, 210);
    
  } else if (answer === 4) {
    fill(255, 100, 100);
    text("PREGUNTA\nDE NUEVO 🔁", 200, 210);
    
  } else if (answer === 5) {
    fill(0, 255, 255);
    text("DEFINITIVAMENTE 🔥", 200, 210);
  }
}