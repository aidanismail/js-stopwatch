
//deklarasi var
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.getElementById('.timer');
let int = null;

// button-start
document.getElementById('button-start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

//button-stop
document.getElementById('button-stop').addEventListener('click', ()=>{
    clearInterval(int);
});

//button-reset
document.getElementById('button-reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00 : 000 ';
});

//main function
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}