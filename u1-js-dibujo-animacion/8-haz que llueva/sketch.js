let xPositions = [];
let yPositions = [];
let colors = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  // 🌧️ crear muchas gotas (más de 25)
  for (let i = 0; i < 50; i++) {
    xPositions.push(random(0, 400));
    yPositions.push(random(0, 400));
    colors.push(color(random(0, 255), random(0, 255), 255));
  }
}

function draw() {
  background(204, 247, 255);

  for (let i = 0; i < xPositions.length; i++) {
    
    fill(colors[i]);
    ellipse(xPositions[i], yPositions[i], 10, 10);
    
    // movimiento
    yPositions[i] += 5;
    
    // 🔁 si llega abajo, vuelve arriba
    if (yPositions[i] > 400) {
      yPositions[i] = 0;
      xPositions[i] = random(0, 400);
    }
  }
}

// 🖱️ añadir gotas al hacer clic
function mouseClicked() {
  xPositions.push(mouseX);
  yPositions.push(mouseY);
  colors.push(color(random(0, 255), random(0, 255), 255));
}