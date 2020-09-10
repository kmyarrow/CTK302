function setup() {
  createCanvas(500, 500);
}

function draw() {
  strokeWeight(4);
  if (mouseIsPressed) {
    background('gray');
  } else {
  background('yellow');
  }
push();
translate(0,100);
//hair
         //  fill(0);
         //  ellipse(518,140,60,60);
         //   ellipse(518,140,60,60);
         //  ellipse(550,173,60,60);
         // ellipse(547,213,60,60);
         //    ellipse(547,250,60,60);
         //    ellipse(547,270,60,60);
         //   ellipse(547,300,60,60);
         //   ellipse(547,330,60,60);
         //   ellipse(547,360,60,60);
         //   ellipse(547,390,60,60);
         //   ellipse(547,420,60,60);
         //   ellipse(547,460,60,60);
         //   ellipse(547,490,60,60);
         //   ellipse(547,520,60,60);
         //   ellipse(547,560,60,60);
         //   ellipse(547,610,60,60);
         //   ellipse(547,650,60,60);
         //   ellipse(547,700,60,60);
         //   ellipse(547,140,60,60);
//
//     //second loc

//head
fill('black');
ellipse(222, 107, 190, 200)


push();
translate(-250,-50);
    fill("black")
           ellipse(383,126,60,60);
           ellipse(383,150,60,60);
           ellipse(383,200,60,60);
           ellipse(383,230,60,60);
           ellipse(383,270,60,60);
pop();

push();
translate(-70,-50);
    fill("black")
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
      arc(222, 280, 120, 100, PI, 0); // frown
  } else {
    arc(222, 220, 130, 110, 0, PI); // smile - (this line is correct)


  }
  strokeWeight(1);
  pop();



}

 function mouseReleased() {
   console.log(mouseX + ',' + mouseY);
 }
