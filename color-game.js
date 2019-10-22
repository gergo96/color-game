var squares = document.querySelectorAll(".square");
var goal = document.querySelector("#goal");
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var bgColor = "rgb(" + 31 + ", " + 32 + ", " + 33 + ")";
var chosenColor = colors[getRandomInt(0, numberOfSquares - 1)];
goal.innerHTML = chosenColor;

init();

function init(){

setEasyButton();

setHardButton();

setResetButton();

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === chosenColor){
			console.log(this.style.backgroundColor);
			changeColors();
			message.innerHTML = "CORRECT!";
			reset.innerHTML = "Play Again?";
		} else {
			this.style.backgroundColor = bgColor;
			message.innerHTML = "TRY AGAIN!";
		}
	});
}
}

function restart(){
	colors = generateRandomColors(numberOfSquares);
	chosenColor = colors[getRandomInt(0,numberOfSquares - 1)];
	goal.innerHTML = chosenColor;
	h1.style.backgroundColor = "steelblue";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColors(){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = chosenColor;
	}
	h1.style.backgroundColor = chosenColor;
}

function setHardButton(){

hard.addEventListener("click", function(){
	numberOfSquares = 6;

	restart();
	easy.classList.remove("selected");
	hard.classList.add("selected");

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

}

function setEasyButton(){
	easy.addEventListener("click", function(){
	numberOfSquares = 3;

	restart();
	hard.classList.remove("selected");
	easy.classList.add("selected");

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	});
}

function setResetButton(){
	reset.addEventListener("click", function(){
	restart();
	reset.innerHTML = "New Colors";
	message.innerHTML = "";

	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});
}

function generateRandomColors(num){
var array = [];

for (var i = 0; i < num; i++){
	var red = getRandomInt(0,255);
	var green = getRandomInt(0,255);
	var blue = getRandomInt(0,255);
	var rgb = "rgb(" + red + ", " + green + ", " + blue + ")"
	array.push(rgb);
}
return array;
}