// Perguntas, opções e respostas corretas
const questions = [
    'Quem foi que gritou "independência ou morte"?',
    "Qual é a capital da França?",
    "Qual é o maior planeta do nosso sistema solar?",
    "Qual é a atual capital do Brasil?"
];

const options = [
    ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
    ["Londres", "Paris", "Berlim", "Madrid"],
    ["Vênus", "Marte", "Júpiter", "Saturno"],
    ["Salvador","Rio de Janeiro", "São Paulo", "Brasília"]
];

const correctAnswers = [2, 1, 2, 3]; 

let nowQuestion = 0; 
let answered = false; 

document.getElementById('reload').style.display = "none"; 
document.getElementById('next').style.display = "none"; 

generateQuestions();
selectButton(); 

function generateQuestions(){
    document.getElementById("question").innerHTML = questions[nowQuestion];
    const optionsContainer = document.querySelectorAll('.alternative');
    optionsContainer.forEach((element, index) => {
        element.textContent = options[nowQuestion][index]; 
    });
}

function selectButton(){
    const alternatives = document.querySelectorAll('.alternative');

    alternatives.forEach(button => {
        button.addEventListener('click', () => {
            if (answered) return; 
            const answer = button.value;
            checkAnswer(answer);
            disableButtons(); 
            document.getElementById('next').style.display = "block"; 
        });
    });
}


function checkAnswer(answer){
    answer = parseInt(answer);
    let statusAnswer = document.getElementById("statusAnswer");
    
    if(answer === correctAnswers[nowQuestion]){
        statusAnswer.innerHTML = "Parabéns!!Você acertouuu!";
    } else {
        statusAnswer.innerHTML = `Poxa! Você errou! A resposta correta era: ${options[nowQuestion][correctAnswers[nowQuestion]]}`;
    }
    answered = true; 
}


function disableButtons() {
    const alternatives = document.querySelectorAll('.alternative');
    alternatives.forEach(button => {
        button.disabled = true; 
    });
}


function enableButtons() {
    const alternatives = document.querySelectorAll('.alternative');
    alternatives.forEach(button => {
        button.disabled = false; 
    });
}

document.getElementById('next').addEventListener('click', () => {
    if (nowQuestion < questions.length - 1) {
        nowQuestion++; 
        generateQuestions();
        selectButton();
        document.getElementById('next').style.display = "none"; 
        document.getElementById('statusAnswer').innerHTML = ""; 
        answered = false; 
        enableButtons(); 
    } else {
       
        hideQuiz();
    }
});

function hideQuiz() {
    const quizElements = document.querySelectorAll('h1, h2, h3, .alternative, #next');
    quizElements.forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('reload').style.display = "block"; 
}


document.getElementById('reload').addEventListener('click', () => {
    location.reload(); 
});
