let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch (state) {
    case 0:
    background('purple');
    text("Why was 6 afraid of 7?", 250,250);
        break;

  case 1:
  background('orange');
  text("beacause 7, 8(ate) 9!", 250,250);
  break;


  }
}


function mouseReleased(){
  state++;
  if(state > 1){
    state = 0;
  }
}
