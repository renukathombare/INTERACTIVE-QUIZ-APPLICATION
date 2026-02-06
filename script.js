var questions = [
    {
        q: "What is HTML?",
        options: ["Programming language", "Hypertext Markup language", "Database", "OS"],
        answer: 1
    },
    {
        q: "Which language is used for styling?",
        options: ["HTML", "Java", "CSS", "Python"],
        answer: 2
    },
    {
        q: "JavaScript is used for?",
        options: ["Design", "Logic", "Database", "Server"],
        answer: 1
    }
];

var index = 0;
var score = 0;

function loadQuestion() {
    document.getElementById("question").innerHTML = questions[index].q;

    document.getElementById("opt0").innerHTML = questions[index].options[0];
    document.getElementById("opt1").innerHTML = questions[index].options[1];
    document.getElementById("opt2").innerHTML = questions[index].options[2];
    document.getElementById("opt3").innerHTML = questions[index].options[3];

    document.getElementById("result").innerHTML = "";
}

function checkAnswer(option) {
    if (option == questions[index].answer) {
        document.getElementById("result").innerHTML = "Correct Answer";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Wrong Answer";
    }

    document.getElementById("score").innerHTML = "Score: " + score;
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerHTML = "Quiz Finished";
    }
}

loadQuestion();
