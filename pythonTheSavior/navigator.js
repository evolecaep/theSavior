//links
economyLink="economy.html";
politicsLink="politics.html";
artLink="art.html";

let resizeX;

//images
let filledButton;

let eEmpty;
let pEmpty;
let aEmpty;

let eFilled;
let pFilled;
let aFilled;

let button1;
let button2;
let button3;

//for button
let filling;
let fillingE;
let fillingP;
let fillingA;


function preload() {
filledButton=loadImage('graphic/button_filled.png');
eEmpty=loadImage('graphic/button_economy_empty.png');
pEmpty=loadImage('graphic/button_politics_empty.png');
aEmpty=loadImage('graphic/button_art_empty.png');
eFilled=loadImage('graphic/button_economy_filled.png');
pFilled=loadImage('graphic/button_politics_filled.png');
aFilled=loadImage('graphic/button_art_filled.png');
}

function setup() {
    createCanvas(windowWidth-33, 1100);
    resizeX=(width-1200)/2;

    //for button
    button1=createImage(200,200);
    button2=createImage(200,200);
    button3=createImage(200,200);

    fillingE=0;
    fillingP=0;
    fillingA=0;
}

function draw(){
  createCanvas(windowWidth-33, 1100);
  background(10, 10, 10);
  findCanvas();
  buttonE(200,300);
  buttonP(800,300);
  buttonA(500,750);
}

function findCanvas(){
  resizeX=(width-1200)/2;
}

function windowResized(){
  resizeCanvas(windowWidth-33,600);
}

function buttonE(_x, _y){
  //get values
  x=_x+resizeX;
  y=_y;
  w=200;
  h=200;
  //function
  if(mouseIsPressed==true){
    if(mouseX>x&& mouseX<x+w){
      if(mouseY>y && mouseY<y+h){
        location.href=economyLink;
      }
    }
  }
  //image1st
  image(eEmpty,x,y);

  //filling
  noStroke();
  fill(47,255,47);
  rectMode(CORNER);
  if(fillingE<200){
    rect(x,y+200-fillingE,200,fillingE);
  } else {
    rect(x,y,200,200);
  }

  let sp=10;
  if(mouseX>x&& mouseX<x+w){
      if(mouseY>y && mouseY<y+h){
      fillingE=fillingE+sp;
    } else {
      fillingE=fillingE-sp;
    }
  } else {
    fillingE=fillingE-sp;
  }
  //reset filling
  if (fillingE<0){
    fillingE=0;
  }
  if (fillingE>455){
    fillingE=455;
  }

  if (fillingE>200){
    image(eFilled,x,y);
    noStroke();
    fill(47,255,47,255-(fillingE-200));
    rect(x,y,200,200);
  }

  //black
  noStroke();
  fill(10,10,10);
  rect(x-1,y,15,200);
  rect(x+186,y,15,200);
  triangle(x+13,y,x+13,y+50,x+100,y);
  triangle(x+13,y+200,x+13,y+150,x+100,y+200);
  triangle(x+187,y,x+187,y+50,x+100,y);
  triangle(x+187,y+200,x+187,y+150,x+100,y+200);
}
function buttonP(_x, _y){
  //get values
  x=_x+resizeX;
  y=_y;
  w=200;
  h=200;

  //function
  if(mouseIsPressed==true){
    if(mouseX>x&& mouseX<x+w){
      if(mouseY>y && mouseY<y+h){
        location.href=politicsLink;
      }
    }
  }

  //image1st
  image(pEmpty,x,y);

  //filling
  noStroke();
  fill(47,255,47);
  rectMode(CORNER);
  if(fillingP<200){
    rect(x,y+200-fillingP,200,fillingP);
  } else {
    rect(x,y,200,200);
  }

  let sp=10;
  if(mouseX>x&& mouseX<x+w){
      if(mouseY>y && mouseY<y+h){
      fillingP=fillingP+sp;
    } else {
      fillingP=fillingP-sp;
    }
  } else {
    fillingP=fillingP-sp;
  }
  //reset filling
  if (fillingP<0){
    fillingP=0;
  }
  if (fillingP>455){
    fillingP=455;
  }

  if (fillingP>200){
    image(pFilled,x,y);
    noStroke();
    fill(47,255,47,255-(fillingP-200));
    rect(x,y,200,200);
  }

  //black
  noStroke();
  fill(10,10,10);
  rect(x-1,y,15,200);
  rect(x+186,y,15,200);
  triangle(x+13,y,x+13,y+50,x+100,y);
  triangle(x+13,y+200,x+13,y+150,x+100,y+200);
  triangle(x+187,y,x+187,y+50,x+100,y);
  triangle(x+187,y+200,x+187,y+150,x+100,y+200);
}
function buttonA(_x, _y){
  //get values
  x=_x+resizeX;
  y=_y;
  w=200;
  h=200;

  //function
  if(mouseIsPressed==true){
    if(mouseX>x&& mouseX<x+w){
      if(mouseY>y && mouseY<y+h){
        location.href=artLink;
      }
    }
  }

  //image1st
  image(aEmpty,x,y);

  //filling
  noStroke();
  fill(47,255,47);
  rectMode(CORNER);
  if(fillingA<200){
    rect(x,y+200-fillingA,200,fillingA);
  } else {
    rect(x,y,200,200);
  }

  let sp=10;
  if(mouseX>x&& mouseX<x+w){
      if(mouseY>y && mouseY<y+h){
      fillingA=fillingA+sp;
    } else {
      fillingA=fillingA-sp;
    }
  } else {
    fillingA=fillingA-sp;
  }
  //reset filling
  if (fillingA<0){
    fillingA=0;
  }
  if (fillingA>455){
    fillingA=455;
  }

  if (fillingA>200){
    image(aFilled,x,y);
    noStroke();
    fill(47,255,47,255-(fillingA-200));
    rect(x,y,200,200);
  }

  //black
  noStroke();
  fill(10,10,10);
  rect(x-1,y,15,200);
  rect(x+186,y,15,200);
  triangle(x+13,y,x+13,y+50,x+100,y);
  triangle(x+13,y+200,x+13,y+150,x+100,y+200);
  triangle(x+187,y,x+187,y+50,x+100,y);
  triangle(x+187,y+200,x+187,y+150,x+100,y+200);
}
