let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24);
}

function draw() {

  switch (state) {
    case 0:
    background('red');
    text("state 0", 250 , 250);
        timer = timer + 1 ; 
        if (timer > 5*60) { 
           state = 1 ; 
            timer = 0 ; 
          } 
    break;

    case 1:
    background('green');
    text("state 1", 250 , 250);
    break;

    case 2:
    background('blue');
    text("state 2", 250 , 250);
    break;

    case 3:
    background('yellow');
    text("state 3", 250 , 250);
    break;

    case 4:
    background('white');
    text("state 4", 250 , 250);
    break;

    case 5:
    background('pink');
    text("state 5", 250 , 250);
    break;
  }
}


function mouseReleased() {
  state++;
  if (state > 5){
    state = 0;
  }

}
