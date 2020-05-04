var date = new Date;
var hours = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();


setInterval(function() {
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (hours == 24) {
        hours = '00';
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (minute == 60) {
        minute = '00';
        hours++;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (second == 60) {
        second = '00'
        minute++;
        // second++;
    }
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.querySelector('.date').innerHTML = date.getUTCFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + days[date.getDay()]
    document.querySelector('.time').innerHTML = hours + ' : ' + minute + ' : ' + second;
    second++;
    minute = parseInt(minute);
}, 1000);