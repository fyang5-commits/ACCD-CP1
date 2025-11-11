let x = 100;

function setup() {
  createCanvas(808, 608);
  frameRate(30);
}

function draw() {
  background(0, 100, 255 );
  
  for(let x= 0; x <width; x +=50) {
    for(let y = 0; y < height; y +=50) {
        let size = map(noise(x * 0.01, y * 0.01, frameCount * 0.01), 0, 1, 10, 40)
      fill ( x, y, 200);
      rect (x, y, 30, 30)
      circle (x, y, size);
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