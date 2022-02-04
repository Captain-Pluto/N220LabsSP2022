let x = 0;
function setup() {
    createCanvas(600, 400);
}
function draw() {
    drawFactory(mouseX, mouseY);
    drawFactory(mouseX - 30, mouseY - 30);
    drawFactory(mouseX + 30, mouseX + 30);
}

function drawFactory(x, y) {

    strokeWeight(2)
    fill(204, 51, 24)
    quad(50, 90, 400, 60, 400, 200, 50, 200)
    stroke(102, 95, 94)
    strokeWeight(4)
    line(100, 85, 100, 10)
    line(150, 80, 150, 10)
    fill(250, 172, 27)
    rect(80, 100, 300, 40)
    line(100, 140, 100, 100)
    line(125, 140, 125, 100)
    line(150, 140, 150, 100)
    line(175, 140, 175, 100)
    line(200, 140, 200, 100)
    line(225, 140, 225, 100)
    line(250, 140, 250, 100)
    line(275, 140, 275, 100)
    line(300, 140, 300, 100)
    line(325, 140, 325, 100)
    line(350, 140, 350, 100)
    line(80, 120, 380, 120)
}