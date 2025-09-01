
let currentQuestion = 0;

function showQuestion() {

    const element = quiz_data[currentQuestion];
    document.getElementsByClassName("question")[0].innerHTML = element.question;

    element.options.forEach((el, i) => {
        document.getElementById(`option${i + 1}`).innerHTML = el;
    });
    

}
let correct = 0
let time = 300
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
    const correctOption = quiz_data[currentQuestion].options[quiz_data[currentQuestion].correctAnswer];
    
    
    if (currentQuestion >= quiz_data.length-1 ) {
         if(obj.innerHTML === correctOption){
            correct++;
         }
         
        showresult()
        return
    }
    else if (obj.innerHTML === correctOption) {
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
    time=300
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";
    container.innerHTML = saveinnerHTML
    showQuestion()
}

showQuestion()
timer()
