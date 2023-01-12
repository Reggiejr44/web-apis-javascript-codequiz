// Script for the entire code quiz project and functions 
// Vars to link java with all files and quiz items
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// start button and function to begin quiz with timer
startBtn.onclick = startQuiz;
function startQuiz() {
  
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  
  questionsEl.removeAttribute("class");

  timerId = setInterval(clockTick, 1000);
  
  timerEl.textContent = time;

  getQuestion();
}

//Function to check and update time
function clockTick() {  
    time--;
    timerEl.textContent = time;
  
    if (time <= 0) {
      quizEnd();
    }
  }

// Functions to get and display all questions with buttons for choices
function getQuestion() {  
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  
    choicesEl.innerHTML = "";
  
  currentQuestion.choices.forEach(function(choice, i) {
  
    var choiceNode = document.createElement("button");

    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}

// Function to check to see if the answer is wrong or right (deducts and updates time) and switches to the next question
function questionClick() {
 
  if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
    feedbackEl.textContent = "Incorrect!";
    feedbackEl.style.color = "red";
    feedbackEl.style.fontSize = "400%";
  } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    feedbackEl.style.fontSize = "400%";
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 3000);
  
  currentQuestionIndex++;  
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

//Ends quiz and switches to end page and shows final score
function quizEnd() {  
  clearInterval(timerId);
  
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");  
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hide");
}

// Gets and saves scores with users initials 
function saveHighscore() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {   
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
   
    var newScore = {
      score: time,
      initials: initials
    };
   
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));   
    window.location.href = "scores.html";
  }
}
function checkForEnter(event) { 
  if (event.key === "Enter") {
    saveHighscore();
  }
}
submitBtn.onclick = saveHighscore;
initialsEl.onkeyup = checkForEnter;