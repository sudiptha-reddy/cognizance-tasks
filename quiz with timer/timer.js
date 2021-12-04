var userName = document.querySelector("#userName");
var completedQuiz = document.querySelector("#completedQuiz");
var finalScore = document.querySelector("#finalScore");
var scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
var submitScore = document.querySelector("#submitScore");
var secondsLeft = 51;

// TIMER
function startTimer() {
  var interval = setInterval(function () {
    secondsLeft--;
    document.querySelector("#timerDisplay").innerHTML = secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(interval); 
      document 
        .querySelector("#activeQuizBox")
        .setAttribute("style", "display: none");
      document
        .querySelector("#timesUpBox")
        .setAttribute("style", "display: block");
    } else if (currentIndex === 5) {
      clearInterval(interval);
      document
        .querySelector("#activeQuizBox")
        .setAttribute("style", "display: none");
      document
        .querySelector("#resultsBox")
        .setAttribute("style", "display: block");

      if (isNaN(score)) {
        finalScore.innerHTML = "Your score is: 0";
      } else {
        completedQuiz.innerHTML = "You made it to the end!";
        finalScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000);
}

// GATHERS USER SCORE TO DISPLAY ON LEADERBOARD
submitScore.addEventListener("click", function (event) {
  event.stopPropagation();

  var userName = userName.value;
  var finalScore = {
    userName,
    score,
  };

  scoreBoard.push(finalScore);
  localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
});
