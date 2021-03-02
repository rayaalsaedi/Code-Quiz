var questions= document.getElementById("questions");
var btn=document.getElementById("btn");
var startBtn = document.querySelector("#startBtn");
var timer;
var timerCount=75;
var timerElement=document.getElementById("countdown");
var score=0;
var count=50;
var allScores=[];
var currentQuestion= 0;
var questions=[
    {
        question: "A loop should start with?",
        options:["If", "Let", "Curley Brackets", "Square Brackets"],
        correctAnswer: "If"
    },
    {
        question: "A loop that never ends is reffered to as:",
        options:["while", "for", "counted", "infinite"],
        correctAnswer: "infinite",
    },
    {
        question: "What does an array start with?",
        options:["square brackets", "semicolons", "hastag", "let"],
        correctAnswer: "square brackets",
    },
    {
        question: "What does this symbol mean !",
        options:["not", "JS", "nothing", "Id"],
        correctAnswer: "Not",
    },
    {
        question: "Which command stop inifinite loop in cmd",
        options:["CTRL+C", "ESC", "Delete", "Fn"],
        correctAnswer: "CTRL+C",
    },
]
function startQuiz(){
    var body = document.querySelector("#content");
body.setAttribute("class", "invisible")
timerElement.removeAttribute("class", "invisible")
startTimer()
newQuestions()
}
function newQuestions(){
var firstQuestion= questions[currentQuestion]
var title=document.querySelector(".title")
title.textContent=firstQuestion.question
var options=document.querySelector(".options")
options.innerHTML=""
for (var i=0; i<firstQuestion.options.length; i++){
    var btn=document.createElement("button")
    btn.setAttribute("value", firstQuestion.options [i])
    btn.onclick=correctAnswer
    btn.textContent=firstQuestion.options [i]
    options.appendChild(btn)
}
}
function correctAnswer(){
    if (this.value !==questions[currentQuestion].correctAnswer){
        timerCount-=20;
        timerElement.textContent="Time left:" + timerCount;
    }
    currentQuestion++
    if(currentQuestion===questions.length){
        
        //call end of quiz function
console.log ("end of quiz!")
    }
    else {
        newQuestions()
    }
}


startBtn.addEventListener("click", startQuiz);
//timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }
  if (currentQuestion>=questions.length){
      endOfquiz();
    
  }
//   Event listener to save the information into the local storage
var allScores=document.querySelector("#allScores");

