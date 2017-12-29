//===================VARIABLES=======================
var shoes = 'nike';//unused should we keep?
var person = {
  name: 'Jamima',//unused should we keep?
  currentSteps: 0
}
//===================FUNCTIONS=======================
//define function before the function(s) it is used in.
function step(stepper, log) {
  //variables
  //functions
  function logSteps() {
    console.log(log + ' 1 step.');
  }
  //logic
  stepper.currentSteps++;
}
//define function before the function(s) it is used in.
function logAction(action) {
  console.log("I'm about to " + action);
}
function walk(walker) {
  //variables
  var logLine = "walk!";
  //functions
  //logic
  logAction(logLine);
  for(var i = 0; i < 10; i++) {
    step(runner, logLine);
  }
}
function run(runner) {
  //variables
  var logLine = "run!";
  //functions
  //logic
  logAction(logLine);
  for(var i = 0; i < 10; i++) {
    step(runner, logLine);
  }
}
//===================LOGIC===========================
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    run(person);
  } else {
    walk(person);
  }
}
