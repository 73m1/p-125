leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.position(550,150)

    video = createCapture(VIDEO);
    video.size(550,550);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#FFA500');
    textSize(difference);
    fill("seagreen");
    stroke("cadetblue");
    text('Jemuel',50,400)
}

function modelloaded() {
    console.log("Initialised successfully");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;     

        difference = floor(leftWristX = rightWristX)

    }
}