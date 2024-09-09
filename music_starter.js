
function setup() {
createCanvas(540, 960);
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100


  let firstRun = true;
  let Mouth = [];
  let RH = []; //right hand
  let LH = []; //left hand
  function draw_one_frame(words, vocal, drum, bass, other, counter){
    if (firstRun){
      rectMode(CENTER);
      
      RH.push(loadImage('bass1.png'));
      RH.push(loadImage('bass2.png'));
      RH.push(loadImage('bass3.png'));
      RH.push(loadImage('bass4.png'));

      Mouth.push(loadImage('mouth1.png'));
      Mouth.push(loadImage('mouth2.png'));
      Mouth.push(loadImage('mouth2.5.png'));
      Mouth.push(loadImage('mouth3.png'));
      
      LH.push(loadImage('drum1.png'));
      LH.push(loadImage('drum2.png'));
      LH.push(loadImage('drum3.png'));
      LH.push(loadImage('drum4.png'));

      firstRun = false
    }
    
    background(220)
    var VocalFrame = int(map(vocal, 10, 100, 0, 4));
    console.log(VocalFrame);
    push();
    scale(0.2)
    image(Mouth[VocalFrame], width/5, height/1)
    pop();

    var BassFrame = int(map(bass, 10, 100, 0, 4));
    console.log(BassFrame);
    scale(0.2);
    image(RH[BassFrame], width/5, height/1)
    pop(); 

    var DrumFrame = int(map(drum, 10, 100, 0, 4));
    console.log(DrumFrame);
    scale(1);
    image(LH[DrumFrame], width/5, height/1)
    pop(); 


  }


































