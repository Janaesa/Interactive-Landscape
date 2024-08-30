function setup() {
     //Creates a canvas that is 600 pixels wide
    //and 400 pixels high
     createCanvas(600, 400);
    }
    function draw() {
        //pink background
      background(255, 209, 237);
    
    //sun and the top-right corner
    fill("yellow");
    stroke("orange");
    strokeWeight(10);
    circle(550, 50, 100);


    //moon
    stroke(0);//black outline
    strokeWeight(1);//outline thickness
    fill("blue")
    ellipse(50, 40, 35);

    //grass
    stroke(0);//black outline
    strokeWeight(1);//outline thickness
    fill("green");
    rect(0, 200, 600, 200);

    //emojis
    textSize(60)
    text("🐞", 100, 250) //bug
    text("🌸", mouseX, mouseY) //flower
    }