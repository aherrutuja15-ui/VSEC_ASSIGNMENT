function showTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

setInterval(showTime, 1000);
showTime();