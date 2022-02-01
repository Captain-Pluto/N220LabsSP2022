//Jacob Shultz 
//1/19/21 
//N220 
//Project Name Wrap Around

//Create Variables
var radius = 40;
var x = -radius;
var speed = 0.5;
//Create Canvas
function setup() {
    createCanvas(240, 120);
    ellipseMode(radius);
}
//Create Background
function draw() {
    background(14, 50, 207);
    //Designate speed of ball
    x += speed;
    if (x > width + radius) {
        x = -radius;
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
}