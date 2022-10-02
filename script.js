setInterval(somoy, 1000)

function somoy() {
    const myDate = new Date();
    const hour = myDate.getHours();
    const minute = myDate.getMinutes();
    const second = myDate.getSeconds();
    const myWatch = document.getElementById('time');
    hour <= 12 ? myWatch.innerText = hour + ":" + minute + ":" + second + "  AM" : myWatch.innerText = hour - 12 + ":" + minute + ":" + second + "  PM"
}





// setInterval(myTimer, 1000);

// function myTimer() {
//     const date = new Date();
//     console.log(date)
//     document.getElementById("time").innerHTML = date.toLocaleTimeString();
//     console.log(date.toLocaleTimeString());
// }