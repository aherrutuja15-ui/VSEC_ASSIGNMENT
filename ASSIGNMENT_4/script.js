function showTime() {

    let d = new Date();

    // Time
    let time = d.toLocaleTimeString();

    // Date with Year
    let date = d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    // Day
    let day = d.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    document.getElementById("clock").innerHTML = time;

    document.getElementById("date").innerHTML = date;

    document.getElementById("day").innerHTML = day;
}

setInterval(showTime, 1000);

showTime();