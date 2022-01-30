//Jacob Shultz 
//1/19/21 
//N220 
//Project Name Hourglass
function setup() {
    createCanvas(800, 600);
    var black = (0, 0, 0)
    background(black)
    stroke(110, 48, 15)
    strokeWeight(4)
    fill(black)
    rect(300, 175, 200, 400);
    fill(224, 192, 103)
    triangle(400, 375, 300, 175, 500, 175)
    fill(black)
    triangle(500, 575, 300, 575, 400, 375)
    stroke(224, 192, 103)
    line(400, 378, 400, 571)
    fill(224, 192, 103)
    triangle(450, 571, 350, 571, 400, 500)
}