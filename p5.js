noseX=0;
noseY=0;
diff=0;
LR=0;
RR=0;

function draw(){
background("#0,0,0");
document.getElementById("squareSide").innerHTML="Width and height of square is the amount of space between your wrists . It is currently"+diff+"px big"+"SquareBot will follow your nose . your nose is in X coordinate "+noseX+" And your nose Y is in coordinates"+noseY;
stroke("#80ff0");
fill("#000000fd");
square(noseX,noseY,diff);

}
function setup(){
    canvas=createCanvas(350,350);
    canvas.position(750,150);
video=createCapture(VIDEO);
video.size(400,400);
video.position(750,540);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    window.alert("Posenet has loaded,Yay!")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("Nose X="+noseX+"   Nose Y="+noseY);
RR=results[0].pose.rightWrist.x;
LR=results[0].pose.leftWrist.x;
diff=floor(RR-LR);
console.log("Left wrist's X="+LR+"    Right wrist's X="+RR  +"    Difference="+diff);
    }
}