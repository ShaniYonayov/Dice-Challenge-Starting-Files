var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg = "./images/dice" + randomNumber1+ ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImg);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg = "./images/dice" + randomNumber2+ ".png";
var img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src", randomDiceImg);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML ="🚩Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML ="Player 2 Wins🚩!"
}
else{
    document.querySelector("h1").innerHTML ="Draw!"
}