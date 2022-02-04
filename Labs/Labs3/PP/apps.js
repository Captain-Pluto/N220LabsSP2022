
function setup() {
    createCanvas(600, 400);
    background(46, 46, 45)
}

function draw() {
    var res = polarPoint(30)
    translate(100, 100)
    circle(res.x, res.y, 40)
}

function polarPoint(r) {
    var x = r * Math.sin(mouseX);
    var y = r * Math.cos(mouseX);
    return createVector(x, y);
}