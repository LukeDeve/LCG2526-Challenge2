function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);
  text("mouseX: " + mouseX + ", mouseY: " + mouseY, 10, 20);

  push();

  //strada
fill(100,125,159);
  rect(0,340,400,100);

 //macchina corpo
    strokeWeight(0);
    fill(255, 0, 0);
  rect(120, 300, 130, 40);
  rect(145, 280, 80, 20);
  triangle(145,280,145,300,130,300);
  triangle(225,280,225,300,240,300);

  //ruote macchina
  strokeWeight(2);
  stroke(255);
  fill(0)
  ellipse(160,340,30,30);
  ellipse(220,340,30,30);

  //luce macchina
  fill(255,255,0);
  strokeWeight(0);
  triangle(240,310,250,320,250,310);

  //finestrini macchina
  fill(0,191,255);
  rect(150,285,30,15);
  rect(190,285,30,15);


  
  
  



  pop();

  
}
