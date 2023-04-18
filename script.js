function byId (id){
    return document.getElementById(id)
}

var startScreen = byId("startscreen")
var gameScreen = byId("gamescreen")
var startBtn = byId("startQuiz")
var question= byId("question")
var ans1= byId("ans1");
var ans2 = byId("ans2");
var ans3 = byId("ans3");
var ans4 = byId("ans4");
var feedBack = byId("feedback");
var endScreen = byId("endScreen");
var submitInitials = byId("initials");
var highScoresScreen = byId("highScoredScreen");
var highScores = byId("highScores"); 

var questionIndex = 0;
var questions = [
{
    question: "Where does the insertion for the JavaScript file go?",
    ans1: "Head section",
    ans2: "Body section",
    ans3: "Footer",
    ans4: "Both header and footer",
    correct: "Body section"
},

{
    question: "Which of these is NOT a data type in Javascript",
    ans1: "Boolean",
    ans2: "String",
    ans3: "Number",
    ans4: "Array",
    correct: "Array"
},

{
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    correct: ""
},


{
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    correct: ""

}

]


function startQuiz(){
    startScreen.classList.toggle("hide")
    gameScreen.classList.toggle("hide")
}


function displayQuestion() {
    var currentQuestion = questions[questionIndex];

    if(!currentQuestion) {
        endQuiz();
        return;
    }

    question.textContent= currentQuestion.question;
    ans1.textContent = currentQuestion.ans1;
    ans2.textContent = currentQuestion.ans2;
    ans3.textContent = currentQuestion.ans3;
    ans4.textContent = currentQuestion.ans4;

}

function endQuiz() {
gameScreen.classList.toggle("hide");
endScreen.classList.toggle("hide");
}

function checkAnswer(event){
    if(event.target.textContent === question[questionIndex].correct) {
        console.log("right");
        feedBack.textContent = "correct!"
        feedBack.style.backgroundColor= "green";
    } else {
        console.log("wrong");
        timeLeft -= 10;
        feedBack.textContent = "wrong :("
        feedBack.style.backgroundColor = "red";
    }
    setTimeout(function(){
        feedBack.textContent= "";
        feedBack.style.backgroundColor= "";
        questionIndex++;
        displayQuestion();
    }, 1500);

} 

function saveScore(){
    var savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    var scoreObj = {
        name :submitInitials.value,
        score: timeLeft
    };
}


startBtn.addEventListener("click", startQuiz);
ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);
submitInitials.addEventListener("click", saveScore);
