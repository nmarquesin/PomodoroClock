

$(document).ready(function(){

  var workMinutes = 45;
  var timerOn = false;

  function startTimer(duration, display) {
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
          });

          $("#btnReset").click(function() {
            clearInterval(myTimer);
            workMinutes = 45;
            $("#workTime").html("<span id=\"time\">"+workMinutes.toString()+"</span> min");
          });

      }, 1000);


  }

/*
  jQuery(function ($) {
      var fiveMinutes = 60 * 5,
          display = $('#time');
      startTimer(fiveMinutes, display);
  });
*/
  $("#time").html(workMinutes.toString());

  $("#btnGo").click(function() {
    var fiveMinutes = 60 * workMinutes;
    display = $('#workTime');
    startTimer(fiveMinutes, display);



  });

  $("#btnPlusWork").click(function() {
    if (workMinutes < 60) {
      workMinutes += 1;
      console.log(workMinutes);
    }
    $("#time").html(workMinutes.toString());
  });

  $("#btnMinusWork").click(function() {
    if (workMinutes > 5) {
      workMinutes -= 1;
      console.log(workMinutes);
    }
    $("#time").html(workMinutes.toString());
  });

});
