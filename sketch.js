var hr,mn,sec

function setup() {
  createCanvas(1000,800);
  
}

function draw() {
  background("black");  

  angleMode(DEGREES);

hr= hour();
mn= minute();
sec= second();

hrAngle=map(hr%12,0,12,0,360);
mnAngle=map(mn,0,60,8,360);
secAngle=map(sec,0,60,0,360);



translate(500,400);
rotate(-90)

Fill("yellow");
arc(0,0,540,540,mn*6,PI);
fill("black");
arc(0,0,520,520,PI,PI);


Fill("blue");
arc(0,0,520,520,hr*30,PI);
fill("black");
arc(0,0,500,500,PI,PI);

Fill("green");
arc(0,0,500,500,sec*6,PI);
fill("black");
arc(0,0,480,480,PI,PI);

Push();

rotate(hrAngle);
stroke("purple");
strokeWeight(7);
line(0,0,100,0);



pop();

push();
rotate(mnAngle);
stroke("cyan");
strokeWeight(7);
line(0,0,150,0);
pop();

push();
rotate(secAngle);
stroke("red");
strokeWeight(7);
line(0,0,200,0);
pop();



console.log(hr+" "+mn+" "+sec+" ");

  drawSprites();
}