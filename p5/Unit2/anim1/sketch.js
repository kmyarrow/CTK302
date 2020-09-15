var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //rect(x, 250, 50, 50);
  x += 1;
  //textSize(x);
  text("Life Is Good", x, 250);

  if (x > width){
    x = -500;

  }

}
