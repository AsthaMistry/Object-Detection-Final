status = "";
paint_img = "";

function preload() {
    paint_img = loadImage("paint_box.jpg");
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
    object_detector.Detect(paint_img, gotesults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
    
}

function draw(){
    image(paint_img, 0, 0, 640, 350);
}