quiz_data = [
    {
        "question": "What is the output of print(2 ** 3)?",
        "options": ["6", "8", "9", "10"],
        "answer": "8"
    },
    {
        "question": "How do you create a list in Python?",
        "options": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "list = 1, 2, 3"],
        "answer": "[1, 2, 3]"
    },
    {
        "question": "What is the difference between a list and a tuple?",
        "options": [
            "Lists are immutable, tuples are mutable",
            "Lists are faster than tuples",
            "Lists are mutable, tuples are immutable",
            "Tuples can’t store strings"
        ],
        "answer": "Lists are mutable, tuples are immutable"
    },
    {
        "question": "How do you define a function in Python?",
        "options": [
            "function myFunc():",
            "def myFunc():",
            "create myFunc():",
            "func myFunc():"
        ],
        "answer": "def myFunc():"
    },
    {
        "question": "What does the 'len()' function do?",
        "options": [
            "Calculates average",
            "Returns length",
            "Counts spaces",
            "Measures memory"
        ],
        "answer": "Returns length"
    },
    {
        "question": "What is a dictionary in Python?",
        "options": [
            "A list of values",
            "A set of keys",
            "A key-value pair structure",
            "A tuple of pairs"
        ],
        "answer": "A key-value pair structure"
    },
    {
        "question": "Which keyword is used to handle exceptions?",
        "options": ["try", "catch", "handle", "except"],
        "answer": "except"
    },

    {
        "question": "Which of the following is a Python boolean operator?",
        "options": ["and", "plus", "equals", "notEqual"],
        "answer": "and"
    },
    {
        "question": "How do you import a module in Python?",
        "options": ["include math", "require(math)", "import math", "load math"],
        "answer": "import math"
    }
]
let currentQuestion = 0;

function showQuestion() {

    const element = quiz_data[currentQuestion];
    document.getElementsByClassName("question")[0].innerHTML = element.question;

    element.options.forEach((el, i) => {
        document.getElementById(`option${i + 1}`).innerHTML = el;
    });
    

}
let correct = 0
let time = 600
function timer() {
    
    setInterval(() => {
        
        if (time == 0) {
            showresult();
            
            
        }
        if(time>0){
         showtime()
        }
        
        
        time--;

    }, 1000);
}


function submitanswer(obj) {

    if (currentQuestion >= quiz_data.length - 1) {
        
        showresult()
        return
    }
    else if (obj.innerHTML == quiz_data[currentQuestion].answer) {
        correct++;
        currentQuestion++;
        showQuestion()
    }
    else {
        
        currentQuestion++;
        showQuestion()
    }


}
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
function showtime(){
let vistime=formatTime(time)

document.getElementsByClassName("timer")[0].innerHTML=vistime

document.getElementsByClassName("timer")[0].style.color="red"
}
let saveinnerHTML
function showresult() {
    saveinnerHTML = document.getElementsByClassName("container")[0].innerHTML
    const show = document.createElement("h1")
    show.innerHTML = `${correct}/${quiz_data.length}`
    show.style.width = "100%";
    show.style.height = "100%";
    show.style.display = "flex";
    show.style.justifyContent = "center";
    show.style.alignItems = "center";
    show.style.fontSize = "100px"
    show.style.color = "white"
    const again = document.createElement("button")
    again.innerHTML = "try again"
    again.style.backgroundColor = "gray"
    show.setAttribute("class", "show")


    if (correct > quiz_data.length / 2) {
        show.style.backgroundColor = "green";

    }
    else {
        show.style.backgroundColor = "red"
    }
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = ""; // clear previous content
    container.appendChild(show);
    container.appendChild(again)
    again.setAttribute("onclick", "startagain()");


}
function startagain() {
    currentQuestion = 0
    correct = 0
    time=600
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";
    container.innerHTML = saveinnerHTML
    showQuestion()
}

showQuestion()
timer()
