const questions= [
    {
        question: "prime Minister of India ?",
        answers:[
            {text : "Virat Kholi", correct:false},
            {text : "Sourav ganguli", correct:false},
            {text : "Narendra modi", correct:true},
            {text : "Dhoni", correct:false}
        ]
    },
    {
        question: "who is our father of Nation ?",
        answers:[
            {text : "Mahatma Gandhi", correct:true},
            {text : "Sucheta Kripalini", correct:false},
            {text : "Matangini Hazra", correct:false},
            {text : "Netaji", correct:false}
        ]
    },
    {
        question: "which city is called 'City Of Joy' ?",
        answers:[
            {text : "Hariyana", correct:false},
            {text : " Gurgawn", correct:false},
            {text : "Mumbai ", correct:false},
            {text : "Kolkata", correct:true}
        ]
    },
    {
        question: "Which is not a Programming Language ?",
        answers:[
            {text : "c++", correct:false},
            {text : "SQL", correct:true},
            {text : " Java", correct:false},
            {text : "javascript", correct:false}
        ]
    }
];
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const answerButton = document.getElementById("answer-buttons");

let i=0;
let score=0;
function startquiz(){
    i=0;
    score=0;
    nextButton.innerHTML="next";
    showquestions();
}

function showquestions(){
    resetState();
    let current=questions[i];
    let questionNo=i+1;
    questionElement.innerHTML=questionNo + "." +current.question;
    current.answers.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML=answer.text;
     button.classList.add("btn");
     answerButton.appendChild(button);
     if (answer.correct){
        button.dataset.correct=answer.correct;
     }
     button.addEventListener("click",selectAnswer);
    });
}
//reset state function delete the extra 4 otion answers
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
nextButton.addEventListener("click",()=>{
    if(i<questions.length){
        i++;
        if(i<questions.length){
            showquestions();
        }else{
            resetState();
            questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML="Play Again";
            nextButton.style.display="block";
        }
    }else{
        startquiz();
    }
})
startquiz();