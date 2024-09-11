
var sizeX = 50;
var sizeY = 20;
var sizeZ = 100;

function setup(){
createCanvas(540, 960);
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100

  let firstRun = true;
  let Mouth = [];
  let RH = []; //right hand
  let LH = []; //left hand
  let CD

  function draw_one_frame(words, vocal, drum, bass, other, counter){
    if (firstRun){
      rectMode(CENTER);
      CD = loadImage('FallBack.jpg')
      
      RH.push(loadImage('Bass1.png'));
      RH.push(loadImage('Bass2.png'));
      RH.push(loadImage('Bass3.png'));
      RH.push(loadImage('Bass4.png'));

      Mouth.push(loadImage('mouth1.png'));
      Mouth.push(loadImage('mouth2.png'));
      Mouth.push(loadImage('mouth2.5.png'));
      Mouth.push(loadImage('mouth3.png'));

      LH.push(loadImage('Drum1.png'));
      LH.push(loadImage('Drum2.png'));
      LH.push(loadImage('Drum3.png'));
      LH.push(loadImage('Drum4.png'));

      firstRun = false
    }
    
    background(200);
    //image(CD, 75, 45, 250, 250);
    //image(CD, 45, 75, 250, 250);
    
    var VocalFrame = int(map(vocal, 10, 100, 0, 4));
    console.log(VocalFrame);
    push();
    scale(0.2)
    image(Mouth[VocalFrame], width/5, height/0.8)
    pop();

    var BassFrame = int(map(bass, 10, 100, 0, 4));
    console.log(BassFrame);
    scale(0.2);
    image(RH[BassFrame], width/5, height/0.8)
    pop(); 

    var DrumFrame = int(map(drum, 10, 100, 0, 4));
    console.log(DrumFrame);
    scale(1);
    image(LH[DrumFrame], width/5, height/0.8)
    pop();

    //draw a CD
    strokeWeight(1.2);
    stroke(250);
    fill(40);
    //circle(sizeX*35, sizeX*20, sizeX*30);
    circle(sizeX*35, sizeX*20, sizeX*27);
    circle(sizeX*35, sizeX*20, sizeX*22);
    circle(sizeX*35, sizeX*20, sizeX*20);
    circle(sizeX*35, sizeX*20, sizeX*17);

    //cat logo
    stroke(233)
    fill(233)
    ellipse(sizeX*35, sizeX*22, sizeX* 11, sizeX*8)
    triangle(sizeX*32, sizeX*14, sizeX*29.9, sizeX*21, sizeX*35, sizeX*20.5);
    triangle(sizeX*37.5, sizeX*14, sizeX*40.2, sizeX*21, sizeX*35, sizeX*20.5);

    //cat face
    strokeWeight(20);
    stroke(20);
    fill(20);
    line(sizeX*31.2, sizeX*21.5, sizeX*32.5, sizeX*22);
    line(sizeX*37.2, sizeX*22, sizeX*38.5, sizeX*21.5);

    strokeWeight(10);
    stroke(100)
    line(sizeX*34.7, sizeX*21, sizeX*34.7, sizeX*21.5);
    line(sizeX*35.2, sizeX*21, sizeX*35.2, sizeX*21.5);

    stroke(245);
    fill(245);
    circle(sizeX*34, sizeX*23, sizeY*5);
    circle(sizeX*35.8, sizeX*23, sizeY*5);

    //image(CD, sizeY*8, sizeY*17, sizeZ*13, sizeZ*13);


  }

 


































