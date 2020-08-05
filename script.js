var quizArea = document.querySelector('#questionSpot');
var begin = document.querySelector('#button');
var initialArea = document.getElementById('record');
var initials = document.getElementById('initials');
var initialForm = document.getElementById('form');
var allScores = document.getElementById('scores');

var question = document.querySelector('#questionAsk');
var firstOp = document.querySelector('#optionA');
var secondOp = document.querySelector('#optionB');
var thirdOp = document.querySelector('#optionC');

var scoreCount = document.getElementById('score');
var scorePlus = 0;
var timer = document.getElementById('time');
var timeInterval;
var seconds = 60;

function endTest() {
    clearInterval(timeInterval);
    quizArea.style.visibility="hidden";
    initialArea.style.visibility="visible";
}

var allQuestions = [
    {q:"Q1: What does HTML stand for?", a:"Hyperlinks and Text Markup Language", b:"Home Tool Markup Language", c:"Hyper Text Markup Language", answer:"c"},
    {q:"Q2: What is the correct HTML tag for a line break?", a:"&lt;lb&gt;", b:"&lt;br&gt;", c:"&lt;break&gt;", answer:"b"},
    {q:"Q3: What is the correct HTML for adding a background color?", a:"&lt;body style='background-color:yellow;'&gt;", b:"&lt;background&gt;yellow&lt;/background&gt;", c:"&lt;body bg='yellow'&gt;", answer:"a"},
    {q:"Q4: What does CSS stand for?", a:"Creative Style Sheets", b:"Cascading Style Sheets", c:"Computer Style Sheets", answer:"b"},
    {q:"Q5: What is the correct HTML for referring to an external style sheet?", a:"&lt;link rel='stylesheet' type='text/css' href='mystyle.css'&gt;", b:"&lt;style src='mystyle.css'&gt;", c:"&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;", answer:"a"},
    {q:"Q6: Where in an HTML document is the correct place to refer to an external style sheet?", a:"In the &lt;body&gt; section", b:"At the end of the document", c:"In the &lt;head&gt; section", answer:"c"},
    {q:"Q7: Inside which HTML element do we put the JavaScript?", a:"&lt;javascript&gt;", b:"&lt;script&gt;", c:"&lt;scripting&gt;", answer:"b"},
    {q:"Q8: Where is the correct place to insert a JavaScript?", a:"The &lt;body&gt; section", b:"The &lt;head&gt; section", c:"Both are correct", answer:"a"},
    {q:"Q9: What is the correct HTML for referring to an external script?", a:"&lt;script href='script.js'&gt;",b:"&lt;script name='script.js'&gt;", c:"&lt;script src='script.js'&gt;", answer:"c"},
    {q:"Q10: How do you write 'Hello World' in an alert box?", a:"alert('Hello World')", b:"alertBox('Hello World')", c:"msg('Hello World')", answer:"a"},
];

// When I click the start button, it disappears and the question, score, and timer all appear.
function buttonpress() {
    i = 0;
    
    document.getElementById('begin').style.visibility="hidden";
    quizArea.style.visibility='visible';
    scoreCount.style.visibility='visible';
    timer.style.visibility="visible";
    
    // Then I call the function that begins the test
    actualTest(i,allQuestions);
    countTimer();
}


// The test displays each question and its corresponding options in order
function actualTest(i) {
    question.innerHTML=allQuestions[i].q;
    firstOp.innerHTML=allQuestions[i].a;
    secondOp.innerHTML=allQuestions[i].b;
    thirdOp.innerHTML=allQuestions[i].c;

    firstOp.setAttribute("onclick", "userAnswer("+i+",'a')");
    secondOp.setAttribute("onclick", "userAnswer("+i+",'b')");
    thirdOp.setAttribute("onclick", "userAnswer("+i+",'c')");
}



// When the button is pressed, the timer begins to count down.
function countTimer() {
    timeInterval = setInterval(function() {
        console.log(seconds);
        seconds--;
        timer.innerHTML = "Time Remaining: " + seconds;
        if(seconds < 1) {
            endTest();
        }
    }, 1000);
}

// User selections are logged and tracked
function userAnswer(questionIndex, userAnswer) {
    console.log(userAnswer);
    console.log(allQuestions[i].answer);

    if(userAnswer === allQuestions[questionIndex].answer) {
        console.log("Correct!");
        scorePlus++;
    } else {
        console.log("Incorrect.")
        seconds -= 10;
    }

    scoreCount.innerHTML=scorePlus + "/10";

    if (questionIndex === allQuestions.length - 1 || seconds < 1) {
        endTest();
    } else {
        actualTest(questionIndex + 1)
    }
}

initialForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var initialsValue = document.getElementById("initials").value;
    var storedScore = JSON.parse(localStorage.getItem("finalScore"));
    if (storedScore == null) {
        storedScore = [];
    }
    storedScore.push({
        initials:initialsValue, score:scorePlus
    });

    localStorage.setItem("finalScore", JSON.stringify(storedScore));

    printScoreList();
});

function printScoreList(){
    allScores.innerHTML = '';
    var storedScore = JSON.parse(localStorage.getItem("finalScore"));
    if (storedScore.length > 0) {
        for (i = 0; i < storedScore.length; i++){
            var entry = document.createElement('li');
            entry.textContent = storedScore[i].initials +":" + storedScore[i].score;
            allScores.appendChild(entry);
        }
    }
}

