/*
MEJORAS IMPLEMENTADAS:
- Efecto hover
- Temporizador
- Botón nuevo juego
- Animación al ganar
*/

let tiles = [];
let flippedTiles = [];
let numTries = 0;
let numMatches = 0;
let delayStart = null;
let startTime;
let cols = 4;
let rows = 4;
let size = 70;

let faces = [];

function preload() {
    for (let i = 0; i < 8; i++) {
        faces.push(loadImage("https://picsum.photos/100?random=" + i));
    }
}

class Tile {
    constructor(x, y, face) {
        this.x = x;
        this.y = y;
        this.face = face;
        this.isFaceUp = false;
        this.isMatch = false;
        this.hover = false;
    }

    draw() {
        if (this.hover) fill(180, 230, 255);
        else fill(214, 247, 202);

        rect(this.x, this.y, size, size, 10);

        if (this.isFaceUp) {
            image(this.face, this.x, this.y, size, size);
        } else {
            fill(100);
            rect(this.x, this.y, size, size, 10);
        }
    }

    isUnderMouse(mx, my) {
        return mx > this.x && mx < this.x + size &&
               my > this.y && my < this.y + size;
    }
}

function setup() {
    createCanvas(400, 450);
    initGame();
}

function initGame() {
    tiles = [];
    flippedTiles = [];
    numTries = 0;
    numMatches = 0;
    startTime = millis();

    let selected = [];
    let pool = faces.slice();

    for (let i = 0; i < (cols * rows) / 2; i++) {
        let index = floor(random(pool.length));
        let f = pool[index];
        selected.push(f);
        selected.push(f);
        pool.splice(index, 1);
    }

    shuffle(selected, true);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * (size + 8) + 10;
            let y = j * (size + 8) + 40;
            tiles.push(new Tile(x, y, selected.pop()));
        }
    }
}

function draw() {
    background(255);

    let time = floor((millis() - startTime) / 1000);

    for (let t of tiles) {
        t.hover = t.isUnderMouse(mouseX, mouseY);
        t.draw();
    }

    fill(0);
    textSize(14);
    text("Intentos: " + numTries, 10, 20);
    text("Tiempo: " + time + "s", 150, 20);

    // Botón
    fill(200);
    rect(10, 5, 110, 25, 5);
    fill(0);
    text("Nuevo Juego", 15, 22);

    if (delayStart && frameCount - delayStart > 30) {
        for (let t of tiles) {
            if (!t.isMatch) t.isFaceUp = false;
        }
        flippedTiles = [];
        delayStart = null;
    }

    if (numMatches === tiles.length / 2) {
        fill(0, 150, 0);
        textSize(20);
        text("¡Ganaste!", 140, 420);
    }
}

function mousePressed() {
    // botón reiniciar
    if (mouseX > 10 && mouseX < 120 && mouseY > 5 && mouseY < 30) {
        initGame();
        return;
    }

    for (let t of tiles) {
        if (t.isUnderMouse(mouseX, mouseY)) {
            if (flippedTiles.length < 2 && !t.isFaceUp) {
                t.isFaceUp = true;
                flippedTiles.push(t);

                if (flippedTiles.length === 2) {
                    numTries++;

                    if (flippedTiles[0].face === flippedTiles[1].face) {
                        flippedTiles[0].isMatch = true;
                        flippedTiles[1].isMatch = true;
                        flippedTiles = [];
                        numMatches++;
                    }

                    delayStart = frameCount;
                }
            }
        }
    }
}