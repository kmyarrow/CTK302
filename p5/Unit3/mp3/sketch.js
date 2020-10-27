let cars = [];
let i1, i2, i3, i4;
let bg;
let images = [];
let maxCars = 20;
let frogPros;
let state = 0;
let timer = 0;
let bg2;


function setup() {
  createCanvas(700, 700);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);


  //songplay
  pinkthing = loadImage("assets/amoungus.png");

  i1 = loadImage("assets/greenthing.png");
  i2 = loadImage("assets/lightthing.png");
  i3 = loadImage("assets/purplething.png");
  i4 = loadImage("assets/redthing.png");

  //f1 = loadFont("assets/KGChasingCars.ttf");
  //f2 = loadFont("assets/rock.ttf");
  //f3 = loadFont("assets/spaceage.ttf");

  bg = loadImage("assets/stars.jpg");
  bg2 = loadImage("assets/intro.jpg");



  images = [i1, i2, i3,i4];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch (state) {
    case 0:
      //background('grey');
      image(bg2, width / 2, height / 2, width, height);
      textSize(60);
      fill('white');
      text("Welcome to my game!", width / 2, height / 2);
      break;

    case 1:
      game();
      timer++;
      if (timer > 20 * 60) {
        state = 3;
      }
      break;

    case 2:
      background('red');
      textSize(60);
      text("YAY YOU WON!!", width / 2, height / 2);
      break;

    case 3:
      background('purple');
      textSize(60);
      text("BOO YOU LOST!", width / 2, height / 2);
      break;

  }

}

function game() {

  image(bg, width / 2, height / 2, width, height);

  // display and move objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 70) {
      cars.splice(i, 1);
    }

  }

  if (cars.length == 0) {
    state = 2;
  }

  //draw the frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(pinkthing, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}


function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //they won!
      resetTheGame();
      state = 0;
      break;

    case 3: //they lost
      resetTheGame();
      state = 0;
      break;
  }
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.size = random(40, 80);
    this.c = color(random(150, 200), random(50), random(50));
    this.images = i4;


    let b = floor(random(4));

    this.images = images[b];
  }


  // methods

  display() {
    //rect(this.pos.x, this.pos.y, 50, 25);
    //fill(this.c);
    //textFont(this.font);
    //textSize(this.size);
    //text("vote", this.pos.x, this.pos.y);
    image(this.images, this.pos.x, this.pos.y, 50, 50);
    //image(lightthing,this.pos.x, this.pos.y, 50,50 );
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
