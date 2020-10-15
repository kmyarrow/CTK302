var x = 0;
var state = 0;
var song;
var timer = 0;
var timer1 = 0

function preload(){
  song= loadSound("assets/wepaid.mp3") ;
}

function setup() {
  // put setup code here
  createCanvas(900, 900);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
    background('white');

    fill('black');
    textSize(48);
    text("CLICK THE SCREEN" , width/2, height/2);
    break;


    case 1:
    background('white');
    checkerboard();
    push();
    translate(x, 0);
    //rect(0 , 250 , 50 , 50);
    avatar();
    x = x + 5;
    if (x > width) {
      x = -300;

  timer1++
  if (timer1 > 300)
  timer1 = 0 ;
if (timer1 > 150) {
  timer1 = 0;
// arms go one way ;
} else {
  timer = 0;
// arms go the other way;
}
    }
    pop();

song.play();
state = 2;
    break;


    case 2:
    background('white');
    checkerboard();

    push();
    translate(x, 0);
    //rect(0 , 250 , 50 , 50);
    avatar();
    x = x + 5;
    if (x > width) {
      x = -300;
    }
    pop();

    timer++;
    if (timer > 60 * 60){
      timer = 0;
      song.pause();
      state = 0;
    }
    break;
  }



}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}

function avatar() {
  strokeWeight(4);
  push();
  translate(0, 100);

  if (mouseIsPressed) {



    push();

    //Arms
    fill('white')
    //Right
    quad(520, 342, 520, 400, 645, 455, 668, 404)
    //left
    quad(350, 382, 350, 440, 495, 495, 515, 446);

    //Body
    fill('gray')
    rect(350, 315, 200, 125);
    //head
    fill('black')
    ellipse(450, 405, 100, 125);
    fill('darkgray')
    ellipse(450, 380, 110, 110);
    fill('black')
    ellipse(450, 380, 5, 5);
    pop();


  } else {




    push();
    //arms
    fill('white')
    //left
    quad(380, 342, 380, 400, 255, 455, 232, 404)
    //Right
    quad(550, 382, 550, 440, 405, 495, 386, 446);
    //Body
    fill('gray')
    rect(350, 315, 200, 125);
    //head
    fill('black')
    ellipse(450, 405, 100, 125);
    fill('darkgray')
    ellipse(450, 380, 110, 110);
    fill('black')
    ellipse(450, 380, 5, 5);
    pop();

    //End else
  }
}



function mouseIsPressed() {
  console.log(mouseX + ", " + mouseY);
}

function checkerboard() {
  if (mouseIsPressed) {

    //BLUE CIRCLES
    fill('green')
    ellipse(75, 75, 150, 150)
    ellipse(375, 75, 150, 150)
    ellipse(675, 75, 150, 150)
    ellipse(225, 225, 150, 150)
    ellipse(525, 225, 150, 150)
    ellipse(825, 225, 150, 150)
    ellipse(75, 375, 150, 150)
    ellipse(375, 375, 150, 150)
    ellipse(675, 375, 150, 150)
    ellipse(225, 525, 150, 150)
    ellipse(525, 525, 150, 150)
    ellipse(825, 525, 150, 150)
    ellipse(75, 675, 150, 150)
    ellipse(375, 675, 150, 150)
    ellipse(675, 675, 150, 150)
    ellipse(225, 825, 150, 150)
    ellipse(525, 825, 150, 150)
    ellipse(825, 825, 150, 150);
    //RED CIRCLES
    fill('pink')
    ellipse(225, 75, 150, 150)
    ellipse(525, 75, 150, 150)
    ellipse(825, 75, 150, 150)
    ellipse(75, 225, 150, 150)
    ellipse(375, 225, 150, 150)
    ellipse(675, 225, 150, 150)
    ellipse(225, 375, 150, 150)
    ellipse(525, 375, 150, 150)
    ellipse(825, 375, 150, 150)
    ellipse(75, 525, 150, 150)
    ellipse(375, 525, 150, 150)
    ellipse(675, 525, 150, 150)
    ellipse(225, 675, 150, 150)
    ellipse(525, 675, 150, 150)
    ellipse(825, 675, 150, 150)
    ellipse(75, 825, 150, 150)
    ellipse(375, 825, 150, 150)
    ellipse(675, 825, 150, 150);
  } else {

    fill('orange')
    rect(0, 0, 150, 150)
    rect(300, 0, 150, 150)
    rect(600, 0, 150, 150)
    rect(150, 150, 150, 150)
    rect(450, 150, 150, 150)
    rect(750, 150, 150, 150)
    rect(0, 300, 150, 150)
    rect(300, 300, 150, 150)
    rect(600, 300, 150, 150)
    rect(150, 450, 150, 150)
    rect(450, 450, 150, 150)
    rect(750, 450, 150, 150)
    rect(0, 600, 150, 150)
    rect(300, 600, 150, 150)
    rect(600, 600, 150, 150)
    rect(150, 750, 150, 150)
    rect(450, 750, 150, 150)
    rect(750, 750, 150, 150);

    //BLUE SQUARES
    fill('yellow')
    rect(150, 0, 150, 150)
    rect(450, 0, 150, 150)
    rect(750, 0, 150, 150)
    rect(0, 150, 150, 150)
    rect(300, 150, 150, 150)
    rect(600, 150, 150, 150)
    rect(0, 450, 150, 150)
    rect(300, 450, 150, 150)
    rect(600, 450, 150, 150)
    rect(150, 300, 150, 150)
    rect(450, 300, 150, 150)
    rect(750, 300, 150, 150)
    rect(0, 750, 150, 150)
    rect(300, 750, 150, 150)
    rect(600, 750, 150, 150)
    rect(150, 600, 150, 150)
    rect(450, 600, 150, 150)
    rect(750, 600, 150, 150);

  }
}
function touchStarted() {
  getAudioContext().resume();
}
//End Draw
