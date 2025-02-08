const quizData = [
    {
        question: "Qual é 5 + 3?",
        a: "5",
        b: "8",
        c: "10",
        d: "7",
        correct: "b"
    },
    {
        question: "Qual é 12 - 4?",
        a: "8",
        b: "6",
        c: "4",
        d: "10",
        correct: "a"
    },
    {
        question: "Qual é 3 x 7?",
        a: "21",
        b: "14",
        c: "18",
        d: "24",
        correct: "a"
    },
    {
        question: "Qual é 16 ÷ 4?",
        a: "2",
        b: "4",
        c: "6",
        d: "8",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuestion.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuestion.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuestion.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuestion.d}
        </label>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

submitButton.addEventListener('click', () => {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas.`;
            quiz.style.display = 'none';
            submitButton.style.display = 'none';
        }
    }else {
        alert("Por favor, selecione uma resposta antes de enviar.");
    }
});

loadQuiz();