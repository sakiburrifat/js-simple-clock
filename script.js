

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











// setInterval(somoy, 1000)

// function somoy() {
//     const myDate = new Date();
//     const hour = myDate.getHours();
//     const minute = myDate.getMinutes();
//     const second = myDate.getSeconds();
//     const myWatch = document.getElementById('time');
//     hour <= 12 ? myWatch.innerText = hour + ":" + minute + ":" + second + "  AM" : myWatch.innerText = hour - 12 + ":" + minute + ":" + second + "  PM"
// }








// setInterval(myTimer, 1000);

// function myTimer() {
//     const date = new Date();
//     console.log(date)
//     document.getElementById("time").innerHTML = date.toLocaleTimeString();
//     console.log(date.toLocaleTimeString());
// }