
//  Simple Timer Solution

//  Step 1:
//  Use the following link inside the Audio function below:
//  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
var audio = new Audio("raven.mp3");
var timeLeftElem = $("#time-left");
var timeLeft = 15;
var ONE_SECOND = 1000;
var currentTimeout = null;

function doTimeCheck(seconds) {
  var output = "About " + seconds + " Seconds Left!";
  if (seconds <= 0) {
    output = "Time's up!";
    audio.play();
  }
  var header = $('<h2>');
  header.text(output);
  timeLeftElem.append(header);
  console.log(output);
}

//another possible way to do this:
//HINT *setInterval!*
function countDown() {
  if (timeLeft > 4) {
    setTimeout(function fiveSecondIteration() {
      timeLeft -= 5;
      countDown();
    }, 5 * ONE_SECOND);
  } else if (timeLeft > 0) {
    setTimeout(function lastIteration() {
      timeLeft = 0;
      countDown();
    }, timeLeft * ONE_SECOND);
  }
  doTimeCheck(timeLeft);
}

countDown();
