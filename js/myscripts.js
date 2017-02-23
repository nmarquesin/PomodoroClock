

$(document).ready(function(){

  var workMinutes = 25;
  var paused = true;

  function startTimer(duration, display) {
      paused = false;
      var timer = duration, minutes, seconds;
      var myTimer = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.text(minutes + ":" + seconds);

          if (--timer < 0) {
              timer = duration;
          }

          $("#btnStop").click(function() {
            clearInterval(myTimer);
            workMinutes = minutes + (seconds/60);
            paused = true;
          });

          $("#btnReset").click(function() {
            workMinutes = 25;
            paused = true;
            $("#workTime").html(formatTime());
            clearInterval(myTimer);
          });

      }, 1000);

  }


  $("#workTime").html(formatTime());

  $("#btnGo").click(function() {
    if (paused === true){
      var fiveMinutes = 60 * workMinutes;
      display = $('#workTime');
      paused = false;
      startTimer(fiveMinutes, display);
    }
  });

  $("#btnPlusWork").click(function() {
    if (workMinutes < 60 && paused === true) {
      workMinutes += 1;
      console.log(workMinutes);
      var countdownValue =
      $("#workTime").html(formatTime());
    }
  });

  $("#btnMinusWork").click(function() {
    if (workMinutes > 5 && paused === true) {
      workMinutes -= 1;
      console.log(workMinutes);
      $("#workTime").html(formatTime());
    }
  });

  function formatTime() {
    if (Math.floor((workMinutes-Math.floor(workMinutes))*60) > 9)
    {
      var formattedTime = Math.floor(workMinutes).toString()+":"+Math.floor((workMinutes-Math.floor(workMinutes))*60).toString();
    }
    else if (Math.floor((workMinutes-Math.floor(workMinutes))*60) === 0)
    {
        var formattedTime = Math.floor(workMinutes).toString()+":0"+ Math.floor((workMinutes-Math.floor(workMinutes))*60).toString();
    }
    return formattedTime;
  }
});
