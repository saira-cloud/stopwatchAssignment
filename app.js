var min = 00;
var sec = 00 ;
var msec = 00;
var interval;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

function timer(){
    msec++;
    msecHeading.innerHTML = msec;

    if(msec >= 100){
        sec++
        secHeading.innerHTML = (sec < 10 ? "0" + sec : sec);
        msec = 00;
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = (min < 10 ? "0" + min : min);
        sec = 00;
    }
}
function start(){

    if(!interval){
        interval = setInterval(timer, 10)

    }
     
   

}

function pause(){
    clearInterval(interval);
    interval=false;
}

function reset(){
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML= min + "0";
    secHeading.innerHTML= sec + "0";
    msecHeading.innerHTML=msec + "0";
    pause();



}




// console.log(document.childNodes[1].childNodes[2].childNodes[]);


// var a = document.getElementById("pappa");
// console.log(a.childNodes[1].nodeValue)


// function disable() {
//     document.getElementById("myBtn").disabled = true;
//   }


