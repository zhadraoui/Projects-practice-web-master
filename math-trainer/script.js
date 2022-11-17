var timersCount = 0;
var pause = false; //is timer paused

countTimers();

function countTimers() {
  timersCount++;

  var count = 5;
  var counter = setInterval(timer, 1000);

  function timer() {
    if (!pause) {
      //do something if not paused
      count = count - 1;
      if (count == -1) {
        // window.location.reload();
        display.innerHTML = "<span style='color: red;'>Time is up!" + "</span>";
        pause = true;
        return;
      }

      document.getElementById("timer").innerHTML = count;
    }
  }
}

//up to here: Timer

function sortfunction(a, b) {
  //creates an array to be sorted numerically and ascending
  return a - b;
}

function CheckAnswer() {
  console.log("Selected answer: ", this.textContent);
}

function checkAnswer(evt) {
  if (evt.target.data == answer) {
    // evt.target == button
    display.innerHTML =
      "<span style='color: #3EA055;'>" + quotes1[whichquote1] + "</span>";
    i += 1;
  } else {
    display.innerHTML =
      "<span style='color: red;'>" +
      (quotes2[whichquote2] + "The correct answer is " + answer) +
      "</span>";
  }
}

var number1;
var number2;

number1 = Math.floor(Math.random() * 20 + 1);
number2 = Math.floor(Math.random() * 20 + 1);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = parseInt(number1, 10) * parseInt(number2, 10);

var plusorminus1 = Math.random() < 0.5 ? -1 : 1;
var plusorminus2 = Math.random() < 0.5 ? -1 : 1;
var plusorminus3 = Math.random() < 0.5 ? -1 : 1;
var plusorminus4 = Math.random() < 0.5 ? -1 : 1;
var plusorminus5 = Math.random() < 0.5 ? -1 : 1;
var plusorminus6 = Math.random() < 0.5 ? -1 : 1;
var plusorminus7 = Math.random() < 0.5 ? -1 : 1;

var ansvar1 = answer;
var ansvar2 = answer + plusorminus1 * 2;
var ansvar3 = answer + plusorminus2 * 4;
var ansvar4 = answer + plusorminus3 * 6;
var ansvar5 = answer + plusorminus4 * 8;
var ansvar6 = answer + plusorminus5 * 10;
var ansvar7 = answer + plusorminus6 * 3;

var container = document.getElementById("posansarray");
var posans = [ansvar1, ansvar2, ansvar3, ansvar4, ansvar5, ansvar6, ansvar7];
posans = posans.sort(sortfunction);

//quote depending on the selected answer
var quotes1 = new Array();
quotes1[0] = "Correct";
quotes1[1] = "Awesome";
quotes1[2] = "Great job!";
quotes1[3] = "Very good!";

var quotes2 = new Array();
quotes2[0] = "That is wrong. ";
quotes2[1] = "Not correct. ";
quotes2[2] = "Concentrate! ";

var q1 = quotes1.length;
var whichquote1 = Math.round(Math.random() * (q1 - 1));

var q2 = quotes2.length;
var whichquote2 = Math.round(Math.random() * (q2 - 1));

var text = "";
var i = 0;

for (var j = 0; j < posans.length; j++) {
  (function (val) {
    document.getElementById("counter").innerHTML = text;
    btn = document.createElement("button");
    btn.data = val; // assign the value to compare to an attribute on the button.
    btn.innerHTML = val;
    btn.addEventListener("click", checkAnswer);
    document.body.appendChild(btn);
  })(posans[j]);
}
