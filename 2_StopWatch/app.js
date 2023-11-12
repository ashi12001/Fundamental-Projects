let seconds = 0;
let minutes = 0;
let hours = 0;
const showTimer = document.querySelector(".show_div");
function start() {
  

  function prepend_zeroSeconds() {
    if (seconds < 9) {
      return "0" + seconds;
    }
    return seconds;
  }
  function prepend_zeroMinutes() {
    if (minutes < 9) {
      return "0" + minutes;
    }
    return minutes;
  }
  function prepend_zeroHours() {
    if (hours < 9) {
      return "0" + hours;
    }
    return hours;
  }
  function increase() {
    
    seconds += 1;
    if (seconds > 59) {
      seconds = 0;
      minutes += 1;
      if (minutes > 59) {
        minutes = 0;
        hours += 1;
        if (hours == 24) {
          hours = 0;
        }
      }
    }
    let t = showTimer.innerText;
    showTimer.innerText = `${prepend_zeroHours()}:${prepend_zeroMinutes()}:${prepend_zeroSeconds()}`;

    //function to increase the timer
  }
  let timerStart =setInterval(increase, 1); // function repeating that every  1000 ms
  function stop(){
    clearInterval(timerStart);
  }
  // stopping the timer
  const btnStop = document.querySelector(".btn2");
  btnStop.addEventListener("click",()=>{
    stop();
  })
  
  //reset the timer
  const btnReset = document.querySelector(".btn3");
  btnReset.addEventListener("click",()=>{
    clearInterval(timerStart);
    showTimer.innerText="00:00:00";
  })
  

}

const btn1Start = document.querySelector(".btn1");
btn1Start.addEventListener("click", start);
//Every time a button clicks  in start function SetInterval get called and then increase function get called every second

function stop(){

}