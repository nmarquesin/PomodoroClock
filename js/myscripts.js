

$(document).ready(function(){

  var workMinutes = 25;
  var paused = true;
  var progressValue = 0;
  var totalTime = 25;

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
            workMinutes = parseInt(minutes, 10) + parseInt(seconds, 10)/60;
            console.log(workMinutes, "workMinutes", seconds, "seconds");
            paused = true;
          });

          $("#btnReset").click(function() {
            workMinutes = 25;
            totalTime = 25;
            paused = true;
            $("#workTime").html(formatTime());
            clearInterval(myTimer);
          });

          function updateProgress() {
            var elapsedTime = -(parseInt(minutes, 10)*60 + parseInt(seconds, 10))+(totalTime*60);
            progressValue = Math.floor((elapsedTime/(totalTime*60))*100);
            console.log(progressValue, "% elapsed seconds: ", elapsedTime, "total minutes: ", totalTime);
            return progressValue;
          }

          $("#progressBar").html('<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="'+updateProgress()+'" aria-valuemin="0" aria-valuemax="100" style="width: '+updateProgress()+'%;">'+updateProgress()+'%</div>');

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
      totalTime += 1;
      console.log(workMinutes);
      $("#workTime").html(formatTime());
    }
  });

  $("#btnMinusWork").click(function() {
    if (workMinutes > 5 && paused === true) {
      workMinutes -= 1;
      totalTime -= 1;
      console.log(workMinutes);
      $("#workTime").html(formatTime());
    }
  });

  function formatTime() {//this funciton needs work
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
