const hourEl = document.getElementById("hourg");
const minEl = document.getElementById("ggs");
const secondsEl = document.getElementById("gds");
const ampmEl = document.getElementById("ampms");

// function to get the data of time from the computer
function updateClock(){
    let hourss = new Date().getHours();
    let minutess = new Date().getMinutes();
    let secondss = new Date().getSeconds();
    
    let ampmg = "AM"

    if(hourss > 12){
        hourss = hourss - 12;
        ampmg = "PM"
    }

    hourss = hourss < 10 ? "0" + hourss + " : ": hourss + " : ";
   minutess =minutess < 10 ? "0" +minutess +" : " :minutess + " : ";
    secondss = secondss < 10 ? "0" + secondss +" : ": secondss + " : ";

    hourEl.innerText = hourss;
    minEl.innerText = minutess;
    secondsEl.innerText = secondss;
    ampmEl, (innerText = ampmg);

    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock()