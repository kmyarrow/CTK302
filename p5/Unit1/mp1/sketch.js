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
//     //first loc
//     fill("black")
//            ellipse(251,175,60,60);
//            ellipse(251,210,60,60);
//            ellipse(251,250,60,60);
//            ellipse(251,300,60,60);
//            ellipse(251,330,60,60);
//            ellipse(251,370,60,60);
//            ellipse(251,410,60,60);
//            ellipse(251,430,60,60);
//            ellipse(251,470,60,60);
//            ellipse(251,510,60,60);
//            ellipse(251,540,60,60);
//            ellipse(251,570,60,60);
//            ellipse(251,610,60,60);
//            ellipse(251,640,60,60);
//            ellipse(251,670,60,60);
//            ellipse(251,700,60,60);
//
//
//
//            ellipse(183,223,60,60);
//            ellipse(215,186,60,60);
//            ellipse(286,142,60,60);
//            ellipse(333,129,60,60);
//            ellipse(434,129,60,60);
//            ellipse(474,134,60,60);
//            ellipse(586,222,60,60);
//            ellipse(584,180,60,60);
//            ellipse(614,258,60,60);
//            ellipse(166,260,60,60);
//            ellipse(186,564,60,60);
//            ellipse(300,640,60,60);
//            ellipse(299,696,60,60);
//            ellipse(298,751,60,60);
//           ellipse(349,649,60,60);
//           ellipse(342,704,60,60);
//           ellipse(392,699,60,60);
//           ellipse(456,698,60,60);
//           ellipse(451,745,60,60);
// ellipse(399,652,60,60);
// ellipse(606,532,60,60);
// ellipse(493,636,60,60);
// ellipse(440,650,60,60);
// ellipse(187,615,60,60);
// ellipse(182,666,60,60);
// ellipse(185,704,60,60);
// ellipse(608,584,60,60);
// ellipse(605,637,60,60);
// ellipse(609,695,60,60);

  //head
  fill(130, 87, 38);
  ellipse(223, 171, 200, 300) ;
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
