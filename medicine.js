status = "";
med_img = "";

function preload() {
    med_img = loadImage("medicine.png");
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
    object_detector.Detect(med.png, gotesults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
    
}

function draw(){
    image(med_img, 0, 0, 640, 350);
}