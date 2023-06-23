function setup(){
    canvas=createCanvas(640,480)
    canvas.position(150,150)
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,230,150,220,200)
    fill(255,0,0);
    stroke(250,0,60)
    circle(50,50,80)
    circle(600,50,80)
    circle(50,425,80)
    circle(600,425,80)
    fill(0,5,0)
    stroke(50,30,50)
    rect(90,40,470,20)
    rect(40,90,20,295)
    rect(90,415,470,20)
    rect(590,90,20,295)
}