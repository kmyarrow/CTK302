let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
}

function draw() {

  switch(state){

    case 0:
    background('red');
    text("Why did the chicken\ncorss the road?", 250, 250);
    // increment the timer varaible
    timer++;
    //if timer is greater then 200
    if (timer > 200){
      //make it go to state 1
      state = 1;
      timer = 0;
  }
    break;

    case 1:
    background('blue');
    text("to get to the other side", 250, 250);
    break;
  }

}
