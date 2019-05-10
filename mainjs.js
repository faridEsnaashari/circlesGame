var circles=[];
var colors=[];
colors[0]='red';
colors[1]='green';
colors[2]='blue';

playerScore=0;
playerColor='red';
document.addEventListener("DOMContentLoaded", ()=>{
    drawPlane();

    for(i=0;i<30;i++){
        circles.push(getCircles("#"+"circle"+i));
        assignOnclick("#"+"circle"+i,onclickFunctionForCircles);
    }



});
function getCircles(id){
    return d3.select(id);
}
function onclickFunctionForCircles(){
    thisCircle=d3.select(this);
    if(thisCircle.style("fill")==playerColor){
        changeCirclesColor();
        playerScore++;
        console.log(playerScore);
    }
    else{
        endGame();
    }
}
function changeCirclesColor(){
    for(i=0;i<30;i++){
        randColor=Math.floor(Math.random()*3);
        d3.select("#"+"circle"+i).style("fill",colors[randColor]);
    }
}
function assignOnclick(id,fun){

    d3.select(id).on("click",fun);
}
function startBtn(){
    playerColor=document.querySelector("select").value;
    document.querySelector("svg").style.display="inline-block";
    document.querySelector("select").style.display="none";
    document.querySelector("button").style.display="none";
    document.querySelector("#discription").style.display="none";
    document.querySelector("#timerShowSec").style.display="inline-block";
    document.querySelector("#timerShowMin").style.display="inline-block";
    document.querySelector("#seprator").style.display="inline-block";
    window.setTimeout(endGame,2000);
    window.setInterval(increseTimer,1000);
}
function increseTimer(){
    min=document.querySelector("#timerShowMin");
    sec=document.querySelector("#timerShowSec");
    secValue=sec.innerHTML;
    minValue=min.innerHTML;
    if(secValue>0){
        secValue--;
        sec.innerHTML=secValue;
    }
    else if(minValue>0){
        minValue--;
        secValue=59;
        sec.innerHTML=secValue;
        min.innerHTML=minValue
    }
    else{
        clearInterval();
    }
}

function endGame(){
    document.querySelector("#seprator").style.display="none";
    document.querySelector("#timerShowMin").style.display="none";
    document.querySelector("#timerShowSec").style.display="none";
    document.querySelector("svg").style.display="none";

    document.querySelector("#gameOver").style.display="block";
    document.querySelector("#gameOver").innerHTML="the game is over...<br>your score is<br>"+playerScore;
}
