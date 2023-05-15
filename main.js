const stopWatchButton = document.getElementsByClassName('stopWatch')[0];
const startButton = document.getElementsByClassName('startBtn')[0];
const pauseButton = document.getElementsByClassName('pauseBtn')[0];
const continueButton = document.getElementsByClassName('continueBtn')[0];
const resetButton = document.getElementsByClassName('resetBtn')[0];
const myVideo = document.getElementById('video');

let seconds = 0, 
    minutes = 0,
    hours = 0 ;


const start = ( ) => {
    seconds += 1;

    if(seconds === 60){
        seconds = 0;
        minutes += 1;


        if(minutes === 60){
            minutes = 0;
            hours += 1;
        }
    }
    
    const addSecZero = seconds < 10 ? "0" + seconds.toString() : seconds;
    const addMinZero = minutes < 10 ? "0" + minutes.toString() : minutes;
    const addHourZero = hours < 10 ? "0" + hours.toString() : hours;

    stopWatchButton.textContent = addHourZero + ":" + addMinZero + ":" + addSecZero;

}


let interval;
startButton.addEventListener('click', ( ) => {
   interval = setInterval(start , 1000);
});


pauseButton.addEventListener('click', ( ) => {
    clearInterval(interval);
});


continueButton.addEventListener('click',( ) => {
    clearInterval(interval);
    interval = setInterval(start , 1000);
});


resetButton.addEventListener('click',() => {
    clearInterval(interval);
    seconds = 0, minutes = 0, hours = 0;
    interval = setInterval(start , 1000);
})


myVideo.addEventListener('ended', function( ){
    myVideo.currentTime = 0;
    myVideo.play();
})
