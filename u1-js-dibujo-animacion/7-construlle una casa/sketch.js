function setup() {
    createCanvas(400, 400);
    noStroke();
  }
  
  function draw() {
    background(219, 255, 255);
  
    // techo
    fill(174, 180, 214);
    triangle(200, 28, 350, 150, 50, 150);
  
    // paredes
    fill(255);
    rect(60, 150, 280, 207);
  
    // 🧱 ladrillos (bucle + condicional)
    for (let y = 150; y < 350; y += 20) {
      for (let x = 60; x < 340; x += 40) {
        
        if ((x + y) % 80 === 0) {
          fill(200, 100, 100);
        } else {
          fill(180, 80, 80);
        }
        
        rect(x, y, 40, 20);
      }
    }
  
    // 🚪 puerta
    fill(120, 80, 19);
    rect(180, 280, 40, 77);
  
    // 🪟 ventanas (bucle)
    for (let x = 90; x <= 300; x += 80) {
      fill(173, 216, 230);
      rect(x, 180, 40, 40);
      
      stroke(255);
      line(x + 20, 180, x + 20, 220);
      line(x, 200, x + 40, 200);
      noStroke();
    }
  
    // 🌿 pasto (bucle + condicional)
    for (let x = 0; x < 400; x += 10) {
      
      if (x % 20 === 0) {
        fill(0, 200, 0);
      } else {
        fill(0, 150, 0);
      }
      
      rect(x, 350, 10, 50);
    }
  }