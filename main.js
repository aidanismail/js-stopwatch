
//deklarasi variable
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;
let btnStart = document.getElementById('button-start')
let btnStop = document.getElementById('button-stop')
let btnReset = document.getElementById('button-reset')

// function button-start saat di klik
btnStart.onclick = function (){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10); 
}

// function button-stop saat diklik
btnStop.onclick = function(){
    clearInterval(int);
}

// function button-reset saat diklik
btnReset.onclick = function(){
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00 : 000 ';
}

//main function & kondisi
function displayTimer(){
    //penambahan miliseconds
    milliseconds+=10;
    // cara kerja waktu normal
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

 // menekankan kondisi waktu  2 digit  
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