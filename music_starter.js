
function preload() {
  // Load the image as bg
  bgImage = loadImage('bg.png'); 
}

function setup() {
  createCanvas(540, 960);
  angleMode(DEGREES);
}
  //background(0);
  //strokeWeight(4)}
  
// vocal, drum, bass, and other are volumes ranging from 0 to 100

  //background(255);

  let firstRun = true

  let Mouth = [];
  function draw_one_frame(words, vocal, drum, bass, other, counter){
    if (firstRun){
      rectMode(CENTER);
      Mouth.push(loadImage('Mouth 1.png'));
      Mouth.push(loadImage('Mouth 2.png'));
      Mouth.push(loadImage('Mouth 3.png'));
      
      firstRun = false
    }

    var VocalFrame = int(map(vocal, 0, 100, 0, 2));
    console.log(VocalFrame);
    push();
    scale(0.5)
    Image(Mouth[VocalFrame], width/2, height/2)
    pop();

  }

































