status = "";
teddy_img = "";

function preload() {
    teddy_img = loadImage("teddy.png");
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_detector.Detect(teddy_img, gotesults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
    
}

function draw(){
    image(teddy_img, 0, 0, 640, 350);
}