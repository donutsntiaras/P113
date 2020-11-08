function preload() {}

function setup() {
canvas=createCanvas(500, 480);
canvas.position(500, 200);
video=createCapture(VIDEO);
video.hide();
}

function draw() {

    rect(40, 75, 20, 300);
    fill(0, 50, 34);

    rect(440, 75, 20, 300);
    fill(0, 50, 34);

    rect(70, 35, 370, 20);
    fill(0, 50, 34);

    rect(70, 390, 370, 20);
    fill(0, 50, 34);

    circle(450, 50, 50);//Top-right
    fill(153, 255, 204); 

    circle(450, 400, 50);//Bottom-right
    fill(153, 255, 204);

    circle(50, 400, 50);//Bottom-left
    fill(153, 255, 204);

    circle(50, 50, 50);//Top-left
    fill(153, 255, 204);
} 

function take_snapshot() {
    save('birthday2020.png');
}
