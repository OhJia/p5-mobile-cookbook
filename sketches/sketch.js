function setup(){
  var myCan = createCanvas(800, 1000, 'webgl');
  myCan.parent('p5Container');
}

function draw(){
  background(255, 255, 0, 255);

  translate(-400, 0, -600);
  
  normalMaterial();
  rotateX(accelerationX * 0.05);
  rotateY(accelerationY * 0.05);
  box(80, 80, 180);

}