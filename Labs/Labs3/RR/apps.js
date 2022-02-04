function setup() {
    createCanvas(600, 400);
    background(46, 46, 45)
    noRed = removeRed(color(170, 200, 150));
    fill(noRed);
    circle(100, 100, 40)
}
function removeRed(c) {
    c.setRed(0)
    return (c)
}