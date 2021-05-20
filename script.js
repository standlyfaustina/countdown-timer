const daysEl =document.getElementById('days')
const hoursEl =document.getElementById('hours')
const minsEl =document.getElementById('mins')
const secEl =document.getElementById('sec')

const newYears ="1 Jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) %24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days
hoursEl.innerHTML = formatTime(hours)
minsEl.innerHTML = formatTime(mins)
secEl.innerHTML = formatTime(sec)


}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000)