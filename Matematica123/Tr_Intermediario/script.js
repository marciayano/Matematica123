function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var pomodoro = 60 * 25,
      display = document.querySelector('#time');
  startTimer(pomodoro, display);
};

function submit() {
  var information = document.getElementById("information");
  if (information.style.display === 'none') {
      information.style.display = 'block';
  } else {
      information.style.display = 'none';
  }
}