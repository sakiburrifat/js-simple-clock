

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    hour > 12 ? document.getElementById("time").innerText = hour - 12 + " : " + min + " : " + sec + " PM" : document.getElementById("time").innerText = hour + " : " + min + " : " + sec + " AM";

    setTimeout(function () { currentTime() }, 1000);
}

function updateTime(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time;
    }
}

currentTime();