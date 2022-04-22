video = "";

function preload(){
    video = createCapture('video.mp4');
    video.hide();
}

function setup(){
   canvas= createCanvas(480,380);
   canvas.center();
}

function draw(){
    image(video,0,0,480,380);

}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelLoaded(){
    console.log("Model is loaded!");
    status = true;
    video.speed(1);
    video.loop();
    video.volume(0);
    
}