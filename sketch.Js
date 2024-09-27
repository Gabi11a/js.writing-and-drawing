function setup() {
    createCanvas(600, 600);
    background("white");
   }
  
  function draw() {
  
  
  stroke("gold");
  fill("cyan");
  
   // console.log(mouseIsPressed);
  
    if(mouseIsPressed){
  rect(mouseX,mouseY,18,15);
    }
  }
  
  