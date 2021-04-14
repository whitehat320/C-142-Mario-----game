noseX = 0;
noseY = 0;
GameStatus = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCanvas(VIDEO);
	video.size(600,300);
	video.parent('game_console');

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log('Model Loaded');
}

function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + " noseY = " + noseY);
	}
}

function startGame(){
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game is loading";
	
}

function game(){
	console.log("noseX = " + noseX + " noseY = " + noseY);
}



