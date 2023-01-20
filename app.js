var DateExpired = new Date("jan 22, 2023 00:00:00").getTime();
let x = setInterval(function stime() {
  var CurrentDate = new Date().getTime();
  var DayRemaining = DateExpired - CurrentDate;
  var days = Math.floor(DayRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(DayRemaining / (1000 * 60 * 60));
  var minutes = Math.floor(DayRemaining / (1000 * 60));
  var seconds = Math.floor(DayRemaining / 1000);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (D < 0) {
    clearInterval(x);
    window.location.href = "intro.html";
  }
}, 0.1);
