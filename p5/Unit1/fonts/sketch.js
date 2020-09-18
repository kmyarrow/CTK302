var f;
var g;

function setup() {
 createCanvas(800,800);

f = loadFont("assets/rb.ttf");
g = loadFont("assets/p.ttf");


textAlign(CENTER);
}
function draw() {
background(100);

textFont(f);
textSize(100);

textFont(g);
textSize(100);

text("hello", width/2, height/2, 200, 200);
text("hello", width/2, height/2, 200, 200);
}
