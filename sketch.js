function setup() {
  createCanvas(400, 400);
}
let xMax = 400;
let yMax = 400;

let xline = 0;
let yline = 370;

// posizioni iniziali delle case
let xhouse1 = 50;
let xhouse2 = 250;
let xhouse3 = 450; // fuori dallo schermo per entrare dopo

// posizioni palazzi
let xpalazzo1 = 100;
let xpalazzo2 = 350;
let xpalazzo3 = 600; // fuori dallo schermo per entrare dopo


function draw() {
  background(198,233,249);
  fill(255);
  text("mouseX: " + mouseX + ", mouseY: " + mouseY, 10, 20);

  push();

// --- SOLE ---
noStroke();
fill(255, 204, 0); // giallo caldo
ellipse(350, 80, 80, 80); // posizione x,y e diametro

  // --- NUVOLE SEMPLICI ---
noStroke();
fill(255, 255, 255, 200);

// Nuvola 1
ellipse(100, 80, 60, 40);
ellipse(130, 85, 50, 30);
ellipse(70, 85, 50, 30);

// Nuvola 2
ellipse(300, 50, 70, 40);
ellipse(330, 55, 60, 35);
ellipse(270, 55, 60, 35);

// Nuvola 3
ellipse(200, 120, 50, 30);
ellipse(230, 125, 45, 25);
ellipse(170, 125, 45, 25);

   // --- PALAZZI (dietro alle case) ---
  noStroke();
  fill(170, 170, 190); // colore più scuro per la distanza
  rect(xpalazzo1, 110, 80, 290);
  rect(xpalazzo2, 130, 130, 210);
  rect(xpalazzo3, 170, 70, 170);

  // movimento palazzi (più lento delle case)
  xpalazzo1 -= 0.7;
  xpalazzo2 -= 0.7;
  xpalazzo3 -= 0.7;

  // reset palazzi
  if (xpalazzo1 < -80) xpalazzo1 = 400;
  if (xpalazzo2 < -100) xpalazzo2 = 400;
  if (xpalazzo3 < -70) xpalazzo3 = 400;


// --- SFONDO CASE ---
  noStroke();
  fill(200, 180, 160); // colore base case
  rect(xhouse1, 250, 80, 90); // casa 1
  triangle(xhouse1, 250, xhouse1 + 40, 210, xhouse1 + 80, 250);

  rect(xhouse2, 260, 90, 80); // casa 2
  triangle(xhouse2, 260, xhouse2 + 45, 220, xhouse2 + 90, 260);

  rect(xhouse3, 255, 70, 85); // casa 3
  triangle(xhouse3, 255, xhouse3 + 35, 215, xhouse3 + 70, 255);

  // movimento case verso sinistra (più lento)
  xhouse1 = xhouse1 -1.5;
  xhouse2 = xhouse2 -1.5;
  xhouse3 = xhouse3 -1.5;

  // reset delle case quando escono dallo schermo
  if (xhouse1 < -80) xhouse1 = 400;
  if (xhouse2 < -90) xhouse2 = 400;
  if (xhouse3 < -70) xhouse3 = 400;


  //strada
fill(100,125,159);
  rect(0,340,400,100);

  // --- LINEE STRADA ---
  stroke(255);
  strokeWeight(5);

  // prima serie di linee
  line(xline, 370, xline + 100, 370);
  line(xline + 150, 370, xline + 250, 370);
  line(xline + 300, 370, xline + 400, 370);
  line(xline + 450, 370, xline + 550, 370);
 

  // movimento verso sinistra
  xline -= 4;
  if (xline < -150) {
    xline = 0;
  }

  

 // --- MACCHINA ---
strokeWeight(1);
stroke(0); // contorno sottile
fill(255, 0, 0); // corpo rosso

// tetto (rettangolo più piccolo sopra)
rect(145, 280, 80, 25, 5);
// corpo principale (rettangolo arrotondato)
rect(120, 300, 130, 40, 5); // x,y,w,h, arrotondamento angoli


// ruote
stroke(0);
strokeWeight(2);
fill(30); // ruote scure
ellipse(155, 340, 28, 28);
ellipse(225, 340, 28, 28);

// luci anteriori
fill(255, 255, 100); // giallo chiaro
noStroke();
triangle(240, 310, 250, 310, 250, 320);

// finestrini
fill(0, 191, 255);
stroke(0);
strokeWeight(1);
rect(150, 283, 30, 15, 3);
rect(190, 283, 30, 15, 3);



  
  



  pop();

  
}
