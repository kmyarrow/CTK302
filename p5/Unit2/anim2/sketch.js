var x = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);

push();
translate(x , 0);
//rect(0 , 250 , 50 , 50);
avatar();
x = x + 5;
if(x > width){
  x = -300;
}
pop();


}

function avatar() {
  strokeWeight(4);
  if (mouseIsPressed) {
    background('gray');
  } else {
  background('yellow');
  }
push();
translate(0,100);

//head
fill('black');
ellipse(222, 107, 190, 200)

//hair
push();
translate(-250,-50);
    fill('black')
           ellipse(383,126,60,60);
           ellipse(383,150,60,60);
           ellipse(383,200,60,60);
           ellipse(383,230,60,60);
           ellipse(383,270,60,60);
pop();

push();
translate(-70,-50);
    fill('black')
           ellipse(383,126,60,60);
           ellipse(383,150,60,60);
           ellipse(383,200,60,60);
           ellipse(383,230,60,60);
           ellipse(383,270,60,60);
pop();

  //head
  fill(130, 87, 38);
  ellipse(223, 171, 200, 300) ;
  fill('blue');
  rect(175,318,100,200);

  //eyeballs
  fill('white');
  ellipse(188,118,50,50);
  ellipse(259,118,50,50);
  fill('black');
  ellipse(188,118,30,30);
  ellipse(259,118,30,30);

  //nose
    fill('black');
    ellipse(222,200,30,30);


//mouth
strokeWeight(6);
fill(130, 87, 38);
  if(mouseIsPressed){
      arc(222, 280, 110, 100, PI, 0); // frown
  } else {
    arc(222, 220, 120, 110, 0, PI); // smile - (this line is correct)


  }
  strokeWeight(1);
  pop();
}
