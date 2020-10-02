let numberOfTouches ;
var img1, img2, img3;
let state = 0;


function setup() {
  createCanvas(800, 800);

  img1 = loadImage("assets/flowers.jpg");
  img2 = loadImage("assets/2fingers.png");
  img3 = loadImage("assets/3fingers.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here
      image(img1, width/2, height/2, 200,200);
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
            // put a picture here
          image(img2, width/2, height/2, 200,200);
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
            // put a picture here
            image(img3, width/2, height/2, 200,200);
      break ;


  }
}

function mouseReleased(){
  state++;
  if(state > 3){
    state = 0;
  }
}
