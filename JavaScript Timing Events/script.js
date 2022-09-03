const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");

let timeoutInstance;
let intervalInstance;

function starTimeout()
{
   timeoutInstance =  setTimeout(function(){
       timeout.innerHTML = "3 Seconds over!"
    }, 3000);
}

function stopTimeout()
{
   clearTimeout(timeoutInstance);
}

function startInterval()
{
    intervalInstance =  setInterval(function(){
        interval.innerHTML = new Date().toLocaleTimeString();
     }, 1000);
}

function stopInterval()
{
   clearInterval(intervalInstance);
}