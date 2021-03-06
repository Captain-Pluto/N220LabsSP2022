//Jacob Shultz 
//1/24/21 
//N220 
//Project Bouncing Ball

var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;
function setup() {
    createCanvas(240, 120);
    ellipseMode(radius);
}
function draw() {
    background(0);
    x += speed * direction;
    if ((x > width - radius) || x < radius) {
        direction = -direction;
    }
    if (direction == 1) {
        arc(x, 60, radius, radius, 0.52, 5.76);
    } else {
        arc(x, 60, radius, radius, 3.67, 8.9);
    }
}