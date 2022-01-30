var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
    createCanvas(240, 120);
    ellipseMode(radius);
}

function draw() {
    background(14, 50, 207);
    x += speed;
    if (x > width + radius) {
        x = -radius;
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
}