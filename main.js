
//deklarasi var
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.getElementById('.timer');
let int = null;
let btnStart = document.getElementById('button-start')
let btnStop = document.getElementById('button-stop')
let btnReset = document.getElementById('button-reset')

// button-start
btnStart.onclick = function (){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10); 
}


//button-stop
btnStop.onclick = function(){
    clearInterval(int);
}

//button-reset
btnReset.onclick = function(){
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00 : 000 ';
}

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
 // kondisi waktu   
 let h 
 if (hours<10){
    h = "0" + hours
}   else{
   h = hours
}

let m
if(minutes<10){
    m = "0" + minutes
} else{
    m = minutes
}

let s
if(seconds<10){
    s = "0" +seconds
}else{
    s = seconds
}

 let ms
 if (milliseconds<10){
    ms= "00" + milliseconds
 } else if(milliseconds<100){
    ms= "0" + milliseconds
 } else{
     ms = milliseconds
 }

// akhir operasi
 timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}