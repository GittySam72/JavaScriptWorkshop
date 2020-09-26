function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        am_pm = "AM";
        if (h > 12) {
            h -= 12;
            am_pm = "PM";
        }
        if (h == 0) {
            h = 12;
            am_pm = "AM";
        } 
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + am_pm;
        var t = setTimeout(startTime, 500);
        }
function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
        }
    