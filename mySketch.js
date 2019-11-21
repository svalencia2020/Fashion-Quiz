var Ch;  
var imgParty; 
var imgStayhome;
var imgDress
var click;
var imgCas
var imgRed
var imgBlue
var Casoutfit
var tallyOne
var houseO
var finalO
var houseO
var houseT
var cityL
var cityN
var sweeT
var souR
var netfliX
var youtubE
var tallyTwo
var boxO
var Hay
var Bell
var dti 

/// make another scene for house and two more quiz scenes make tally box for image two make,, tally uppoints 
function preload() {
} 
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100); 
	imgdti = loadImage('dti.jpg');
	imgCh = loadImage('ch.jpg'); 
	click = 0; 
	imgHay = loadImage('hay.jpg')
	imgBell = loadImage('bell.jpg')
	imgParty = loadImage('party.jpg');
	imgStayhome = loadImage('stayhome.jpg');
	imgDress = loadImage('dress.jpg');
	imgCas = loadImage('sweatshirt.jpg'); 
	imgRed = loadImage('red.png'); 
	imgBlue = loadImage('blue.png'); 
	imgCasoutfit = loadImage ('z.jpg')
	tallyOne = 0;
	imgfinalO = loadImage('finaleO.jpg')
	imghouseO = loadImage('house.jpg'); 
	imghouseT = loadImage('houseT.jpg'); 
	imgcityL = loadImage('la.jpg'); 
	imgcityN = loadImage('ny.jpg'); 
	imgsweeT = loadImage('sweet.jpg');
	imgsouR = loadImage('sour.jpg'); 
	imgnetfliX = loadImage('netflix.jpg'); 
	imgyoutubE = loadImage('youtube.png');
	tallyTwo = 0; 
	boxO = mouseX>200 && mouseX<600 && mouseY>200 && mouseY<500; 

} 

function draw() { 
	background(0)
	//Scene 1
	if(click==0){
		textSize(70);
		fill(223, 153, 255)
		textFont('monospace')
		text('Which Outfit Are You Quiz!', 180, 70)
		fill(255)
		noStroke(0);
		rect(0, 100, 1600, 900);
		textSize(30);
		fill(102, 102, 255)
		text('Dressed To Impress?',50,190)
		text('Comfy and Casual?',990,190)
		textSize(40);
		fill(51, 102, 255)
		image(imgdti,50,200,300,400)
		image(imgCasoutfit, 990,200, 300,400)
		textFont('Impact')
		text ('Click Here To Start', 500,160)
		image(imgCh, 420, 200, 500, 300) 

	}
	//Scene 2
	if (click==1){
	
		text('Where do you prefer going?', 450, 70)
		image(imgParty, 200, 200, 400, 300)
		image(imgStayhome, 700,200, 350, 300)

	}
	
   
if (click==2){ 
	
		text('Favorite Celebrity Style?', 450, 70)
		image(imgHay, 200, 200, 400, 300)
		image(imgBell, 700,200, 350, 300)
	
}
	if (click==3) { 
		text('Favorite Color',500,70) 
		image(imgRed, 200, 200, 400, 300)
		image(imgBlue, 700,200, 350, 300)
	}
	
	if(click==4) { 
		text('Place To Live?',500,70) 
		image(imghouseO,700,200,350,300)
		image(imghouseT, 200,200,400,300);
	} 
	
	if(click==5) {
		text('Favorite City?', 500,70) 
		image(imgcityL, 200,200,400,300)
		image(imgcityN, 700,200,400,300)

	} 
	
	if(click==6) {
		text('Sweet or Sour?', 500, 70)
		image(imgsweeT, 700,200,400,300)
		image(imgsouR, 200,200,400,300)
	}
	
	if(click==7) {
		text('Youtube or Netflix?', 500,70) 
		image(imgnetfliX,200,200,400,300)
		image(imgyoutubE ,700,200,400,300)
	}
	if(click>=8 && tallyTwo>tallyOne) {   
			fill(255, 153, 255)
		textSize(49);
		text('Your Personality Matches This Outfit!',200,70)  
		image(imgCasoutfit,100,100,500,600) 
		fill(0); 
		textFont('Monospace');
		fill(0, 255, 0)
		textSize(20);
		text('You have a soft and lovable personality!',660,200)
		text('You can definetly rock a hoodie',660,220)
		text('and jeans look any day of the week!',660,240)
	}
	  
	if(click>=8 && tallyOne>tallyTwo) {   
		textSize(49);
		fill(255, 0, 0) 
		text('Your Personality Matches This Outfit!',100,70)      
		image(imgdti,200,100,500,600)
		fill(0, 255, 255);
		textFont('Monospace');
		textSize(20);
		text('You have an energetic and lovable personality!',730,200)
		text('You can rock a fun dress',730,220)
		text('any day of the week!',730,240)
	} 
	
	  
		

} //end of draw function
function mousePressed() { 
  click = click + 1; 
	//console.log(click);
	background(255);  
	fill(0, 0, 153) 
		 
	console.log("Tally 1: " + String(tallyOne));
	console.log("Tally 2: " + String(tallyTwo));
	if (mouseX>200 && mouseX<600 && mouseY>200 && mouseY<500) {
		tallyOne = tallyOne +1; 
	} 
	
	
	if(mouseX>700 && mouseX<1100  && mouseY>200 && mouseY<500) {
		tallyTwo = tallyTwo +1; 
	}

}