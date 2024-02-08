narizX = 0;
narizY = 0;
diferenca = 0;
pulsodirX = 0;
pulsoesqueX = 0;

function setup() {
  video = createCapture(VIDEO);video.size(550, 550);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("o poseNet foi inicializado");
}

function gotPoses(result) {
  if (result.length > 0) {
    narizX = result[0].pose.nose.x;
    narizY = result[0].pose.nose.y;

    pulsoesqueX = result[0].pose.leftWrist.x;
    pulsodirX = result[0].pose.rightWrist.x;

    diferenca = floor(pulsoesqueX - pulsodirX);
  }
}
function draw() {
  background("blue");
  document.getElementById("pedro").innerHTML;
    "largura e altura serão de " + diferenca + "px";
  textSize(diferenca);
  stroke("black");
  text('pedro',50,400);
}
