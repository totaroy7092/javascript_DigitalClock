const DigitalClock = () =>{

    //call the time;
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeFarmat = "PM";

    // time formating;
    if(hours == 0){
        hours = 12
    }
    if( hours > 12){
        hours = hours -12;
        timeFarmat = "PM"
    }
    //before add the zero;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //Display the time;
    let fainalTime = (`${hours}:${minutes}:${seconds}`);
    document.querySelector("#time").textContent = fainalTime;
    document.querySelector("#timeFarmat").textContent = timeFarmat;
    //setInterval par seconds refresh HTML  the page;
    setInterval(DigitalClock,1000)
}

DigitalClock();