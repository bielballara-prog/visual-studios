function setup() {
    createCanvas(400, 400);
    noStroke();
  }
  
  function draw() {
    background(89, 216, 255);
    
    // peces
    drawFish(200, 100, 118, 74, color(162, 0, 255));
    drawFish(100, 200, 80, 50, color(255, 100, 100));
    drawFish(300, 250, 60, 40, color(0, 255, 150));
    drawFish(250, 150, 100, 60, color(255, 200, 0));
    drawFish(150, 300, 90, 55, color(0, 100, 255));
    
    // algas (extra)
    drawSeaweed(50, 350, 80);
    drawSeaweed(350, 350, 60);
    
    // burbujas (extra)
    drawBubbles(200, 300);
  }
  
  // 🐟 función pez
  function drawFish(centerX, centerY, bodyLength, bodyHeight, bodyColor) {
    fill(bodyColor);
    
    // cuerpo
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    // cola
    let tailWidth = bodyLength / 4;
    let tailHeight = bodyHeight / 2;
    
    triangle(
      centerX - bodyLength / 2, centerY,
      centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
      centerX - bodyLength / 2 - tailWidth, centerY + tailHeight
    );
    
    // ojo
    fill(33, 33, 33);
    ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5);
  }
  
  // 🌿 algas
  function drawSeaweed(x, y, height) {
    fill(0, 200, 100);
    rect(x, y - height, 10, height);
  }
  
  // 🫧 burbujas
  function drawBubbles(x, y) {
    fill(255, 255, 255, 150);
    ellipse(x, y, 10);
    ellipse(x + 10, y - 20, 8);
    ellipse(x - 10, y - 40, 6);
  }