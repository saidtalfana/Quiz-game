const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentquestion = 0;
var score = 0;

let questions = [{
    question : "is java fun",
    answers : [
        {option:"for ghjgj",answer:true},
        {option:"forjb",answer:false}
    ]
},

{
    question : "is java one",
    answers : [
        {option:"uiii",answer:true},
        {option:"forjb",answer:false}
    ]
},

{
    question : "is java two",
    answers : [
        {option:"for ghjgj",answer:true},
        {option:"forjb",answer:false}
    ]
}
]
restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz(){
    currentquestion = 0;
    questionText
}



































