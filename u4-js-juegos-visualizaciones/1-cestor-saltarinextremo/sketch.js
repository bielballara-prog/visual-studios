// ---------------- SETUP ----------------
function setup() {
    createCanvas(400, 400);
  }
  
  // ---------------- BEAVER ----------------
  var Beaver = function(x, y) {
      this.x = x;
      this.y = y;
      this.score = 0;
      this.alive = true;
  };
  
  Beaver.prototype.draw = function() {
      this.y = constrain(this.y, 0, height-40);
      fill(139, 69, 19);
      rect(this.x, this.y, 40, 40);
  };
  
  Beaver.prototype.hop = function() {
      this.y -= 6;
  };
  
  Beaver.prototype.fall = function() {
      this.y += 4;
  };
  
  // ---------------- PALOS BUENOS ----------------
  var Stick = function(x, y) {
      this.x = x;
      this.y = y;
  };
  
  Stick.prototype.draw = function() {
      fill(89, 71, 0);
      rect(this.x, this.y, 5, 40);
  };
  
  Stick.prototype.move = function(speed) {
      this.x -= speed;
  };
  
  // ---------------- PALOS MALOS ----------------
  var BadStick = function(x, y) {
      this.x = x;
      this.y = y;
  };
  
  BadStick.prototype.draw = function() {
      fill(255, 0, 0);
      rect(this.x, this.y, 5, 40);
  };
  
  BadStick.prototype.move = function(speed) {
      this.x -= speed;
  };
  
  // ---------------- ENEMIGO ----------------
  var Enemy = function(x, y) {
      this.x = x;
      this.y = y;
  };
  
  Enemy.prototype.draw = function() {
      fill(0);
      ellipse(this.x, this.y, 40, 40);
  };
  
  Enemy.prototype.move = function(speed) {
      this.x -= speed;
      this.y += sin(frameCount * 0.1) * 2;
  };
  
  // ---------------- AGUJEROS ----------------
  var Hole = function(x, gapY, gapHeight) {
      this.x = x;
      this.gapY = gapY;
      this.gapHeight = gapHeight;
  };
  
  Hole.prototype.draw = function() {
      fill(100, 50, 0);
      rect(this.x, 0, 40, this.gapY);
      rect(this.x, this.gapY + this.gapHeight, 40, height);
  };
  
  Hole.prototype.move = function(speed) {
      this.x -= speed;
  };
  
  Hole.prototype.checkCollision = function(beaver) {
      if (beaver.x + 40 > this.x && beaver.x < this.x + 40) {
          if (beaver.y < this.gapY ||
              beaver.y + 40 > this.gapY + this.gapHeight) {
              beaver.alive = false;
          }
      }
  };
  
  // ---------------- VARIABLES ----------------
  var beaver = new Beaver(100, 200);
  var sticks = [];
  var badSticks = [];
  var enemies = [];
  var holes = [];
  
  var level = 1;
  var speed = 2;
  
  // ---------------- SPAWN ----------------
  var spawnObjects = function() {
      sticks.push(new Stick(width, random(50, 300)));
      
      if (level >= 2) {
          badSticks.push(new BadStick(width, random(50, 300)));
      }
      
      if (level >= 3) {
          enemies.push(new Enemy(width, random(50, 300)));
      }
      
      if (level >= 4) {
          holes.push(new Hole(width, random(50, 200), 120 - level*10));
      }
  };
  
  // ---------------- DRAW ----------------
  function draw() {
      background(227, 254, 255);
  
      // suelo
      fill(130, 79, 43);
      rect(0, height*0.90, width, height*0.10);
  
      if (!beaver.alive) {
          textSize(40);
          fill(255, 0, 0);
          text("GAME OVER", 80, 200);
          noLoop();
          return;
      }
  
      level = floor(beaver.score / 10) + 1;
      speed = 2 + level;
  
      if (frameCount % 120 === 0) {
          spawnObjects();
      }
  
      // STICKS BUENOS
      for (var i = 0; i < sticks.length; i++) {
          sticks[i].draw();
          sticks[i].move(speed);
          if (dist(beaver.x, beaver.y, sticks[i].x, sticks[i].y) < 30) {
              beaver.score++;
              sticks[i].x = -100;
          }
      }
  
      // PALOS MALOS
      for (var i = 0; i < badSticks.length; i++) {
          badSticks[i].draw();
          badSticks[i].move(speed);
          if (dist(beaver.x, beaver.y, badSticks[i].x, badSticks[i].y) < 30) {
              beaver.score--;
              badSticks[i].x = -100;
          }
      }
  
      // ENEMIGOS
      for (var i = 0; i < enemies.length; i++) {
          enemies[i].draw();
          enemies[i].move(speed);
          if (dist(beaver.x, beaver.y, enemies[i].x, enemies[i].y) < 30) {
              beaver.alive = false;
          }
      }
  
      // AGUJEROS
      for (var i = 0; i < holes.length; i++) {
          holes[i].draw();
          holes[i].move(speed);
          holes[i].checkCollision(beaver);
      }
  
      // CONTROLES
      if (keyIsPressed && keyCode === UP_ARROW) {
          beaver.hop();
      } else {
          beaver.fall();
      }
  
      beaver.draw();
  
      fill(0);
      textSize(18);
      text("Score: " + beaver.score, 20, 30);
      text("Level: " + level, 20, 55);
  
      // VICTORIA
      if (beaver.score >= 50) {
          background(0, 200, 100);
          textSize(32);
          fill(255);
          text("🏆 CASTOR LEGENDARIO 🏆", 20, 200);
          noLoop();
      }
  }