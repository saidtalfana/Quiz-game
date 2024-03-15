const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [{
    question : "is java OOP",
    answers : [
        {option:"2",answer:true},
        {option:"ONE",answer:false},
    ]
},

{
    question : "is jWhat is the value of the expression 10%9",
    answers : [
        {option:"NO",answer:true},
        {option:"TWO",answer:false}
    ]
},

{
    question : "is Which of these literals can be contained in a data type float variable ?",
    answers : [
        {option:"3.4e-038",answer:true},
        {option:"1.7e-308",answer:false}
    ]
},
{
    question : "Which data type value is returned by all transcendental math functions ?",
    answers : [
        {option:"double",answer:true},
        {option:"float",answer:false}
        
    ]
},
{
    question : "Which of the following coding types is used for the data type characters in Java ?",
    answers : [
        {option:"UNICODE",answer:true},
        {option:"ISO-LATIN-1",answer:false}
       
    ]
},
{
    question : "Which of the following values, a boolean variable can contain ?",
    answers : [
        {option:"True and False",answer:true},
        {option:"Any integer value",answer:false}
        
    ]
},
{
    question : "Which of the following is a correct declaration of variable in Java ?",
    answers : [
        {option:"int num;",answer:true},
        {option:"int-num;",answer:false},
       
    ]
}
]
restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz(){
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score=7){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<6){
            next();
        }
    }
} falseBtn.innerHTML =questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<7){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<6){
        next();
    }
}
prevBtn.classList.add('hide');

beginQuiz();

function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

 function next(){
    currentQuestion++;
    if(currentQuestion>=6){
        nextBtn.classList.add('hide');
        prevBtn.classList.add('hide')
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () =>{
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<7){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<6){
            next();
        }
    }
 }
 falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
 falseBtn.onclick = () =>{
    let ano =1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<6){
            score++;
        }
    }
 
 userScore.innerHTML = score;
 if(currentQuestion<6){
    next();
 }}
 prevBtn.classList.remove('hide');

function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = "your scor is "+ score;
}































