let x = 100;

function setup() {
  createCanvas(808, 608);
}

function draw() {
  background(0, 100, 255 );
  
  for(let x= 0; x <width; x +=50) {
    for(let y = 0; y < height; y +=50) {
      rect (x, y, 30, 30)
      circle (x, y, 20)
    }
  }
  
  fill (0, 255, 220)
  circle (150, 150, 220)
  
  x = x + sin(frameCount * 0.1) *2;
  
  fill (255, 150, 220)
  rect (x, 300, 50, 100)
  
  fill (255, 255, 0)
  triangle (100, 100, 300, 100, 200, 300)
}