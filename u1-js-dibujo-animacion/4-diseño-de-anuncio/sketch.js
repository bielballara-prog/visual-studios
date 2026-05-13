let pulse = 0;
let growing = true;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(0, 150, 200);
  
  // título
  fill(255, 255, 0);
  textSize(36);
  text("SUPER ZUMO ⚡", 200, 50);
  
  // subtítulo
  fill(255);
  textSize(20);
  text("¡Energía instantánea!", 200, 90);
  
  // descripción
  textSize(14);
  text("Corre más rápido, salta más alto\n¡y nunca te canses!", 200, 120);
  
  // dibujo del producto (botella)
  fill(255, 100, 0);
  rect(170, 180, 60, 120); // botella
  
  fill(255, 200, 0);
  ellipse(200, 180, 60, 40); // tapa
  
  fill(255);
  textSize(12);
  text("ZUMO", 200, 250);
  
  // ⚡ animación (energía pulsante)
  fill(255, 255, 0, 150);
  ellipse(200, 240, pulse, pulse);
  
  if (growing) {
    pulse += 2;
  } else {
    pulse -= 2;
  }
  
  if (pulse > 80) {
    growing = false;
  }
  if (pulse < 20) {
    growing = true;
  }
}