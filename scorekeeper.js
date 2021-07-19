var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var greset = document.getElementById("reset");
var numinput = document.querySelector("input");
var p = document.querySelector("p");
var winingscoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            gameOver = true;
            p1display.classList.add("winner");
        }
        p1display.textContent = p1score;
    }
    
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
            gameOver = true;
            p2display.classList.add("winner");
        }
        p2display.textContent = p2score;
    }
});

greset.addEventListener("click", function(){
   numinput.value = " ";
   winingscoreDisplay.textContent = 5;
   reset();
}); 


function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}

numinput.addEventListener("change", function(){
    winingscoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});