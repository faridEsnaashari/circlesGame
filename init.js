ginline_id=null;
guser_id=null;
function init(inline_id,user_id){
    // document.addEventListener("DOMContentLoaded",function(){
        document.querySelector("svg").style.display="none";
        document.querySelector("#timerShowSec").style.display="none";
        document.querySelector("#timerShowMin").style.display="none";
        document.querySelector("#seprator").style.display="none";
        document.querySelector("#gameOver").style.display="none";
        saveUserData(inline_id,user_id);
    // });
}


function saveUserData(inline_id,user_id){
    ginline_id=inline_id;
    guser_id=user_id;
}
